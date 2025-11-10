import { Education } from "../models";

export const getAllEducations = async () => {
	return await Education.findAll();
}

export const getEducationById = async (id: number) => {
	return await Education.findByPk(id);
}

export const createEducation = async (data: any) => {
	return await Education.create(data);
}

export const updateEducation = async (id: number, data: any) => {
	const record = await Education.findByPk(id);
	if (!record) throw new Error("Record not found");
	return await record.update(data);
};

export const deleteEducation = async (id: number) => {
	const record = await Education.findByPk(id);
	if (!record) throw new Error("Record not found");
	await record.destroy();
};
