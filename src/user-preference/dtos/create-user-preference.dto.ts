import { IsString, IsEmail, IsBoolean, IsEnum } from 'class-validator';

export class CreateUserPreferenceDto {
  @IsString() userId: string;
  @IsEmail() email: string;

  @IsBoolean() marketing: boolean;
  @IsBoolean() newsletter: boolean;
  @IsBoolean() updates: boolean;

  @IsEnum(['daily', 'weekly', 'monthly', 'never'])
  frequency: string;

  @IsBoolean() emailChannel: boolean;
  @IsBoolean() smsChannel: boolean;
  @IsBoolean() pushChannel: boolean;

  @IsString() timezone: string;
}
