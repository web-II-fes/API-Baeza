import * as express from "express";
import { cursoSchema } from "./../schemas/curso";
// import { getMenores } from "../controllers/cursoCtrl";

const router = express.Router();

router.get('/curso', async (req, res, next) => {

    cursoSchema.find(function(err, curso) {
        if (err){
      return err;
    } 
        res.send(curso);
    });
});

router.get("/cursoId/:id", async (req, res) => {
  let idCurso = req.params.id;
  try {
    let cursos = await cursoSchema.findById(idCurso);
    res.send(cursos);
  } catch (err) {
    throw err;
  }
});



router.post('/curso', async (req, res, next) => {
  const curso = await new cursoSchema(req.body);
  curso.save((err, curso) => {
      try{
          res.json(curso);
      } catch (err){
          return err;
      }
});
  
});

router.put('/curso/:_id', async (req, res, next) => {

   cursoSchema.findByIdAndUpdate(req.params._id, req.body, { new: true }, (err, curso) => {
    
    if (err){
        return err;
    }
    return res.send(curso);
});
});

router.delete('/curso/:_id', async (req, res, next) => {
let curso = await cursoSchema.findByIdAndRemove(req.params._id, (err, curso) => {
      
      try {
          console.log('Curso Borrado: ', curso);
      }   catch (err) {
          throw err;
      }
});
});

export = router;