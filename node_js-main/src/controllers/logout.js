const logoutUser = (req, res) => {
res.status(200).json({
    token: "",
    message: "user logout successfully..!"
 })
}

module.exports.logoutUser = logoutUser;