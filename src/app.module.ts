import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsController } from './cats/catscontroller';
import { AppService } from './app.service';
import { CatsService } from './cats/catsservice';

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
