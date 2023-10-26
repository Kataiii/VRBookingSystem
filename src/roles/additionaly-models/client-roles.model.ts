import { Model, Table, Column, DataType, ForeignKey } from "sequelize-typescript";
import { Client } from "src/clients/clients.model";
import { Role } from "src/roles/roles.model";


@Table({tableName: 'client_roles', createdAt: false, updatedAt: false})
export class ClientRoles extends Model<ClientRoles>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => Client)
    @Column({type: DataType.INTEGER, unique: false, allowNull: true})
    client_id: number;

    @ForeignKey(() => Role)
    @Column({type: DataType.INTEGER, unique: false, allowNull: true})
    role_id: number;
}