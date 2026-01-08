import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './modules/auth/auth.module';

// Sequelize models
import { User } from './database/models/user.model';
import { Creator } from './database/models/creator.model';

@Module({
  imports: [
    // Load env variables globally
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // Database connection
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_NAME || 'ylore_dev',
      models: [User, Creator],
      autoLoadModels: true,
      synchronize: true, 
      logging: false,
    }),

    // Feature modules
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
