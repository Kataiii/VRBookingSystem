import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RulesController } from './rules.controller';
import { Rule } from './rules.model';
import { RulesService } from './rules.service';

@Module({
  controllers: [RulesController],
  providers: [RulesService],
  imports: [
    SequelizeModule.forFeature([Rule])
  ]
})
export class RulesModule {}
