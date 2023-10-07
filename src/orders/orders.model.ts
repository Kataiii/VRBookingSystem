import { ApiProperty } from "@nestjs/swagger";
import { ForeignKey, HasMany, Model } from "sequelize-typescript";
import { Column, DataType, Table } from "sequelize-typescript";
import { Booking } from "src/bookings/bookings.model";
import { Client } from "src/clients/clients.model";
import { Package } from "src/packages/packages.model";
import { TypeGame } from "src/types_game/types_game.model";

interface OrderAttr{
    id_client: number;
    bookings: Booking[];
    id_package: number | null;
    cost: number;
    is_used_bonuses: boolean | null;
    used_bonuses: number | null;
}

@Table({tableName: 'orders'})
export class Order extends Model<Order, OrderAttr>{
    @ApiProperty({example: 1, description: 'Уникальный идентификатор', required: true})
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Client)
    @ApiProperty({example: 1, description: 'Id клиента', required: true})
    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    id_client: number;

    @HasMany(() => Booking)
    bookings: Booking[];

    @ForeignKey(() => Package)
    @ApiProperty({example: 1, description: 'Id пакета', required: false})
    @Column({type: DataType.INTEGER, unique: false, allowNull: true})
    id_package: number | null;

    @ApiProperty({example: 10000, description: 'Стоимость заказа', required: true})
    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    cost: number;

    @ApiProperty({example: false, description: 'Использование бонусов при оплате', required: false})
    @Column({type: DataType.BOOLEAN, unique: false, allowNull: false, defaultValue: false})
    is_used_bonuses: boolean;

    @ApiProperty({example: 10000, description: 'Кол-во бонусов, использованных при оплате', required: false})
    @Column({type: DataType.INTEGER, unique: false, allowNull: true})
    used_bonuses: number | null;
}