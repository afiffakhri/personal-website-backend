import { PersonalDetail } from "../models";

export const getAllPersonalDetails = async () => {
	return await PersonalDetail.findAll();
};

export const getPersonalDetailById = async (id: number) => {
	return await PersonalDetail.findByPk(id);
};

export const createPersonalDetail = async (data: any) => {
	return await PersonalDetail.create(data);
};

export const updatePersonalDetail = async (id: number, data: any) => {
	const record = await PersonalDetail.findByPk(id);
	if (!record) throw new Error("Personal detail not found");
	return await record.update(data);
};

export const deletePersonalDetail = async (id: number) => {
	const record = await PersonalDetail.findByPk(id);
	if (!record) throw new Error("Personal detail not found");
	await record.destroy();
};
