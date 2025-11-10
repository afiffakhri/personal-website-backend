import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models";

const JWT_SECRET = process.env.JWT_SECRET || "secret123";

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
	const authHeader = req.headers.authorization;

	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		return res.status(401).json({ message: "No token provided" });
	}

	const token = authHeader.split(" ")[1];

	try {
		const decoded: any = jwt.verify(token, JWT_SECRET);
		const user = await User.findByPk(decoded.id);

		if (!user) return res.status(401).json({ message: "Invalid token" });

		(req as any).user = user;
		next();
	} catch (error) {
		res.status(401).json({ message: "Invalid token" });
	}
};
