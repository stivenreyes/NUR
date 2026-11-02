// ================= TABS DE LA TIENDA =================

const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

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

    // Activar el botón de la pestaña seleccionada
    const activeButton = document.querySelector(
        `.tab-btn[data-tab="${tabId}"]`
    );

    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Mostrar Temporadas al cargar la página
if (document.getElementById('content3')) {
    showTab('content3');
}

// Eventos de los botones
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.dataset.tab) {
            showTab(button.dataset.tab);
        }
    });
});