# Avrimile Logistics Platform

## Overview

This is a modern logistics and supply chain management platform for Avrimile Enterprises, a Nigerian logistics company specializing in last-mile delivery, express courier services, e-commerce fulfillment, trucking, and warehousing. The platform features a client-facing website with package tracking capabilities, service information, and contact forms for quote requests.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React with TypeScript**: Single-page application built with React 18 and TypeScript for type safety
- **Styling**: Tailwind CSS with custom design tokens for Avrimile's brand colors and theme
- **UI Components**: Radix UI components with shadcn/ui for consistent, accessible interface elements
- **State Management**: TanStack Query for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Express.js Server**: RESTful API server with middleware for logging, error handling, and static file serving
- **Storage Pattern**: Abstracted storage interface allowing for different implementations (currently in-memory with sample data)
- **API Endpoints**: Package tracking by ID, contact form submissions, and quote requests
- **Development Integration**: Vite middleware for seamless frontend-backend development

### Data Storage Solutions
- **Database ORM**: Drizzle ORM configured for PostgreSQL with type-safe schema definitions
- **Schema Design**: 
  - Packages table with tracking history stored as JSONB
  - Contact submissions table for customer inquiries
  - UUID primary keys with automatic generation
- **Current Implementation**: In-memory storage with sample data for development/demo purposes
- **Production Ready**: Database configuration ready for PostgreSQL deployment

### Form Handling and Validation
- **Schema Validation**: Zod schemas for runtime type checking and validation
- **Form Management**: React Hook Form integration with Radix UI components
- **User Feedback**: Toast notifications for form submissions and error states

### External Dependencies

- **Database**: Configured for Neon serverless PostgreSQL (@neondatabase/serverless)
- **Email/SMS**: Ready for integration (contact forms collect data for follow-up)
- **WhatsApp Integration**: Direct link to business WhatsApp for customer support
- **Image Assets**: Unsplash images for demo content and visual elements
- **Maps/Location**: References to Nigerian locations (Lagos, Abuja) for logistics context