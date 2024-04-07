function authenticated (req, res, next){
    const user = req.params.user;
    // res.send('you are not authenticated');

    if(user == 'isaac'){
        next();
    }
    else{
        res.send('you are not authenticated');
    }


}


module.exports = authenticated;