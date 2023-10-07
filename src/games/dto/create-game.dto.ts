import { ApiProperty } from "@nestjs/swagger";

export class CreateGameDto{
    @ApiProperty({example: 'Стрелялка', description: 'Название игры', required: true})
    name: string;
    
    @ApiProperty({example: 'Что-то про игру', description: 'Описание игры', required: false})
    description: string | null;
    
    @ApiProperty({example: 1, description: 'Id типа игры', required: true})
    id_type_game: number;
    
    @ApiProperty({example: 45, description: 'Продолжительность игры в минутах', required: true})
    hours: number;
    
    @ApiProperty({example: 6, description: 'Минимальный возраст для игры', required: true})
    age: number;
    
    @ApiProperty({example: 1, description: 'Минимальное количество игроков', required: true})
    count_per_min: number;
    
    @ApiProperty({example: 8, description: 'Максимальное количество игроков', required: true})
    count_per_max: number;
    
    @ApiProperty({example: 1000, description: 'Стоимость', required: true})
    cost: number;
    
    @ApiProperty({example: 'http://...', description: 'Ссылка на изображение', required: false})
    image: string | null;
}