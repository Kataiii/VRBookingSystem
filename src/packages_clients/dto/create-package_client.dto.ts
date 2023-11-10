import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDate, IsInt, Min, ValidateIf } from "class-validator";

export class CreatePackageClientDto{
    @IsInt({message: 'Должно быть числом'})
    @Min(1, {message: 'id не может быть меньше 1'})
    @ApiProperty({example: 1, description: 'Id пакета', required: true})
    id_package: number;

    @IsInt({message: 'Должно быть числом'})
    @Min(1, {message: 'id не может быть меньше 1'})
    @ApiProperty({example: 1, description: 'Id клиента', required: true})
    id_client: number;

    @IsBoolean({message: 'Должно быть булевое значение'})
    @ApiProperty({example: true, description: 'Использованность', required: false})
    is_used: boolean;

    @IsDate({message: 'Должно быть датой'})
    @ApiProperty({example: '2020-05-16', description: 'Дата начала действия акции', required: false})
    start_time: Date;

    @IsDate({message: 'Должно быть датой'})
    @ValidateIf((object, value) => value !== null)
    @ApiProperty({example: '2020-05-16', description: 'Дата окончания действия акции', required: false})
    end_time: Date | null;
}