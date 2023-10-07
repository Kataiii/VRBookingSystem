import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePackageDto } from './dto/create-package.dto';
import { Package } from './packages.model';
import { PackagesService } from './packages.service';

@ApiTags('Packages')
@Controller('packages')
export class PackagesController {
    constructor(private packagesService: PackagesService){}

    @ApiOperation({summary: 'Create package'})
    @ApiResponse({ status: 200, type: Package})
    @Post()
    create(@Body() dto: CreatePackageDto){
        return this.packagesService.createPackage(dto);
    }

    @ApiOperation({summary: 'Get all packages'})
    @ApiResponse({ status: 200, type: [Package]})
    @ApiResponse({ status: 404, description: 'Пакеты не найдены'})
    @Get()
    getAll(){
        return this.packagesService.getAll();
    }

    @ApiOperation({summary: 'Get package by id'})
    @ApiResponse({status: 200, type: Package})
    @ApiResponse({ status: 404, description: 'Пакет не найден'})
    @Get('/id/:id')
    getGameById(@Param('id') id : number){
        return this.packagesService.getPackageById(id);
    }

    @ApiOperation({summary: 'Get package by name'})
    @ApiResponse({status: 200, type: Package})
    @ApiResponse({ status: 404, description: 'Пакет не найден'})
    @Get('/name/:name')
    getGameByName(@Param('name') name: string){
        return this.packagesService.getPackageByName(name);
    }
}
