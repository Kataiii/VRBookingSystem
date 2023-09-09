import { ApiProperty } from "@nestjs/swagger";
import { Model } from "sequelize-typescript";
import { Column, DataType, Table } from "sequelize-typescript";

interface RoomCreationAttr{
    id: number;
    name: string;
}

@Table({tableName: 'rooms'})
export class Room extends Model<Room, RoomCreationAttr>{
    @ApiProperty({example: 1, description: 'Уникальный идентификатор', required: true})
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Комната 1', description: 'Название комнаты', required: true})
    @Column({type: DataType.STRING, unique: false, allowNull: false})
    name: string;

    @ApiProperty({example: true, description: 'Занятость комнаты', required: false})
    @Column({type: DataType.BOOLEAN, unique: false, allowNull: false, defaultValue: false})
    isOccupied: boolean;
}