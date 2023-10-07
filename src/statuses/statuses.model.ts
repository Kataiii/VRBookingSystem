import { ApiProperty } from "@nestjs/swagger";
import { ForeignKey, Model } from "sequelize-typescript";
import { Column, DataType, Table } from "sequelize-typescript";

interface StatusAttr{
    name: string;
    ratio: number;
}

@Table({tableName: 'statuses'})
export class Status extends Model<Status, StatusAttr>{
    @ApiProperty({example: 1, description: 'Уникальный идентификатор', required: true})
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true})
    id: number;

    @ApiProperty({example: "Магистр", description: 'Название', required: true})
    @Column({type: DataType.STRING, unique: false, allowNull: false})
    name: string;

    @ApiProperty({example: 10, description: 'Коэффициент кешбека бонусами', required: true})
    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    ratio: number;
}