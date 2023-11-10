import { ApiProperty } from "@nestjs/swagger";
import { IsInt, Min } from "class-validator";

export class CreatePackageTypeGameDto{
    @IsInt({message: 'Должно быть числом'})
    @Min(1, {message: 'id не может быть меньше 1'})
    @ApiProperty({example: 1, description: 'Id пакета', required: true})
    id_package: number;

    @IsInt({message: 'Должно быть числом'})
    @Min(1, {message: 'id не может быть меньше 1'})
    @ApiProperty({example: 1, description: 'Id типа игры', required: true})
    id_type_game: number;
}