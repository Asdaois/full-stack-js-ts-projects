import { DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize } from "sequelize";

export class BaseUser extends Model<InferAttributes<BaseUser>,InferCreationAttributes<BaseUser>>{
  declare base_user_id: string;
  declare user_email: string;
  declare username: string;
  declare user_password: string;
  declare is_email_verified: boolean;
  declare is_admin_user: boolean;
  declare is_deleted: boolean;
}

export const defineBaseUser = (sequelize: Sequelize) => {
  return BaseUser.init(
    {
      base_user_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      user_email: {
        type: DataTypes.STRING(250),
        allowNull: false,
        unique: true,
      },
      is_email_verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      is_admin_user: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      username: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
      user_password: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
      },
    },
    {
      timestamps: true,
      underscored: true,
      tableName: 'base_user',
      sequelize: sequelize,
      indexes: [{ unique: true, fields: ['user_email'] }],
    }
  );
};
