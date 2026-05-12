/* eslint-disable */
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

async function main() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error('DATABASE_URL is required');
  }

  const prisma = new PrismaClient({
    datasourceUrl: databaseUrl,
  });
  try {
    const password = 'TestPass123!';
    const hashed = await bcrypt.hash(password, 12);

    const accountAEmail = 'tenantA+test@example.com';
    const accountBEmail = 'tenantB+test@example.com';

    // Upsert Account A
    let accountA = await prisma.account.findUnique({ where: { adminEmail: accountAEmail } });
    if (!accountA) {
      accountA = await prisma.account.create({
        data: {
          companyName: 'Tenant A Company',
          adminEmail: accountAEmail,
          passwordHash: hashed,
          country: 'CI',
          creditBalance: 0,
          emailVerified: true,
          onboardingCompleted: false,
        },
      });
      console.log('Created Account A:', accountA.id);
    } else {
      console.log('Account A exists:', accountA.id);
    }

    // Upsert Account B
    let accountB = await prisma.account.findUnique({ where: { adminEmail: accountBEmail } });
    if (!accountB) {
      accountB = await prisma.account.create({
        data: {
          companyName: 'Tenant B Company',
          adminEmail: accountBEmail,
          passwordHash: hashed,
          country: 'CI',
          creditBalance: 0,
          emailVerified: true,
          onboardingCompleted: false,
        },
      });
      console.log('Created Account B:', accountB.id);
    } else {
      console.log('Account B exists:', accountB.id);
    }

    // Create a contact under Account A
    const contact = await prisma.contact.create({
      data: {
        accountId: accountA.id,
        email: 'victim@tenant-a.test',
        phone: '0123456789',
        firstName: 'Victim',
        lastName: 'TenantA',
      },
    });
    console.log('Created contact under Account A:', contact.id);

    console.log('Test accounts and contact ready. Credentials:');
    console.log('Account A email:', accountAEmail, 'password:', password, 'accountId:', accountA.id);
    console.log('Account B email:', accountBEmail, 'password:', password, 'accountId:', accountB.id);

    await prisma.$disconnect();
  } catch (err) {
    console.error('Error creating test accounts:', err);
    process.exitCode = 1;
  }
}

main();
