const router = require("express").Router();
const {
    getUsers,
    // getSingleUser,
    // createCourse,
    // updateCourse,
    // deleteCourse,
} = require('../../controllers/userControllers');

router.route('/').get(getUsers);
module.exports = router;

