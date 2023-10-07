import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { StatusesController } from './statuses.controller';
import { Status } from './statuses.model';
import { StatusesService } from './statuses.service';

@Module({
  controllers: [StatusesController],
  providers: [StatusesService],
  imports: [
    SequelizeModule.forFeature([Status])
  ]
})
export class StatusesModule {}
