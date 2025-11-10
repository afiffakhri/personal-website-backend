import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class Language extends Model {}

Language.init(
	{
		id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
		user_id: { type: DataTypes.INTEGER, allowNull: false },
		languages: DataTypes.STRING,
	},
	{
		sequelize,
		tableName: "languages",
		timestamps: true,
		createdAt: "created_at",
		updatedAt: "updated_at",
	}
);

export default Language;
