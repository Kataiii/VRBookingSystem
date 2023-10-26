import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, ForeignKey, Model } from "sequelize-typescript";
import { Column, DataType, Table } from "sequelize-typescript";
import { PromoGame } from "src/promos/additionaly_models/promos_games.model";
import { Promo } from "src/promos/promos.model";
import { TypeGame } from "src/types_game/types_game.model";

interface GamesAttr{
    name: string;
    description: string | null;
    id_type_game: number;
    hours: number;
    age: number;
    count_per_min: number;
    count_per_max: number;
    cost: number;
    image: string | null;
}

@Table({tableName: 'games'})
export class Game extends Model<Game, GamesAttr>{
    @ApiProperty({example: 1, description: 'Уникальный идентификатор', required: true})
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true})
    id: number;

    @ApiProperty({example: 'Стрелялка', description: 'Название игры', required: true})
    @Column({type: DataType.STRING, unique: false, allowNull: false})
    name: string;

    @ApiProperty({example: 'Что-то про игру', description: 'Описание игры', required: false})
    @Column({type: DataType.TEXT, unique: false, allowNull: true})
    description: string;

    @ForeignKey(() => TypeGame)
    @ApiProperty({example: 1, description: 'Id типа игры', required: true})
    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    id_type_game: number;

    @ApiProperty({example: 45, description: 'Продолжительность игры в минутах', required: true})
    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    hours: number;

    @ApiProperty({example: 6, description: 'Минимальный возраст для игры', required: true})
    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    age: number;

    @ApiProperty({example: 1, description: 'Минимальное количество игроков', required: true})
    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    count_per_min: number;

    @ApiProperty({example: 8, description: 'Максимальное количество игроков', required: true})
    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    count_per_max: number;

    @ApiProperty({example: 1000, description: 'Стоимость', required: true})
    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    cost: number;

    @ApiProperty({example: 'http://...', description: 'Ссылка на изображение', required: false})
    @Column({type: DataType.STRING, unique: false, allowNull: true})
    image: string;

    @BelongsToMany(() => Promo, () => PromoGame)
    promos: Promo[];
}