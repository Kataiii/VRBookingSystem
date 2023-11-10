import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, Min, IsBoolean, IsDate, ValidateIf } from "class-validator";


export class CreatePromoClientDto{
    @IsString({message: 'Должно быть строкой'})
    @ApiProperty({example: 'http:/111111111111111111', description: 'Ссылка на промо', required: true})
    link: string;

    @IsInt({message: 'Должно быть числом'})
    @Min(1, {message: 'id не может быть меньше 1'})
    @ApiProperty({example: 1, description: 'Id клиента', required: true})
    id_client: number;

    @IsBoolean({message: 'Должно быть булевое значение'})
    @ValidateIf((object, value) => value !== null)
    @ApiProperty({example: true, description: 'Использованность', required: false})
    is_used: boolean | null;

    @IsDate({message: 'Должно быть датой'})
    @ApiProperty({example: '2022-08-16', description: 'Начало', required: true})
    start_time: Date;

    @IsDate({message: 'Должно быть датой'})
    @ApiProperty({example: '2022-08-20', description: 'Конец', required: true})
    end_time: Date;
}