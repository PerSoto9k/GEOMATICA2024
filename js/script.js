// Creando elemento y centrandose en Perú, zoom 6
var mapa = L.map('mapa').setView([-10.0, -76.0], 6); 

// Add a basemap layer (in this case, OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c']
}).addTo(mapa);