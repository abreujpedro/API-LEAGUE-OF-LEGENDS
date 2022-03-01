/*
  Warnings:

  - Added the required column `is_favorite` to the `champs` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_champs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "is_favorite" BOOLEAN NOT NULL,
    CONSTRAINT "champs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_champs" ("id", "name", "user_id") SELECT "id", "name", "user_id" FROM "champs";
DROP TABLE "champs";
ALTER TABLE "new_champs" RENAME TO "champs";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
