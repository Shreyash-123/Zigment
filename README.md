# User Notification Preferences API

## Overview

This is a serverless API that manages user notification preferences, allowing users to set and update their preferences for various types of notifications (e.g., marketing, newsletter, updates) and the delivery channels (e.g., email, SMS, push). The API also simulates the sending of notifications and tracks notification logs.

This project is built using **NestJS** and **MongoDB**, with **TypeScript** for type safety. It is designed to be serverless and can be deployed on platforms like **Vercel** or **AWS Lambda**.

## Features

- **User Preferences Management**:
  - Create, read, update, and delete user preferences.
  - Store user preferences for different notification types and delivery channels.
  - Validate inputs, including email, timezone, and frequency.
  
- **Notification Management**:
  - Simulate the sending of notifications via different channels (email, SMS, push).
  - Track notification logs and statistics (e.g., sent, failed).
  
- **Testing**:
  - Includes unit and integration tests using **Jest**.

## Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **MongoDB** with **Mongoose**: NoSQL database to store user preferences and notification logs.
- **TypeScript**: For statically-typed JavaScript development.
- **Jest**: Testing framework for unit and integration tests.
- **class-validator** and **class-transformer**: For input validation and transformation.
- **Supertest**: For end-to-end testing.

## Setup Instructions

### Prerequisites

Ensure that the following dependencies has been installed prior to use:
- [Node.js](https://nodejs.org/en/) (>=14.x)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account (for cloud-based MongoDB)
- [Git](https://git-scm.com/)

