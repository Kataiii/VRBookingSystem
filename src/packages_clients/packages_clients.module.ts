import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PackagesClientsController } from './packages_clients.controller';
import { PackageClient } from './packages_clients.model';
import { PackagesClientsService } from './packages_clients.service';

@Module({
  controllers: [PackagesClientsController],
  providers: [PackagesClientsService],
  imports: [
    SequelizeModule.forFeature([PackageClient])
  ]
})
export class PackagesClientsModule {}
