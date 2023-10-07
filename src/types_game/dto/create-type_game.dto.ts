import { ApiProperty } from "@nestjs/swagger";

export class CreateTypeGameDto{
    @ApiProperty({example: 'VR арена', description: 'Название типа игры', required: true})
    name: string;

    @ApiProperty({example: 6, description: 'Минимальный возраст для игры', required: true})
    age: number;

    @ApiProperty({example: 1, description: 'Минимальное количество игроков', required: true})
    count_per_min: number;

    @ApiProperty({example: 8, description: 'Максимальное количество игроков', required: true})
    count_per_max: number;
}