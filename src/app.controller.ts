import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/:id')
  getrouteparameter(@Param('id') id: string) {
    return id;
  }

  @Post()
  postrouteparameter(@Param('none') none: string) {
    console.log(none);
    console.log('hello world');
    return none;
  }

  @Get('/test')
  getTest(): Number  {
    return Number;
  }
}
