import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  uid: text("uid").notNull().unique(),
  username: text("username").notNull(),
  currentLevel: integer("current_level").notNull().default(1),
  completedLevels: integer("completed_levels").array().notNull().default([]),
});

export const insertUserSchema = createInsertSchema(users).omit({ 
  id: true, 
  completedLevels: true,
  currentLevel: true 
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
