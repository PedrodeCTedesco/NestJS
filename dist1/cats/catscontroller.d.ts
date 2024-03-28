import CreateCatDto from './createcat-dto';
import { UpdateCatDto } from './updatecat-dto';
import { CatsService } from './catsservice';
import { Cat } from './interfaces/cat.interface';
export declare class CatsController {
    private catsService;
    constructor(catsService: CatsService);
    create(createCatDto: CreateCatDto): Promise<void>;
    findAll(): Promise<Cat[]>;
    findOne(id: string): string;
    update(id: string, updateCatDto: UpdateCatDto): string;
    remove(id: string): string;
}
