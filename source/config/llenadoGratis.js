/**
 * Archivo de configuración que 
 * guarda los datos del programa
 * de fidelización "Llenado gratis"
 */
const llenadoGratis = JSON.parse(window.localStorage.getItem('llenadoGratis'));

export const llenado = llenadoGratis ? {
    cantidad: llenadoGratis.cantidad ? llenadoGratis.cantidad : 10,
} : false;