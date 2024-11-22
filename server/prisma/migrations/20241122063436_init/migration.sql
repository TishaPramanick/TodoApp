-- CreateTable
CREATE TABLE "Todo_tbl" (
    "Id" SERIAL NOT NULL,
    "todo" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Todo_tbl_pkey" PRIMARY KEY ("Id")
);
