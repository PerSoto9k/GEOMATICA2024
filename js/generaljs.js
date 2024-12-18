// botón "ORDENAR POR NOMBRE"
    // Mostrar/ocultar tabla
    const tablaContainer = document.getElementById('tabla-container');
    tablaContainer.style.display = 'none'; // oculto inicialmente
    document.getElementById('verTablaBtn').addEventListener('click', () => {
        tablaContainer.style.display = tablaContainer.style.display === 'none' ? 'block' : 'none';
    });

    document.getElementById('ordenarNombre').addEventListener('click', () => {
    const tablaBody = document.getElementById('tablaBody');
    const filas = Array.from(tablaBody.getElementsByTagName('tr'));

    // filas por nombre (primer columna)
    filas.sort((a, b) => {
        const nombreA = a.cells[0].textContent.toLowerCase(); // nombre desde primera celda
        const nombreB = b.cells[0].textContent.toLowerCase(); 
        return nombreA.localeCompare(nombreB); // Comparar  nombres
    });
    // Limpiar tabla
    tablaBody.innerHTML = '';

    // Reinsertar filas ordenadas en tabla
    filas.forEach(fila => {
        tablaBody.appendChild(fila);
    });
    });

   // ruta del JSON
   const geojsonPath = './js/JSON/limasur.geojson';// carga JSON 
   fetch(geojsonPath)
   .then(response => {
       if (!response.ok) {
           throw new Error(`Error al cargar el GeoJSON: ${response.statusText}`);
       }
       return response.json();
   })
   .then(data => {
       // Añadir capa GeoJSON
       L.geoJSON(data, {
           style: {
               color: 'rgba(0, 0, 155, 0.27)',
               weight: 3
           },           
       }).addTo(map);
   })
   .catch(error => {
       console.error('Error al cargar el archivo GeoJSON:', error);
   });

   // mensaje permanente "DISTRITOS DE LIMA SUR" 
    const messageCoordinates = [-12.225453224649511, -76.79094612350114];

    const messageIcon = L.divIcon({
        className: 'popup-m',
        html: 'DISTRITOS DE LIMA SUR',
        iconSize: [80, 40], 
        iconAnchor: [10, 25] 
    });

    // marcador con el divIcon en las coordenadas 
    L.marker(messageCoordinates, { icon: messageIcon }).addTo(map);


