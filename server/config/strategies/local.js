import passport from 'passport';
import LocalStrategy from 'passport-local';
import bcrypt from 'bcryptjs';

import { UserModel } from '../../model/User';

export default function () { 

    passport.use(new LocalStrategy(
            { usernameField: 'email' }, (email, password, done) => {

            console.log(email)
            UserModel.findOne({ email }, function (err, user) {
                console.log('find one ', user)
            if (err) { return done(err); }
            if (!user) {
              return done(null, false, { message: 'Incorrect username.' });
            }

            bcrypt.compare(password, user.password, (error, isMatch) => {
                if (error) throw error;
                if (isMatch) {
                    return done(null, user);
                }
                else {
                    return done(null, false, { message: "Incorrect password."})
                }
                
            })
            
          });
        }
    ));
 }; 