import * as express from "express";
import { personaSchema } from "./../schemas/persona";
import { getMenores } from "../controllers/personaCtrl";

const router = express.Router();

    router.get("/persona", async(req, res, next) => {
      personaSchema.find(function (err, persona) {
        if (err) return;

        res.send(persona);
      });

    

      router.post('/persona', async (req, res, next) => {
        const persona = await new personaSchema(req.body);
        persona.save((err, persona) => {
          try{
              res.json(persona);
          } catch (err){
              return err;
          }
        });
      });

    router.put('/persona/:_id', async (req, res, next) => {
      let persona = await personaSchema.findByIdAndUpdate(req.params._id, req.body, { new: true }, (err, persona) => {
            
            try{
                res.send(persona);
            }   catch (err) {
                throw err;
            }
        });
      });

    

    router.delete('/persona/:_id', async (req, res, next) => {
      let curso = await personaSchema.findByIdAndRemove(req.params._id, (err, persona) => {
            
            try {
                console.log('Persona Borrada: ', persona);
            }   catch (err) {
                throw err;
            }
        });
      });

    
  });
export = router; 
    
