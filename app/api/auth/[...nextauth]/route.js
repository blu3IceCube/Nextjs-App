import User from "@/app/models/User";
import connect from "@/utils/db";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await connect();
        try {
          const user = await User.findOne({ email: credentials.email });

          if (user) {
            const isPasswordCorrect = bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("Wrong user credentials!");
            }
          } else {
            throw new Error("User not found!");
          }
        } catch (error) {
          throw new Error('login credentials error', error);
        }
      },
    }),
  ],
  // pages: {
  //   error: "/dashboard/login"
  // }
});

export { handler as GET, handler as POST };
