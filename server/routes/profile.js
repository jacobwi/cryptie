import express from 'express';
import passport from 'passport';

const profileRouter = express.Router();

profileRouter.get('/test', (req, res) => res.json({ msg: 'Profile Works' }));

// @route   POST api/profile
// @desc    Create or edit user profile
// @access  Private
profileRouter.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
        console.log(res.body)
    }
  );

export default profileRouter;