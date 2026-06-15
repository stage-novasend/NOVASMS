# Guide de mise en production - Intégrations API externes

Ce document centralise les points à préparer avant d’exposer des intégrations API ou webhook en production pour NovaSMS.

## Objectif

Permettre aux systèmes externes (site web, CRM, Zapier, Make, ERP, API partenaire) de déclencher des automatisations de manière fiable, traçable et sécurisée.

## Points d’entrée à exposer

- Déclenchement d’automation par contact ajouté.
- Déclenchement manuel d’une automation depuis l’API.
- Webhooks entrants pour créer ou mettre à jour un contact.
- Webhooks entrants pour synchroniser des tags, statuts ou attributs personnalisés.

## Recommandations de production

- Utiliser une authentification forte pour chaque intégration externe.
- Préférer des clés API par environnement et par application partenaire.
- Signer les webhooks entrants avec un secret partagé.
- Journaliser chaque appel externe avec un identifiant de corrélation.
- Ajouter un mécanisme d’idempotence pour éviter les doublons.
- Valider les payloads avant toute écriture en base.
- Limiter le débit par clé et par IP.

## Données à mapper

- Identité du contact: prénom, nom, téléphone, email.
- Source du contact: site, CRM, import, partenaire, webhook.
- Canal préféré: Email, SMS, WhatsApp.
- Tags métier: VIP, relance, lead chaud, client actif.
- Référence de campagne ou d’automation.
- Champs personnalisés spécifiques au client.

## Déclencheurs externes à documenter

- `contact_added`: nouveau contact entré dans le système.
- `api`: création ou mise à jour déclenchée par un système externe.

## Contrôles de sécurité

- Valider les signatures HMAC des webhooks.
- Refuser les payloads sans clé valide.
- Filtrer les champs non autorisés.
- Masquer les secrets dans les logs.
- Séparer les clés de test et de production.

## Stratégie de supervision

- Suivre le nombre d’appels réussis et échoués.
- Alerter sur les erreurs 4xx/5xx récurrentes.
- Surveiller les doublons de contact.
- Vérifier les délais de traitement des files.
- Contrôler les taux de livraison SMS / email.

## Checklist avant ouverture production

- [ ] Clés API de production créées et stockées en coffre-fort.
- [ ] Secrets de webhook configurés.
- [ ] Logs de corrélation activés.
- [ ] Limites de débit définies.
- [ ] Idempotence testée.
- [ ] Payloads validés.
- [ ] Monitoring et alertes en place.
- [ ] Documentation partagée aux équipes partenaires.

## API externe - convention recommandée

- Prévoir un endpoint dédié par type d’évènement.
- Utiliser des réponses claires et stables.
- Renvoyer un identifiant d’évènement dans la réponse.
- Garder une version d’API explicite pour éviter les ruptures.

## Remarque

Les automatisations créées depuis l’interface doivent rester simples à comprendre pour l’utilisateur final. Les intégrations externes doivent rester invisibles pour l’utilisateur métier quand elles ne sont pas nécessaires, tout en restant complètement auditables côté technique.
