import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Education extends Model {}

Education.init(
	{
		id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
		user_id: { type: DataTypes.INTEGER, allowNull: false },
		school_name: DataTypes.STRING,
		degree: DataTypes.STRING,
		start_date: DataTypes.DATE,
		end_date: DataTypes.DATE,
		description: DataTypes.TEXT,
	},
	{
		sequelize,
		tableName: "educations",
		timestamps: true,
		createdAt: "created_at",
		updatedAt: "updated_at",
	}
);

export default Education;
