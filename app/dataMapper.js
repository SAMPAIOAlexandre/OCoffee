const database = require('./database');


const dataMapper = {

    async getAllcoffee() {
        const query = "SELECT * FROM coffee";
        const result = await database.query(query);
        /* ce console.log fait bug posez la question de pourquoi */
        /* console.log(getAllcoffee) */
        return result.rows;
    },

    /* ici je récupère un café via son ID */
    async getCoffe(id) {
        const result = await database.query({
            text: "SELECT * FROM coffee WHERE id = $1",
            values: [id]
        });
        return result.rows[0];
    },


    /* dans ma requête je précise de n'afficher que des cafés disponble */
    async getLastcoffee() {
        const query = "SELECT * FROM coffee WHERE disponible = TRUE ORDER BY id DESC LIMIT 3";
        const result = await database.query(query);
        return result.rows;
    },
 

    /* requête pour le tri */
    async getCoffeebyCategory(category) {
        const result = await database.query({
            text: "SELECT * FROM coffee WHERE caracteristique_principale = $1",
            values:[category]
        })
        return result.rows
    },

    async getAllcategory() {
        const query = "SELECT DISTINCT caracteristique_principale FROM coffee"
        const result = await database.query(query)
        return result.rows
    }
}


module.exports = dataMapper;