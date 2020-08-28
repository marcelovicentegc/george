import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Group } from "./Group.model";
import { User } from "./User.model";
import { TriggerLog } from "./TriggerLog.model";
import { Controller } from "../../gql";

@Entity("components")
export class Thing extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public space: string;

  @Column()
  public component: string;

  @Column("text")
  public controller: Controller;

  @Column()
  public topic: string;

  @OneToMany(() => TriggerLog, (triggerLog) => triggerLog.thing, {
    nullable: true,
  })
  public triggerLog: TriggerLog[];

  @ManyToOne(() => User, (user) => user.group)
  public user: User;

  @Column()
  public userId: string;

  @ManyToOne(() => Group, (group) => group.things)
  public group: Group;

  @Column()
  public groupId: string;
}
