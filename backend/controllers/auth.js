const eah = require("express-async-handler");
const {
    User,
    validateUserSignup,
    validateUserSignin
} = require("../models/modelIndex.js");
const bcryptjs = require("bcryptjs");

//signup controller
const signup = eah(async function (rq, rs) {
    // validate user data
    const { error } = validateUserSignup(rq.body);
    // @TODO update status
    if (error)
        return rs.status(400).json({ message: error.details[0].message });

    // extructe user data
    let userData = {
        name: rq.body.name,
        username: rq.body.username,
        password: rq.body.password,
        email: rq.body.email
    };

    // check user if he already signup
    let isUser = null;
    isUser = await User.findOne({ username: userData.username });
    if (isUser)
        //@TODO update status
        return rs.status(400).json({ message: "username already used" });
    isUser = await User.findOne({ email: userData.email });
    //@TODO update status
    if (isUser) return rs.status(400).json({ message: "email already used" });

    // hash password
    const hashPassword = bcryptjs.hashSync(
        userData.password,
        parseInt(process.env.BCRYPTJS_SLAT)
    );

    // save user in database
    const user = User({
        name: userData.name,
        username: userData.username,
        password: hashPassword,
        email: userData.email
    });
    await user.save();
    // response to the user
    //@TODO update status
    rs.status(200).json({ message: "done" });
});

// signin controller
const signin = eah(async function (rq, rs) {
    // validate user data
    const { error } = validateUserSignin(rq.body);
    // @TODO update status
    if (error)
        return rs.status(400).json({ message: error.details[0].message });

    // extructe user data
    let userData = {
        usernameemail: rq.body.usernameemail,
        password: rq.body.password
    };

    // check user if he already signup
    let user = null;
    user = await User.findOne({ username: userData.usernameemail });
    if (!user) {
        user = await User.findOne({ email: userData.usernameemail });
        if (!user)
            //@TODO update status
            return rs.status(400).json({ message: "not found the user" });
    }

    // compare the password
    let isPasswordTrue = false;
    isPasswordTrue = bcryptjs.compareSync(userData.password, user.password);
    if (!isPasswordTrue)
        //@TODO update status
        return rs.status(400).json({ message: "incorrect password" });

    // generate web token
    const userToken = user.generateAuthToken();

    // response to the user
    //@TODO update status
    rs.status(200).json({ message: "signin success", token: userToken });
});

// export controllers
module.exports = {
    signup,
    signin
};
