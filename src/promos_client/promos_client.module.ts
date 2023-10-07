import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PromosClientController } from './promos_client.controller';
import { PromoClient } from './promos_client.model';
import { PromosClientService } from './promos_client.service';

@Module({
  controllers: [PromosClientController],
  providers: [PromosClientService],
  imports: [
    SequelizeModule.forFeature([PromoClient])
  ]
})
export class PromosClientModule {}
