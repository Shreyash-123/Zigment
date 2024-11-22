import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Notification } from './schemas/notification.schema';
import { SendNotificationDto } from './dtos/send-notification.dto';

@Injectable()
export class NotificationService {
  constructor(
    @InjectModel('Notification') private readonly notificationModel: Model<Notification>,
  ) {}

  async sendNotification(sendDto: SendNotificationDto): Promise<Notification> {
    const notification = new this.notificationModel({
      ...sendDto,
      status: 'sent',
      sentAt: new Date(),
    });
    return notification.save();
  }

  async getNotificationLogs(userId: string): Promise<Notification[]> {
    return this.notificationModel.find({ userId }).exec();
  }

  async getStats() {
    const total = await this.notificationModel.countDocuments().exec();
    const failed = await this.notificationModel.countDocuments({ status: 'failed' }).exec();
    return { total, failed };
  }
}
