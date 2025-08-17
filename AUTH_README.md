# Authentication Setup Guide

## Overview
This AI Dev Tools Blog now includes a complete authentication system with:
- Google OAuth login/signup
- Email/password authentication
- User session management
- Protected routes
- User profile dropdown

## Features
✅ **Google OAuth Integration** - Sign in with Google account  
✅ **Email/Password Auth** - Traditional email/password registration  
✅ **Session Management** - Secure JWT-based sessions  
✅ **User Profile** - Dropdown menu with user info and settings  
✅ **Mobile Responsive** - Full auth flow works on all devices  
✅ **Error Handling** - Comprehensive error pages and messages  
✅ **Password Validation** - Strong password requirements  

## Setup Instructions

### 1. Install Dependencies
The required dependencies are already in package.json:
```bash
npm install
```

### 2. Configure Environment Variables
Copy the `.env.example` file to `.env.local`:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your values:

```env
# Authentication
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here  # Generate with: openssl rand -base64 32

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

### 3. Set Up Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Go to "Credentials" → "Create Credentials" → "OAuth Client ID"
5. Choose "Web application"
6. Add Authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (for development)
   - `https://yourdomain.com/api/auth/callback/google` (for production)
7. Copy the Client ID and Client Secret to your `.env.local`

### 4. Generate NextAuth Secret

Run this command to generate a secure secret:
```bash
openssl rand -base64 32
```

Copy the output to `NEXTAUTH_SECRET` in your `.env.local`

## File Structure

```
src/
├── app/
│   ├── api/
│   │   └── auth/
│   │       ├── [...nextauth]/
│   │       │   └── route.ts        # NextAuth API route
│   │       └── register/
│   │           └── route.ts        # User registration API
│   ├── auth/
│   │   ├── signin/
│   │   │   └── page.tsx           # Sign in page
│   │   ├── signup/
│   │   │   └── page.tsx           # Sign up page
│   │   └── error/
│   │       └── page.tsx           # Auth error page
│   └── layout.tsx                 # App layout with AuthProvider
├── components/
│   └── FuturisticNavbar.tsx      # Updated navbar with auth
├── lib/
│   └── auth/
│       └── auth-options.ts       # NextAuth configuration
└── providers/
    └── AuthProvider.tsx          # Session provider wrapper
```

## Usage

### Protected Routes
To protect a page, check the session:

```tsx
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

export default function ProtectedPage() {
  const { data: session, status } = useSession()
  
  if (status === 'loading') return <div>Loading...</div>
  if (!session) redirect('/auth/signin')
  
  return <div>Protected content</div>
}
```

### Get User Info
Access user information in any component:

```tsx
import { useSession } from 'next-auth/react'

export default function Component() {
  const { data: session } = useSession()
  
  if (session) {
    console.log(session.user.email)
    console.log(session.user.name)
    console.log(session.user.image)
  }
}
```

### Sign Out
Programmatically sign out users:

```tsx
import { signOut } from 'next-auth/react'

// Sign out and redirect to home
signOut({ callbackUrl: '/' })
```

## Database Integration (Production)

The current setup uses in-memory storage for demo purposes. For production:

1. Install Prisma and a database adapter:
```bash
npm install @prisma/client prisma @next-auth/prisma-adapter
```

2. Set up your database schema
3. Update `auth-options.ts` to use Prisma adapter
4. Update register API to use database

## Security Considerations

⚠️ **Important for Production:**
- Never commit `.env.local` to version control
- Use a proper database instead of in-memory storage
- Implement rate limiting on auth endpoints
- Add email verification for new accounts
- Implement password reset functionality
- Use HTTPS in production
- Enable CSRF protection
- Implement account lockout after failed attempts

## Customization

### Styling
All auth pages use the same futuristic design system as the rest of the site. You can customize:
- Colors in the gradient classes
- Animations in the auth pages
- Form validation messages
- Success/error states

### Adding OAuth Providers
To add more OAuth providers (GitHub, Twitter, etc.):

1. Install the provider:
```tsx
import GitHubProvider from "next-auth/providers/github"
```

2. Add to `auth-options.ts`:
```tsx
providers: [
  GitHubProvider({
    clientId: process.env.GITHUB_ID!,
    clientSecret: process.env.GITHUB_SECRET!,
  }),
  // ... other providers
]
```

## Troubleshooting

### Common Issues

1. **"NEXTAUTH_URL is not set"**
   - Make sure `.env.local` exists and contains `NEXTAUTH_URL`

2. **Google OAuth not working**
   - Check redirect URIs in Google Console match exactly
   - Ensure Client ID and Secret are correct

3. **Sessions not persisting**
   - Check `NEXTAUTH_SECRET` is set
   - Clear browser cookies and try again

4. **"User already exists" error**
   - Email is already registered, use sign in instead

## Support

For issues or questions:
- Check the [NextAuth.js documentation](https://next-auth.js.org/)
- Review the error logs in browser console
- Check server logs for API errors

## License

This authentication system is part of the AI Dev Tools Blog project.
