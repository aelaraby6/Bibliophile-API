import User from "../../models/userModel.js"


export const getProfile = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({ error: "Unauthorized: No user found" });
        }

        const user = await User.findById(req.user._id).select("-password");

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({ message: "Profile retrieved successfully", user });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};