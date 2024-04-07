exports.action = async () => {
    console.log('we are in the user file')
}

exports.readNames = async (req, res) => {
    console.log('readNames')
    res.send('readNames')
}

// module.export = user; 