import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Game } from 'src/games/games.model';
import { PromoGame } from './additionaly_models/promos_games.model';
import { PromoTypeGame } from './additionaly_models/promos_types_game.model';
import { PromosController } from './promos.controller';
import { Promo } from './promos.model';
import { PromosService } from './promos.service';

@Module({
  controllers: [PromosController],
  providers: [PromosService],
  imports: [
    SequelizeModule.forFeature([Promo, Game, PromoGame, PromoTypeGame])
  ]
})
export class PromosModule {}
