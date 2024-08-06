const User = require('../models/user.js');

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if email is already registered
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log("Email already registered");
            return res.status(400).json({ message: "User already exists!" });
        }

        const newUser = new User({
            name,
            email,
            password,
        });
        await newUser.save();

        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        console.log("Error creating/registering user:", error);
        res.status(500).json({ message: "Registration failed!" });
    }
};

module.exports = {
    register
};
