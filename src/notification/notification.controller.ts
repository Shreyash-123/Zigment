import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { SendNotificationDto } from './dtos/send-notification.dto';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post('send')
  sendNotification(@Body() sendDto: SendNotificationDto) {
    return this.notificationService.sendNotification(sendDto);
  }

  @Get(':userId/logs')
  getLogs(@Param('userId') userId: string) {
    return this.notificationService.getNotificationLogs(userId);
  }

  @Get('stats')
  getStats() {
    return this.notificationService.getStats();
  }
}
