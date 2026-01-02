# REEN Legal

A Next.js application hosting the legal pages (Terms of Service and Privacy Policy) for the REEN e-commerce platform. These pages are deployed and integrated with Clerk authentication, requiring users to acknowledge that they have read and agreed to these terms during the sign-up process.

> **Note:** This project is currently not deployed online as my AWS free tier has ended. However, everything works perfectly locally. You can follow the instructions in the [Running Locally](#running-locally) section to set up and run the project on your machine.

## Table of Contents

- [REEN Legal](#reen-legal)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Pages](#pages)
  - [Technologies Used](#technologies-used)
  - [Running Locally](#running-locally)
    - [Prerequisites](#prerequisites)
    - [Installation Steps](#installation-steps)
  - [Deployment](#deployment)
  - [Clerk Integration](#clerk-integration)

## Overview

This project contains the legal documentation pages for the REEN e-commerce platform. The pages are designed to be linked from Clerk's authentication flow, ensuring users must acknowledge reading the Terms of Service and Privacy Policy before completing their registration.

## Pages

- **Terms of Service** (`/terms-of-service`) - Comprehensive terms and conditions for using the REEN platform
- **Privacy Policy** (`/privacy-policy`) - Privacy policy outlining data collection and usage practices
- **Home Page** (`/`) - Landing page with links to both legal documents

## Technologies Used

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework

## Running Locally

### Prerequisites

- Node.js (v22 or higher)
- npm package manager (or alternatives like yarn, pnpm, or bun)

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/gideonadeti/reen-legal.git
   cd reen-legal
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   **Note:** You can use alternative package managers like yarn, pnpm, or bun if preferred.

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:3000`
   - The application will automatically reload when you make changes

## Deployment

The legal pages are typically deployed to a hosting service (e.g., Vercel) and the URLs are configured in Clerk's authentication settings.

1. **Push your code to GitHub**

2. **Deploy to Vercel** (or your preferred hosting service)
   - Import the repository
   - Deploy the application

3. **Configure Clerk**
   - Add the deployed URLs to Clerk's Terms of Service and Privacy Policy settings
   - Users will be required to acknowledge these pages during sign-up

## Clerk Integration

These legal pages are integrated with Clerk authentication. When users sign up for the REEN platform:

1. Clerk displays links to the Terms of Service and Privacy Policy
2. Users must check a box confirming they have read and agree to the terms
3. The links point to the deployed legal pages hosted by this application

This ensures compliance with legal requirements and provides transparency about how user data is handled and what terms govern the use of the platform.
