import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import Group from "./Group.model";
import User from "./User.model";

@Entity("component")
export default class Thing extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  topic: string;

  @ManyToOne(() => User, user => user.group)
  user: User;

  @ManyToOne(() => Group, group => group.things)
  group: Group;
}
