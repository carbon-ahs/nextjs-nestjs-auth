import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  // async newRegisterUser(createUserDto: CreateUserDto) {
  //   const user = await this.userService.findByEmail(createUserDto.email);
  //   if (user) throw new ConflictException('User already exists!');
  //   return this.userService.newCreateUser(createUserDto);
  // }

  async getHealth() {
    return { stat: true };
  }
}
