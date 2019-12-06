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
  public id: string;

  @Column()
  public username: string;

  @Column()
  public password: string;

  @ManyToOne(
    () => Group,
    group => group.users
  )
  public group: Group;
}
