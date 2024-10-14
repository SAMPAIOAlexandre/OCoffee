const dotenv = require('dotenv');
const express = require('express');
dotenv.config();
const session = require('express-session');



const router = require('./app/router');
const app = express();

/* je défini le moteur de view */
app.set('view engine', 'ejs');
/* je montre le dossier */
app.set('views','app/views' )


app.use(express.static('integrations'));
app.use('/docs', express.static('docs'));




app.use(router);


/* pour la gestion de la 404 */
const notFound = require('./app/middlewares/404');
app.use(notFound); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
})