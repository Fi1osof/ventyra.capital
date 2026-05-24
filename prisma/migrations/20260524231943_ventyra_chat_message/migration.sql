-- CreateTable
CREATE TABLE "VentyraChatMessage" (
    "id" VARCHAR(36) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fromUserId" VARCHAR(36),
    "toUserId" VARCHAR(36),
    "content" TEXT NOT NULL,
    "sessionId" VARCHAR(100),

    CONSTRAINT "VentyraChatMessage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "VentyraChatMessage_fromUserId_toUserId_sessionId_idx" ON "VentyraChatMessage"("fromUserId", "toUserId", "sessionId");

-- AddForeignKey
ALTER TABLE "VentyraChatMessage" ADD CONSTRAINT "VentyraChatMessage_fromUserId_fkey" FOREIGN KEY ("fromUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VentyraChatMessage" ADD CONSTRAINT "VentyraChatMessage_toUserId_fkey" FOREIGN KEY ("toUserId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
