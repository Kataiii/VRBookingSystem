import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PhonesController } from './phones.controller';
import { Phone } from './phones.model';
import { PhonesService } from './phones.service';

@Module({
  controllers: [PhonesController],
  providers: [PhonesService],
  imports: [
    SequelizeModule.forFeature([Phone])
  ]
})
export class PhonesModule {}
