function notFound(req, res, next) {
    // On envoie le code 404 pour que le navigateur et les moteurs de recherches prennent en compte notre gestion d'erreur
    res.status(404).render('../views/404');
}

module.exports = notFound;