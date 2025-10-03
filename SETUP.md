# The Meet - Video Chat Application Setup Guide

## Quick Start

1. **Copy the environment file:**
   ```bash
   cp .env.example .env.local
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables** (see detailed instructions below)

4. **Start the development server:**
   ```bash
   npm run dev
   ```

## Environment Variables Setup

### 1. Clerk Authentication Setup

Clerk provides user authentication and management for the application.

**Steps:**
1. Go to [Clerk Dashboard](https://dashboard.clerk.com/)
2. Create a new account or sign in
3. Create a new application
4. Choose your preferred sign-in methods (Email, Google, GitHub, etc.)
5. Go to **API Keys** section
6. Copy the following values to your `.env.local`:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` (starts with `pk_test_` or `pk_live_`)
   - `CLERK_SECRET_KEY` (starts with `sk_test_` or `sk_live_`)

**Configuration:**
- Set up redirect URLs in Clerk Dashboard:
  - Development: `http://localhost:3000`
  - Production: `https://yourdomain.com`
- Configure sign-in/sign-up pages
- Customize appearance to match your app theme

### 2. Stream Video SDK Setup

Stream provides the video calling functionality.

**Steps:**
1. Go to [Stream Dashboard](https://getstream.io/dashboard/)
2. Create a new account or sign in
3. Create a new **Video & Audio** application
4. Go to **App Settings** → **General**
5. Copy the following values to your `.env.local`:
   - `NEXT_PUBLIC_STREAM_API_KEY` (API Key)
   - `STREAM_SECRET_KEY` (Secret)

**Configuration:**
- Configure call types and permissions
- Set up webhooks if needed
- Review security settings

### 3. Application Configuration

Update these values in your `.env.local`:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000  # Change for production
NODE_ENV=development                        # Change to 'production' for production
```

## Verification

After setting up the environment variables:

1. **Start the application:**
   ```bash
   npm run dev
   ```

2. **Test authentication:**
   - Visit `http://localhost:3000`
   - Try signing up with a new account
   - Verify you can sign in/out

3. **Test video functionality:**
   - Create an instant meeting
   - Join a meeting
   - Test camera and microphone
   - Try screen sharing

## Common Issues

### Clerk Issues
- **"Clerk publishable key not found"**: Make sure `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` is set correctly
- **Authentication not working**: Check that redirect URLs are configured in Clerk Dashboard
- **Styling issues**: Verify Clerk appearance configuration in `app/layout.tsx`

### Stream Issues
- **"Stream API key is missing"**: Ensure `NEXT_PUBLIC_STREAM_API_KEY` is set
- **Token generation fails**: Check that `STREAM_SECRET_KEY` is correct
- **Video not working**: Verify browser permissions for camera/microphone

### General Issues
- **Environment variables not loading**: Make sure the file is named `.env.local` (not `.env`)
- **Build errors**: Run `npm install` to ensure all dependencies are installed
- **Port conflicts**: Change the port with `npm run dev -- -p 3001`

## Security Notes

- Never commit `.env.local` to version control
- Use different API keys for development and production
- Regularly rotate your secret keys
- Enable webhook security in production
- Use HTTPS in production

## Optional Enhancements

### Database Integration
If you want to store meeting data, user preferences, etc.:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/themeet
```

Popular options:
- **Supabase**: Easy PostgreSQL setup with real-time features
- **PlanetScale**: Serverless MySQL platform
- **Prisma**: ORM for database management

### Email Service
For meeting invitations and notifications:

```env
EMAIL_FROM=noreply@yourdomain.com
EMAIL_SERVER_HOST=smtp.gmail.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your_email@gmail.com
EMAIL_SERVER_PASSWORD=your_app_password
```

### File Storage
For storing recordings, profile pictures:

```env
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=us-east-1
AWS_S3_BUCKET=your-bucket-name
```

## Production Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel Dashboard
3. Update `NEXT_PUBLIC_BASE_URL` to your domain
4. Configure custom domain if needed

### Other Platforms
- **Netlify**: Similar to Vercel, good for static sites
- **Railway**: Good for full-stack applications
- **DigitalOcean**: More control, requires more setup

## Support

If you encounter issues:
1. Check the console for error messages
2. Verify all environment variables are set correctly
3. Review the [Clerk Documentation](https://clerk.com/docs)
4. Review the [Stream Documentation](https://getstream.io/video/docs/)
5. Check the application logs

## Next Steps

After successful setup:
1. Customize the application theme and branding
2. Add additional features (recording, chat, etc.)
3. Set up analytics and monitoring
4. Configure production deployment
5. Add tests for critical functionality
