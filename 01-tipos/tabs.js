// ================= TABS DE LA TIENDA =================

// Tomamos todos los botones y los contenidos
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// Función que muestra la pestaña correcta y oculta las demás
function showTab(tabId) {
    tabContents.forEach(content => {
        content.style.display = content.id === tabId ? 'block' : 'none';
    });
}

// Inicializamos mostrando la primera pestaña si existe
if (tabContents.length > 0) {
    showTab(tabContents[0].id);
}

// Agregamos evento click a cada botón
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        showTab(button.dataset.tab);
    });
});