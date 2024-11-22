import { IsString, IsEnum } from 'class-validator';

export class SendNotificationDto {
  @IsString() userId: string;

  @IsEnum(['marketing', 'newsletter', 'updates'])
  type: string;

  @IsEnum(['email', 'sms', 'push'])
  channel: string;

  @IsString() subject: string;
  @IsString() body: string;
}
