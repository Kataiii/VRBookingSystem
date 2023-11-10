import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { IsInt, Min } from "class-validator/types/decorator/decorators";

export class CreateTypeGameDto{
    @IsString({message: 'Должно быть строкой'})
    @ApiProperty({example: 'VR арена', description: 'Название типа игры', required: true})
    name: string;

    @IsInt({message: 'Должно быть числом'})
    @Min(1, {message: 'Не может быть отрицательным'})
    @ApiProperty({example: 6, description: 'Минимальный возраст для игры', required: true})
    age: number;

    @IsInt({message: 'Должно быть числом'})
    @Min(1, {message: 'Не может быть отрицательным'})
    @ApiProperty({example: 1, description: 'Минимальное количество игроков', required: true})
    count_per_min: number;

    @IsInt({message: 'Должно быть числом'})
    @Min(1, {message: 'Не может быть отрицательным'})
    @ApiProperty({example: 8, description: 'Максимальное количество игроков', required: true})
    count_per_max: number;
}