const  jwt = require('jsonwebtoken');
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

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if email is already registered
        const user = await User.findOne({ email });
        if (!user) {
            console.log("Invalid email or password");
            return res.status(400).json({ message: "Invalid email or password" });
        }

        if( user.password !== password) {
            return res.status(401).json({message:'Invalid email or password'})
        }
        const token=jwt.sign({id:user._id},'jwtssseriyiu2349792348',{expiresIn:'1h'})
        res.status(200).json({message:'Login successfull',token:token})

    } catch (error) {
        console.log("Error logging in user:", error);
        res.status(500).json({ message: "login failed!" });
    }
};


module.exports = {
    register,
    login
};
