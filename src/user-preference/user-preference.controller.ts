import { Controller, Post, Get, Patch, Delete, Param, Body } from '@nestjs/common';
import { UserPreferenceService } from './user-preference.service';
import { CreateUserPreferenceDto } from './dtos/create-user-preference.dto';

@Controller('preferences')
export class UserPreferenceController {
  constructor(private readonly userPreferenceService: UserPreferenceService) {}

  @Post()
  create(@Body() createDto: CreateUserPreferenceDto) {
    return this.userPreferenceService.create(createDto);
  }

  @Get(':userId')
  findOne(@Param('userId') userId: string) {
    return this.userPreferenceService.findOne(userId);
  }
}
