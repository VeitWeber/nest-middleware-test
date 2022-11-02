import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('workouts')
export class WorkoutsController {
  @Get()
  findAll(@Req() request: Request): string {
    return 'allWorkouts';
  }
}
