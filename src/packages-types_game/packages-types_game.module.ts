import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PackagesTypesGameController } from './packages-types_game.controller';
import { PackageTypeGame } from './packages-types_game.model';
import { PackagesTypesGameService } from './packages-types_game.service';

@Module({
  controllers: [PackagesTypesGameController],
  providers: [PackagesTypesGameService],
  imports: [
    SequelizeModule.forFeature([PackageTypeGame])
  ]
})
export class PackagesTypesGameModule {}
