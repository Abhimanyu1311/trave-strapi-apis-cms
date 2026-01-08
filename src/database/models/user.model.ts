import {
  Table,
  Column,
  Model,
  DataType,
} from 'sequelize-typescript';

import type {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
  SUPER_ADMIN = 'super_admin',
}

@Table({
  tableName: 'users',
  timestamps: true,
})
export class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  declare id: CreationOptional<string>;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare passwordHash: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare name: string;

  @Column({
    type: DataType.ENUM(...Object.values(UserRole)),
    defaultValue: UserRole.USER,
  })
  declare role: CreationOptional<UserRole>;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  declare isActive: CreationOptional<boolean>;
}
