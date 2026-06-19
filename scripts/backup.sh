#!/usr/bin/env bash
# Sauvegarde automatique PostgreSQL pour NovaSMS
# Usage : ./scripts/backup.sh
# Planification recommandée : crontab -e → 0 2 * * * /path/to/scripts/backup.sh

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"

# Charger les variables depuis .env si présent
ENV_FILE="${ROOT_DIR}/apps/backend/.env"
if [[ -f "$ENV_FILE" ]]; then
  set -a
  # shellcheck disable=SC1090
  source "$ENV_FILE"
  set +a
fi

# Paramètres de connexion (priorité : env var, puis défaut)
DB_URL="${DATABASE_URL:-postgresql://postgres:postgres@localhost:5432/novasms}"

# Extraire les composants de l'URL
# Format : postgresql://user:password@host:port/dbname
DB_USER=$(echo "$DB_URL" | sed -E 's|postgresql://([^:]+):.*|\1|')
DB_PASS=$(echo "$DB_URL" | sed -E 's|postgresql://[^:]+:([^@]+)@.*|\1|')
DB_HOST=$(echo "$DB_URL" | sed -E 's|.*@([^:/]+).*|\1|')
DB_PORT=$(echo "$DB_URL" | sed -E 's|.*:([0-9]+)/.*|\1|')
DB_NAME=$(echo "$DB_URL" | sed -E 's|.*/([^?]+).*|\1|')

# Répertoire de sauvegarde
BACKUP_DIR="${BACKUP_DIR:-${ROOT_DIR}/backups}"
mkdir -p "$BACKUP_DIR"

TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
FILENAME="${BACKUP_DIR}/novasms_${TIMESTAMP}.sql.gz"

echo "[backup] Démarrage sauvegarde ${DB_NAME}@${DB_HOST}:${DB_PORT}"

PGPASSWORD="$DB_PASS" pg_dump \
  --host="$DB_HOST" \
  --port="$DB_PORT" \
  --username="$DB_USER" \
  --dbname="$DB_NAME" \
  --no-password \
  --format=plain \
  --no-acl \
  --no-owner \
  | gzip > "$FILENAME"

SIZE=$(du -sh "$FILENAME" | cut -f1)
echo "[backup] Fichier créé : $FILENAME ($SIZE)"

# Rotation : conserver les 7 dernières sauvegardes
find "$BACKUP_DIR" -name "novasms_*.sql.gz" -type f | sort | head -n -7 | xargs -r rm --
echo "[backup] Rotation terminée (7 derniers fichiers conservés)"
