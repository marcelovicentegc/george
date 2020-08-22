import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("profiles")
export class Profile extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column({ nullable: true })
  public avatarUrl: string;

  @Column({ nullable: true })
  public name: string;
}
