import { Global, Module } from "@nestjs/common";
import { CatsService } from "./catsservice";
import { CatsController } from "./catscontroller";
import { PrismaService } from "src/prisma.service";

@Global()
@Module({
    providers: [CatsService, PrismaService],
    controllers: [CatsController],
    exports: [CatsService],
})

export class CatsModule{}