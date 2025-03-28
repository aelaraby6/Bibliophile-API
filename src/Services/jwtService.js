import Jwt from "jsonwebtoken";


export const generateToken = (name, email, phone, _id) => {
    const secret = process.env.JWT_SECRET_Key;
    const expiresIn = "2d";

    const token = Jwt.sign({ name, email, phone, _id }, secret, { expiresIn });

    return token;
}


export const verifyToken = (token) => {
    try {
        const decodedToken =  Jwt.verify(token, process.env.JWT_SECRET_Key);
        return decodedToken;
    } catch (err) {
        throw new Error("Invalid or expired token");
    }
};
