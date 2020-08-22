import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { Group } from "./Group.model";
import { Profile } from "./Profile.model";
import { TriggerLog } from "./TriggerLog.model";
import { Permission } from "../../gql";

@Entity("users")
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

  @OneToMany(() => TriggerLog, (triggerLog) => triggerLog.thing, {
    nullable: true,
  })
  public activity: TriggerLog[];

  @Column()
  public permission: Permission;
}
