import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength } from "class-validator";

export class CreateRoleDto{
    @IsString({message: 'Должно быть строкой'})
    @MinLength(1, {message: 'Строка не может быть пустой'})
    @ApiProperty({example: 'user', description: 'Название роли', required: true})
    readonly name: string;
}