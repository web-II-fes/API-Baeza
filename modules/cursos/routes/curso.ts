import * as express from "express";
import { cursoSchema } from "./../schemas/curso";
// import { getMenores } from "../controllers/cursoCtrl";

const router = express.Router();

//Callbacks

router.get("/curso", async(req, res, next) => {
  cursoSchema.find(function (err, curso) {
    if (err) return;

    res.send(curso);
  });
  
  

   
});

router.post("/curso", (req, res) => {
//   console.log("Viene curso curso POST: ", req.body);
  const curso = new cursoSchema(req.body);

  curso.save((err, curso) => {
    if (err) {
      return err;
    }
    res.json(curso);
  });
});

router.put("/curso/:_id", (req, res, next) => {
//   console.log("Viene del PUT: ", req.body);
  cursoSchema.findByIdAndUpdate(
    req.params._id,
    req.body,
    { new: true },
    (err, curso) => {
      if (err) {
        return err;
      }
      console.log("Curso Nuevo: ", curso);
      return res.send(curso);
    }
  );
});



router.delete('/curso/:_id', (req, res, next) =>{
	cursoSchema.findByIdAndRemove(req.params._id, function(err, curso) {
    if(err){
        console.log("Error", err);
	}
  console.log('Curso Borrado: ', curso);
  res.json(curso);
});
});


// / Promises /

// /   function getPersona() {
//   return new Promise((resolve, reject) => {
//     let persona = personaSchema.find({ nombre: "Ignacio" }).exce();
//     if (persona) {
//       resolve(persona);
//     } else {
//       reject(console.log("No se encontro persona"));
//     }
//   });
// }  /

// / Async y Await */

export = router;