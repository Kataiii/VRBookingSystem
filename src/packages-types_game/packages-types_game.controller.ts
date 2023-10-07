import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePackageTypeGameDto } from './dto/create-packge-type_game.dto';
import { PackageTypeGame } from './packages-types_game.model';
import { PackagesTypesGameService } from './packages-types_game.service';

@ApiTags('PackagesTypesGame')
@Controller('packages-types-game')
export class PackagesTypesGameController {
    constructor(private packagesTypesGameService: PackagesTypesGameService){}

    @ApiOperation({summary: 'Create package-type'})
    @ApiResponse({ status: 200, type: PackageTypeGame})
    @Post()
    create(@Body() dto: CreatePackageTypeGameDto){
        return this.packagesTypesGameService.createPackageTypeGame(dto);
    }

    @ApiOperation({summary: 'Get all packages-types'})
    @ApiResponse({ status: 200, type: [PackageTypeGame]})
    @ApiResponse({ status: 404, description: 'Связи не найдены'})
    @Get()
    getAll(){
        return this.packagesTypesGameService.getAll();
    }

    @ApiOperation({summary: 'Get package-type by id'})
    @ApiResponse({status: 200, type: PackageTypeGame})
    @ApiResponse({ status: 404, description: 'Связь не найдена'})
    @Get('/id/:id')
    getRoomById(@Param('id') id : number){
        return this.packagesTypesGameService.getPackageTypeGameById(id);
    }

    @ApiOperation({summary: 'Get packages-types by id package'})
    @ApiResponse({status: 200, type: PackageTypeGame})
    @ApiResponse({ status: 404, description: 'Связи не найдены'})
    @Get('/id_package/:id_package')
    getRoomByName(@Param('id_package') id_package: number){
        return this.packagesTypesGameService.getPackageTypesGameByPackageId(id_package);
    }
}
