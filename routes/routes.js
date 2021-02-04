import express from 'express';
import {
  indexController, servicesController, contactoController,
  apiController, eventosController, eventoController
} from '../controllers/pagesController.js';

const router = express.Router();

router.get('/', indexController);

router.get('/servicios', servicesController);

router.get('/contacto', contactoController);

router.get('/api', apiController);

router.get('/evento', eventosController);


router.get('/evento/:id_evento', eventoController);

// Pagina no encontrada
router.use((req, res, next) => {
  res.redirect('/');
});

export default router;
