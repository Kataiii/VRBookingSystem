import { ApiProperty } from "@nestjs/swagger";

export class CreatePhoneDto{
    @ApiProperty({example: 'ХХХХХХХХХХ', description: 'Телефон', required: true})
    phone: string;
}