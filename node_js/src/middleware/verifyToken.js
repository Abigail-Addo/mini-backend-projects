function loggedUser(req, res, next) {
    // if condition is true go into the if block
    const token = req.body.token;
    if (!token) {
        return;
    }
    if (token != "this-user-is-authenticated") {
        res.status(401).json({
            message: "token not found"
        });
        return;
    } else {
        console.log(" 1. user token is correct");
        next();
        console.log("3. middle function ended");
    }
}

module.exports = loggedUser;