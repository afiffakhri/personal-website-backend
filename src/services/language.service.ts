import { Language } from "../models";

export const getAllLanguages = async () => {
	return await Language.findAll();
}

export const getLanguageById = async (id: number) => {
	return await Language.findByPk(id);
}

export const createLanguage = async (data: any) => {
	return await Language.create(data);
}

export const updateLanguage = async (id: number, data: any) => {
	const record = await Language.findByPk(id);
	if (!record) throw new Error("Record not found");
	return await record.update(data);
};

export const deleteLanguage = async (id: number) => {
	const record = await Language.findByPk(id);
	if (!record) throw new Error("Record not found");
	await record.destroy();
};
