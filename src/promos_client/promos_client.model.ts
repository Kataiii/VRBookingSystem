import { ApiProperty } from "@nestjs/swagger";
import { ForeignKey, Model } from "sequelize-typescript";
import { Column, DataType, Table } from "sequelize-typescript";
import { Client } from "src/clients/clients.model";

interface PromoClientCreationAttr{
    link: string;
    id_client: number;
    is_used: boolean | null;
    start_time: Date;
    end_time: Date;
}

@Table({tableName: 'promo_client'})
export class PromoClient extends Model<PromoClient, PromoClientCreationAttr>{
    @ApiProperty({example: 1, description: 'Уникальный идентификатор', required: true})
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'http:/111111111111111111', description: 'Ссылка на промо', required: true})
    @Column({type: DataType.STRING, unique: false, allowNull: false})
    link: string;

    @ApiProperty({example: 1, description: 'Id клиента', required: true})
    @Column({type: DataType.INTEGER, unique: true, allowNull: false})
    @ForeignKey(() => Client)
    id_client: number;

    @ApiProperty({example: true, description: 'Использованность', required: false})
    @Column({type: DataType.BOOLEAN, unique: false, allowNull: false, defaultValue: false})
    is_used: boolean | null;

    @ApiProperty({example: '2022-08-16', description: 'Начало', required: true})
    @Column({type: DataType.DATE, unique: false, allowNull: false})
    start_time: Date;

    @ApiProperty({example: '2022-08-20', description: 'Конец', required: true})
    @Column({type: DataType.DATE, unique: false, allowNull: false})
    end_time: Date;
}