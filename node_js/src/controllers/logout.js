const logoutUser = (req, res) => {
   
    res.status(200).json({
        token: "",
        message: "user logout successful..!"
     })
    }
    
    module.exports.logoutUser = logoutUser;