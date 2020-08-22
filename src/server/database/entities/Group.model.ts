import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Thing } from "./Thing.model";
import { User } from "./User.model";

@Entity("groups")
export class Group extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public name: string;

  @OneToMany(() => User, (user) => user.group, { nullable: true })
  public users: User[];

  @OneToMany(() => Thing, (thing) => thing.user, {
    nullable: true,
    cascade: true,
  })
  public things: Thing[];
}
