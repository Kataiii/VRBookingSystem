import { ApiProperty } from "@nestjs/swagger";
import { ForeignKey, Model } from "sequelize-typescript";
import { Column, DataType, Table } from "sequelize-typescript";
import { Package } from "src/packages/packages.model";
import { TypeGame } from "src/types_game/types_game.model";

interface PackageTypeGameCreationAttr{
    id_package: number;
    id_type_game: number;
}

@Table({tableName: 'packages-types_game'})
export class PackageTypeGame extends Model<PackageTypeGame, PackageTypeGameCreationAttr>{
    @ApiProperty({example: 1, description: 'Уникальный идентификатор', required: true})
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true})
    id: number;

    @ApiProperty({example: 1, description: 'Id пакета', required: true})
    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    @ForeignKey(() => Package)
    id_package: number;

    @ApiProperty({example: 1, description: 'Id типа игры', required: true})
    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    @ForeignKey(() => TypeGame)
    id_type_game: number;
}