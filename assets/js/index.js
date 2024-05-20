document.addEventListener('DOMContentLoaded', () => {
  // Cargar componentes
  loadComponent('header-part', '../html_parts/index-header.html');
  loadComponent('footer-part', '../html_parts/footer.html');

  //Cargar últimas noticias
  getLastNews()
});

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

const getLastNews = () =>{
  fetch('./data/noticias.json')
    .then(response => response.json())
    .then(data => {
        const parNoticias = data.slice(0, 2)
        const noticiasIndex = document.getElementById('noticias_index')
        parNoticias.forEach(element => {
          const itemNoticiasIndex = document.createElement('a')
          itemNoticiasIndex.href = `./html_noticias/noticia.html?id=${element.id}`;

          itemNoticiasIndex.className = 'item_noticias_index'

          const itemNoticiaImg = document.createElement('div')
          itemNoticiaImg.className = 'item_noticia_img'

          const imagenNoticia = document.createElement('img')
          imagenNoticia.className = 'imagen_noticia'
          imagenNoticia.src = element.img
          itemNoticiaImg.appendChild(imagenNoticia)
          itemNoticiasIndex.appendChild(itemNoticiaImg)
          
          const itemNoticiaTitulo = document.createElement('div')
          itemNoticiaTitulo.className = 'item_noticia_titulo'
          itemNoticiaTitulo.textContent = element.title
          itemNoticiasIndex.appendChild(itemNoticiaTitulo)

          const itemNoticiaCopete = document.createElement('div')
          itemNoticiaCopete.className = 'item_noticia_copete'
          itemNoticiaCopete.textContent = element.subtitle
          itemNoticiasIndex.appendChild(itemNoticiaCopete)
          
          
          
          noticiasIndex.appendChild(itemNoticiasIndex)
        });
    })
    .catch(error => console.error('Error al cargar el JSON:', error));
}
