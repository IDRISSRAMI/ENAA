const express = require('express');
const passport = require('passport');
const { register, login, oauthCallback } = require('../controllers/authController');

const router = express.Router();

// Inscription et connexion classique
router.post('/register', register);
router.post('/login', login);

// Routes OAuth
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { session: false }), oauthCallback('google'));

router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));
router.get('/github/callback', passport.authenticate('github', { session: false }), oauthCallback('github'));

router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));
router.get('/facebook/callback', passport.authenticate('facebook', { session: false }), oauthCallback('facebook'));

module.exports = router;

