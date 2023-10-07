import { ApiProperty } from "@nestjs/swagger";

export class CreatePackageTypeGameDto{
    @ApiProperty({example: 1, description: 'Id пакета', required: true})
    id_package: number;

    @ApiProperty({example: 1, description: 'Id типа игры', required: true})
    id_type_game: number;
}