// lib/user.ts
import { db } from "./db";
import bcrypt from "bcrypt";

export interface UserRow {
  id: number;
  username: string;
  passwordHash: string;
}

// Find user by username
export function findUserByUsername(username: string): UserRow | undefined {
  const stmt = db.prepare("SELECT * FROM users WHERE username = ?");
  // Cast to UserRow | undefined
  const row = stmt.get(username) as UserRow | undefined;
  return row;
}

// Create a new user
export function createUser(username: string, password: string): UserRow {
  const passwordHash = bcrypt.hashSync(password, 10);
  const stmt = db.prepare("INSERT INTO users (username, passwordHash) VALUES (?, ?)");
  stmt.run(username, passwordHash);

  // Fetch newly created user
  const user = findUserByUsername(username);
  if (!user) throw new Error("Failed to create user");
  return user;
}
