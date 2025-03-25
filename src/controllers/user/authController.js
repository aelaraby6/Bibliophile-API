import User from "../../models/userModel.js"
import { hashPassword } from "../../Services/passwordService.js"



// SignUp
export const SignUpController = async (req, res) => {

    try {
        const data = req.body;
        const email = data.email;

        const oldUser = await User.findOne({ email: email });

        if (oldUser) {
            throw new Error("User Already Exist").status(400);
        }

        const hashedPassword = await hashPassword(data.password);

        const newUser = await new User({ ...data, password: hashedPassword });

        await newUser.save();

        res.status(201).json({
            data: newUser,
            message: "User created successfully",
        });


    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }

}


