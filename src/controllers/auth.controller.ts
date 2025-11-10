import { Request, Response } from "express";
import * as authService from "../services/auth.service";

export const register = async (req: Request, res: Response) => {
	try {
		const { name, email, password, role } = req.body;
		const result = await authService.register(name, email, password, role);
		res.status(201).json({
			message: "User registered successfully",
			user: result.user,
			token: result.token,
		});
	} catch (error: any) {
		res.status(400).json({ message: error.message });
	}
};

export const login = async (req: Request, res: Response) => {
	try {
		const { email, password } = req.body;
		const result = await authService.login(email, password);
		res.status(200).json({
			message: "Login successful",
			user: result.user,
			token: result.token,
		});
	} catch (error: any) {
		res.status(400).json({ message: error.message });
	}
};

export const me = async (req: Request, res: Response) => {
	try {
		const user = (req as any).user;
		res.status(200).json(user);
	} catch {
		res.status(401).json({ message: "Unauthorized" });
	}
};
