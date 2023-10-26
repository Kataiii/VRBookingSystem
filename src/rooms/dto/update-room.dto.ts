import { ApiProperty } from "@nestjs/swagger";

export class UpdateRoomDto{
    @ApiProperty({example: 1, description: 'Уникальный идентификатор', required: true})
    id: number;

    @ApiProperty({example: 'Комната 1', description: 'Название команты', required: true})
    readonly name: string;

    @ApiProperty({example: true, description: 'Занятость комнаты', required: false})
    isOccupied: boolean;
}