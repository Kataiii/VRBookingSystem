import { ApiProperty } from "@nestjs/swagger";
import { ForeignKey, HasMany, Model } from "sequelize-typescript";
import { Column, DataType, Table } from "sequelize-typescript";
import { PackageTypeGame } from "src/packages-types_game/packages-types_game.model";

interface PackageAttr{
    types_game: PackageTypeGame[];
    name: string;
    description: string | null;
    count_per_min: number;
    count_per_max: number;
    count_hours: number;
    discount_per: number;
    start_time: Date | null;
    end_time: Date | null;
    type_package: string;
}

@Table({tableName: 'packages'})
export class Package extends Model<Package, PackageAttr>{
    @ApiProperty({example: 1, description: 'Уникальный идентификатор', required: true})
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true})
    id: number;

    @HasMany(() => PackageTypeGame)
    types_game: PackageTypeGame[];

    @ApiProperty({example: 'Базовый', description: 'Наименование пакета', required: true})
    @Column({type: DataType.STRING, unique: false, allowNull: false})
    name: string;

    @ApiProperty({example: 'Базовый', description: 'Описание', required: false})
    @Column({type: DataType.STRING, unique: false, allowNull: true})
    description: string | null;

    @ApiProperty({example: 1, description: 'Минимальное количество игроков', required: true})
    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    count_per_min: number;

    @ApiProperty({example: 8, description: 'Максимальное количество игроков', required: true})
    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    count_per_max: number;

    @ApiProperty({example: 45, description: 'Продолжительность игры в минутах', required: true})
    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    count_hours: number;

    @ApiProperty({example: 15, description: 'Коэффициент скидки', required: true})
    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    discount_per: number;

    @ApiProperty({example: '2020-05-16', description: 'Дата начала действия пакета', required: false})
    @Column({type: DataType.DATE, unique: false, allowNull: true})
    start_time: Date | null;

    @ApiProperty({example: '2020-05-16', description: 'Дата окончания действия пакета', required: false})
    @Column({type: DataType.DATE, unique: false, allowNull: true})
    end_time: Date | null;

    @ApiProperty({example: 'Общий', description: 'Тип пакета', required: true})
    @Column({type: DataType.STRING, unique: false, allowNull: false, defaultValue: 'Общий'})
    type_package: string;
}