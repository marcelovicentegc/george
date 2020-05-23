import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("profile")
export class Profile extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column({ nullable: true })
  public avatarUrl: string;

  @Column({ nullable: true })
  public name: string;
}
