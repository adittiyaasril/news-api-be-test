# News Portal API

This is a backend API for a news portal application built with Express.js, Prisma, and PostgreSQL. The application provides JWT-based authentication, category management, and CRUD operations for news articles by administrators, as well as viewing and searching capabilities for general users.

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Environment Variables](#environment-variables)
4. [Running the Application](#running-the-application)
5. [API Documentation](#api-documentation)

## Features

- **Admin Functionalities**: Manage categories, create/edit/delete news articles.
- **User Functionalities**: View news list, search news articles, view individual news details.
- **JWT Authentication**: Secure access with JWT tokens.
- **Swagger Documentation**: Interactive API documentation accessible at `/api-docs`.

## Installation

### 1. Clone the Repository

```bash
git clone "https://github.com/adittiyaasril/news-api-be-test.git"
cd news-portal-api
```

### 2. Install Dependencies

Install required Node.js packages:

```bash
npm install

```

## Environment Variables

Create a .env file in the root directory and add the following environment variables:

```bash
DATABASE_URL="postgresql://<username>:<password>@localhost:5432/news_portal"
PORT=8080
JWT_SECRET="your_jwt_secret"

```

- Replace username, password, and localhost:5432/news_portal with your PostgreSQL database credentials.
- Set JWT_SECRET to a strong secret key for token signing.

## Running the Application

### 1. Start the Server

Start the server in development mode:

```bash
npm run start:dev
```

### 2. Access Swagger API Documentation

Open your browser and navigate to http://localhost:8080/api-docs to view and interact with the Swagger documentation.

## API Documentation

The API includes routes for both authenticated admins and general users. Here’s a summary of the main routes available:

### Auth Routes

- **Register**: `POST /auth/register` - Register a new user.
- **Login**: `POST /auth/login` - Log in and receive a JWT token.

### Admin Routes (require JWT with Admin role)

#### Category Management

- `POST /admin/categories` - Create a new category.
- `PUT /admin/categories/:id` - Update an existing category.
- `DELETE /admin/categories/:id` - Delete a category.

#### News Management

- `POST /admin/news` - Create a news article.
- `PUT /admin/news/:id` - Update a news article.
- `DELETE /admin/news/:id` - Delete a news article.

### User Routes

#### News Viewing

- `GET /news` - Get a list of all news articles.
- `GET /news/:id` - View details of a specific news article.
- `GET /news/search` - Search for news articles by title or content.

### Authorization with JWT

Most routes are protected and require JWT authentication. To authorize:

1. Log in using valid credentials via `POST /auth/login`.
2. Use the JWT token received to authorize requests in Swagger (`/api-docs`) by clicking the "Authorize" button or in tools like Postman by adding an `Authorization` header with `Bearer <your_token>`.
