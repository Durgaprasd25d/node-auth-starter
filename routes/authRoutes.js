const express = require('express');
const {
  registerUser,
  authUser,
  getUserProfile,
} = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/roleMiddleware');

const router = express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(authUser);
router.route('/profile').get(protect, getUserProfile);
router.route('/admin').get(protect, admin, (req, res) => {
  res.send('Admin route');
});

module.exports = router;
