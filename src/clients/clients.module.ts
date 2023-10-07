import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClientsController } from './clients.controller';
import { Client } from './clients.model';
import { ClientsService } from './clients.service';

@Module({
  controllers: [ClientsController],
  providers: [ClientsService],
  imports: [
    SequelizeModule.forFeature([Client])
  ]
})
export class ClientsModule {}
