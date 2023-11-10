import { ApiProperty } from "@nestjs/swagger";
import { IsPhoneNumber, IsString } from "class-validator";

export class CreatePhoneDto{
    @IsString({message: 'id должно быть строкой'})
    @ApiProperty({example: 'ХХХХХХХХХХ', description: 'id телефона', required: true})
    id: string;

    @IsPhoneNumber('RU', {message: 'Неверный номер телефона'})
    @ApiProperty({example: 'ХХХХХХХХХХ', description: 'Телефон', required: true})
    phone: string;
}