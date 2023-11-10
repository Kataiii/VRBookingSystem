import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, ValidateIf, IsDate, Min  } from "class-validator";
import { PackageTypeGame } from "src/packages-types_game/packages-types_game.model";


export class CreatePackageDto{
    @ApiProperty({example: 'PackageTypeGame', description: 'Набор типов пакетов', required: true})
    types_game: PackageTypeGame[];

    @IsString({message: 'Должно быть строкой'})
    @ApiProperty({example: 'Базовый', description: 'Наименование пакета', required: true})
    name: string;

    @IsString({message: 'Должно быть строкой'})
    @ValidateIf((object, value) => value !== null)
    @ApiProperty({example: 'Базовый', description: 'Описание', required: false})
    description: string | null;

    @IsInt({message: 'Должно быть числом'})
    @Min(1, {message: 'Количество игроков не меньше 1'})
    @ApiProperty({example: 1, description: 'Минимальное количество игроков', required: true})
    count_per_min: number;

    @IsInt({message: 'Должно быть числом'})
    @Min(1, {message: 'Минимальное количество игроков'})
    @ApiProperty({example: 8, description: 'Максимальное количество игроков', required: true})
    count_per_max: number;

    @IsInt({message: 'Должно быть числом'})
    @Min(1, {message: 'Время в минутах не может быть отрицательным'})
    @ApiProperty({example: 45, description: 'Продолжительность игры в минутах', required: true})
    count_hours: number;

    @IsInt({message: 'Должно быть числом, целочисленным'})
    @Min(0, {message: 'Скидка не может быть отрицательной'})
    @ApiProperty({example: 15, description: 'Коэффициент скидки', required: true})
    discount_per: number;

    @IsDate({message: 'Должно быть датой'})
    @ValidateIf((object, value) => value !== null)
    @ApiProperty({example: '2020-05-16', description: 'Дата начала действия пакета', required: false})
    start_time: Date | null;

    @IsDate({message: 'Должно быть датой'})
    @ValidateIf((object, value) => value !== null)
    @ApiProperty({example: '2020-05-16', description: 'Дата окончания действия пакета', required: false})
    end_time: Date | null;

    @IsString({message: 'Должно быть строкой'})
    @ApiProperty({example: 'Общий', description: 'Тип пакета', required: true})
    type_package: string;
}