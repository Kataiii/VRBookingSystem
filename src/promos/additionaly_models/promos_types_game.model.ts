import { ForeignKey, Model } from "sequelize-typescript";
import { Column, DataType, Table } from "sequelize-typescript";
import { Game } from "src/games/games.model";
import { TypeGame } from "src/types_game/types_game.model";
import { Promo } from "../promos.model";


@Table({tableName: 'promos_types_game', createdAt: false, updatedAt: false})
export class PromoTypeGame extends Model<PromoTypeGame>{
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true})
    id: number;

    @ForeignKey(() => TypeGame)
    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    type_game_id: number;

    @ForeignKey(() => Promo)
    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    promo_id: number;
}