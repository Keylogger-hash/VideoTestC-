import { Controller, Get,Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UseInterceptors, UploadedFile } from '@nestjs/common'
import {FileInterceptor} from '@nestjs/platform-express';

import { ApiConsumes,ApiBody } from '@nestjs/swagger';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('resize')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'file',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return "Upload success"
  }
  
}
