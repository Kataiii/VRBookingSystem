import { ApiProperty } from "@nestjs/swagger";

export class CreateClientDto{
    @ApiProperty({example: 'Иванов', description: 'Фамилия', required: false})
    surname: string | null;

    @ApiProperty({example: 'Иван', description: 'Имя', required: true})
    firstname: string;

    @ApiProperty({example: 'Иванович', description: 'Отчество', required: false})
    patronomyc: string | null;

    @ApiProperty({example: 1, description: 'Уникальный идентификатор телефона', required: true})
    id_phone: number;

    @ApiProperty({example: '123456', description: 'Пароль', required: false})
    password: string | null;

    @ApiProperty({example: '2022-08-16', description: 'Дата рождения', required: false})
    date_birthday: Date | null;

    @ApiProperty({example: 0, description: 'Кол-во бонусов на счете', required: false})
    number_of_bonuses: number | null;

    @ApiProperty({example: 1, description: 'Id статуса', required: false})
    status: number | null;
}