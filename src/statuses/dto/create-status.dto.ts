import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, Min, MinLength } from "class-validator/types/decorator/decorators";

export class CreateStatusDto{
    @IsString({message: 'Должно быть строкой'})
    @MinLength(1, {message: 'Строка не может быть пустой'})
    @ApiProperty({example: "Магистр", description: 'Название', required: true})
    name: string;

    @IsNumber({}, {message: 'Должно быть числом'})
    @Min(0, {message: 'Не может быть отрицательным'})
    @ApiProperty({example: 10, description: 'Коэффициент кешбека бонусами', required: true})
    ratio: number;
}