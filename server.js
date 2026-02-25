// BÁSICO SERVIDOR HTTP EN NODE.JS

// import http from 'http';

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hola Mundo\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Servidor corriendo en http://${hostname}:${port}/`);
// });

// ESTILO FALLOUT BÁSICO  

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end(`
//     <!DOCTYPE html>
//     <html lang="es">
//     <head>
//       <meta charset="UTF-8">
//       <title>Terminal Fallout</title>
//       <style>
//         body {
//           background-color: black;
//           color: #00ff00;
//           font-family: 'Courier New', monospace;
//           padding: 20px;
//         }
//         .screen {
//           border: 2px solid #00ff00;
//           padding: 20px;
//           width: 600px;
//           margin: auto;
//           box-shadow: 0 0 20px #00ff00;
//         }
//         h1 {
//           text-align: center;
//           text-transform: uppercase;
//         }
//         p {
//           margin-top: 20px;
//         }
//       </style>
//     </head>
//     <body>
//       <div class="screen">
//         <h1>Bienvenido al Sistema Vault-Tec</h1>
//         <p>Acceso autorizado...</p>
//         <p>Hola Mundo</p>
//       </div>
//     </body>
//     </html>
//   `);
// });

// server.listen(port, hostname, () => {
//   console.log(`Servidor corriendo en http://${hostname}:${port}/`);
// });

// ESTILO FALLOUT AVANZADO

// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end(`<!DOCTYPE html>
// <html lang="es">
// <head>
//   <meta charset="UTF-8">
//   <title>Terminal Fallout</title>
//   <style>
//     body {
//       background-color: black;
//       color: #00ff00;
//       font-family: 'Courier New', monospace;
//       padding: 20px;
//     }
//     .screen {
//       border: 2px solid #00ff00;
//       padding: 20px;
//       width: 600px;
//       margin: auto;
//       box-shadow: 0 0 20px #00ff00;
//     }
//     h1 {
//       text-align: center;
//       text-transform: uppercase;
//     }
//     .typing {
//       white-space: pre-wrap;
//       overflow: hidden;
//       border-right: .15em solid #00ff00;
//       animation: blink-caret .75s step-end infinite;
//     }
//     @keyframes blink-caret {
//       from, to { border-color: transparent }
//       50% { border-color: #00ff00; }
//     }
//   </style>
// </head>
// <body>
//   <div class="screen">
//     <h1>Vault-Tec Terminal</h1>
//     <div id="output" class="typing"></div>
//   </div>
//   <script>
//     const text = "Acceso autorizado...\\nBienvenido al Sistema Vault-Tec\\nHola Mundo";
//     let i = 0;
//     function typeWriter() {
//       if (i < text.length) {
//         document.getElementById("output").innerHTML += text.charAt(i);
//         i++;
//         setTimeout(typeWriter, 50);
//       }
//     }
//     window.onload = typeWriter;
//   </script>
// </body>
// </html>`);
// });

// server.listen(port, hostname, () => {
//   console.log(`Servidor corriendo en http://${hostname}:${port}/`);
// });

// ESTILO FALLOUT AVANZADO CON INTERACCIÓN

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Vault-Tec Terminal</title>
  <style>
    body {
      background-color: black;
      color: #00ff00;
      font-family: 'Courier New', monospace;
      padding: 20px;
    }
    .screen {
      border: 2px solid #00ff00;
      padding: 20px;
      width: 700px;
      margin: auto;
      box-shadow: 0 0 20px #00ff00;
    }
    h1 {
      text-align: center;
      text-transform: uppercase;
    }
    .typing {
      white-space: pre-wrap;
      overflow: hidden;
      border-right: .15em solid #00ff00;
      animation: blink-caret .75s step-end infinite;
      min-height: 120px;
    }
    @keyframes blink-caret {
      from, to { border-color: transparent }
      50% { border-color: #00ff00; }
    }
    .menu {
      margin-top: 20px;
    }
    .menu-item {
      margin: 5px 0;
      padding: 5px;
      outline: none;
      background: black;
      color: #00ff00;
      border: none;
      font-family: inherit;
      text-align: left;
      width: 100%;
    }
    .menu-item:focus {
      background-color: #003300;
    }
  </style>
</head>
<body>
  <div class="screen">
    <h1>Vault-Tec Terminal</h1>
    <div id="output" class="typing"></div>
    <div class="menu">
      <button class="menu-item">Aviso de seguridad</button>
      <button class="menu-item">Registro de empleados</button>
      <button class="menu-item">Protocolos de emergencia</button>
      <button class="menu-item">Salir</button>
    </div>
  </div>
  <audio id="beep" src="https://actions.google.com/sounds/v1/alarms/beep_short.ogg"></audio>
  <script>
    let typingTimeouts = []; // para cancelar animaciones previas

    function clearTyping() {
      typingTimeouts.forEach(t => clearTimeout(t));
      typingTimeouts = [];
      document.getElementById("output").innerHTML = "";
    }

    function typeWriter(text, callback) {
      clearTyping();
      const output = document.getElementById("output");
      let i = 0;
      function write() {
        if (i < text.length) {
          output.innerHTML += text.charAt(i);
          i++;
          typingTimeouts.push(setTimeout(write, 40));
        } else if (callback) {
          callback();
        }
      }
      write();
    }

    // mensaje inicial
    window.onload = () => {
      typeWriter("Acceso autorizado...\\nBienvenido al Sistema Vault-Tec");
      document.querySelector(".menu-item").focus();
    };

    const beep = document.getElementById("beep");
    const items = document.querySelectorAll(".menu-item");

    items.forEach((item, index) => {
      item.addEventListener("keydown", (e) => {
        if (e.key === "Tab") {
          e.preventDefault();
          let next = (index + 1) % items.length;
          items[next].focus();
        }
        if (e.key === "Enter") {
          beep.play();
          let response = "";
          switch(item.textContent) {
            case "Aviso de seguridad":
              response = "Aviso de seguridad:\\nMantenga cerradas las compuertas del refugio.";
              break;
            case "Registro de empleados":
              response = "Registro de empleados:\\nSupervisor - Dr. Smith\\nTécnico - J. Doe.";
              break;
            case "Protocolos de emergencia":
              response = "Protocolos de emergencia:\\nDiríjase al nivel inferior y espere instrucciones.";
              break;
            case "Salir":
              response = "Saliendo del sistema...\\nHasta pronto.";
              break;
          }
          typeWriter(response);
        }
      });
    });
  </script>
</body>
</html>`);
});

server.listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});

