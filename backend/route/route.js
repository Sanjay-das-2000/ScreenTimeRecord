const router = require('express').Router();
const userController = require("../controller/user-controller");

router.get('/getallusers', userController.getAllUsers);
router.post('/adduser', userController.addUser);
router.post('/getadmin', userController.getAdmin);
router.post('/addadmin', userController.addAdmin);
// router.post('/getuserStatus', userController.getUserStatus);
// router.get('/:id', userController.getUserById);
// router.put('/:id', userController.editUser);
// router.delete('/:id', userController.deleteUser);

module.exports = router;