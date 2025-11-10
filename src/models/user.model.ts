import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class User extends Model {
	public id!: number;
	public name!: string;
	public email!: string;
	public password!: string;
	public role!: string;
	public status!: number;
}

User.init(
	{
		id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
		name: { type: DataTypes.STRING, allowNull: false },
		email: { type: DataTypes.STRING, allowNull: false, unique: true },
		password: { type: DataTypes.STRING, allowNull: false },
		role: { type: DataTypes.INTEGER, defaultValue: 2 },
		status: { type: DataTypes.INTEGER, defaultValue: 1 },
	},
	{
		sequelize,
		tableName: "users",
		timestamps: true,
		createdAt: "created_at",
		updatedAt: "updated_at",
	}
);

export default User;
