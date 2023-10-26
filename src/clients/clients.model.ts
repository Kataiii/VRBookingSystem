import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, ForeignKey, Model } from "sequelize-typescript";
import { Column, DataType, Table } from "sequelize-typescript";
import { Phone } from "src/phones/phones.model";
import { ClientRoles } from "src/roles/additionaly-models/client-roles.model";
import { Role } from "src/roles/roles.model";
import { Status } from "src/statuses/statuses.model";
import { TypeGame } from "src/types_game/types_game.model";

interface ClientAttr{
    surname: string | null;
    firstname: string;
    patronomyc: string | null;
    id_phone: string;
    password: string | null;
    date_birthday: Date | null;
    number_of_bonuses: number | null;
    status: number | null;
}

@Table({tableName: 'clients'})
export class Client extends Model<Client, ClientAttr>{
    @ApiProperty({example: 1, description: 'Уникальный идентификатор', required: true})
    @Column({type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true})
    id: number;

    @ApiProperty({example: 'Иванов', description: 'Фамилия', required: false})
    @Column({type: DataType.STRING, unique: false, allowNull: true})
    surname: string | null;

    @ApiProperty({example: 'Иван', description: 'Имя', required: true})
    @Column({type: DataType.STRING, unique: false, allowNull: false})
    firstname: string;

    @ApiProperty({example: 'Иванович', description: 'Отчество', required: false})
    @Column({type: DataType.STRING, unique: false, allowNull: true})
    patronomyc: string | null;

    @ApiProperty({example: 1, description: 'Уникальный идентификатор телефона', required: true})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    @ForeignKey(() => Phone)
    id_phone: string;

    @ApiProperty({example: '123456', description: 'Пароль', required: false})
    @Column({type: DataType.STRING, unique: false, allowNull: true})
    password: string | null;

    @ApiProperty({example: '2022-08-16', description: 'Дата рождения', required: false})
    @Column({type: DataType.DATEONLY, unique: false, allowNull: true})
    date_birthday: Date | null;

    @ApiProperty({example: 0, description: 'Кол-во бонусов на счете', required: false})
    @Column({type: DataType.INTEGER, unique: false, allowNull: false, defaultValue: 0})
    number_of_bonuses: number;

    @ApiProperty({example: 1, description: 'Id статуса', required: false})
    @Column({type: DataType.INTEGER, unique: false, allowNull: false, defaultValue: 1})
    @ForeignKey(() => Status)
    id_status: number;

    @BelongsToMany(() => Role, () => ClientRoles)
    roles: Role[];
}