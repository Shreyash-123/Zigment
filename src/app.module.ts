import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserPreferenceModule } from './user-preference/user-preference.module';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/notifications'), // Replace with your MongoDB connection string
    UserPreferenceModule,
    NotificationModule,
  ],
})
export class AppModule {}
