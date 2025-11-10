import sequelize from "../config/database";
import User from "./user.model";
import PersonalDetail from "./personalDetail.model";
import Education from "./education.model";
import Work from "./work.model";
import Project from "./project.model";
import Skill from "./skill.model";
import Language from "./language.model";

// Associations
User.hasOne(PersonalDetail, { foreignKey: "user_id" });
User.hasMany(Education, { foreignKey: "user_id" });
User.hasMany(Work, { foreignKey: "user_id" });
User.hasMany(Project, { foreignKey: "user_id" });
User.hasMany(Skill, { foreignKey: "user_id" });
User.hasMany(Language, { foreignKey: "user_id" });

PersonalDetail.belongsTo(User, { foreignKey: "user_id" });
Education.belongsTo(User, { foreignKey: "user_id" });
Work.belongsTo(User, { foreignKey: "user_id" });
Project.belongsTo(User, { foreignKey: "user_id" });
Skill.belongsTo(User, { foreignKey: "user_id" });
Language.belongsTo(User, { foreignKey: "user_id" });

export {
	User,
	PersonalDetail,
	Education,
	Work,
	Project,
	Skill,
	Language,
	sequelize,
};
