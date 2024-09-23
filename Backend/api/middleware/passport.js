const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const conf = require('../config/jwt')
const {Usuario} = require('../models');

const opts = {
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: conf.jwtSecret
}

passport.use(
    new JwtStrategy(opts, async(payload,done)=>{
        try {
            const user = await Usuario.findByPk(payload.id);
            if(user){
                return done(null, user);
            }
            return done(null,false)
        } catch (error) {
            return done(error,false)
        }
    })
)