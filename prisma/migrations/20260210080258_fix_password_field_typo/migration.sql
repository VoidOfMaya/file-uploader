/*
  Warnings:

  - You are about to drop the column `passwprd` on the `users` table. All the data in the column will be lost.
  - Added the required column `password` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "passwprd",
ADD COLUMN     "password" TEXT NOT NULL;
