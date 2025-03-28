import { compare } from "bcrypt";
import User from "../../models/userModel.js"
import { comparePassword, hashPassword } from "../../Services/passwordService.js"
import { generateToken } from "../../Services/jwtService.js";



// SignUp
export const SignUpController = async (req, res) => {
    try {
        const data = req.body;
        const email = data.email;

        const oldUser = await User.findOne({ email: email });

        if (oldUser) {
            return res.status(400).json({ error: "User Already Exist" });
        }

        const hashedPassword = await hashPassword(data.password);

        const newUser = new User({ ...data, password: hashedPassword });

        const token = generateToken(newUser.name, newUser.email, newUser.phone, newUser._id);

        await newUser.save();

        res.status(201).json({
            data: newUser,
            token: token,
            message: "User created successfully",
        });

    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }

}

// SignIn
export const SignInController = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Email and Password are required" });
        }

        const user = await User.findOne({ email: email });

        if (!user) {
            return res.status(400).json({ error: "Email or Password are not matched" });
        }

        const comparedPassword = await comparePassword(password, user.password);

        if (!comparedPassword) {
            return res.status(400).json({ error: "Email or Password are not matched" });
        }

        const token = generateToken(user.name, user.email, user.phone, user._id);

        res.status(201).json({
            message: "Login successful",
            token: token,
            user: {
                name: user.name,
                email: user.email
            }
        });

    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }

}