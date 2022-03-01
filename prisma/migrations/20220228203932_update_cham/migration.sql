/*
  Warnings:

  - You are about to drop the `champs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "champs";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "cham" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "is_favorite" BOOLEAN NOT NULL,
    CONSTRAINT "cham_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
