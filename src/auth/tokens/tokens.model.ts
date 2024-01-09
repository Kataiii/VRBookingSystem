import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Client } from "src/clients/clients.model";

interface TokenCreateAttrs{
    refresh_token: string;
    client_id: number;
    ip: string;
}

@Table({tableName: 'refresh_tokens'})
export class Token extends Model<Token, TokenCreateAttrs>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.TEXT, unique: false})
    refresh_token: string;

    @ForeignKey(() => Client)
    @Column({type: DataType.INTEGER, unique: false})
    client_id: number;

    @Column({type: DataType.STRING, unique: false, allowNull: true})
    ip: string;
}