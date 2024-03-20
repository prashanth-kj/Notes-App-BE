import notesModel from "../model/notes.js";

 
const createNote=async(req,res)=>{
        try {
              
              let {title,description}=req.body;

                 if(title && description){
                     
                    await notesModel.create({
                          title,
                          description,
                          createdBy:req.headers.userId
                    }) 
                     res.status(201).send({
                          message:"note created sucessfully"
                     })

                 }else{
                      res.status(400).send({
                         message:"All data field is required"
                      })
                 }

        } catch (error) {
             console.log(error);
             res.status(500).send({
               message:"Internal servar error",
               error:error.message
            })
        }
}
const editNote=async(req,res)=>{
    try {
          
         let noteId= req.params.id;

            if(noteId){
                   
                  let note = await notesModel.findById({_id:noteId});
                  if(note){
                        
                    let {title,description}=req.body;
                        
                     note.title=title;
                     note.description=description;
                     note.modifiedAt= Date.now();

                       await note.save();
                     res.status(200).send({
                          message:"note edited sucessfully",
                          note
                     })
                      
                  }else{
                         res.status(400).send({
                              message:"note is not found"
                         })
                      }
                 
            }else{
                 res.status(400).send({
                      message:"noteId is not found"
                 })
            }
        
         
    } catch (error) {
         console.log(error);
         res.status(500).send({
          message:"Internal servar error",
          error:error.message
       })
    }
}
const getNotesByUser=async(req,res)=>{
    try {

         let notes = await notesModel.find({createdBy:req.headers.userId});

           res.status(200).send({
               message:"Notes fetched sucessfully",
               notes
           })
        
    } catch (error) {
         console.log(error);
         res.status(500).send({
          message:"Internal servar error",
          error:error.message
       })
    }
}
const getNotesById=async(req,res)=>{
     try {
           
          let noteId = req.params.id;
           if(noteId){
                  
                let note = await notesModel.findById({_id:noteId});

                   res.status(200).send({
                      message:"note fetched sucessfully",
                      note
                   })
                
           }else{
                res.status(400).send({
                     message:"note Id not found"
                })
           }


     } catch (error) {
          console.log(error);
          res.status(500).send({
           message:"Internal servar error",
           error:error.message
        })
     }
}
const deleteNote=async(req,res)=>{
    try {
     let noteId= req.params.id;
        if(noteId){
             
          let note = await notesModel.findById({_id:noteId});
           
            if(note){

                let deleteNote = await notesModel.deleteOne({_id:noteId})
               res.status(200).send({
                    message:"note deleted sucessfully",
                    deleteNote
                 })
            } else{
               res.status(400).send({
                    message:"note not found"
               })
            }       
   
        }else{
           res.status(400).send({
                message:"note id not found"
           })
     }
    } catch (error) {
         console.log(error);
         res.status(500).send({
          message:"Internal servar error",
          error:error.message
       })
    }
}

export default {
     createNote,
     editNote,
     getNotesByUser,
     getNotesById,
     deleteNote
}