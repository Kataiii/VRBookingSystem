import { ApiProperty } from "@nestjs/swagger";

export class AuthDto{
    @ApiProperty({example: 'ХХХХХХХХХХ', description: 'Телефон', required: true})
    phone: string;

    @ApiProperty({example: '123456', description: 'Пароль', required: false})
    password?: string;
}