import { ApiProperty } from "@nestjs/swagger";

export class RegisterDto{
    @ApiProperty({example: 'Иванов', description: 'Фамилия', required: false})
    surname?: string;

    @ApiProperty({example: 'Иван', description: 'Имя', required: true})
    firstname: string;

    @ApiProperty({example: 'Иванович', description: 'Отчество', required: false})
    patronomyc?: string;

    @ApiProperty({example: 'ХХХХХХХХХХ', description: 'Телефон', required: true})
    phone: string;

    @ApiProperty({example: '123456', description: 'Пароль', required: false})
    password?: string;

    @ApiProperty({example: '2022-08-16', description: 'Дата рождения', required: false})
    date_birthday?: Date;
}