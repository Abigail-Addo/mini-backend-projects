const loginUser = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if(email == "" || email == null) {
        res.status(303).json({message: "Email cannot be empty"})
        return;
    }

    if(password == "" || password == null) {
        res.status(303).json({message: "Password cannot be empty"})
        return;
    }


    if(password != "mainAdmin") {
        res.status(303).json({message: "Password is incorrect"})
    } else {
        res.status(200).json({
            name: "Abigail",
            email: "addoa350@gmail.com",
            password: req.body.password,
            token : 'this-user-is-authenticated'
        })
    }
//   if(password != "addoa350@gmail.com") {
//         res.status(303).json({message: "User not found"})
//     } else {
//         res.status(200).json({
//             name: "Abigail",
//             email: req.body.email,
//             password: "mainAdmin"
//         })
//     }

}

module.exports.loginUser = loginUser;