import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BigQueryService } from './big-query.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,BigQueryService],
})
export class AppModule {}
