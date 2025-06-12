document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica de Botones de Solución ---
    const solutionButtons = document.querySelectorAll('.solution-btn');
    const solutionDisplay = document.getElementById('solution-display');

    const solutions = {
        separacion: 'Cuidar el medio ambiente es importante para proteger la naturaleza. Algunas formas de hacerlo son: reducir, reutilizar y reciclar para generar menos basura, ahorrar agua, energía en casa y en la escuela, evitar plásticos de un solo uso (usando botellas y bolsas reutilizables) e informarse y participar en actividades ecológicas..',
        huerto: 'Reduce, Reutiliza y Recicla para generar menos basura.',
        comedores: 'Charlas, carteles o videos que hablen sobre este tema y su importancia.',
        talleres: 'Colocar más botes de basura, separar los residuos y tener las instalaciones limpias.',
        reforestacion: 'Consumir alimentos nutritivos y traerlos de casa en toper que se usen de nuevo.'
    };

    solutionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const solutionKey = button.dataset.solution;
            solutionDisplay.textContent = solutions[solutionKey] || 'No hay descripción para esta solución.';
        });
    });

    // Inicializar el display de soluciones con un mensaje por defecto
    solutionDisplay.textContent = 'Haz clic en un botón para ver una propuesta de solución.';

    // --- Lógica del Carrusel de Imágenes ---
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');

    let counter = 0;
    const size = carouselImages[0].clientWidth; // Ancho de una imagen

    // Ajustar el slide inicial
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    nextBtn.addEventListener('click', () => {
        if (counter >= carouselImages.length - 1) { // Si ya estamos en la última imagen
            counter = 0; // Volver al inicio
        } else {
            counter++;
        }
        carouselSlide.style.transition = 'transform 0.5s ease-in-out';
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    prevBtn.addEventListener('click', () => {
        if (counter <= 0) { // Si ya estamos en la primera imagen
            counter = carouselImages.length - 1; // Ir a la última
        } else {
            counter--;
        }
        carouselSlide.style.transition = 'transform 0.5s ease-in-out';
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    // Clonar imágenes para un carrusel infinito (opcional, para un efecto más suave)
    // Para simplificar, en esta versión no se implementa el clonado, pero se puede añadir si se desea un "loop" más fluido.

    // --- Lógica del Formulario de Contacto ---
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar el envío por defecto del formulario

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const suggestion = document.getElementById('suggestion').value;

        // **Aquí es donde necesitas un backend para enviar el correo.**
        // JavaScript del lado del cliente NO puede enviar correos directamente a un correo personal por razones de seguridad.

        // Una forma común de manejar esto es usar un servicio de backend como:
        // 1. Un script de PHP en tu servidor.
        // 2. Un servicio de terceros como EmailJS, Formspree, Netlify Forms, etc.
        // 3. Un backend personalizado con Node.js, Python, etc.

        // Ejemplo conceptual (NO FUNCIONAL SIN BACKEND):
        /*
        fetch('/send-email', { // Esta ruta debería ser tu endpoint de backend
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, suggestion }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('¡Gracias por tu sugerencia! Ha sido enviada.');
                contactForm.reset(); // Limpiar el formulario
            } else {
                alert('Hubo un error al enviar tu sugerencia. Por favor, intenta de nuevo.');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Hubo un problema de conexión. Por favor, intenta de nuevo.');
        });
        */

        // **Para este ejemplo, solo mostraremos una alerta para simular el envío:**
        alert(`Sugerencia enviada:\n\nNombre: ${name}\nCorreo: ${email}\nSugerencia: ${suggestion}\n\nNota: Para enviar esto a un correo real, se necesita un servidor (backend).`);
        contactForm.reset(); // Limpiar el formulario después de "enviar"
    });
});