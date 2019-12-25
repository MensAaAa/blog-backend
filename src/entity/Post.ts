import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Length, MaxLength } from 'class-validator';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Length(4, 20)
  title: string;

  @Column()
  @Length(4, 5000)
  @MaxLength(5000)
  content: string;

  @Column()
  @Length(4, 20)
  path: string;

  @Column({ default: true })
  views: number;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}