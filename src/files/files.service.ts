import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as uuid from "uuid";

@Injectable()
export class FilesService {
    async createFile(file, expansionFile: string, nameFolder: string): Promise<string>{
        try{
            const fileName = uuid.v4() + expansionFile;
            const filePath = path.resolve(__dirname, '..', '..', 'static', nameFolder);
            console.log('file ', path.join(filePath, fileName))
            if(!fs.existsSync(filePath)){
                fs.mkdirSync(filePath, {recursive: true});
            }
            console.log('file buffer', file.buffer)
            fs.writeFileSync(path.join(filePath, fileName), file.buffer);
            return fileName;
        } catch(e){
            console.log(e);
            throw new HttpException('Произошла ошибка при записи файлов', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
