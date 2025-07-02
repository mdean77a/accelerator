# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.3.4 application using React 19, TypeScript, and Tailwind CSS v4. The project follows the Next.js App Router structure with TypeScript configuration.

## Development Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production application  
- `npm run start` - Start production server
- `npm run lint` - Run Next.js linting

## Architecture

- **Framework**: Next.js 15.3.4 with App Router
- **UI**: React 19 with Tailwind CSS v4
- **Fonts**: Geist Sans and Geist Mono (Google Fonts)
- **TypeScript**: Strict mode enabled with path aliases (`@/*` maps to root)
- **Styling**: PostCSS with Tailwind CSS v4 plugin

## Key Configuration

- **Path aliases**: `@/*` resolves to project root
- **PostCSS**: Uses `@tailwindcss/postcss` plugin
- **TypeScript**: Strict mode, ES2017 target, bundler module resolution
- **Next.js**: Default configuration, no custom modifications

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `public/` - Static assets (SVG icons)
- Root-level configuration files for TypeScript, Next.js, and PostCSS