import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, ValidateIf, IsNumber, Min } from "class-validator";


export class CreateGameDto{
    @IsString({message: 'Должно быть строкой'})
    @ApiProperty({example: 'Стрелялка', description: 'Название игры', required: true})
    name: string;
    
    @IsString({message: 'Должно быть строкой'})
    @ValidateIf((object, value) => value !== null)
    @ApiProperty({example: 'Что-то про игру', description: 'Описание игры', required: false})
    description: string | null;
    
    @IsInt({message:'Должно быть числом'})
    @Min(1, {message: 'Минимальное начение id 1'})
    @ApiProperty({example: 1, description: 'Id типа игры', required: true})
    id_type_game: number;
   
    @IsInt({message:'Должно быть числом'})
    @Min(1, {message: 'Минимальное начение id 1'})
    @ApiProperty({example: 45, description: 'Продолжительность игры в минутах', required: true})
    hours: number;
    
    @IsInt({message:'Должно быть числом'})
    @Min(1, {message: 'Минимальное начение id 1'})
    @ApiProperty({example: 6, description: 'Минимальный возраст для игры', required: true})
    age: number;
    
    @IsInt({message:'Должно быть числом'})
    @Min(1, {message: 'Минимальное начение id 1'})
    @ApiProperty({example: 1, description: 'Минимальное количество игроков', required: true})
    count_per_min: number;
    
    @IsInt({message:'Должно быть числом'})
    @Min(1, {message: 'Минимальное начение id 1'})
    @ApiProperty({example: 8, description: 'Максимальное количество игроков', required: true})
    count_per_max: number;
    
    @IsNumber({}, {message: 'Должно быть чилом'})
    @Min(0, {message: 'Стоимость не может быть меньше 0'})
    @ApiProperty({example: 1000, description: 'Стоимость', required: true})
    cost: number;
    
    @ApiProperty({example: 'http://...', description: 'Ссылка на изображение', required: false})
    image: string | null;
}