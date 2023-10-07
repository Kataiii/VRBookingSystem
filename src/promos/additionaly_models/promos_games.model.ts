import { ForeignKey, Model } from "sequelize-typescript";
import { Column, DataType, Table } from "sequelize-typescript";
import { Game } from "src/games/games.model";
import { Promo } from "../promos.model";


@Table({tableName: 'promos_games', createdAt: false, updatedAt: false})
export class PromoGame extends Model<PromoGame>{
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Game)
    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    game_id: number;

    @ForeignKey(() => Promo)
    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    promo_id: number;
}