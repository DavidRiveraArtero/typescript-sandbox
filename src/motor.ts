import {
  LineaTicket,
  ResultadoLineaTicket,
  ResultadoTotalTicket,
  TicketFinal,
  TipoIva,
  TotalPorTipoIva,
} from "./modelo";

export const calculaTicket = (lineasTicket: LineaTicket[]) => {
  const lineaTicket = calcularLineaTicket(lineasTicket);
  const totalTicket = calcularTotalTicket(lineaTicket);
  const desgloseIvaFinal = calcularTotalTipoIva(lineaTicket);

  const ticketFinal: TicketFinal = {
    lineas: lineaTicket,
    total: totalTicket,
    desgloseIva: desgloseIvaFinal,
  };

  console.log(ticketFinal);
};

export const calcularLineaTicket = (
  lineasTicket: LineaTicket[]
): ResultadoLineaTicket[] => {
  let resultadoLineaTicket: ResultadoLineaTicket[] = [];
  lineasTicket.map((ticket) => {
    const precioIva = calcularIva(
      ticket.producto.tipoIva,
      ticket.producto.precio
    );

    resultadoLineaTicket.push({
      nombre: ticket.producto.nombre,
      cantidad: ticket.cantidad,
      precionSinIva: ticket.producto.precio,
      tipoIva: ticket.producto.tipoIva,
      precioConIva: precioIva,
    });
  });
  return resultadoLineaTicket;
};

// CALCULAMOS EL IVA TOTAL DE CADA PRODUCTO
export const calcularIva = (
  tipoIva: string,
  precioProducto: number
): number => {
  const porcentajeIva: number = tiposIva(tipoIva);
  const precioIva = precioProducto + precioProducto * (porcentajeIva / 100);
  return precioIva;
};

// CALCULAMOS EL PRECIO DEPENDIENDO DE LA CANTIDAD
const calcularTotalProductos = (
  precioProducto: number,
  cantadia: number
): number => {
  const precioTotal = precioProducto * cantadia;
  return precioTotal;
};

// LOS PORCENTAJES DE CADA IVA DEPENDIENDO DEL TIPO
export const tiposIva = (tipoIva: string): number => {
  switch (tipoIva) {
    case "general":
      return 21;
      break;
    case "reducido":
      return 10;
      break;
    case "superreducidoA":
      return 5;
      break;
    case "superreducidoB":
      return 4;
      break;
    case "superreducidoC":
      return 0;
      break;
    case "sinIva":
      return 0;
      break;
    default:
      return 0;
  }
};

// CALCULAMOS EL TOTAL DE LO QUE PAGA EL CLIENTE TANTO CON IVA COMO SIN IVA
export const calcularTotalTicket = (
  lineaTicket: ResultadoLineaTicket[]
): ResultadoTotalTicket => {
  let ivaPagado: number = 0;
  let totalSinIva: number = 0;

  lineaTicket.map((ticket) => {
    ivaPagado += calcularTotalProductos(ticket.precioConIva, ticket.cantidad);
    totalSinIva += calcularTotalProductos(
      ticket.precionSinIva,
      ticket.cantidad
    );
  });
  const resultadoTotalTicket: ResultadoTotalTicket = {
    totalSinIva: totalSinIva,
    totalConIva: ivaPagado,
    totalIva: Number((ivaPagado - totalSinIva).toFixed(2)),
  };
  return resultadoTotalTicket;
};

// CALCULAMOS EL TOTAL POR TIPO DE IVA
// ---------------SE QUE ES UN POCO LIOSO PERO NO SE ME HA OCURRIDO OTRA FORMA-----------------------------
export const calcularTotalTipoIva = (
  lineaTicket: ResultadoLineaTicket[]
): TotalPorTipoIva[] => {
  const totalPorIva: TotalPorTipoIva[] = [];
  const listaProv: TipoIva[] = [];
  lineaTicket.forEach((ticket) => {
    if (!listaProv.includes(ticket.tipoIva)) {
      const listaFiltrada = lineaTicket.filter(
        (iva) => iva.tipoIva === ticket.tipoIva
      );
      let total: number = listaFiltrada.reduce(
        (acc, precio) => acc + precio.precioConIva,
        0
      );
      listaProv.push(ticket.tipoIva);
      totalPorIva.push({
        tipoIva: ticket.tipoIva,
        cuantia: Number(total.toFixed(2)),
      });
    }
  });
  return totalPorIva;
};
