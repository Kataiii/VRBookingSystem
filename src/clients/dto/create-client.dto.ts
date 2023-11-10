import { ApiProperty } from "@nestjs/swagger";
import { IsString, ValidateIf } from "class-validator";
import { IsDate, IsPhoneNumber, Length } from "class-validator/types/decorator/decorators";

export class CreateClientDto{
    @IsString({message: 'Должно быть строкой'})
    @ValidateIf((object, value) => value !== null)
    @ApiProperty({example: 'Иванов', description: 'Фамилия', required: false})
    surname?: string;

    @IsString({message: 'Должно быть строкой'})
    @ApiProperty({example: 'Иван', description: 'Имя', required: true})
    firstname: string;

    @IsString({message: 'Должно быть строкой'})
    @ValidateIf((object, value) => value !== null)
    @ApiProperty({example: 'Иванович', description: 'Отчество', required: false})
    patronomyc?: string;

    @IsString({message: 'Должно быть строкой'})
    @ValidateIf((object, value) => value !== null)
    @ApiProperty({example: 1, description: 'Уникальный идентификатор телефона', required: true})
    id_phone: string;

    @IsString({message: 'Должно быть строкой'})
    @ValidateIf((object, value) => value !== null)
    @Length(6, 20, {message: 'Не меньше 6 и не больше 20'})
    @ApiProperty({example: '123456', description: 'Пароль', required: false})
    password?: string;

    @IsDate({message: 'Должно быть датой'})
    @ApiProperty({example: '2022-08-16', description: 'Дата рождения', required: false})
    date_birthday?: Date;

    @ValidateIf((object, value) => value !== null)
    @ApiProperty({example: 0, description: 'Кол-во бонусов на счете', required: false})
    number_of_bonuses?: number;

    @ValidateIf((object, value) => value !== null)
    @ApiProperty({example: 1, description: 'Id статуса', required: false})
    status?: number;
}