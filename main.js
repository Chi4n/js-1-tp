//Alumno: Gian Franco Baeza

let cantidadVentas = 0;
let gananciasTotales = 0;

function registrarVenta(){
    let cantidadCafes = prompt("Ingrese la cantidad de cafés vendidos:");
    let precioCafe = prompt("Ingrese el precio unitario del café:");

    cantidadVentas++;
    gananciasTotales += cantidadCafes * precioCafe;

    
}

while(true){
  let opcion = prompt("Bienvenido al sistema de registro de ventas de café. ¿Qué acción desea realizar?\n1. Registrar una venta\n2. Ver ganancias totales\n3. Salir");

    if(opcion == "1"){
      
      registrarVenta();

      alert(`Venta registrada. Ganancias totales hasta ahora: ${gananciasTotales}`);
    }
    else if(opcion == "2"){
      alert(`Las ganancias totales hasta ahora son:  ${gananciasTotales}`);
    }
    else if(opcion == "3"){
      alert("¡Hasta la próxima!")
      break;
    }
    else{
      alert(" Opción inválida. Por favor seleccione una opción válida. ");
    }
}