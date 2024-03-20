import express from 'express';
import notesController from '../controller/notes.js'
import Auth from '../common/auth.js';

 const router= express.Router();

   router.post('/create',Auth.validate,notesController.createNote);
   router.get('/user',Auth.validate,notesController.getNotesByUser);
   router.get('/:id',Auth.validate,notesController.getNotesById)
   router.put('/edit/:id',Auth.validate ,notesController.editNote);
   router.delete('/delete/:id',Auth.validate ,notesController.deleteNote); 

 export default router;