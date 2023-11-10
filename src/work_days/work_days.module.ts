import { Module } from '@nestjs/common';
import { WorkDaysService } from './work_days.service';
import { WorkDaysController } from './work_days.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { WorkDay } from './work_days.model';

@Module({
  providers: [WorkDaysService],
  controllers: [WorkDaysController],
  imports: [
    SequelizeModule.forFeature([WorkDay])
  ]
})
export class WorkDaysModule {}
