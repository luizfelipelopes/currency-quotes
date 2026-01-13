# Currency Quote Conversion API

A NestJS-based REST API for fetching currency quotes and performing currency conversions. This application integrates with an external currency quote service to provide real-time exchange rates and conversion calculations.

## Description

This project is a currency conversion service that allows you to:
- Retrieve currency quotes for multiple currencies
- Get quotes for specific currencies
- Convert values between currencies based on current exchange rates

The API supports the following currencies:
- USD (US Dollar)
- EUR (Euro)
- ARS (Argentine Peso)
- CLP (Chilean Peso)
- UYU (Uruguayan Peso)

## Tech Stack

### Core Framework
- **NestJS** (^11.0.1) - Progressive Node.js framework for building efficient and scalable server-side applications
- **TypeScript** (^5.7.3) - Typed superset of JavaScript
- **Express** (via @nestjs/platform-express) - Web application framework

### Key Dependencies
- **@nestjs/config** (^4.0.2) - Configuration module for managing environment variables
- **class-validator** (^0.14.3) - Validation library for decorator-based validation
- **class-transformer** (^0.5.1) - Transformation library for plain objects to class instances
- **rxjs** (^7.8.1) - Reactive Extensions for JavaScript

### Development Tools
- **Jest** (^30.0.0) - JavaScript testing framework
- **ESLint** (^9.18.0) - Code linting tool
- **Prettier** (^3.4.2) - Code formatter
- **TypeScript ESLint** (^8.20.0) - ESLint parser for TypeScript
- **Supertest** (^7.0.0) - HTTP assertions for API testing

## Project Structure

```
src/
├── app.module.ts              # Root application module
├── app.controller.ts          # Quotes controller (handles /quotes endpoints)
├── app.service.ts             # Quotes service wrapper
├── main.ts                    # Application entry point
├── conversion/
│   ├── conversion.controller.ts    # Conversion controller (handles /conversion endpoint)
│   ├── conversion.service.ts       # Conversion logic service
│   └── dto/
│       └── conversion-currency.dto.ts  # DTO for conversion requests
└── quotes/
    ├── quotes.service.ts      # Service for fetching quotes from external API
    └── dto/
        └── quotes-currency.dto.ts     # DTO for quote requests
```

## How It Works

### Architecture Overview

The application follows NestJS modular architecture with separation of concerns:

1. **QuotesService** (`quotes/quotes.service.ts`): 
   - Handles HTTP requests to the external currency quote API
   - Makes HTTPS requests to fetch currency data
   - Provides methods to list all quotes or get a specific currency quote

2. **AppService** (`app.service.ts`):
   - Acts as a service layer wrapper around QuotesService
   - Provides business logic methods for quote retrieval

3. **ConversionService** (`conversion/conversion.service.ts`):
   - Retrieves currency quotes using AppService
   - Performs currency conversion calculations
   - Returns converted values based on exchange rates

4. **Controllers**:
   - **AppController**: Handles `/quotes` endpoints
   - **ConversionController**: Handles `/conversion` endpoint

5. **DTOs (Data Transfer Objects)**:
   - Validate incoming request parameters
   - Ensure currency codes are valid (USD, EUR, ARS, CLP, UYU)
   - Use class-validator decorators for validation

### API Endpoints

#### 1. Get All Quotes
```http
GET /quotes
```
Returns a list of all available currency quotes from the external API.

#### 2. Get Quote for Specific Currency
```http
GET /quotes/conversion?currency={currency}
```
Returns the quote information for a specific currency.

**Query Parameters:**
- `currency` (required): Currency code (usd, eur, ars, clp, uyu)

**Example:**
```bash
curl http://localhost:3000/quotes/conversion?currency=usd
```

#### 3. Convert Currency Value
```http
GET /conversion?currency={currency}&value={value}
```
Converts a given value based on the current exchange rate for the specified currency.

**Query Parameters:**
- `currency` (required): Currency code (usd, eur, ars, clp, uyu)
- `value` (required): Numeric value to convert

**Example:**
```bash
curl http://localhost:3000/conversion?currency=usd&value=100
```

**Response:**
```json
{
  "value": 510.00
}
```

### Request Flow

1. Client sends HTTP request to endpoint
2. Controller receives request and validates DTO
3. Controller calls appropriate service method
4. Service makes HTTPS request to external API (QuotesService)
5. Service processes the response
6. ConversionService performs calculations if needed
7. Response is returned to client

### Validation

The application uses global validation pipes to ensure:
- Required fields are provided
- Currency codes match allowed values (usd, eur, ars, clp, uyu)
- Data types are correct (string for currency, number for value)

## Installation

```bash
$ npm install
```

## Configuration

Create a `.env` file in the root directory with the following variables:

```env
BASE_URL=your-currency-api-hostname
PORT=3000
```

**Note:** `BASE_URL` should be the hostname of the external currency quote API (without `https://`).

## Running the Application

### Development
```bash
$ npm run start:dev
```

## Testing

```bash
$ npm run test
```
