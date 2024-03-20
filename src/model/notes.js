import mongoose from "./index.js";

  const notesSchema= new mongoose.Schema({
          title:{
              type:String,
              required:[true, 'title is required']
          },
          description:{
              type:String,
              required:[true,'description is required']
          },
          createdBy:{
              type:String,
              required:[true, 'createdby is required']
          },
          createdAt:{
               type:Date,
               default:Date.now()
          },
          modifiedAt:{
              type:Date
          }
  },{
      collection: 'notes',
      versionKey: false
  })

  const notesModel = mongoose.model('notes', notesSchema)

  export default notesModel;