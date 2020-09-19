import { EntityRepository, Repository } from "typeorm";
import { Thing } from "../entities/Thing.model";

@EntityRepository(Thing)
export class ThingRepository extends Repository<Thing> {}
