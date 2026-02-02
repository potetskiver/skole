// app/api/auth/[...nextauth]/route.ts
import NextAuth, { type AuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { findUserByUsername } from "@/lib/user";
import bcrypt from "bcrypt";

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null;

        const user = findUserByUsername(credentials.username);
        if (!user) return null;

        const isValid = bcrypt.compareSync(credentials.password, user.passwordHash);
        if (!isValid) return null;

        // Return fully typed user matching next-auth.d.ts
        return {
          id: user.id,
          name: user.username,
          username: user.username,
        };
      },
    }),
  ],
  session: { strategy: "jwt" },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
