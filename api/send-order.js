
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const destinatario = process.env.CONTACT_EMAIL;

  if (!apiKey || !destinatario) {
    return res.status(500).json({
      error: "Falta configurar Resend en Vercel."
    });
  }

  const precios = {
    fresa: 2.50,
    mango: 2.75,
    tamarindo: 2.50,
    limon: 2.25,
    pina: 2.50,
    chicle: 2.25,
    uva: 2.50,
    coco: 2.75,
    arrayan: 2.75
  };

  const nombres = {
    fresa: "Fresa",
    mango: "Mango",
    tamarindo: "Tamarindo",
    limon: "Limón con Chile",
    pina: "Piña",
    chicle: "Chicle Azul",
    uva: "Uva",
    coco: "Coco",
    arrayan: "Arrayán"
  };

  const { pedido, promo } = req.body || {};

  if (!pedido || typeof pedido !== "object" || Array.isArray(pedido)) {
    return res.status(400).json({ error: "Pedido inválido." });
  }

  const claves = Object.keys(precios);
  let total = 0;
  let unidades = 0;
  const lineas = [];

  for (const clave of claves) {
    const cantidad = pedido[clave] ?? 0;

    if (
      !Number.isInteger(cantidad) ||
      cantidad < 0 ||
      cantidad > 100
    ) {
      return res.status(400).json({
        error: "Cantidad de productos inválida."
      });
    }

    if (cantidad > 0) {
      unidades += cantidad;
      total += cantidad * precios[clave];
      lineas.push(
        `${nombres[clave]} x ${cantidad} - $${(cantidad * precios[clave]).toFixed(2)}`
      );
    }
  }

  const promosValidas = {
    promo_limon: "Minuta de Limón",
    promo_frutas: "Minuta de Frutas",
    promo_churro: "Minuta de Limón con Churro"
  };

  if (unidades === 0) {
    return res.status(400).json({
      error: "El pedido está vacío."
    });
  }

  if (unidades >= 4 && !promosValidas[promo]) {
    return res.status(400).json({
      error: "Selecciona la especialidad gratis de la promoción."
    });
  }

  if (unidades < 4 && promo != null) {
    return res.status(400).json({
      error: "La promoción requiere al menos cuatro minutas."
    });
  }

  const detallePromo = promosValidas[promo]
    ? `\nRegalo promocional: ${promosValidas[promo]} (gratis)`
    : "\nSin regalo promocional.";

  const contenido =
    "Se recibió un nuevo pedido de Minuta Fresh.\n\n" +
    lineas.join("\n") +
    detallePromo +
    `\n\nCantidad de minutas: ${unidades}` +
    `\nTotal a pagar: $${total.toFixed(2)}`;

  try {
    const respuesta = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "Minuta Fresh <onboarding@resend.dev>",
        to: [destinatario],
        subject: "Nuevo pedido de Minuta Fresh",
        text: contenido
      })
    });

    if (!respuesta.ok) {
      console.error("Resend:", await respuesta.text());
      return res.status(502).json({
        error: "Resend no pudo enviar el pedido."
      });
    }

    return res.status(200).json({
      success: true,
      message: "Pedido enviado correctamente."
    });
  } catch (error) {
    console.error("Error al enviar pedido:", error);
    return res.status(500).json({
      error: "No se pudo conectar con el servicio de correo."
    });
  }
}
