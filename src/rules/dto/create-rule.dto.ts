import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength } from "class-validator";

export class CreateRuleDto{
    @IsString({message: 'Должна быть строка'})
    @MinLength(1, {message: 'Строка не может быть пустой'})
    @ApiProperty({example: 'Если у clients количество bookings больше 5, то назначить package 3', description: 'Правило назначения промокодов и пакетов', required: true})
    string_rule: string;
}