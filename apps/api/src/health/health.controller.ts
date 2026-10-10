import { Body, Controller, Get, Post } from '@nestjs/common';
import { HealthService } from './health.service';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {
    // @Get()
    // getHealth() {
    //   console.log('Health Controller');
    //   return this.healthService.getHealth();
    // }
  }
}
