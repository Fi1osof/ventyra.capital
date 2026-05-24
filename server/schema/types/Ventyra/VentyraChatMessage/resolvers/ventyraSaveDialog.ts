import { builder } from 'server/schema/builder'

const VentyraDialogCreateInput = builder.inputType('VentyraDialogCreateInput', {
  fields(t) {
    return {
      incomeMessage: t.string({}),
      replayMessage: t.string({}),
      userId: t.string({}),
      sessionId: t.string({}),
    }
  },
})

builder.mutationField('ventyraSaveDialog', (t) =>
  t.field({
    args: {
      data: t.arg({
        type: VentyraDialogCreateInput,
        required: true,
      }),
    },
    type: 'Boolean',
    async resolve(
      _,
      { data: { incomeMessage, replayMessage, userId, sessionId } },
      { prisma, currentUser },
    ) {
      if (currentUser?.username !== 'chat-agent') {
        throw new Error('Access denied')
      }

      incomeMessage &&
        (await prisma.ventyraChatMessage
          .create({
            data: {
              content: incomeMessage,
              fromUserId: userId,
              toUserId: currentUser.id,
              sessionId,
            },
          })
          .catch((error) => {
            if (process.env.NODE_ENV === 'development') {
              console.error(error)
            }
          }))

      await new Promise<void>((resolve) => {
        setTimeout(() => resolve(), 100)
      })

      replayMessage &&
        (await prisma.ventyraChatMessage.create({
          data: {
            content: replayMessage,
            fromUserId: currentUser.id,
            toUserId: userId,
            sessionId,
          },
        }))

      return true
    },
  }),
)
