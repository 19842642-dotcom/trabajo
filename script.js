document.addEventListener("DOMContentLoaded", function () {

    const botonTema = document.getElementById("themeToggle");

    if (!botonTema) return;

    const icono = botonTema.querySelector("i");

    // Revisar si anteriormente se eligió modo oscuro
    const temaGuardado = localStorage.getItem("tema");

    if (temaGuardado === "oscuro") {
        document.body.classList.add("modo-oscuro");

        icono.classList.remove("fa-moon");
        icono.classList.add("fa-sun");
    }


    // Cambiar entre claro y oscuro
    botonTema.addEventListener("click", function () {

        document.body.classList.toggle("modo-oscuro");


        if (document.body.classList.contains("modo-oscuro")) {

            localStorage.setItem("tema", "oscuro");

            icono.classList.remove("fa-moon");
            icono.classList.add("fa-sun");

        } else {

            localStorage.setItem("tema", "claro");

            icono.classList.remove("fa-sun");
            icono.classList.add("fa-moon");

        }

    });

});


// Mensaje de los productos
function mostrarMensaje(producto) {

    alert(
        "Has seleccionado: " + producto +
        "\n\nGracias por visitar Minuta Fresh."
    );
    // CONECTAR MINUTA FRESH CON DISCORD

const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1557746325364412486/hARqnbRxguhCotdpoTwd-Bpl9jXsKJjSdO4-34EN4Uzc9uxhPg5MJxq_qhLmRI_0Gm2z";

async function enviarADiscord(nombre, email, mensaje) {
    try {
        const respuesta = await fetch(DISCORD_WEBHOOK_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                embeds: [{
                    title: "📩 Nuevo mensaje de Minuta Fresh",
                    fields: [
                        { name: "Nombre", value: nombre },
                        { name: "Correo", value: email },
                        { name: "Mensaje", value: mensaje }
                    ],
                    color: 6716746
                }]
            })
        });

        if (!respuesta.ok) {
            throw new Error("No se pudo enviar el mensaje");
        }

        alert("¡Mensaje enviado a Discord correctamente!");

    } catch (error) {
        alert("Error al enviar el mensaje a Discord.");
        console.error(error);
    }
}

/* CONECTAR FORMULARIO CON DISCORD */

const formularioContacto = document.getElementById("contactForm");

if (formularioContacto) {
    formularioContacto.addEventListener("submit", async function (evento) {
        evento.preventDefault();

        const resultado = document.getElementById("contactResult");
        const boton = formularioContacto.querySelector('button[type="submit"]');

        resultado.style.display = "block";
        resultado.className = "alert alert-info mt-4";
        resultado.textContent = "Enviando mensaje...";

        boton.disabled = true;

        try {
            const nombre = document.getElementById("nombre").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensaje = document.getElementById("mensaje").value.trim();

const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1557746325364412486/hARqnbRxguhCotdpoTwd-Bpl9jXsKJjSdO4-34EN4Uzc9uxhPg5MJxq_qhLmRI_0Gm2z";
            const respuesta = await fetch("", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: "Minuta Fresh",
                    embeds: [{
                        title: "📩 Nuevo mensaje de contacto",
                        color: 6716746,
                        fields: [
                            { name: "Nombre", value: nombre },
                            { name: "Correo electrónico", value: email },
                            { name: "Mensaje", value: mensaje }
                        ]
                    }]
                })
            });

            if (!respuesta.ok) {
                throw new Error("Discord respondió con un error.");
            }

            resultado.className = "alert alert-success mt-4";
            resultado.textContent = "¡Mensaje enviado correctamente a Discord!";
            formularioContacto.reset();

        } catch (error) {
            console.error("Error al enviar:", error);

            resultado.className = "alert alert-danger mt-4";
            resultado.textContent =
                "No se pudo enviar el mensaje. Revisa la URL del webhook y tu conexión.";
        } finally {
            boton.disabled = false;
        }
    });
}

/* ==========================================
   MODO CLARO Y OSCURO - MINUTA FRESH
========================================== */

document.addEventListener("DOMContentLoaded", function () {
    const botonTema = document.getElementById("themeToggle");

    if (!botonTema) {
        return;
    }

    const icono = botonTema.querySelector("i");

    function aplicarTema(oscuro) {
        document.body.classList.toggle("modo-oscuro", oscuro);

        if (icono) {
            icono.classList.toggle("fa-moon", !oscuro);
            icono.classList.toggle("fa-sun", oscuro);
        }
    }

    const temaGuardado = localStorage.getItem("tema");
    aplicarTema(temaGuardado === "oscuro");

    botonTema.addEventListener("click", function () {
        const activarOscuro =
            !document.body.classList.contains("modo-oscuro");

        aplicarTema(activarOscuro);

        localStorage.setItem(
            "tema",
            activarOscuro ? "oscuro" : "claro"
        );
    });
});

}