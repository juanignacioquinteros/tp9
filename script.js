// Declaración de variables estáticas del torneo y equipos (const y let)
const NOMBRE_TORNEO = "Mundial de Fútbol 2026";
const EQUIPO_LOCAL = "Argentina";
const EQUIPO_VISITANTE = "Francia";
const GRUPO = "Grupo A";

let proximoPartidoFecha = "20/06/2026";
let proximoPartidoHora = "16:00 hs";

// Alerta de bienvenida con concatenación de variables al cargar la página
alert("¡Bienvenido al Sistema de Gestión del " + NOMBRE_TORNEO + "!\nPróximo encuentro: " + EQUIPO_LOCAL + " vs. " + EQUIPO_VISITANTE + " (" + GRUPO + ") el " + proximoPartidoFecha + " a las " + proximoPartidoHora);

// Función de validación de resultado con lógica if/else
function evaluarResultado(golesLocal, golesVisitante) {
  let mensaje = "";

  if (golesLocal > golesVisitante) {
    mensaje = "¡" + EQUIPO_LOCAL + " ganó el partido contra " + EQUIPO_VISITANTE + "!";
  } else if (golesLocal < golesVisitante) {
    mensaje = EQUIPO_LOCAL + " perdió el partido contra " + EQUIPO_VISITANTE + ".";
  } else {
    mensaje = EQUIPO_LOCAL + " y " + EQUIPO_VISITANTE + " empataron el encuentro.";
  }

  alert(mensaje);
}