import { Injectable } from "@nestjs/common";
import { Cat } from "./interfaces/cat.interface";
import { ContextLogger } from "nestjs-context-logger";

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];
  private readonly logger = new ContextLogger(CatsService.name);

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    this.logger.log("Returning all cats");
    return this.cats;
  }
}
