import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Thing } from "./Thing.model";
import { User } from "./User.model";

@Entity("triggerLog")
export class TriggerLog extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public state: string;

  @Column()
  public date: string;

  @ManyToOne(() => Thing, (thing) => thing.triggerLog)
  public thing: Thing;

  @ManyToOne(() => User, (user) => user.activity)
  public user: User;

  @Column()
  public thingId: string;
}
