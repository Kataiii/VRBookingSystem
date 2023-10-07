import { ApiProperty } from "@nestjs/swagger";
import { Model } from "sequelize-typescript";
import { Column, DataType, Table } from "sequelize-typescript";

interface PhoneCreationAttr{
    phone: string;
}

@Table({tableName: 'phones'})
export class Phone extends Model<Phone, PhoneCreationAttr>{
    @ApiProperty({example: 1, description: 'Уникальный идентификатор', required: true})
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'ХХХХХХХХХХ', description: 'Телефон', required: true})
    @Column({type: DataType.STRING, unique: false, allowNull: false})
    phone: string;
}