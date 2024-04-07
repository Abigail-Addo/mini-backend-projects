const User = require('../model/User');

exports.CreateUser = async (req, res) => {

    // await User.create(req.body, (err, user) => {
    //     if (err) {
    //         res.status(500).json({
    //             message: "Error: " + err
    //         });
    //     } else {
    //         res.status(200).json({
    //             message: "User created successfully",
    //             data: user
    //         });
    //     }
    // })


    try {
            if(req.body.name != '' || req.body.email != '' || req.body.password ){
                const userRegister = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                });

                const savedUser = await userRegister.save();
                return res.status(200).json(savedUser);
            }

    }catch(err) {
        res.status(500).json({
            message: "Error: " + err
        });
    }

};