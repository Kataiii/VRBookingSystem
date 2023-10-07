import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PromoTypeGame } from 'src/promos/additionaly_models/promos_types_game.model';
import { TypesGameController } from './types_game.controller';
import { TypeGame } from './types_game.model';
import { TypesGameService } from './types_game.service';

@Module({
  controllers: [TypesGameController],
  providers: [TypesGameService],
  imports: [
    SequelizeModule.forFeature([TypeGame, PromoTypeGame])
  ]
})
export class TypesGameModule {}
