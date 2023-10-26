import { ApiProperty } from "@nestjs/swagger";
import { ForeignKey, Model } from "sequelize-typescript";
import { Column, DataType, Table } from "sequelize-typescript";
import { Client } from "src/clients/clients.model";
import { Package } from "src/packages/packages.model";

interface PackageClientCreationAttr{
    id_package: number;
    id_client: number;
    is_used: boolean;
    start_time: Date;
    end_time: Date | null;
}

@Table({tableName: 'packages-clients'})
export class PackageClient extends Model<PackageClient, PackageClientCreationAttr>{
    @ApiProperty({example: 1, description: 'Уникальный идентификатор', required: true})
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true})
    id: number;

    @ApiProperty({example: 1, description: 'Id пакета', required: true})
    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    @ForeignKey(() => Package)
    id_package: number;

    @ApiProperty({example: 1, description: 'Id клиента', required: true})
    @Column({type: DataType.INTEGER, unique: false, allowNull: false})
    @ForeignKey(() => Client)
    id_client: number;

    @ApiProperty({example: true, description: 'Использованность', required: false})
    @Column({type: DataType.BOOLEAN, unique: false, allowNull: false, defaultValue: false})
    is_used: boolean;

    @ApiProperty({example: '2020-05-16', description: 'Дата начала действия акции', required: false})
    @Column({type: DataType.DATE, unique: false, allowNull: true})
    start_time: Date;

    @ApiProperty({example: '2020-05-16', description: 'Дата окончания действия акции', required: false})
    @Column({type: DataType.DATE, unique: false, allowNull: true})
    end_time: Date | null;
}