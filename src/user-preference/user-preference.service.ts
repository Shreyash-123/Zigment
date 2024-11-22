import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserPreference } from './schemas/user-preference.schema';
import { CreateUserPreferenceDto } from './dtos/create-user-preference.dto';
import { UpdateUserPreferenceDto } from './dtos/update-user-preference.dto';

@Injectable()
export class UserPreferenceService {
  constructor(
    @InjectModel('UserPreference')
    private readonly userPreferenceModel: Model<UserPreference>,
  ) {}

  async create(createDto: CreateUserPreferenceDto): Promise<UserPreference> {
    const createdPreference = new this.userPreferenceModel(createDto);
    return createdPreference.save();
  }

  async findOne(userId: string): Promise<UserPreference> {
    return this.userPreferenceModel.findOne({ userId }).exec();
  }

  async update(
    userId: string,
    updateDto: UpdateUserPreferenceDto,
  ): Promise<UserPreference> {
    return this.userPreferenceModel
      .findOneAndUpdate({ userId }, updateDto, { new: true })
      .exec();
  }

  async delete(userId: string): Promise<any> {
    return this.userPreferenceModel.deleteOne({ userId }).exec();
  }
}
