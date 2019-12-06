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
  public id: string;

  @Column()
  public space: string;

  @Column()
  public component: string;

  @Column()
  public topic: string;

  // @Column("text", { array: true, nullable: true })
  // triggeredAt: string[];

  @OneToMany(
    () => TriggerLog,
    triggerLog => triggerLog.thing,
    {
      nullable: true
    }
  )
  public triggerLog: TriggerLog[];

  @ManyToOne(
    () => User,
    user => user.group
  )
  public user: User;

  @ManyToOne(
    () => Group,
    group => group.things
  )
  public group: Group;
}
