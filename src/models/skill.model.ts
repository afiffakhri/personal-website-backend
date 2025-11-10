import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Skill extends Model {}

Skill.init(
	{
		id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
		user_id: { type: DataTypes.INTEGER, allowNull: false },
		skill: DataTypes.STRING,
		level: DataTypes.INTEGER,
	},
	{
		sequelize,
		tableName: "skills",
		timestamps: true,
		createdAt: "created_at",
		updatedAt: "updated_at",
	}
);

export default Skill;
