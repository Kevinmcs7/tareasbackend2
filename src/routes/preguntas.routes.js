import {Router} from 'express' ;
import { authRequired } from "../middlewares/validateToken.js";
import { getPreguntas, 
    getPregunta ,
    createPregunta,
    updatePregunta,
    deletePregunta
} from "../controllers/preguntas.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createPreguntaSchema } from "../schemas/pregunta.schema.js";

const router = Router()

router.get('/tareas', getPreguntas)
router.get('/tareas/:id',  getPregunta)
router.post('/tareas',  validateSchema(createPreguntaSchema), createPregunta)
router.delete('/tareas/:id',  deletePregunta)
router.put('/tareas/:id',  updatePregunta)



export default router


