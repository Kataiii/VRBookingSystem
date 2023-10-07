import { ApiProperty } from "@nestjs/swagger";

export class CreateRoomDto{
    @ApiProperty({example: 'Комната 1', description: 'Название команты', required: true})
    readonly name: string;
}