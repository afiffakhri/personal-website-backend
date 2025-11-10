import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Project extends Model {}

Project.init(
	{
		id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
		user_id: { type: DataTypes.INTEGER, allowNull: false },
		job_title: DataTypes.STRING,
		city: DataTypes.STRING,
		links: DataTypes.STRING,
		start_date: DataTypes.DATE,
		end_date: DataTypes.DATE,
		description: DataTypes.TEXT,
	},
	{
		sequelize,
		tableName: "projects",
		timestamps: true,
		createdAt: "created_at",
		updatedAt: "updated_at",
	}
);

export default Project;
