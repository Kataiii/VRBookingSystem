import { Controller, Post, Get, Body, Param, UseGuards, Patch} from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Room } from './rooms.model';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';


@ApiTags('Rooms')
@Controller('rooms')
export class RoomsController {
    constructor(private roomsService: RoomsService){}

    @ApiOperation({summary: 'Create room'})
    @ApiResponse({ status: 200, type: Room})
    @Post()
    create(@Body() dto: CreateRoomDto){
        return this.roomsService.createRoom(dto);
    }

    @ApiOperation({summary: 'Get all rooms'})
    @ApiResponse({ status: 200, type: [Room]})
    @ApiResponse({ status: 404, description: 'Комнаты не найдены'})
    @Get()
    getAll(){
        return this.roomsService.getAll();
    }

    @ApiOperation({summary: 'Get room by id'})
    @ApiResponse({status: 200, type: Room})
    @ApiResponse({ status: 404, description: 'Комната не найдена'})
    @Get('/id/:id')
    getRoomById(@Param('id') id : number){
        return this.roomsService.getRoomById(id);
    }

    @ApiOperation({summary: 'Get room by name'})
    @ApiResponse({status: 200, type: Room})
    @ApiResponse({ status: 404, description: 'Комната не найдена'})
    @Get('/name/:name')
    getRoomByName(@Param('name') name: string){
        return this.roomsService.getRoomByName(name);
    }

    @ApiOperation({summary: 'Update room'})
    @ApiResponse({ status: 200, type: Room})
    @Patch()
    updateRoom(@Body() dto: UpdateRoomDto){
        return this.roomsService.update(dto);
    }
}
