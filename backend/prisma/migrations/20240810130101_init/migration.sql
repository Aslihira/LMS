/*
  Warnings:

  - You are about to drop the column `createdAt` on the `LoanRequest` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Repayment` table. All the data in the column will be lost.
  - Added the required column `paymentMethod` to the `Wallet` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "LoanRequest" DROP CONSTRAINT "LoanRequest_userId_fkey";

-- DropForeignKey
ALTER TABLE "Repayment" DROP CONSTRAINT "Repayment_loanRequestId_fkey";

-- DropForeignKey
ALTER TABLE "Wallet" DROP CONSTRAINT "Wallet_userId_fkey";

-- DropIndex
DROP INDEX "Wallet_userId_key";

-- AlterTable
ALTER TABLE "LoanRequest" DROP COLUMN "createdAt",
ADD COLUMN     "dateMarked" TIMESTAMP(3),
ADD COLUMN     "npaReason" TEXT,
ALTER COLUMN "fundedAmount" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Repayment" DROP COLUMN "status";

-- AlterTable
ALTER TABLE "Wallet" ADD COLUMN     "paymentMethod" TEXT NOT NULL,
ALTER COLUMN "balance" DROP DEFAULT;

-- CreateTable
CREATE TABLE "InterestDistribution" (
    "id" TEXT NOT NULL,
    "loanRequestId" TEXT NOT NULL,
    "interestAmount" DOUBLE PRECISION NOT NULL,
    "lenderShare" DOUBLE PRECISION NOT NULL,
    "platformShare" DOUBLE PRECISION NOT NULL,
    "distributorShare" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "InterestDistribution_pkey" PRIMARY KEY ("id")
);
