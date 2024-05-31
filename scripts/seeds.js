const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// import {prisma} from '@/app/lib/db';

async function main() {
  // Create Users
  const adminUser = await prisma.user.create({
    data: {
      name: 'Admin User',
      email: 'admin@accelup.org',
      role: 'Admin',
    },
  });

  const johnDoe = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john@startupone.com',
      role: 'StartupApplicant',
      organizationName: 'Startup One',
    },
  });

  const janeSmith = await prisma.user.create({
    data: {
      name: 'Jane Smith',
      email: 'jane@startuptwo.org',
      role: 'StartupApplicant',
      organizationName: 'Startup Two',
    },
  });

  const reviewerOne = await prisma.user.create({
    data: {
      name: 'Reviewer One',
      email: 'reviewer@accelup.org',
      role: 'Reviewer',
    },
  });

  // Create Startups
  const startupOne = await prisma.startup.create({
    data: {
      name: 'Startup One',
      founderDetails: 'John Doe',
      contactInformation: 'john@startupone.com',
      type: 'ForProfit',
      grantAmountApproved: 100000,
      grantDisbursementDate: new Date('2024-01-15'),
      logo: '/images/startuplogo1.png',
      users: {
        connect: { id: johnDoe.id },
      },
    },
  });

  const startupTwo = await prisma.startup.create({
    data: {
      name: 'Startup Two',
      founderDetails: 'Jane Smith',
      contactInformation: 'jane@startuptwo.org',
      type: 'NonProfit',
      grantAmountApproved: 50000,
      grantDisbursementDate: new Date('2024-02-01'),
      logo: '/images/startuplogo2.png',
      users: {
        connect: { id: janeSmith.id },
      },
    },
  });

  // Create Applications
  await prisma.application.create({
    data: {
      startupId: startupOne.id,
      applicationDate: new Date('2023-12-01'),
      status: 'Approved',
      requestedAmount: 100000,
      projectDescription: 'Innovative tech solution for agriculture',
      documents: { business_plan: 'url_to_business_plan' },
      reviewerComments: 'Excellent proposal',
    },
  });

  await prisma.application.create({
    data: {
      startupId: startupTwo.id,
      applicationDate: new Date('2023-12-10'),
      status: 'Approved',
      requestedAmount: 50000,
      projectDescription: 'Community health improvement project',
      documents: { business_plan: 'url_to_business_plan' },
      reviewerComments: 'Impactful project',
    },
  });

  // Create Progress Reports
  await prisma.progressReport.create({
    data: {
      startupId: startupOne.id,
      reportingPeriod: new Date('2024-03-01'),
      milestonesAchieved: 'Prototype developed',
      fundsUtilized: 30000,
      impactMetrics: { jobs_created: 5, farms_improved: 3 },
      challengesFaced: 'Supply chain issues',
      futurePlans: 'Expand to new regions',
    },
  });

  await prisma.progressReport.create({
    data: {
      startupId: startupOne.id,
      reportingPeriod: new Date('2024-06-01'),
      milestonesAchieved: 'Field trials completed',
      fundsUtilized: 50000,
      impactMetrics: { jobs_created: 10, farms_improved: 5 },
      challengesFaced: 'Regulatory hurdles',
      futurePlans: 'Commercial launch',
    },
  });

  await prisma.progressReport.create({
    data: {
      startupId: startupTwo.id,
      reportingPeriod: new Date('2024-04-01'),
      milestonesAchieved: 'Community workshops held',
      fundsUtilized: 20000,
      impactMetrics: { people_reached: 200, health_improved: 150 },
      challengesFaced: 'Funding delays',
      futurePlans: 'More workshops planned',
    },
  });

  // Create Financial Tracking
  await prisma.financialTracking.create({
    data: {
      startupId: startupOne.id,
      date: new Date('2024-01-20'),
      amount: 15000,
      category: 'Equipment',
      description: 'Purchase of agricultural drones',
    },
  });

  await prisma.financialTracking.create({
    data: {
      startupId: startupOne.id,
      date: new Date('2024-02-10'),
      amount: 10000,
      category: 'Marketing',
      description: 'Campaign for early adopters',
    },
  });

  await prisma.financialTracking.create({
    data: {
      startupId: startupOne.id,
      date: new Date('2024-05-15'),
      amount: 25000,
      category: 'Salaries',
      description: 'Payment for project team',
    },
  });

  await prisma.financialTracking.create({
    data: {
      startupId: startupTwo.id,
      date: new Date('2024-02-15'),
      amount: 10000,
      category: 'Training',
      description: 'Community health worker training',
    },
  });

  await prisma.financialTracking.create({
    data: {
      startupId: startupTwo.id,
      date: new Date('2024-03-20'),
      amount: 10000,
      category: 'Supplies',
      description: 'Medical supplies for workshops',
    },
  });

  // Create Overview
  await prisma.overview.create({
    data: {
      totalStartups: 10,
      totalGrantsDisbursed: 500000,
      totalFundsUtilized: 350000,
      totalFundsRemaining: 150000,
    },
  });

  console.log('Seed data created successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
