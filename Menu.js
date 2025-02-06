class Menu {
    constructor(opciones) {
    this.opciones = opciones;
    }

    mostrarMenu() {
    let mensaje = "📋 Menú Principal 📋\n";
    
    this.opciones.forEach((opcion, index) => {
        mensaje += `${index + 1}. ${opcion}\n`;
    });
    mensaje += "0. Salir\n";

      // Mostrar el menú y capturar la opción del usuario
    let seleccion = parseInt(prompt(mensaje));
    this.procesarSeleccion(seleccion);
    }

    procesarSeleccion(seleccion) {
    if (seleccion === 0) {
        alert("👋 ¡Gracias por usar el menú! Hasta luego.");
    } else if (seleccion > 0 && seleccion <= this.opciones.length) {
        alert(`Seleccionaste: ${this.opciones[seleccion - 1]}`);
        this.mostrarMenu(); // Volver a mostrar el menú
    } else {
        alert("❌ Opción inválida. Por favor, inténtalo de nuevo.");
        this.mostrarMenu(); // Volver a intentar
    }
    }
}

  // Crear un menú con opciones
const menu = new Menu([
    "Ver perfil",
    "Editar configuración",
    "Consultar notificaciones",
    "Cerrar sesión"
]);

  // Mostrar el menú al iniciar
menu.mostrarMenu();
