const express = require('express');
const router = express.Router();

/* je require mon controller */
const mainController = require('./controller/mainController');

/* Mes 3 pages */
router.get('/', mainController.homePage);
router.get('/catalogue', mainController.catalogueCategory);
/* route pour le détail de chaque café */
router.get('/detail/:id', mainController.détailPage);

router.get('/qui_sommes_nous', mainController.whoAreUs);










module.exports = router;