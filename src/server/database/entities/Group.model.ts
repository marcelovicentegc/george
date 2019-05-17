import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import Thing from "./Thing.model";
import User from "./User.model";

@Entity("group")
export default class Group extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @OneToMany(() => User, user => user.group, { nullable: true })
  users: User[];

  @OneToMany(() => Thing, thing => thing.user, { nullable: true })
  things: Thing[];
}
