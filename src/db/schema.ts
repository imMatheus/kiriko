import { pgTable, serial, text } from 'drizzle-orm/pg-core'

export const product = pgTable('product', {
  id: serial('id').primaryKey(),
  productName: text('product_name').notNull(),
})
