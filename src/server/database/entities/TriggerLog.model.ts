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
  public id: string;

  @Column()
  public state: string;

  @Column()
  public date: string;

  @ManyToOne(
    () => Thing,
    thing => thing.triggerLog
  )
  public thing: Thing;

  @Column()
  public thingId: string;
}
