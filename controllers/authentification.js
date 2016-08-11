const jwt = require('jwt-simple');
const User = require('../models/userModel');
const config = require('../config');

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({sub: user.id, iat: timestamp}, config.secret);
}

exports.signin = function(req,res,next) {
    res.send({token: tokenForUser(req.user)});
}

exports.signup = function(req,res,next) {

    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password) {
        return res.status(422).send({error: 'provide email and passowrd'});
    }
    // if user with given email exist

    User.findOne({email: email}, function(err, existingUser){
        if(err) { return next(err); }
        // if user with email exist return error
        if(existingUser) {
            return res.status(422).send({ error: 'emaail in use'});
        }
        //if user with email does not exist createe and save user

        const user = new User({
            email: email,
            password: password
        })
        user.save(function (err) {
            if (err) {return next(err);}

        //respond to request indicating user was created

            res.json({token: tokenForUser(user) });

        });
    });

}