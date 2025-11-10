import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class PersonalDetail extends Model {}

PersonalDetail.init(
	{
		id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
		user_id: { type: DataTypes.INTEGER, allowNull: false },
		name: DataTypes.STRING,
		email: DataTypes.STRING,
		phone: DataTypes.STRING,
		role: DataTypes.STRING,
		about: DataTypes.TEXT,
		address: DataTypes.TEXT,
		zip_code: DataTypes.STRING,
		city: DataTypes.STRING,
		country: DataTypes.STRING,
		dob: DataTypes.DATE,
		nationality: DataTypes.STRING,
		cv_path: DataTypes.STRING,
	},
	{
		sequelize,
		tableName: "personal_detail",
		timestamps: true,
		createdAt: "created_at",
		updatedAt: "updated_at",
	}
);

export default PersonalDetail;
