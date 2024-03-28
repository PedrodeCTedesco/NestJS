/* import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
} */

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Cat, Prisma } from '@prisma/client';

@Injectable()
export class CatsService {
 constructor(private prisma: PrismaService) {}

 async create(data: Prisma.CatCreateInput): Promise<Cat> {
    return this.prisma.cat.create({
      data,
    });
 }

 async findAll(): Promise<Cat[]> {
    return this.prisma.cat.findMany();
 }

 async findOne(id: number): Promise<Cat | null> {
    return this.prisma.cat.findUnique({
      where: { id },
    });
 }

 async update(id: number, data: Prisma.CatUpdateInput): Promise<Cat> {
    return this.prisma.cat.update({
      where: { id },
      data,
    });
 }

 async remove(id: number): Promise<Cat> {
    return this.prisma.cat.delete({
      where: { id },
    });
 }
}
