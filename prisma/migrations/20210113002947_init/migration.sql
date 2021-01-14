-- CreateTable
CREATE TABLE "Event" (
"id" SERIAL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "tags" TEXT[],

    PRIMARY KEY ("id")
);
