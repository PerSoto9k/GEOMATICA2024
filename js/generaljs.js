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

