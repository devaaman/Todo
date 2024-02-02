const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Signup route handler
exports.signup = async (req, res) => {
    try {
        // Get data
        const { name, username, email, password } = req.body;
        console.log("first")

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        console.log("second")

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User already exists',
            });
        }
        console.log("third")

        // Secure password
        // const hashedPassword = await bcrypt.hash(password, 10);
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hashSync(password, salt)
        console.log(hashedPassword)


        // Create entry for User
        const user = await User.create({
            name,
            email,
            username,
            password: hashedPassword,
            todos: [],
            createdAt: new Date(),
        });

        return res.status(200).json({
            success: true,
            message: 'User created successfully',
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'User cannot be registered, please try again later',
        });
    }
};

// Login route handler
exports.login = async (req, res) => {
    try {
        // Data fetch
        const { email, password } = req.body;

        // Validation on email and password
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please fill in all the details carefully',
            });
        }

        // Check for registered user
        const user = await User.findOne({ email });

        // If not a registered user
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'User is not registered',
            });
        }

        // Verify password & generate a JWT token
        if (await bcrypt.compare(password, user.password)) {
            const payload = {
                email: user.email,
                id: user._id,
            };

            console.log("i am with token");

            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: '2h',
            });

            console.log(token)

            // Remove sensitive information from the user object
            const userWithoutPassword = { ...user._doc, password: undefined };

            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true,
            };

            res.cookie('userCookie', token, options).status(200).json({
                success: true,
                token,
                user: userWithoutPassword,
                message: 'User logged in successfully',
            });
        } else {
            // Password does not match
            return res.status(403).json({
                success: false,
                message: 'Password incorrect',
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Login failure',
        });
    }
};

// Logout route handler
exports.logout = async (req, res) => {
    try {
        // Clear the 'userCookie' cookie with appropriate options
        res.clearCookie('userCookie', { sameSite: 'none', secure: true });

        // Send a success message
        res.status(200).send('User logged out successfully!');
    } catch (err) {
        // Handle any potential errors
        console.error('Error during logout:', err);
        res.status(500).json({
            success: false,
            message: 'Logout failed. Please try again later.',
        });
    }
};



exports.refetch = async (req, res) => {
    try {
      const token = req.cookies.token;
  
      if (!token) {
        return res.status(401).json({
          success: false,
          message: 'Token not provided',
        });
      }
  
      jwt.verify(token, process.env.JWT_SECRET, {}, async (err, data) => {
        if (err) {
          return res.status(404).json(err);
        }
  
        // Assuming you have a User model and want to retrieve user information
        // Replace this with your actual user retrieval logic
        const user = await User.findById(data._id);
  
        if (!user) {
          return res.status(404).json({
            success: false,
            message: 'User not found',
          });
        }
  
        // Adjust the response as needed
        res.status(200).json({
          success: true,
          user: user, // Modify this based on your actual user structure
        });
      });
    } catch (error) {
      console.error('Error in refetch controller:', error);
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  };