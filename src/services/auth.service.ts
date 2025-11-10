import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models";

const JWT_SECRET = process.env.JWT_SECRET || "secret123";
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1d";

export const register = async (name: string, email: string, password: string, role: number) => {
	const existingUser = await User.findOne({ where: { email } });
	if (existingUser) throw new Error("Email already in use");

	const hashedPassword = await bcrypt.hash(password, 10);

	const user = await User.create({
		name,
		email,
		password: hashedPassword,
		role,
		status: 1,
	});

	const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
		expiresIn: JWT_EXPIRES_IN,
	});

	return { user, token };
};

export const login = async (email: string, password: string) => {
	const user = await User.findOne({ where: { email } });
	if (!user) throw new Error("Invalid email or password");

	const validPassword = await bcrypt.compare(password, user.password);
	if (!validPassword) throw new Error("Invalid email or password");

	const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
		expiresIn: JWT_EXPIRES_IN,
	});

	return { user, token };
};
