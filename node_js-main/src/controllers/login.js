const loginUser = async (req, res) => {
    
    const email = req.body.email;
    console.log(email)
    const password = req.body.password;


   //simulate database
   if(email != "yeboah@mail.com"){
    res.status(303).json({message: "user not found"})

   }else{
    res.status(200).json(
            {
                name: "Micheal",
                password: "admin1234",
                email: req.body.email,
                token : 'this-user-is-authenticated'
            }
        )
   }
}

module.exports.loginUser = loginUser;