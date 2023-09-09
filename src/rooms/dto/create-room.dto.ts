import { ApiProperty } from "@nestjs/swagger";

export class CreateRoomDto{
    @ApiProperty({example: 1, description: 'Уникальный идентификатор', required: true})
    readonly id: number;

    @ApiProperty({example: 'Комната 1', description: 'Название команты', required: true})
    readonly name: string;
}