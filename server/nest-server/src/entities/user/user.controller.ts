import { Controller, Delete, Get, Post, Put, Req, Res, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { Response, Request } from "express";
import { UserService } from "./user.service";

// import { UseService } from './user.service'

@Controller('users')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }

    @Get('/')
    async getAllUsers(
        @Req() req: Request,
        @Res() res: Response
    ) {
        console.log(req.body);
        return res.send({ status: "ok", res: res})

    }

    @Get('/:id')
    async getUser(
        @Req() req: Request,
        @Res() res: Response
    ) {

    }

    @Post('/')
    //@UseInterceptors(FileInterceptor(''))
    async createUser(
        @Req() req: Request,
        @Res() res: Response
    ) {
        await this.userService.createUser(req.body)
        console.log(req.body);
        return res.send({ status: "ok"})
    }

    @Put('/:id')
    async updateUser(
        @Req() req: Request,
        @Res() res: Response
    ) {

    }

    @Delete('/:id')
    async deleteUser(
        @Req() req: Request,
        @Res() res: Response
    ) {

    }
}