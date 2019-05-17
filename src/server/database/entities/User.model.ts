import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import Group from "./Group.model";

@Entity("user")
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @ManyToOne(() => Group, group => group.users)
  group: Group;
}
