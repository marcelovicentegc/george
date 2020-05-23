import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Group } from "./Group.model";
import { Profile } from "./Profile.model";

@Entity("user")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column()
  public username: string;

  @Column()
  public password: string;

  @OneToOne(() => Profile)
  @JoinColumn()
  public profile: Profile;

  @ManyToOne(() => Group, (group) => group.users)
  public group: Group;
}
