/*
  Warnings:

  - You are about to drop the `CategoryImage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Gallery` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductImage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductRelation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `createdAt` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Product` table. All the data in the column will be lost.
  - Added the required column `categoryImageDesktop` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryImageMobile` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryImageTablet` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `galleryFirstDesktop` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `galleryFirstMobile` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `galleryFirstTablet` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gallerySecondDesktop` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gallerySecondMobile` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gallerySecondTablet` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `galleryThirdDesktop` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `galleryThirdMobile` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `galleryThirdTablet` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageDesktop` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageMobile` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageTablet` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "CategoryImage_productId_key";

-- DropIndex
DROP INDEX "Gallery_productId_key";

-- DropIndex
DROP INDEX "ProductImage_productId_key";

-- DropIndex
DROP INDEX "ProductRelation_fromProductId_toProductId_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CategoryImage";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Gallery";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ProductImage";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ProductRelation";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "RelatedProduct" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "imageMobile" TEXT NOT NULL,
    "imageTablet" TEXT NOT NULL,
    "imageDesktop" TEXT NOT NULL,
    "productId" INTEGER NOT NULL,
    CONSTRAINT "RelatedProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "isNew" BOOLEAN NOT NULL DEFAULT false,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "features" TEXT NOT NULL,
    "imageMobile" TEXT NOT NULL,
    "imageTablet" TEXT NOT NULL,
    "imageDesktop" TEXT NOT NULL,
    "categoryImageMobile" TEXT NOT NULL,
    "categoryImageTablet" TEXT NOT NULL,
    "categoryImageDesktop" TEXT NOT NULL,
    "galleryFirstMobile" TEXT NOT NULL,
    "galleryFirstTablet" TEXT NOT NULL,
    "galleryFirstDesktop" TEXT NOT NULL,
    "gallerySecondMobile" TEXT NOT NULL,
    "gallerySecondTablet" TEXT NOT NULL,
    "gallerySecondDesktop" TEXT NOT NULL,
    "galleryThirdMobile" TEXT NOT NULL,
    "galleryThirdTablet" TEXT NOT NULL,
    "galleryThirdDesktop" TEXT NOT NULL
);
INSERT INTO "new_Product" ("category", "description", "features", "id", "isNew", "name", "price", "slug") SELECT "category", "description", "features", "id", "isNew", "name", "price", "slug" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
