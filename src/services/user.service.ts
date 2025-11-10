import { User } from "../models";

export const getAllUsers = async () => {
	return await User.findAll();
};

export const getUserById = async (id: number) => {
	return await User.findByPk(id);
};

export const createUser = async (data: any) => {
	return await User.create(data);
};

export const updateUser = async (id: number, data: any) => {
	const user = await User.findByPk(id);
	if (!user) throw new Error("User not found");
	return await user.update(data);
};

export const deleteUser = async (id: number) => {
	const user = await User.findByPk(id);
	if (!user) throw new Error("User not found");
	await user.destroy();
};
