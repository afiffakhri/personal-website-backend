import { Skill } from "../models";

export const getAllSkills = async () => {
	return await Skill.findAll();
}

export const getSkillById = async (id: number) => {
	return await Skill.findByPk(id);
}

export const createSkill = async (data: any) => {
	return await Skill.create(data);
}

export const updateSkill = async (id: number, data: any) => {
	const record = await Skill.findByPk(id);
	if (!record) throw new Error("Record not found");
	return await record.update(data);
};

export const deleteSkill = async (id: number) => {
	const record = await Skill.findByPk(id);
	if (!record) throw new Error("Record not found");
	await record.destroy();
};
