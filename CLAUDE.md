# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Clinical Trial Accelerator** - a full-stack application for AI-powered clinical trial document generation. The project combines a Next.js 15.3.4 frontend with a FastAPI backend, designed to streamline clinical trial documentation including informed consent forms and site initiation checklists.

## Development Commands

### Frontend (Next.js)
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application  
- `npm run start` - Start production server
- `npm run lint` - Run Next.js linting

### Backend (FastAPI)
- `cd api && uv run uvicorn src.main:app --reload` - Start FastAPI development server
- `cd api && uv add <package>` - Add Python dependencies
- `cd api && uv sync` - Sync dependencies from uv.lock

## Architecture

### Frontend
- **Framework**: Next.js 15.3.4 with App Router
- **UI**: React 19 with Tailwind CSS v4
- **TypeScript**: Strict mode enabled with path aliases (`@/*` maps to root)
- **Styling**: PostCSS with Tailwind CSS v4 plugin
- **Components**: Organized in `app/src/components/` with specialized ICF components

### Backend
- **Framework**: FastAPI with Python 3.13
- **Database**: Qdrant vector database for document storage/retrieval
- **Dependencies**: Managed with uv (FastAPI, Pydantic, Qdrant client, Uvicorn)
- **API Structure**: CORS-enabled, health check endpoints, organized routers

### Deployment
- **Platform**: Vercel with full-stack configuration
- **Frontend**: `@vercel/next` builder for dynamic Next.js app
- **Backend**: `@vercel/python` builder for FastAPI serverless functions
- **API Routes**: `/api/*` requests routed to FastAPI backend

## Key Configuration

### Frontend
- **Path aliases**: `@/*` resolves to project root
- **PostCSS**: Uses `@tailwindcss/postcss` plugin
- **TypeScript**: Strict mode, ES2017 target, bundler module resolution
- **App metadata**: Title updated to "Clinical Trial Accelerator"

### Backend
- **FastAPI**: CORS configured for localhost:3000 (development)
- **Python**: uv dependency management with pyproject.toml
- **Qdrant**: Vector database service for document processing

### Deployment
- **vercel.json**: Configured with builds and routes for full-stack deployment
- **API routing**: Backend accessible at `/api/*` endpoints

## Project Structure

### Frontend
- `app/` - Next.js App Router pages, layouts, and organized components
  - `src/components/` - Reusable UI components (Button, Card, Input, etc.)
  - `src/components/icf/` - ICF-specific components
  - `src/types/` - TypeScript type definitions
  - `src/utils/` - API utilities and helpers
- `public/` - Static assets (SVG icons)

### Backend
- `api/` - FastAPI backend application
  - `src/main.py` - FastAPI application entry point
  - `src/routers/` - API route handlers
  - `src/services/` - Business logic (Qdrant service)
  - `src/prompts/` - AI prompt templates
  - `pyproject.toml` - Python dependencies and configuration
  - `uv.lock` - Locked dependency versions

### Configuration
- `vercel.json` - Vercel deployment configuration for full-stack app
- Root-level configuration files for TypeScript, Next.js, and PostCSS

## Session Accomplishments

- Created comprehensive CLAUDE.md documentation
- Configured Vercel deployment for full-stack Next.js + FastAPI application
- Updated project metadata to reflect "Clinical Trial Accelerator" branding
- Established proper project structure with organized components and backend services