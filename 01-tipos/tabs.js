
 // ================= TABS DE LA TIENDA =================

const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// Función que muestra la pestaña correcta y activa su botón
function showTab(tabId) {

    // Mostrar el contenido correspondiente
    tabContents.forEach(content => {
        content.style.display =
            content.id === tabId ? 'block' : 'none';
    });

    // Quitar active de todos los botones
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Activar el botón correspondiente
    const activeButton = document.querySelector(
        `.tab-btn[data-tab="${tabId}"]`
    );

    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Detectar si la URL contiene una pestaña, por ejemplo #content2
const tabFromURL = window.location.hash.substring(1);

// Si la pestaña existe, mostrarla; si no, mostrar la primera
if (tabFromURL && document.getElementById(tabFromURL)) {
    showTab(tabFromURL);
} else if (tabContents.length > 0) {
    showTab(tabContents[0].id);
}

// Eventos de los botones
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.dataset.tab) {
            showTab(button.dataset.tab);
        }
    });
});
