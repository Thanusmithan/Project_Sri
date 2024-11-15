// server.js
// const express = require("express");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db");
// const authRoutes = require("./routes/authRoutes");
// const cors = require("cors");

// // Load environment variables from .env file
// dotenv.config();

// const app = express();

// // Connect to MongoDB
// connectDB()
//     .then(() => {
//         console.log("MongoDB connected successfully");
//     })
//     .catch((error) => {
//         console.error("MongoDB connection failed:", error.message);
//         process.exit(1); // Exit if the connection fails
//     });

// // Middleware
// app.use(cors()); // Enable CORS for cross-origin requests
// app.use(express.json()); // Parse incoming JSON requests

// // Routes
// app.use("/api/auth", authRoutes); // Authentication routes

// // Error handling for undefined routes
// app.use((req, res, next) => {
//     res.status(404).json({ message: "Route not found" });
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// 15.11.2024
// // server.js
// const express = require("express");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db");
// const authRoutes = require("./routes/authRoutes");
// const appointmentRoutes = require("./routes/appointmentRoutes"); // Import appointment routes
// const cors = require("cors");
// const User = require("./models/User");
// const bcrypt = require("bcryptjs");

// dotenv.config();

// const app = express();
// connectDB();

// // Seed admin user
// const seedAdminUser = async () => {
//     try {
//         const existingAdmin = await User.findOne({ email: "admin@hospital.com" });
//         if (!existingAdmin) {
//             const hashedPassword = await bcrypt.hash("admin123", 10);
//             const admin = new User({
//                 firstName: "Admin",
//                 lastName: "User",
//                 email: "admin@hospital.com",
//                 phone: "0000000000",
//                 password: hashedPassword,
//                 role: "admin"
//             });
//             await admin.save();
//             console.log("Admin user created successfully");
//         } else {
//             console.log("Admin user already exists");
//         }
//     } catch (error) {
//         console.error("Error seeding admin user:", error);
//     }
// };

// seedAdminUser();

// app.use(cors());
// app.use(express.json());
// app.use("/api/auth", authRoutes);
// app.use("/api/appointments", appointmentRoutes); // Add appointment routes

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



// server.js
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const cors = require("cors");
const User = require("./models/User");
const bcrypt = require("bcryptjs");

dotenv.config();

const app = express();
connectDB();

const seedAdminUser = async () => {
    try {
        const existingAdmin = await User.findOne({ email: "admin@hospital.com" });
        if (!existingAdmin) {
            const hashedPassword = await bcrypt.hash("admin123", 10);
            const admin = new User({
                firstName: "Admin",
                lastName: "User",
                email: "admin@hospital.com",
                phone: "0000000000",
                password: hashedPassword,
                role: "admin"
            });
            await admin.save();
            console.log("Admin user created successfully");
        } else {
            console.log("Admin user already exists");
        }
    } catch (error) {
        console.error("Error seeding admin user:", error);
    }
};

seedAdminUser();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentRoutes); // Add the appointment routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
