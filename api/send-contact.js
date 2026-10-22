
module.exports = async (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            message: "Método no permitido."
        });
    }

    const webhookURL = process.env.DISCORD_WEBHOOK_URL;
    const apiKey = process.env.RESEND_API_KEY;
    const destinatario = process.env.CONTACT_EMAIL;

    if (!webhookURL || !apiKey || !destinatario) {
        return res.status(500).json({
            success: false,
            message: "Falta configurar el envío en Vercel."
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
        const texto =
            "Nuevo mensaje de contacto - Minuta Fresh\n\n" +
            "Nombre: " + nombre.trim() + "\n" +
            "Correo: " + email.trim() + "\n\n" +
            "Mensaje:\n" + mensaje.trim();

        const [respuestaDiscord, respuestaCorreo] = await Promise.all([
            fetch(webhookURL, {
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
                            { name: "Nombre", value: nombre.trim() },
                            { name: "Correo electrónico", value: email.trim() },
                            { name: "Mensaje", value: mensaje.trim() }
                        ]
                    }]
                })
            }),

            fetch("https://api.resend.com/emails", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${apiKey}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    from: "Minuta Fresh <onboarding@resend.dev>",
                    to: [destinatario],
                    reply_to: email.trim(),
                    subject: "Nuevo mensaje de contacto - Minuta Fresh",
                    text: texto
                })
            })
        ]);

        if (!respuestaDiscord.ok || !respuestaCorreo.ok) {
            console.error(
                "Estado Discord:", respuestaDiscord.status,
                "Estado correo:", respuestaCorreo.status
            );

            return res.status(502).json({
                success: false,
                message: "No se pudo confirmar el envío a ambos servicios."
            });
        }

        return res.status(200).json({
            success: true,
            message: "Mensaje enviado a Gmail y Discord."
        });

    } catch (error) {
        console.error("Error al enviar el mensaje de contacto.");

        return res.status(502).json({
            success: false,
            message: "Error de conexión al enviar el mensaje."
        });
    }
};
