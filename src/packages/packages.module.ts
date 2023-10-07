import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PackagesController } from './packages.controller';
import { Package } from './packages.model';
import { PackagesService } from './packages.service';

@Module({
  controllers: [PackagesController],
  providers: [PackagesService],
  imports: [
      SequelizeModule.forFeature([Package])
  ]
})
export class PackagesModule {}
