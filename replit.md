# Avrimile Logistics Platform

## Overview

This is a modern logistics and supply chain management platform for Avrimile Enterprises, a Nigerian logistics company specializing in last-mile delivery, express courier services, e-commerce fulfillment, trucking, and warehousing. The platform features a client-facing website with package tracking capabilities, service information, and contact forms for quote requests.

## User Preferences

Preferred communication style: Simple, everyday language.

### Recent Improvements (August 18, 2025)
- Navigation menu should be compact and not wider than text on all screens
- Navigation order updated: Home > Services > Package Tracker > About > Blog > Contact 
- All buttons should be sized to fit their text length (w-fit instead of full width)
- Service cards need "Learn More" buttons with detailed modal popups
- Prefer visually compelling animated icons over static ones
- Package tracker should show connecting trails between tracking points
- Animated navigation menu tray open/close actions
- Smooth section animations during navigation
- Added engaging typing animation to Hero section with dynamic text rotation using 2-line blocks for stable layout
- Implemented image carousel in Hero section with auto-advance and navigation controls
- Added parallax background images to Services, About, and Contact sections for dynamic visual effect
- Mobile navigation tray now width-fits content and positioned compactly
- All form buttons properly centered for better visual balance
- Replaced static social media buttons with animated Lucide React icons
- Service cards transformed to transparent glassy look with backdrop blur and "Learn More" buttons positioned on the right
- Package tracker section enhanced with animated background elements and glassy transparent styling
- Contact section optimized with form field width constraints (max-w-md/max-w-2xl) and enhanced visual styling
- Mobile-responsive improvements with background-attachment fallbacks for better performance
- AVRIMILE logo in Hero section made significantly larger (text-9xl) with font-black weight
- All text styling updated to use Montserrat font family for consistent branding
- Service modals positioned in viewport center with glassy styling and click-to-close functionality
- Package tracking timeline fully centralized with proper connecting lines
- Contact form contrast improved with dark background for better readability
- All elements properly centered across Package Tracker, Services, and Contact sections

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