/*
  Warnings:

  - You are about to drop the column `desciption` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "desciption",
ADD COLUMN     "description" TEXT NOT NULL DEFAULT '';
