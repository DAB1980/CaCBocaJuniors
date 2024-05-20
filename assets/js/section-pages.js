document.addEventListener('DOMContentLoaded', () => {
    // Función para cargar componentes
    const loadComponent = (elementId, filePath) => {
      fetch(filePath)
        .then(response => {
          if (!response.ok) {
            throw new Error('Problema de red');
          }
          return response.text();
        })
        .then(data => {
          document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error al cargar el componente:', error));
    }
    // Cargar componentes
    
    loadComponent('header-part', '../html_parts/section-pages-header.html');
    loadComponent('footer-part', '../html_parts/footer.html');
  });