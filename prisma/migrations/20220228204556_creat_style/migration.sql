/*
  Warnings:

  - Added the required column `style_id` to the `cham` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Style" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cham" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "is_favorite" BOOLEAN NOT NULL,
    "style_id" TEXT NOT NULL,
    CONSTRAINT "cham_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "cham_style_id_fkey" FOREIGN KEY ("style_id") REFERENCES "Style" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_cham" ("id", "is_favorite", "name", "user_id") SELECT "id", "is_favorite", "name", "user_id" FROM "cham";
DROP TABLE "cham";
ALTER TABLE "new_cham" RENAME TO "cham";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
