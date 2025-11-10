import { Work } from "../models";

export const getAllWorks = async () => {
	return await Work.findAll();
}

export const getWorkById = async (id: number) => {
	return await Work.findByPk(id);
}

export const createWork = async (data: any) => {
	return await Work.create(data);
}

export const updateWork = async (id: number, data: any) => {
	const record = await Work.findByPk(id);
	if (!record) throw new Error("Record not found");
	return await record.update(data);
};

export const deleteWork = async (id: number) => {
	const record = await Work.findByPk(id);
	if (!record) throw new Error("Record not found");
	await record.destroy();
};
