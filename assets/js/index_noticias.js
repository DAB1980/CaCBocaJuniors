document.addEventListener('DOMContentLoaded', function() {
    fetch('../data/noticias.json')
        .then(response => response.json())
        .then(data => {
            const contenedor = document.getElementById('noticias_index');
            data.forEach((item, idx) => {
                const itemNoticia = document.createElement('div');
                itemNoticia.className = 'item_noticias_index';
                const link = document.createElement('a');
                link.href = `noticia.html?id=${item.id}`;

                
                const imagen = document.createElement('img');
                imagen.className = 'imagen_noticia';
                imagen.src = item.img;
                imagen.alt = item.alt;
                
                const itemNoticiaImg = document.createElement('div');
                itemNoticiaImg.className = 'item_noticia_img';
                itemNoticiaImg.appendChild(imagen)

                link.appendChild(itemNoticiaImg);

                // Crear y añadir el div del título
                const itemNoticiaTitulo = document.createElement('h3');
                itemNoticiaTitulo.className = 'item_noticia_titulo';
                itemNoticiaTitulo.textContent = item.title
                link.appendChild(itemNoticiaTitulo);

                // Crear y añadir el div del copete
                const itemNoticiaCopete = document.createElement('div');
                itemNoticiaCopete.className = 'item_noticia_copete';
                const copeteText = document.createElement('p');
                copeteText.textContent = item.subtitle;
                itemNoticiaCopete.appendChild(copeteText)
                link.appendChild(itemNoticiaCopete);

                // Añadir todos los elementos al contenedor principal
                itemNoticia.appendChild(link);

                // Añadir el contenedor principal al DOM
                contenedor.appendChild(itemNoticia);
            });
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
});