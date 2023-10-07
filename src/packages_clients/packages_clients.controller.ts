import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePackageClientDto } from './dto/create-package_client.dto';
import { PackageClient } from './packages_clients.model';
import { PackagesClientsService } from './packages_clients.service';

@ApiTags('Packages-Clients')
@Controller('packages-clients')
export class PackagesClientsController {
    constructor(private packagesClientsService: PackagesClientsService){}

    @ApiOperation({summary: 'Create package-client'})
    @ApiResponse({ status: 200, type: PackageClient})
    @Post()
    create(@Body() dto: CreatePackageClientDto){
        return this.packagesClientsService.createPackageClient(dto);
    }

    @ApiOperation({summary: 'Get all packages-clients'})
    @ApiResponse({ status: 200, type: [PackageClient]})
    @ApiResponse({ status: 404, description: 'Связи клиента и пакета не найдены'})
    @Get()
    getAll(){
        return this.packagesClientsService.getAll();
    }

    @ApiOperation({summary: 'Get package-client by id'})
    @ApiResponse({status: 200, type: PackageClient})
    @ApiResponse({ status: 404, description: 'Связь клиента и пакета не найдена'})
    @Get('/id/:id')
    getPackageClientById(@Param('id') id : number){
        return this.packagesClientsService.getPackageClientById(id);
    }

    @ApiOperation({summary: 'Get packages-clients by id client'})
    @ApiResponse({status: 200, type: [PackageClient]})
    @ApiResponse({ status: 404, description: 'Связи клиента и пакета не найдена'})
    @Get('/id_client/:id')
    getPackagesClientByClientId(@Param('id') id: number){
        return this.packagesClientsService.getPackageClientByClientId(id);
    }

    @ApiOperation({summary: 'Get packages-clients by id client'})
    @ApiResponse({status: 200, type: PackageClient})
    @ApiResponse({ status: 404, description: 'Связи клиента и пакета не найдена'})
    @Get('/id_package/:id')
    getPackagesClientByPackageId(@Param('id') id: number){
        return this.packagesClientsService.getPackageClientByPackageId(id);
    }
}
