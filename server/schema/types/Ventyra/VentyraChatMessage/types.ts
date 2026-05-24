import { builder } from 'server/schema/builder'

export const VentyraChatMessage = builder.simpleObject('VentyraChatMessage', {
  fields: (t) => ({
    id: t.id({
      nullable: false,
    }),
  }),
})
