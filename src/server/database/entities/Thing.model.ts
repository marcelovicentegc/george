import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import Group from "./Group.model";
import User from "./User.model";
import TriggerLog from "./TriggerLog.model";

@Entity("component")
export default class Thing extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  space: string;

  @Column()
  component: string;

  @Column()
  topic: string;

  // @Column("text", { array: true, nullable: true })
  // triggeredAt: string[];

  @OneToMany(() => TriggerLog, triggerLog => triggerLog.thing, {
    nullable: true
  })
  triggerLog: TriggerLog[];

  @ManyToOne(() => User, user => user.group)
  user: User;

  @ManyToOne(() => Group, group => group.things)
  group: Group;
}
