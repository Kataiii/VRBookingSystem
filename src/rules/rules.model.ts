import { ApiProperty } from "@nestjs/swagger";
import { Model } from "sequelize-typescript";
import { Column, DataType, Table } from "sequelize-typescript";

interface RulesAttr{
    string_rule: string;
}

@Table({tableName: 'rules'})
export class Rule extends Model<Rule, RulesAttr>{
    @ApiProperty({example: 1, description: 'Уникальный идентификатор', required: true})
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Если у clients количество bookings больше 5, то назначить package 3', description: 'Правило назначения промокодов и пакетов', required: true})
    @Column({type: DataType.TEXT, unique: false, allowNull: false})
    string_rule: string;
}