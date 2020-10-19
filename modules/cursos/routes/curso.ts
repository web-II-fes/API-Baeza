import * as express from "express";
import { cursoSchema } from "./../schemas/curso";
// import { getMenores } from "../controllers/cursoCtrl";

const router = express.Router();


router.get('/curso', async (req, res, next) => {
  let cursos = await cursoSchema.find();  
      try{
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
let curso = await cursoSchema.findByIdAndUpdate(req.params._id, req.body, { new: true }, (err, curso) => {
      
      try{
          res.send(curso);
      }   catch (err) {
          throw err;
      }
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