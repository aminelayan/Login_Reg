const {User} = require ('../models/user.models');
const jwt = require ('jsonwebtoken');
const bcrypt = require ('bcrypt');

module.exports.register = (req,res) =>{
    req.body.email = req.body.email.toLowerCase();
    User.create(req.body)
    .then(user=>{
            const userToken = jwt.sign({
                id: user._id
            }, process.env.SECRET_KEY);
       

        res.
        cookie("usertoken", userToken,process.env.SECRET_KEY,
        {httpOnly:true})
        .json({msg:"Tanas Registered Successfully",user:user})
    })
    .catch(err=> res.json(err));
}

module.exports.login = async (req,res) =>{
    const user = await User.findOne({email: req.body.email.toLowerCase()})
    if (user === null){
        return res.sendStatus(400);
    }
    const correctPassword = await bcrypt.compare(req.body.password,user.password);
    if(!correctPassword){
        return res.sendStatus(400);
    }
    const userToken = jwt.sign({
        _id: user._id
    },process.env.SECRET_KEY);

    res.
        cookie("usertoken", userToken,process.env.SECRET_KEY,
        {httpOnly:true})
        .json({msg:"Tanas Login Successfully"})
    }

module.exports.logout = (req,res) =>{
    res.clearCookie("userToken");
    res.json({msg:"Tanas Logout Successfully",user:null})
    res.sendStatus(200);
}

module.exports.console =(req,res) =>{
    res.json({msg:"Tanas Console Successfully",user:null})
    res.sendStatus(200);
}

module.exports.getLoggedUser =(req,res) =>{
    try {
        const decoded = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        
        // Find the user with the id stored in the JWT
        User.findById(decoded.id, (err, user) => {
        if (err || !user) {
        return res.status(404).send({ error: 'User not found' });
    }

// Return the user
return res.send(user);
});
    } catch (e) {
        return res.status(401).send({ error: 'Invalid JWT' });
    }
    }