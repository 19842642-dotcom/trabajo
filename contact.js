
module.exports = async (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            message: "Método no permitido."
        });
    }

const webhookURL = "https://discord.com/api/webhooks/1562811350768681052/siBFFclWHrurqiNqgkH5Dzw5peG0QhPN-TDP_0K1f7SgMrtuQr00YSfZc_xe5TRxwFPi";

    if (!webhookURL) {
        return res.status(500).json({
            success: false,
            message: "Falta configurar el webhook en el servidor."
        });
    }

    const { nombre, email, mensaje } = req.body || {};

    if (
        typeof nombre !== "string" ||
        typeof email !== "string" ||
        typeof mensaje !== "string" ||
        !nombre.trim() ||
        !email.trim() ||
        !mensaje.trim() ||
        nombre.length > 100 ||
        email.length > 200 ||
        mensaje.length > 1000
    ) {
        return res.status(400).json({
            success: false,
            message: "Revisa los datos del formulario."
        });
    }

    try {
        const respuesta = await fetch(webhookURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: "Minuta Fresh",
                allowed_mentions: { parse: [] },
                embeds: [{
                    title: "Nuevo mensaje de contacto",
                    color: 6716746,
                    fields: [
                        {
                            name: "Nombre",
                            value: nombre.trim()
                        },
                        {
                            name: "Correo electrónico",
                            value: email.trim()
                        },
                        {
                            name: "Mensaje",
                            value: mensaje.trim()
                        }
                    ]
                }]
            })
        });

        if (!respuesta.ok) {
            throw new Error("Discord respondió con error.");
        }

        return res.status(200).json({
            success: true,
            message: "Mensaje enviado correctamente."
        });
    } catch (error) {
        console.error("Error al enviar el mensaje a Discord.");

        return res.status(502).json({
            success: false,
            message: "No se pudo enviar el mensaje. Inténtalo más tarde."
        });
    }
};