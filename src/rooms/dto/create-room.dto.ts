import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength } from "class-validator";

export class CreateRoomDto{
    @IsString({message: 'Должно быть строкой'})
    @MinLength(1, {message: 'Строка не должна быть пустой'})
    @ApiProperty({example: 'Комната 1', description: 'Название команты', required: true})
    readonly name: string;
}