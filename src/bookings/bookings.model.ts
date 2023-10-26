import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, ForeignKey, HasOne, Model } from "sequelize-typescript";
import { Column, DataType, Table } from "sequelize-typescript";
import { Game } from "src/games/games.model";
import { Order } from "src/orders/orders.model";
import { Room } from "src/rooms/rooms.model";

interface BookingAttr{
    id_game: number;
    id_room: number;
    id_order: number;
    start_time: Date;
    end_time: Date;
}

@Table({tableName: 'bookings'})
export class Booking extends Model<Booking, BookingAttr>{
    @ApiProperty({example: 1, description: 'Уникальный идентификатор', required: true})
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true})
    id: number;

    @ForeignKey(() => Game)
    @ApiProperty({example: 1, description: 'Id игры', required: true})
    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    id_game: number;

    @ForeignKey(() => Room)
    @ApiProperty({example: 1, description: 'Id комнаты', required: true})
    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    id_room: number;

    @ApiProperty({example: true, description: 'Начало времени брони', required: false})
    @Column({type: DataType.DATE, unique: false, allowNull: false})
    start_time: Date;

    @ApiProperty({example: true, description: 'Окончание времени брони', required: false})
    @Column({type: DataType.DATE, unique: false, allowNull: false})
    end_time: Date;

    @ForeignKey(() => Order)
    @ApiProperty({example: 1, description: 'Id заказа', required: true})
    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    id_order: number;

    @BelongsTo(() => Order)
    order: Order;
}