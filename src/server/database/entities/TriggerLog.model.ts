import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import Thing from "./Thing.model";

@Entity("triggerLog")
export default class TriggerLog extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  date: string;

  @ManyToOne(() => Thing, thing => thing.triggerLog)
  thing: Thing;
}
