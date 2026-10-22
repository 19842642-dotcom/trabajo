
const nodemailer = require("nodemailer");

module.exports = async (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json({
            success: false,
            message: "Método no permitido."
        });
    }

    const webhookURL = process.env.DISCORD_WEBHOOK_URL;
    const gmailUser = process.env.GMAIL_USER;
    const gmailPassword = process.env.GMAIL_APP_PASSWORD;
    const correoDestino = process.env.CONTACT_EMAIL || gmailUser;

    if (!webhookURL || !gmailUser || !gmailPassword || !correoDestino) {
        return res.status(500).json({
            success: false,
            message: "Falta configurar el servidor."
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
        mensaje.length > 1000 ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    ) {
        return res.status(400).json({
            success: false,
            message: "Revisa los datos del formulario."
        });
    }

    const datos = {
        nombre: nombre.trim(),
        email: email.trim(),
        mensaje: mensaje.trim()
    };

    try {
        // Enviar a Discord
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
                        { name: "Nombre", value: datos.nombre },
                        { name: "Correo", value: datos.email },
                        { name: "Mensaje", value: datos.mensaje }
                    ]
                }]
            })
        });

        if (!respuesta.ok) {
            throw new Error("Error al enviar a Discord.");
        }

        // Configurar Gmail
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: gmailUser,
                pass: gmailPassword
            }
        });

        // Enviar correo
        await transporter.sendMail({
            from: `"Minuta Fresh" <${gmailUser}>`,
            to: correoDestino,
            replyTo: datos.email,
            subject: "Nuevo mensaje de contacto - Minuta Fresh",
            text:
                `Nuevo mensaje recibido desde Minuta Fresh\n\n` +
                `Nombre: ${datos.nombre}\n` +
                `Correo: ${datos.email}\n\n` +
                `Mensaje:\n${datos.mensaje}`
        });

        return res.status(200).json({
            success: true,
            message: "Mensaje enviado a Discord y Gmail."
        });

    } catch (error) {
        console.error("Error al enviar el mensaje:", error.message);

        return res.status(502).json({
            success: false,
            message: "No se pudo completar el envío. Inténtalo más tarde."
        });
    }
};
