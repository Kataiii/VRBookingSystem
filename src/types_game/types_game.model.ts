import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Model } from "sequelize-typescript";
import { Column, DataType, Table } from "sequelize-typescript";
import { PromoTypeGame } from "src/promos/additionaly_models/promos_types_game.model";
import { Promo } from "src/promos/promos.model";

interface TypesGameCreationAttr{
    name: string;
    age: number;
    count_per_min: number;
    count_per_max: number;
}

@Table({tableName: 'types_game'})
export class TypeGame extends Model<TypeGame, TypesGameCreationAttr>{
    @ApiProperty({example: 1, description: 'Уникальный идентификатор', required: true})
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'VR арена', description: 'Название типа игры', required: true})
    @Column({type: DataType.STRING, unique: false, allowNull: false})
    name: string;

    @ApiProperty({example: 6, description: 'Минимальный возраст для игры', required: true})
    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    age: number;

    @ApiProperty({example: 1, description: 'Минимальное количество игроков', required: true})
    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    count_per_min: number;

    @ApiProperty({example: 8, description: 'Максимальное количество игроков', required: true})
    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    count_per_max: number;

    @BelongsToMany(() => Promo, () => PromoTypeGame)
    promos: Promo[];
}