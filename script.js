async function getCatImage() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        const data = await response.json();
        document.getElementById('cat-image').src = data[0].url;
    } catch (error) {
        console.error('Error al obtener la imagen:', error);
    }
}

// Cargar una imagen al inicio
getCatImage();