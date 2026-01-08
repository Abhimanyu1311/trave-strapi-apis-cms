import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import type {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import { User } from './user.model';

@Table({
  tableName: 'creators',
  timestamps: true,
})
export class Creator extends Model<
  InferAttributes<Creator>,
  InferCreationAttributes<Creator>
> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  declare id: CreationOptional<string>;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false,
    unique: true,
  })
  declare userId: string;

  @Column(DataType.TEXT)
  declare bio: CreationOptional<string>;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  declare stripeConnected: CreationOptional<boolean>;
}
