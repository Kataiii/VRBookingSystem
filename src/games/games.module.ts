import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PromoGame } from 'src/promos/additionaly_models/promos_games.model';
import { Promo } from 'src/promos/promos.model';
import { GamesController } from './games.controller';
import { Game } from './games.model';
import { GamesService } from './games.service';

@Module({
  controllers: [GamesController],
  providers: [GamesService],
  imports: [
    SequelizeModule.forFeature([Game, Promo, PromoGame])
  ]
})
export class GamesModule {}
