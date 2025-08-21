import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"

// Shared in-memory user store for demo (replace with database in production)
// This is a simple solution for demo purposes - in production, use a proper database
let users: { [key: string]: { id: string; email: string; name: string; password: string; image?: string } } = {}

// Function to get users (will be shared with register route)
export function getUsers() {
  return users
}

// Function to add a user
export function addUser(email: string, user: any) {
  users[email] = user
}

// Generate a default secret if not provided (for development/demo purposes)
const getAuthSecret = () => {
  if (process.env.NEXTAUTH_SECRET) {
    return process.env.NEXTAUTH_SECRET
  }
  
  // Fallback secret for when environment variable is not set
  // This ensures the app works even without proper configuration
  console.warn("NEXTAUTH_SECRET is not set. Using default secret. This is insecure for production!")
  return "K3yL8mN9pQ2rS5tV7wX1yZ4aB6cD8eF0gH3jK5mN7pR9sT2v"
}

export const authOptions: NextAuthOptions = {
  providers: [
    // Only add Google provider if credentials are available
    ...(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET && process.env.GOOGLE_CLIENT_ID !== 'placeholder-client-id.apps.googleusercontent.com'
      ? [
          GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          })
        ]
      : []),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials")
        }

        const user = users[credentials.email]

        if (!user) {
          // User doesn't exist - they need to register first
          throw new Error("No user found with this email. Please sign up first.")
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.password
        )

        if (!isCorrectPassword) {
          throw new Error("Invalid credentials")
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
        }
      }
    })
  ],
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id
      }
      if (account) {
        token.provider = account.provider
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.provider = token.provider as string
      }
      return session
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: getAuthSecret(),
}
