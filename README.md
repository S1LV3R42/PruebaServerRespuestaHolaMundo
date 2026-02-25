# PruebaServerRespuestaHolaMundo

Servidor básico en **Node.js** que simula una terminal estilo *Fallout* y responde a solicitudes HTTP con una interfaz retro interactiva.

## Descripción
`server.js` crea un servidor HTTP que entrega una página HTML embebida con:
- Estética retro: fondo negro, texto verde fosforescente, tipografía monoespaciada.
- Animaciones de escritura para todo el texto.
- Cursor parpadeante y efectos visuales tipo terminal.
- Menú navegable con **Tab** y confirmación con **Enter**.
- Sonido de “beep” en cada confirmación.
- Borrado automático de pantalla y control de concurrencia para evitar textos mezclados.
- Submenús y respuestas que se escriben con animación y se cancelan correctamente si el usuario cambia de opción rápidamente.

## Estructura
- `server.js` — código del servidor y la interfaz cliente embebida.
- `README.md` — este archivo.

## Requisitos
- Node.js (v14+ recomendado).

## Instalación y ejecución
1. Clonar el repositorio:
    git clone https://github.com/S1LV3R42/PruebaServerRespuestaHolaMundo.git
2. Entrar en la carpeta del proyecto:
    cd PruebaServerRespuestaHolaMundo
3. Ejecutar el servidor:
    node server.js
4. Abrir en el navegador:
    http://127.0.0.1:3000
