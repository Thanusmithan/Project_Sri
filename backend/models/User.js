// User.js
// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

// const userSchema = new mongoose.Schema({
//     firstName: { type: String, required: true },
//     lastName: { type: String, required: true },
//     email: { type: String, unique: true, required: true },
//     phone: { type: String, required: true },
//     password: { type: String, required: true },
// });

// // Automatically hash password before saving
// userSchema.pre("save", async function (next) {
//     if (!this.isModified("password")) return next();
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
// });

// module.exports = mongoose.model("User", userSchema);


// User.js
// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

// const userSchema = new mongoose.Schema({
//     firstName: { type: String, required: true },
//     lastName: { type: String, required: true },
//     email: { type: String, unique: true, required: true },
//     phone: { type: String, required: true },
//     password: { type: String, required: true },
// });

// userSchema.pre("save", async function (next) {
//     if (!this.isModified("password")) return next();
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//     next();
// });

// module.exports = mongoose.model("User", userSchema);

// User.js
// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//     firstName: { type: String, required: true },
//     lastName: { type: String, required: true },
//     email: { type: String, unique: true, required: true },
//     phone: { type: String, required: true },
//     password: { type: String, required: true }, // Password will already be hashed before saving in controller
// });

// module.exports = mongoose.model("User", userSchema);


// User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    phone: { type: String, required: true },
    password: { type: String, required: true }, // Password is hashed before saving
    role: { type: String, default: "user" } // New field to define user roles (default is 'user')
});

module.exports = mongoose.model("User", userSchema);




