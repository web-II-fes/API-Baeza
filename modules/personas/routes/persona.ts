import * as express from "express";
import { personaSchema } from "./../schemas/persona";
import { getMenores } from "../controllers/personaCtrl";

const router = express.Router();

//Callbacks

router.get("/persona", async(req, res, next) => {
  personaSchema.find(function (err, persona) {
    if (err) return;

    res.send(persona);
  });
  // let personas = await personaSchema.find();
  // try {
  //   let menores = await getMenores(personas);
  //   res.send(menores);
  // } catch(err) {
  //     throw err;
  // }
  

    /* getPersona()
    .then((persona) => {
      res.json(persona);
    })
    .then((persona) => {
      res.json(persona);
    })
    .then((persona) => {
      res.json(persona);
    })
    .then((persona) => {
      res.json(persona);
    })
    .catch((err) => {
      console.log("Error: ", err);
    });  */
});

router.post("/persona", (req, res) => {
  console.log("Viene persona persona POST: ", req.body);
  const persona = new personaSchema(req.body);

  persona.save((err, persona) => {
    if (err) {
      return err;
    }
    res.json(persona);
  });
});

router.put("/persona/:_id", (req, res, next) => {
  console.log("Viene del PUT: ", req.body);
  personaSchema.findByIdAndUpdate(
    req.params._id,
    req.body,
    { new: true },
    (err, persona) => {
      if (err) {
        return err;
      }
      console.log("Persona Nueva: ", persona);
      return res.send(persona);
    }
  );
});



router.delete('/persona/:_id', (req, res, next) =>{
	personaSchema.findByIdAndRemove(req.params._id, function(err, persona) {
    if(err){
        console.log("Error", err);
	}
  console.log('Persona Borrada: ', persona);
  res.json(persona);
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
