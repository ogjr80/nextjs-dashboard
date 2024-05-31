-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Admin', 'Reviewer', 'StartupApplicant');

-- CreateEnum
CREATE TYPE "StartupType" AS ENUM ('ForProfit', 'NonProfit');

-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('Approved', 'Rejected', 'Pending');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "organizationName" TEXT,
    "startupId" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Startup" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "founderDetails" TEXT NOT NULL,
    "contactInformation" TEXT NOT NULL,
    "type" "StartupType" NOT NULL,
    "grantAmountApproved" DOUBLE PRECISION NOT NULL,
    "grantDisbursementDate" TIMESTAMP(3) NOT NULL,
    "logo" TEXT NOT NULL,

    CONSTRAINT "Startup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Application" (
    "id" TEXT NOT NULL,
    "startupId" TEXT NOT NULL,
    "applicationDate" TIMESTAMP(3) NOT NULL,
    "status" "ApplicationStatus" NOT NULL,
    "requestedAmount" DOUBLE PRECISION NOT NULL,
    "projectDescription" TEXT NOT NULL,
    "documents" JSONB NOT NULL,
    "reviewerComments" TEXT NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProgressReport" (
    "id" TEXT NOT NULL,
    "startupId" TEXT NOT NULL,
    "reportingPeriod" TIMESTAMP(3) NOT NULL,
    "milestonesAchieved" TEXT NOT NULL,
    "fundsUtilized" DOUBLE PRECISION NOT NULL,
    "impactMetrics" JSONB NOT NULL,
    "challengesFaced" TEXT NOT NULL,
    "futurePlans" TEXT NOT NULL,

    CONSTRAINT "ProgressReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FinancialTracking" (
    "id" TEXT NOT NULL,
    "startupId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "FinancialTracking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Overview" (
    "id" TEXT NOT NULL,
    "totalStartups" INTEGER NOT NULL,
    "totalGrantsDisbursed" DOUBLE PRECISION NOT NULL,
    "totalFundsUtilized" DOUBLE PRECISION NOT NULL,
    "totalFundsRemaining" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Overview_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_startupId_fkey" FOREIGN KEY ("startupId") REFERENCES "Startup"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_startupId_fkey" FOREIGN KEY ("startupId") REFERENCES "Startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgressReport" ADD CONSTRAINT "ProgressReport_startupId_fkey" FOREIGN KEY ("startupId") REFERENCES "Startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FinancialTracking" ADD CONSTRAINT "FinancialTracking_startupId_fkey" FOREIGN KEY ("startupId") REFERENCES "Startup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
