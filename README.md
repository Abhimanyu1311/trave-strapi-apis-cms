# Trave Strapi APIs CMS

A NestJS-based backend application that integrates with Strapi CMS to provide APIs for the Trave platform. This project handles authentication, user management, and content management through RESTful APIs.

## Description

This project is built using the NestJS framework with TypeScript. It provides a robust backend for managing users, creators, and content through integration with Strapi CMS. The application uses PostgreSQL as the database with Sequelize ORM, and implements JWT-based authentication.

## Features

- **Authentication & Authorization**: JWT-based auth with role-based access control
- **User Management**: User and creator models with onboarding
- **Database Integration**: PostgreSQL with Sequelize ORM
- **Strapi CMS Integration**: Seamless integration with Strapi for content management
- **API Endpoints**: RESTful APIs for all operations
- **Validation**: Input validation using class-validator
- **Security**: Password hashing with bcrypt

## Tech Stack

- **Framework**: NestJS
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Authentication**: JWT (JSON Web Tokens)
- **CMS**: Strapi
- **Validation**: class-validator
- **Encryption**: bcrypt

## Project Structure

```
trave-strapi-apis-cms/
├── src/
│   ├── app.controller.ts          # Main application controller
│   ├── app.module.ts              # Root application module
│   ├── app.service.ts             # Main application service
│   ├── main.ts                    # Application entry point
│   ├── config/
│   │   ├── database.config.ts     # Database configuration
│   │   ├── env.config.ts          # Environment configuration
│   │   └── strapi.config.ts       # Strapi integration config
│   ├── database/
│   │   ├── database.module.ts     # Database module
│   │   └── models/
│   │       ├── creator.model.ts   # Creator database model
│   │       └── user.model.ts      # User database model
│   └── modules/
│       ├── auth/
│       │   ├── auth.controller.ts  # Authentication endpoints
│       │   ├── auth.module.ts      # Auth module
│       │   ├── auth.service.ts     # Auth business logic
│       │   └── dto/
│       │       ├── auth-response.dto.ts
│       │       ├── login.dto.ts
│       │       └── onboard.dto.ts
│       └── guards/
│           ├── auth.guard.ts       # JWT authentication guard
│           ├── roles.decorator.ts  # Role-based decorator
│           └── roles.guard.ts      # Role-based guard
├── migrations/                    # Database migrations
├── models/                        # Additional models
│   └── index.js
├── seeders/                       # Database seeders
├── test/                          # Test files
│   ├── app.e2e-spec.ts            # End-to-end tests
│   └── jest-e2e.json              # Jest e2e config
├── eslint.config.mjs              # ESLint configuration
├── nest-cli.json                  # NestJS CLI config
├── package.json                   # Dependencies and scripts
├── tsconfig.build.json            # TypeScript build config
└── tsconfig.json                  # TypeScript config
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Abhimanyu1311/trave-strapi-apis-cms.git
cd trave-strapi-apis-cms
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```env
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=trave_db
DATABASE_USER=your_db_user
DATABASE_PASSWORD=your_db_password
JWT_SECRET=your_jwt_secret
STRAPI_URL=http://localhost:1337
STRAPI_API_TOKEN=your_strapi_token
```

4. Set up the database:
Make sure PostgreSQL is running and create the database specified in your environment variables.

5. Run migrations (if any):
```bash
# Run any pending migrations
npm run migration:run
```

## Running the Application

### Development
```bash
npm run start:dev
```

### Production
```bash
npm run build
npm run start:prod
```

### Debug Mode
```bash
npm run start:debug
```

## Testing

### Unit Tests
```bash
npm run test
```

### E2E Tests
```bash
npm run test:e2e
```

### Test Coverage
```bash
npm run test:cov
```

## API Endpoints

### Authentication
- `POST /auth/login` - User login
- `POST /auth/onboard` - User onboarding

### Users
- `GET /users` - Get all users (protected)
- `GET /users/:id` - Get user by ID (protected)

### Creators
- `GET /creators` - Get all creators (protected)
- `POST /creators` - Create new creator (protected)

## Scripts

- `npm run build` - Build the application
- `npm run format` - Format code with Prettier
- `npm run start` - Start the application
- `npm run start:dev` - Start in development mode with watch
- `npm run start:prod` - Start in production mode
- `npm run lint` - Run ESLint
- `npm run test` - Run unit tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:cov` - Run tests with coverage
- `npm run test:e2e` - Run end-to-end tests

## Environment Configuration

The application uses the following environment variables:

- `DATABASE_HOST` - PostgreSQL host
- `DATABASE_PORT` - PostgreSQL port (default: 5432)
- `DATABASE_NAME` - Database name
- `DATABASE_USER` - Database username
- `DATABASE_PASSWORD` - Database password
- `JWT_SECRET` - Secret key for JWT signing
- `STRAPI_URL` - Strapi CMS URL
- `STRAPI_API_TOKEN` - Strapi API token for authentication

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the UNLICENSED license.
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
