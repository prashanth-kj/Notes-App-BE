import express from 'express';
import userController from '../controller/user.js'
 const router= express.Router();
      
    router.post('/signup',userController.createUser)
    router.post('/login',userController.login)
    router.post('/forget-password',userController.forgetPassword);
    router.post('/reset-password',userController.resetPassword);
     
 export default router;