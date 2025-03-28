import User from "../models/userModel.js";
import { verifyToken } from "../Services/jwtService.js"

export const authenticateToken = async (req, res, next) => {

    try {
        const authHeader = req.headers["authorization"];

        if (!authHeader) {
            return res.status(401).json({ message: "Token Not provided" });
        }

        const tokenParts = authHeader.split(" ");

        if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
            return res.status(401).json({ message: "Invalid Token Format" });
        }

        const token = tokenParts[1];

        const decodedToken = verifyToken(token);

        if (!decodedToken || !decodedToken._id) {
            return res.status(401).json({ message: "Invalid or expired Token" });
        }

        const user = await User.findById(decodedToken._id);
        if (!user) {
            return res.status(401).json({ message: "Invalid or expired Token" });
        }

        req.user = user;
        next();

    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};
