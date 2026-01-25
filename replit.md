# Solution AV - Home Theatre Solutions Website

## Overview

This is a business website for Solution AV, a company specializing in premium home theatre solutions across India. The application provides information about 4K & 8K projector setups, customized projection screens, interactive flat panels, and complete home theatre installations. It includes a customer enquiry system for collecting leads from potential clients interested in their services.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS v4 with shadcn/ui component library (new-york style)
- **State Management**: TanStack React Query for server state
- **Animations**: Framer Motion for page animations and transitions
- **Build Tool**: Vite with custom plugins for Replit integration

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API endpoints prefixed with `/api`
- **Development**: Hot module replacement via Vite middleware
- **Production**: Static file serving from compiled dist folder

### Data Storage
- **Database**: PostgreSQL via Drizzle ORM
- **Schema Location**: `shared/schema.ts` contains all table definitions
- **Migrations**: Managed via drizzle-kit with `db:push` command
- **Connection**: Uses `DATABASE_URL` environment variable

### Key Design Patterns
- **Monorepo Structure**: Client code in `client/`, server in `server/`, shared types in `shared/`
- **Type Safety**: Zod schemas generated from Drizzle tables for validation
- **Storage Interface**: `IStorage` interface in `server/storage.ts` abstracts database operations
- **Path Aliases**: `@/` maps to client/src, `@shared/` maps to shared folder

### Database Schema
- **users**: Basic user table with id, username, password
- **enquiries**: Customer lead capture with name, phone, service type, screen size, budget range, city, message, and timestamp

## External Dependencies

### UI Components
- Radix UI primitives for accessible component foundations
- Lucide React for iconography
- Embla Carousel for image carousels
- class-variance-authority for component variants

### Database & ORM
- Drizzle ORM with PostgreSQL dialect
- drizzle-zod for schema-to-validation integration
- pg (node-postgres) for database connections

### Build & Development
- Vite for frontend bundling
- esbuild for server bundling (production)
- tsx for TypeScript execution in development

### Replit-Specific
- @replit/vite-plugin-runtime-error-modal for error overlay
- @replit/vite-plugin-cartographer for development mapping
- Custom meta-images plugin for OpenGraph tags with Replit domains