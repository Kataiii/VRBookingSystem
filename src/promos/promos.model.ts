import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Model } from "sequelize-typescript";
import { Column, DataType, Table } from "sequelize-typescript";
import { Game } from "src/games/games.model";
import { TypeGame } from "src/types_game/types_game.model";
import { PromoGame } from "./additionaly_models/promos_games.model";
import { PromoTypeGame } from "./additionaly_models/promos_types_game.model";

interface PromoCreationAttr{
    name: string;
}

@Table({tableName: 'promos'})
export class Promo extends Model<Promo, PromoCreationAttr>{
    @ApiProperty({example: 1, description: 'Уникальный идентификатор', required: true})
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true})
    id: number;

    @ApiProperty({example: 'Промо 1', description: 'Название промо', required: true})
    @Column({type: DataType.STRING, unique: false, allowNull: false})
    name: string;

    @ApiProperty({example: 'Бонусы или скидка', description: 'Тип промо', required: false})
    @Column({type: DataType.STRING, unique: false, allowNull: false})
    type: string;

    @ApiProperty({example: 'Процент или фиксированная', description: 'Если скидка указана в предыдущем, то какой тип, иначе NULL', required: false})
    @Column({type: DataType.STRING, unique: false, allowNull: true})
    sale_type: string | null;

    @ApiProperty({example: 1000, description: 'Числовое значение скидки или количества бонусов', required: true})
    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    count: number;

    @ApiProperty({example: '2022-10-05', description: 'Дата окончания действия', required: false})
    @Column({type: DataType.DATE, unique: false, allowNull: true})
    expired_date: Date | null;

    @BelongsToMany(() => Game, () => PromoGame)
    games: Game[];

    @BelongsToMany(() => TypeGame, () => PromoTypeGame)
    types_game: TypeGame[];

    @ApiProperty({example: 1000, description: 'Количество использований'})
    @Column({type: DataType.INTEGER, unique: false, allowNull: true})
    count_of_uses: number | null;
}