
/* ==========================================
   MINUTA FRESH
   Pedidos, contacto, idioma, tema y música
========================================== */

// ==========================================
// CONFIGURACIÓN DE EMAILJS
// ==========================================

const EMAILJS_PUBLIC_KEY = "TU_PUBLIC_KEY";
const EMAILJS_SERVICE_ID = "TU_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "TU_TEMPLATE_ID";

// ==========================================
// CONFIGURACIÓN DE DISCORD
// IMPORTANTE: este webhook será visible
// públicamente si se coloca en este archivo.
// ==========================================

const DISCORD_WEBHOOK_URL = "PEGA_AQUI_TU_WEBHOOK_NUEVO";

// ==========================================
// PRECIOS DE LAS MINUTAS
// ==========================================

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

// ==========================================
// ESTADO DEL PEDIDO
// ==========================================

let pedido = {
    fresa: 0,
    mango: 0,
    tamarindo: 0,
    limon: 0,
    pina: 0,
    chicle: 0,
    uva: 0,
    coco: 0,
    arrayan: 0,
    promo: null
};

// ==========================================
// TRADUCCIONES
// ==========================================

const translations = {
    es: {
        nav_inicio: "Inicio",
        nav_js: "JavaScript",
        nav_jquery: "jQuery",
        nav_json: "JSON",
        nav_hosting: "Hosting",
        nav_cuestionario: "Cuestionario",
        nav_contacto: "Contacto",

        eyebrow: "SABOR · FRESCURA · TRADICIÓN",
        hero_h2: "El sabor que refresca tu día.",
        hero_p1: "Minuta Fresh es una propuesta de minutas de hielo con sabores frutales, pensada para jóvenes y familias que buscan una opción refrescante, deliciosa y accesible.",
        hero_propuesta_lbl: "Propuesta de valor:",
        hero_propuesta_txt: "ofrecer diferentes sabores, una presentación atractiva y precios accesibles.",
        btn_ver_sabores: "Ver sabores",
        btn_contacto: "Contactarnos",

        sabores_small: "NUESTROS SABORES",
        sabores_title: "Minutas favoritas",
        sabores_subtitle: "Conoce algunas de las opciones de Minuta Fresh.",
        btn_elegir: "Elegir",

        fresa_title: "Fresa",
        fresa_desc: "Una combinación refrescante con sabor dulce a fresa.",
        mango_title: "Mango",
        mango_desc: "Sabor tropical para quienes disfrutan el mango.",
        tamarindo_title: "Tamarindo",
        tamarindo_desc: "Un sabor dulce y ácido para una experiencia diferente.",
        limon_title: "Limón con Chile",
        limon_desc: "Sabor cítrico e intenso, acentuado con un toque picante y salado.",
        pina_title: "Piña",
        pina_desc: "Deliciosa dulzura tropical con trocitos naturales de piña jugosa.",
        chicle_title: "Chicle Azul",
        chicle_desc: "El favorito de los más jóvenes, dulce, colorido y muy divertido.",
        uva_title: "Uva",
        uva_desc: "Intenso jarabe de uva con el nivel perfecto de dulzura refrescante.",
        coco_title: "Coco",
        coco_desc: "Cremoso sabor a coco playero, suave e ideal para los días calurosos.",
        arrayan_title: "Arrayán",
        arrayan_desc: "Sabor 100% tradicional con el toque agridulce único del arrayán.",

        promo_small: "SUPER PROMO",
        promo_title: "¡Lleva más y disfruta más!",
        promo_subtitle: "Compra cuatro minutas de vaso y llévate una de nuestras especialidades en plato.",
        promo_lock_msg: "Pide 4 minutas de vaso para elegir 1 regalo gratis.",
        promo_unlocked_msg: "¡Felicidades! Tienes 1 especialidad GRATIS disponible.",
        precio_promo: "Promo Gratis",
        btn_participar: "Participar",
        btn_seleccionado: "¡Elegido!",
        promo_limon_title: "Minuta de Limón",
        promo_limon_desc: "Refrescante minuta de limón incluida en tu paquete promocional.",
        promo_frutas_title: "Minuta de Frutas",
        promo_frutas_desc: "Deliciosa selección de frutas frescas para acompañar tu orden.",
        promo_churro_title: "Minuta de Limón con Churro",
        promo_churro_desc: "El toque tradicional único con el clásico churrito salvadoreño.",

        resumen_titulo: "Tu Pedido:",
        btn_ver_pedido: "Ver Pedido",
        modal_resumen_titulo: "Resumen de tu Pedido",
        btn_seguir_comprando: "Seguir pidiendo",
        btn_enviar_pedido: "Confirmar Pedido",
        lbl_total: "Total a pagar:",
        modal_exito_titulo: "¡Pedido Procesado!",
        modal_exito_sub: "¡Muchas gracias por elegir Minuta Fresh!",
        modal_btn_aceptar: "Aceptar",
        msj_sin_items: "No has agregado minutas a tu pedido.",
        msj_falta_promo: "¡Atención! Has pedido 4 o más minutas. No olvides seleccionar tu especialidad gratis en la sección Super Promo.",

        identidad_small: "IDENTIDAD DE MARCA",
        identidad_title: "Nuestra paleta",
        verde_title: "Verde olivo",
        verde_desc: "Representa naturaleza, confianza y elegancia.",
        salvia_title: "Verde salvia",
        salvia_desc: "Aporta tranquilidad y frescura.",
        beige_title: "Beige",
        beige_desc: "Aporta calidez y un estilo artesanal.",

        investigacion_small: "INVESTIGACIÓN",
        investigacion_title: "Tecnologías utilizadas",
        js_desc: "Comportamiento e interacción.",
        jquery_desc: "Librería y efectos.",
        json_desc: "Intercambio de datos.",
        hosting_desc: "Publicación en internet.",

        footer_p: "Minuta Fresh · Proyecto escolar de desarrollo web"
    },

    en: {
        nav_inicio: "Home",
        nav_js: "JavaScript",
        nav_jquery: "jQuery",
        nav_json: "JSON",
        nav_hosting: "Hosting",
        nav_cuestionario: "Quiz",
        nav_contacto: "Contact",

        eyebrow: "FLAVOR · FRESHNESS · TRADITION",
        hero_h2: "The flavor that refreshes your day.",
        hero_p1: "Minuta Fresh is a shaved ice proposal with fruit flavors, designed for youth and families looking for a refreshing, delicious, and affordable option.",
        hero_propuesta_lbl: "Value proposition:",
        hero_propuesta_txt: "offering different flavors, an attractive presentation, and accessible prices.",
        btn_ver_sabores: "View flavors",
        btn_contacto: "Contact us",

        sabores_small: "OUR FLAVORS",
        sabores_title: "Favorite Shaved Ices",
        sabores_subtitle: "Discover some of the Minuta Fresh options.",
        btn_elegir: "Choose",

        fresa_title: "Strawberry",
        fresa_desc: "A refreshing combination with sweet strawberry flavor.",
        mango_title: "Mango",
        mango_desc: "Tropical flavor for mango lovers.",
        tamarindo_title: "Tamarind",
        tamarindo_desc: "A sweet and sour flavor for a unique experience.",
        limon_title: "Lemon with Chili",
        limon_desc: "Intense citrus flavor, enhanced with a spicy and salty touch.",
        pina_title: "Pineapple",
        pina_desc: "Delicious tropical sweetness with natural juicy pineapple pieces.",
        chicle_title: "Blue Bubblegum",
        chicle_desc: "The favorite among the youth, sweet, colorful, and super fun.",
        uva_title: "Grape",
        uva_desc: "Rich grape syrup with the perfect balance of refreshing sweetness.",
        coco_title: "Coconut",
        coco_desc: "Creamy beach coconut flavor, smooth and ideal for hot days.",
        arrayan_title: "Arrayán",
        arrayan_desc: "100% traditional flavor with the unique sweet-and-sour touch of arrayán.",

        promo_small: "SUPER PROMO",
        promo_title: "Get More, Enjoy More!",
        promo_subtitle: "Buy four cup shaved ices and get one of our plate specialties for free.",
        promo_lock_msg: "Order 4 cup shaved ices to unlock 1 free gift.",
        promo_unlocked_msg: "Congratulations! You have 1 FREE specialty unlocked.",
        precio_promo: "Free Promo",
        btn_participar: "Claim Promo",
        btn_seleccionado: "Selected!",
        promo_limon_title: "Lemon Shaved Ice",
        promo_limon_desc: "Refreshing lemon shaved ice included in your promo pack.",
        promo_frutas_title: "Fruit Shaved Ice",
        promo_frutas_desc: "Delicious selection of fresh fruits to accompany your order.",
        promo_churro_title: "Lemon Shaved Ice with Churro",
        promo_churro_desc: "The unique traditional flavor with classic Salvadoran churritos.",

        resumen_titulo: "Your Order:",
        btn_ver_pedido: "View Order",
        modal_resumen_titulo: "Order Summary",
        btn_seguir_comprando: "Keep ordering",
        btn_enviar_pedido: "Confirm Order",
        lbl_total: "Total to pay:",
        modal_exito_titulo: "Order Processed!",
        modal_exito_sub: "Thank you for choosing Minuta Fresh!",
        modal_btn_aceptar: "Accept",
        msj_sin_items: "You haven't added shaved ices yet.",
        msj_falta_promo: "Notice! You ordered 4+ shaved ices. Don't forget to pick your free specialty in the Super Promo section.",

        identidad_small: "BRAND IDENTITY",
        identidad_title: "Our Palette",
        verde_title: "Olive Green",
        verde_desc: "Represents nature, trust, and elegance.",
        salvia_title: "Sage Green",
        salvia_desc: "Provides calmness and freshness.",
        beige_title: "Beige",
        beige_desc: "Adds warmth and an artisanal style.",

        investigacion_small: "RESEARCH",
        investigacion_title: "Technologies Used",
        js_desc: "Behavior and interaction.",
        jquery_desc: "Library and effects.",
        json_desc: "Data exchange.",
        hosting_desc: "Web publishing.",

        footer_p: "Minuta Fresh · School Web Development Project"
    }
};

let currentLang = "es";

// ==========================================
// TRADUCCIONES DE PRODUCTOS
// ==========================================

const productKeyMap = {
    fresa: "fresa_title",
    mango: "mango_title",
    tamarindo: "tamarindo_title",
    limon: "limon_title",
    pina: "pina_title",
    chicle: "chicle_title",
    uva: "uva_title",
    coco: "coco_title",
    arrayan: "arrayan_title",
    promo_limon: "promo_limon_title",
    promo_frutas: "promo_frutas_title",
    promo_churro: "promo_churro_title"
};

// ==========================================
// EMAILJS: ENVIAR CORREO
// ==========================================

async function enviarEmailMinuta(datos) {
    if (typeof emailjs === "undefined") {
        throw new Error("EmailJS no está cargado. Revisa el HTML.");
    }

    if (
        EMAILJS_PUBLIC_KEY === "TU_PUBLIC_KEY" ||
        EMAILJS_SERVICE_ID === "TU_SERVICE_ID" ||
        EMAILJS_TEMPLATE_ID === "TU_TEMPLATE_ID"
    ) {
        throw new Error("Falta configurar EmailJS.");
    }

    emailjs.init({
        publicKey: EMAILJS_PUBLIC_KEY
    });

    return emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
            tipo: datos.tipo || "",
            nombre: datos.nombre || "",
            email: datos.email || "",
            mensaje: datos.mensaje || "",
            detalle: datos.detalle || "",
            total: datos.total === "" || datos.total == null
                ? ""
                : `$${Number(datos.total).toFixed(2)}`
        }
    );
}

// ==========================================
// DISCORD: ENVIAR NOTIFICACIÓN
// ==========================================

async function enviarDiscordMinuta(datos) {
    if (
        !DISCORD_WEBHOOK_URL ||
        DISCORD_WEBHOOK_URL === "PEGA_AQUI_TU_WEBHOOK_NUEVO"
    ) {
        throw new Error("Falta configurar el webhook de Discord.");
    }

    const esPedido = datos.tipo === "pedido";

    const campos = [
        {
            name: "Tipo",
            value: esPedido ? "Nuevo pedido" : "Mensaje de contacto"
        },
        {
            name: "Nombre",
            value: String(datos.nombre || "No indicado").slice(0, 1024)
        },
        {
            name: "Correo",
            value: String(datos.email || "No indicado").slice(0, 1024)
        }
    ];

    if (esPedido) {
        campos.push({
            name: "Detalle del pedido",
            value: String(datos.detalle || "Sin detalle").slice(0, 1024)
        });

        campos.push({
            name: "Total",
            value: `$${Number(datos.total || 0).toFixed(2)}`
        });
    } else {
        campos.push({
            name: "Mensaje",
            value: String(datos.mensaje || "Sin mensaje").slice(0, 1024)
        });
    }

    const respuesta = await fetch(DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: "Minuta Fresh",
            allowed_mentions: {
                parse: []
            },
            embeds: [{
                title: esPedido
                    ? "Nuevo pedido de Minuta Fresh"
                    : "Nuevo mensaje de contacto",
                color: 6716746,
                fields: campos,
                timestamp: new Date().toISOString()
            }]
        })
    });

    if (!respuesta.ok) {
        throw new Error("Discord no pudo recibir la notificación.");
    }
}

// ==========================================
// ENVIAR A EMAILJS Y DISCORD
// ==========================================

async function enviarNotificacionesMinuta(datos) {
    const resultados = await Promise.allSettled([
        enviarEmailMinuta(datos),
        enviarDiscordMinuta(datos)
    ]);

    const fallos = [];

    if (resultados[0].status === "rejected") {
        console.error("Error de EmailJS:", resultados[0].reason);
        fallos.push("Gmail");
    }

    if (resultados[1].status === "rejected") {
        console.error("Error de Discord:", resultados[1].reason);
        fallos.push("Discord");
    }

    if (fallos.length > 0) {
        throw new Error("No se pudo completar el envío a: " + fallos.join(" y "));
    }
}

// ==========================================
// CAMBIAR CANTIDAD
// ==========================================

function cambiarCantidad(producto, cambio) {
    if (!Object.prototype.hasOwnProperty.call(precios, producto)) {
        return;
    }

    pedido[producto] = Math.max(0, pedido[producto] + cambio);

    const elemento = document.getElementById(`cant-${producto}`);

    if (elemento) {
        elemento.innerText = pedido[producto];
    }

    actualizarEstadoPedido();
}

// ==========================================
// TOTAL DE MINUTAS
// ==========================================

function obtenerTotalVasos() {
    return Object.keys(precios).reduce(
        (total, producto) => total + pedido[producto],
        0
    );
}

// ==========================================
// TOTAL A PAGAR
// ==========================================

function obtenerPrecioTotal() {
    return Object.keys(precios).reduce(
        (total, producto) => total + pedido[producto] * precios[producto],
        0
    );
}

// ==========================================
// SELECCIONAR SUPER PROMO
// ==========================================

function seleccionarPromo(promoKey) {
    if (!["promo_limon", "promo_frutas", "promo_churro"].includes(promoKey)) {
        return;
    }

    const total = obtenerTotalVasos();

    if (total < 4) {
        const faltantes = 4 - total;

        alert(currentLang === "es"
            ? `Te faltan ${faltantes} minuta(s) para desbloquear la Super Promo.`
            : `You need ${faltantes} more shaved ice(s) to unlock the Super Promo.`);

        return;
    }

    pedido.promo = pedido.promo === promoKey ? null : promoKey;
    actualizarEstadoPedido();
}

// ==========================================
// ACTUALIZAR INTERFAZ DEL PEDIDO
// ==========================================

function actualizarEstadoPedido() {
    const total = obtenerTotalVasos();
    const precio = obtenerPrecioTotal();

    if (total < 4) {
        pedido.promo = null;
    }

    const barra = document.getElementById("floatingOrderBar");
    const textoBarra = document.getElementById("floatingOrderText");

    if (barra && textoBarra) {
        if (total > 0) {
            barra.classList.remove("d-none");
            barra.classList.add("d-flex");

            textoBarra.innerText = currentLang === "es"
                ? `${total} minuta(s) | Total: $${precio.toFixed(2)}`
                : `${total} item(s) | Total: $${precio.toFixed(2)}`;
        } else {
            barra.classList.add("d-none");
            barra.classList.remove("d-flex");
        }
    }

    const estadoPromo = document.getElementById("promoBadgeStatus");
    const textoPromo = document.getElementById("promoBadgeText");

    if (estadoPromo && textoPromo) {
        const disponible = total >= 4;

        estadoPromo.classList.toggle("alert-success", disponible);
        estadoPromo.classList.toggle("alert-info", !disponible);

        textoPromo.innerText = disponible
            ? translations[currentLang].promo_unlocked_msg
            : translations[currentLang].promo_lock_msg;
    }

    ["promo_limon", "promo_frutas", "promo_churro"].forEach(clave => {
        const boton = document.getElementById(`btn-${clave}`);
        const tarjeta = document.getElementById(`card-${clave}`);

        if (!boton || !tarjeta) return;

        const elegido = pedido.promo === clave;

        boton.innerText = elegido
            ? translations[currentLang].btn_seleccionado
            : translations[currentLang].btn_participar;

        boton.classList.toggle("btn-minuta", !elegido);
        boton.classList.toggle("btn-success", elegido);
        tarjeta.classList.toggle("border", elegido);
        tarjeta.classList.toggle("border-success", elegido);
        tarjeta.classList.toggle("border-3", elegido);
    });
}

// ==========================================
// ABRIR RESUMEN DEL PEDIDO
// ==========================================

function abrirModalPedido() {
    const lista = document.getElementById("listaPedidoModal");
    const totalPagar = document.getElementById("totalPagarModal");
    const avisoPromo = document.getElementById("promoModalAlert");

    if (!lista || !totalPagar) return;

    lista.innerHTML = "";

    const total = obtenerTotalVasos();
    const precio = obtenerPrecioTotal();

    if (total === 0) {
        const li = document.createElement("li");
        li.className = "list-group-item text-center text-muted";
        li.innerText = translations[currentLang].msj_sin_items;
        lista.appendChild(li);
    } else {
        Object.keys(precios).forEach(clave => {
            if (pedido[clave] <= 0) return;

            const li = document.createElement("li");
            li.className = "list-group-item d-flex justify-content-between align-items-center";

            const nombre = document.createElement("strong");
            nombre.innerText =
                `${translations[currentLang][productKeyMap[clave]]} x ${pedido[clave]}`;

            const subtotal = document.createElement("span");
            subtotal.innerText = `$${(pedido[clave] * precios[clave]).toFixed(2)}`;

            li.append(nombre, subtotal);
            lista.appendChild(li);
        });

        if (pedido.promo) {
            const li = document.createElement("li");
            li.className = "list-group-item d-flex justify-content-between align-items-center bg-light-success text-success fw-bold";

            const nombre = document.createElement("span");
            nombre.innerText =
                `${translations[currentLang][productKeyMap[pedido.promo]]} (Super Promo)`;

            const regalo = document.createElement("span");
            regalo.className = "badge bg-success";
            regalo.innerText = translations[currentLang].precio_promo;

            li.append(nombre, regalo);
            lista.appendChild(li);
        }
    }

    if (avisoPromo) {
        const faltaElegir = total >= 4 && !pedido.promo;

        avisoPromo.innerText = translations[currentLang].msj_falta_promo;
        avisoPromo.classList.toggle("d-none", !faltaElegir);
    }

    totalPagar.innerText = `$${precio.toFixed(2)}`;

    const modal = document.getElementById("pedidoModal");

    if (modal && typeof bootstrap !== "undefined") {
        bootstrap.Modal.getOrCreateInstance(modal).show();
    }
}

// ==========================================
// SOLICITAR DATOS DEL CLIENTE
// ==========================================

function solicitarDatosCliente() {
    const nombre = prompt(
        currentLang === "es" ? "Escribe tu nombre:" : "Enter your name:"
    );

    if (nombre === null || !nombre.trim()) return null;

    const email = prompt(
        currentLang === "es"
            ? "Escribe tu correo electrónico:"
            : "Enter your email:"
    );

    if (email === null) return null;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
        alert(currentLang === "es"
            ? "Escribe un correo válido."
            : "Enter a valid email address.");

        return null;
    }

    return {
        nombre: nombre.trim(),
        email: email.trim()
    };
}

// ==========================================
// CONFIRMAR Y ENVIAR PEDIDO
// ==========================================

async function confirmarPedidoFinal() {
    if (window.enviandoPedido) return;

    const totalVasos = obtenerTotalVasos();

    if (totalVasos === 0) {
        alert(translations[currentLang].msj_sin_items);
        return;
    }

    if (totalVasos >= 4 && !pedido.promo) {
        alert(translations[currentLang].msj_falta_promo);
        return;
    }

    const cliente = solicitarDatosCliente();
    if (!cliente) return;

    const lineas = [];

    Object.keys(precios).forEach(clave => {
        if (pedido[clave] > 0) {
            lineas.push(
                `${translations[currentLang][productKeyMap[clave]]} x ${pedido[clave]}`
            );
        }
    });

    if (pedido.promo) {
        lineas.push(
            `${currentLang === "es" ? "Regalo gratis" : "Free gift"}: ${translations[currentLang][productKeyMap[pedido.promo]]}`
        );
    }

    const total = Number(obtenerPrecioTotal().toFixed(2));
    const botones = document.querySelectorAll('[onclick="confirmarPedidoFinal()"]');

    window.enviandoPedido = true;
    botones.forEach(boton => boton.disabled = true);

    try {
        await enviarNotificacionesMinuta({
            tipo: "pedido",
            nombre: cliente.nombre,
            email: cliente.email,
            mensaje: "Nuevo pedido de Minuta Fresh",
            detalle: lineas.join("\n"),
            total: total
        });

        const modalPedido = document.getElementById("pedidoModal");

        if (modalPedido && typeof bootstrap !== "undefined") {
            bootstrap.Modal.getOrCreateInstance(modalPedido).hide();
        }

        const detalleExito = document.getElementById("exitoMensajeDetalle");

        if (detalleExito) {
            detalleExito.innerText = currentLang === "es"
                ? `Tu pedido de ${totalVasos} minuta(s) fue enviado. Total: $${total.toFixed(2)}.`
                : `Your order of ${totalVasos} shaved ice(s) was sent. Total: $${total.toFixed(2)}.`;
        }

        const modalExito = document.getElementById("exitoModal");

        if (modalExito && typeof bootstrap !== "undefined") {
            bootstrap.Modal.getOrCreateInstance(modalExito).show();
        }

        Object.keys(precios).forEach(clave => {
            pedido[clave] = 0;

            const cantidad = document.getElementById(`cant-${clave}`);
            if (cantidad) cantidad.innerText = "0";
        });

        pedido.promo = null;
        actualizarEstadoPedido();

    } catch (error) {
        console.error("Error al enviar el pedido:", error);

        alert(currentLang === "es"
            ? `No se pudo completar el envío (${error.message}). Revisa la configuración e inténtalo de nuevo.`
            : `The message could not be sent (${error.message}). Check the configuration and try again.`);
    } finally {
        window.enviandoPedido = false;
        botones.forEach(boton => boton.disabled = false);
    }
}

// ==========================================
// CAMBIAR IDIOMA
// ==========================================

function toggleLanguage() {
    currentLang = currentLang === "es" ? "en" : "es";

    const textoIdioma = document.getElementById("langText");

    if (textoIdioma) {
        textoIdioma.innerText = currentLang === "es" ? "English" : "Español";
    }

    document.querySelectorAll("[data-i18n]").forEach(elemento => {
        const clave = elemento.getAttribute("data-i18n");

        if (Object.prototype.hasOwnProperty.call(translations[currentLang], clave)) {
            elemento.innerText = translations[currentLang][clave];
        }
    });

    actualizarEstadoPedido();
}

// ==========================================
// MODO CLARO Y OSCURO
// ==========================================

function configurarTema() {
    const boton = document.getElementById("themeToggle");

    if (!boton || boton.dataset.temaConfigurado) return;

    const icono = boton.querySelector("i");

    function aplicarTema(oscuro) {
        document.body.classList.toggle("modo-oscuro", oscuro);

        if (icono) {
            icono.classList.toggle("fa-moon", !oscuro);
            icono.classList.toggle("fa-sun", oscuro);
        }

        boton.setAttribute(
            "aria-label",
            oscuro ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
        );

        boton.title = oscuro ? "Modo claro" : "Modo oscuro";

        try {
            localStorage.setItem("tema", oscuro ? "oscuro" : "claro");
        } catch (error) {
            console.warn("No se pudo guardar el tema.");
        }
    }

    let tema = "claro";

    try {
        tema = localStorage.getItem("tema") || "claro";
    } catch (error) {
        console.warn("No se pudo leer el tema.");
    }

    aplicarTema(tema === "oscuro");

    boton.addEventListener("click", () => {
        aplicarTema(!document.body.classList.contains("modo-oscuro"));
    });

    boton.dataset.temaConfigurado = "activo";
}

// ==========================================
// MÚSICA
// ==========================================

function configurarMusica() {
    const boton = document.getElementById("musicToggle");
    const musica = document.getElementById("bgMusic");

    if (!boton || !musica || boton.dataset.musicaConfigurada) return;

    const icono = boton.querySelector("i");

    function actualizarIcono(reproduciendo) {
        if (icono) {
            icono.classList.toggle("fa-music", !reproduciendo);
            icono.classList.toggle("fa-pause", reproduciendo);
        }

        boton.title = reproduciendo ? "Pausar música" : "Reproducir música";
        boton.setAttribute(
            "aria-label",
            reproduciendo ? "Pausar música" : "Reproducir música"
        );
    }

    actualizarIcono(!musica.paused);

    boton.addEventListener("click", async () => {
        if (musica.paused) {
            try {
                await musica.play();
                actualizarIcono(true);
            } catch (error) {
                actualizarIcono(false);
                alert("No se pudo reproducir la música. Verifica audio/musica.mp3.");
            }
        } else {
            musica.pause();
            actualizarIcono(false);
        }
    });

    musica.addEventListener("play", () => actualizarIcono(true));
    musica.addEventListener("pause", () => actualizarIcono(false));
    musica.addEventListener("ended", () => actualizarIcono(false));

    boton.dataset.musicaConfigurada = "activo";
}

// ==========================================
// FORMULARIO DE CONTACTO
// ==========================================

function configurarFormularioContacto() {
    document.querySelectorAll("form").forEach(formulario => {
        if (formulario.dataset.contactoConfigurado) return;

        const nombre = formulario.querySelector(
            '[name="nombre"], #nombre, [name="nombres"], #nombres'
        );

        const email = formulario.querySelector(
            '[name="email"], #email, [name="correo"], #correo'
        );

        const mensaje = formulario.querySelector(
            '[name="mensaje"], #mensaje'
        );

        if (!nombre || !email || !mensaje) return;

        formulario.addEventListener("submit", async event => {
            event.preventDefault();

            const datos = {
                nombre: nombre.value.trim(),
                email: email.value.trim(),
                mensaje: mensaje.value.trim()
            };

            if (!datos.nombre || !datos.email || !datos.mensaje) {
                alert(currentLang === "es"
                    ? "Completa todos los campos."
                    : "Please complete all fields.");
                return;
            }

            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.email)) {
                alert(currentLang === "es"
                    ? "Escribe un correo válido."
                    : "Enter a valid email address.");
                return;
            }

            const boton = formulario.querySelector(
                'button[type="submit"], input[type="submit"]'
            );

            if (boton) boton.disabled = true;

            try {
                await enviarNotificacionesMinuta({
                    tipo: "contacto",
                    nombre: datos.nombre,
                    email: datos.email,
                    mensaje: datos.mensaje,
                    detalle: "",
                    total: ""
                });

                alert(currentLang === "es"
                    ? "¡Tu mensaje fue enviado correctamente!"
                    : "Your message was sent successfully!");

                formulario.reset();

            } catch (error) {
                console.error("Error al enviar el contacto:", error);

                alert(currentLang === "es"
                    ? `No se pudo completar el envío (${error.message}). Revisa la configuración.`
                    : `The message could not be sent (${error.message}). Check the configuration.`);
            } finally {
                if (boton) boton.disabled = false;
            }
        });

        formulario.dataset.contactoConfigurado = "activo";
    });
}

// ==========================================
// INICIALIZACIÓN
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    const botonIdioma = document.getElementById("langToggle");

    if (botonIdioma && !botonIdioma.dataset.eventoIdioma) {
        botonIdioma.addEventListener("click", toggleLanguage);
        botonIdioma.dataset.eventoIdioma = "activo";
    }

    configurarTema();
    configurarMusica();
    configurarFormularioContacto();
    actualizarEstadoPedido();
});
