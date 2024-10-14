/* JS pour le burger */

const btnMenu = document.querySelector('.burger_nav');
const menu = document.querySelector('.listnav');

if (btnMenu && menu) {
    btnMenu.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

    const allLinks = document.querySelectorAll('.item_nav');

    allLinks.forEach(function(item) {
        item.addEventListener('click', function() {
            menu.classList.remove('active');
        });
    });
}
/* JS pour afficher tous les café au clique */

const allCoffeeButton = document.getElementById('allCoffee');
if (allCoffeeButton) {
    allCoffeeButton.addEventListener('click', function() {
        document.querySelectorAll('.content_article_catalogue.hidden').forEach(function(section) {
            section.classList.remove('hidden');
        });
        /* Ici, cela permet de cacher le bouton "Voir tous" une fois cliqué */
        this.style.display = 'none';  
    });
}




/* BONUS LEAFLET */



function init() {
    const test = {
        lat:  48.8730929,
        lng:  2.3165648
    };

    const zoomLevel = 7;
    
    // Utiliser test.lng pour la longitude
    const map = L.map('map').setView([test.lat, test.lng], zoomLevel);
    const mainLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    mainLayer.addTo(map);
    const marker = L.marker([48.8730929, 2.3165648]).addTo(map)
    const circle = L.circle([48.8730929, 2.3165648], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 100
    }).addTo(map);

}

if (document.getElementById('map')) {
init();
}