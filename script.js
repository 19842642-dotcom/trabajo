// Precios de las minutas individuales
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

// Estado del Pedido Múltiple
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
    promo: null // Guarda la especialidad elegida gratis si califica
};

// Diccionario de Traducciones
const translations = {
    es: {
        // Navegación
        nav_inicio: "Inicio",
        nav_js: "JavaScript",
        nav_jquery: "jQuery",
        nav_json: "JSON",
        nav_hosting: "Hosting",
        nav_cuestionario: "Cuestionario",
        nav_contacto: "Contacto",

        // Hero
        eyebrow: "SABOR · FRESCURA · TRADICIÓN",
        hero_h2: "El sabor que refresca tu día.",
        hero_p1: "Minuta Fresh es una propuesta de minutas de hielo con sabores frutales, pensada para jóvenes y familias que buscan una opción refrescante, deliciosa y accesible.",
        hero_propuesta_lbl: "Propuesta de valor:",
        hero_propuesta_txt: "ofrecer diferentes sabores, una presentación atractiva y precios accesibles.",
        btn_ver_sabores: "Ver sabores",
        btn_contacto: "Contactarnos",

        // Sección Sabores
        sabores_small: "NUESTROS SABORES",
        sabores_title: "Minutas favoritas",
        sabores_subtitle: "Conoce algunas de las opciones de Minuta Fresh.",
        btn_elegir: "Elegir",

        // 9 Sabores de Minutas (Nombres)
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

        // Sección Super Promo
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

        // Control del Pedido
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

        // Paleta de Colores
        identidad_small: "IDENTIDAD DE MARCA",
        identidad_title: "Nuestra paleta",
        verde_title: "Verde olivo",
        verde_desc: "Representa naturaleza, confianza y elegancia.",
        salvia_title: "Verde salvia",
        salvia_desc: "Aporta tranquilidad y frescura.",
        beige_title: "Beige",
        beige_desc: "Aporta calidez y un estilo artesanal.",

        // Investigación / Tecnologías
        investigacion_small: "INVESTIGACIÓN",
        investigacion_title: "Tecnologías utilizadas",
        js_desc: "Comportamiento e interacción.",
        jquery_desc: "Librería y efectos.",
        json_desc: "Intercambio de datos.",
        hosting_desc: "Publicación en internet.",

        // Footer
        footer_p: "Minuta Fresh · Proyecto escolar de desarrollo web"
    },
    en: {
        // Navigation
        nav_inicio: "Home",
        nav_js: "JavaScript",
        nav_jquery: "jQuery",
        nav_json: "JSON",
        nav_hosting: "Hosting",
        nav_cuestionario: "Quiz",
        nav_contacto: "Contact",

        // Hero
        eyebrow: "FLAVOR · FRESHNESS · TRADITION",
        hero_h2: "The flavor that refreshes your day.",
        hero_p1: "Minuta Fresh is a shaved ice proposal with fruit flavors, designed for youth and families looking for a refreshing, delicious, and affordable option.",
        hero_propuesta_lbl: "Value proposition:",
        hero_propuesta_txt: "offering different flavors, an attractive presentation, and accessible prices.",
        btn_ver_sabores: "View flavors",
        btn_contacto: "Contact us",

        // Flavors Section
        sabores_small: "OUR FLAVORS",
        sabores_title: "Favorite Shaved Ices",
        sabores_subtitle: "Discover some of the Minuta Fresh options.",
        btn_elegir: "Choose",

        // 9 Flavors
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

        // Super Promo Section
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

        // Order Control
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

        // Brand Palette
        identidad_small: "BRAND IDENTITY",
        identidad_title: "Our Palette",
        verde_title: "Olive Green",
        verde_desc: "Represents nature, trust, and elegance.",
        salvia_title: "Sage Green",
        salvia_desc: "Provides calmness and freshness.",
        beige_title: "Beige",
        beige_desc: "Adds warmth and an artisanal style.",

        // Research / Technologies
        investigacion_small: "RESEARCH",
        investigacion_title: "Technologies Used",
        js_desc: "Behavior and interaction.",
        jquery_desc: "Library and effects.",
        json_desc: "Data exchange.",
        hosting_desc: "Web publishing.",

        // Footer
        footer_p: "Minuta Fresh · School Web Development Project"
    }
};

let currentLang = 'es';

// Mapa de claves de productos
const productKeyMap = {
    fresa: 'fresa_title',
    mango: 'mango_title',
    tamarindo: 'tamarindo_title',
    limon: 'limon_title',
    pina: 'pina_title',
    chicle: 'chicle_title',
    uva: 'uva_title',
    coco: 'coco_title',
    arrayan: 'arrayan_title',
    promo_limon: 'promo_limon_title',
    promo_frutas: 'promo_frutas_title',
    promo_churro: 'promo_churro_title'
};

// Función para cambiar cantidad de minutas
function cambiarCantidad(producto, cambio) {
    if (pedido[producto] !== undefined) {
        pedido[producto] = Math.max(0, pedido[producto] + cambio);
        
        // Actualizar contador individual en la tarjeta
        const cantElement = document.getElementById(`cant-${producto}`);
        if (cantElement) {
            cantElement.innerText = pedido[producto];
        }

        actualizarEstadoPedido();
    }
}

// Suma total de minutas de vaso
function obtenerTotalVasos() {
    return pedido.fresa + pedido.mango + pedido.tamarindo + pedido.limon + 
           pedido.pina + pedido.chicle + pedido.uva + pedido.coco + pedido.arrayan;
}

// Calcular precio total acumulado
function obtenerPrecioTotal() {
    let total = 0;
    for (let p in precios) {
        total += pedido[p] * precios[p];
    }
    return total;
}

// Seleccionar la especialidad de la Super Promo
function seleccionarPromo(promoKey) {
    const totalVasos = obtenerTotalVasos();

    if (totalVasos < 4) {
        const faltantes = 4 - totalVasos;
        const msj = currentLang === 'es' 
            ? `Te faltan ${faltantes} minuta(s) de vaso para desbloquear la Super Promo.`
            : `You need ${faltantes} more cup shaved ice(s) to unlock the Super Promo.`;
        alert(msj);
        return;
    }

    // Seleccionar o deseleccionar si se vuelve a tocar
    if (pedido.promo === promoKey) {
        pedido.promo = null;
    } else {
        pedido.promo = promoKey;
    }

    actualizarEstadoPedido();
}

// Actualizar la interfaz en tiempo real
function actualizarEstadoPedido() {
    const totalVasos = obtenerTotalVasos();
    const precioTotal = obtenerPrecioTotal();

    // Si baja de 4 vasos, remover regalo seleccionado
    if (totalVasos < 4 && pedido.promo !== null) {
        pedido.promo = null;
    }

    // 1. Actualizar barra flotante
    const floatingBar = document.getElementById('floatingOrderBar');
    const floatingText = document.getElementById('floatingOrderText');
    if (floatingBar && floatingText) {
        if (totalVasos > 0) {
            floatingBar.classList.remove('d-none');
            floatingBar.classList.add('d-flex');
            const textoVasos = currentLang === 'es' 
                ? `${totalVasos} minuta(s) | Total: $${precioTotal.toFixed(2)}`
                : `${totalVasos} item(s) | Total: $${precioTotal.toFixed(2)}`;
            floatingText.innerText = textoVasos;
        } else {
            floatingBar.classList.add('d-none');
            floatingBar.classList.remove('d-flex');
        }
    }

    // 2. Actualizar indicador y botones de la Super Promo
    const badgeStatus = document.getElementById('promoBadgeStatus');
    const badgeText = document.getElementById('promoBadgeText');
    
    if (badgeStatus && badgeText) {
        if (totalVasos >= 4) {
            badgeStatus.classList.remove('alert-info');
            badgeStatus.classList.add('alert-success');
            badgeText.innerText = translations[currentLang]['promo_unlocked_msg'];
        } else {
            badgeStatus.classList.remove('alert-success');
            badgeStatus.classList.add('alert-info');
            badgeText.innerText = translations[currentLang]['promo_lock_msg'];
        }
    }

    // Actualizar botones de promo
    ['promo_limon', 'promo_frutas', 'promo_churro'].forEach(pKey => {
        const btn = document.getElementById(`btn-${pKey}`);
        const card = document.getElementById(`card-${pKey}`);
        if (btn && card) {
            if (pedido.promo === pKey) {
                btn.innerText = translations[currentLang]['btn_seleccionado'];
                btn.classList.remove('btn-minuta');
                btn.classList.add('btn', 'btn-success');
                card.classList.add('border', 'border-success', 'border-3');
            } else {
                btn.innerText = translations[currentLang]['btn_participar'];
                btn.classList.add('btn-minuta');
                btn.classList.remove('btn', 'btn-success');
                card.classList.remove('border', 'border-success', 'border-3');
            }
        }
    });
}

// Abrir Modal de Pedido para revisar resumen
function abrirModalPedido() {
    const lista = document.getElementById('listaPedidoModal');
    const totalPagar = document.getElementById('totalPagarModal');
    const promoAlert = document.getElementById('promoModalAlert');
    
    if (!lista || !totalPagar) return;

    lista.innerHTML = '';
    const totalVasos = obtenerTotalVasos();
    const precioTotal = obtenerPrecioTotal();

    if (totalVasos === 0) {
        lista.innerHTML = `<li class="list-group-item text-center text-muted">${translations[currentLang]['msj_sin_items']}</li>`;
    } else {
        // Recorrer minutas de vaso
        for (let key in precios) {
            if (pedido[key] > 0) {
                const nombre = translations[currentLang][productKeyMap[key]];
                const subtotal = (pedido[key] * precios[key]).toFixed(2);
                lista.innerHTML += `
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <strong>${nombre}</strong> x ${pedido[key]}
                        </div>
                        <span>$${subtotal}</span>
                    </li>
                `;
            }
        }

        // Mostrar especialidad de Promo si fue seleccionada
        if (pedido.promo) {
            const nombrePromo = translations[currentLang][productKeyMap[pedido.promo]];
            lista.innerHTML += `
                <li class="list-group-item d-flex justify-content-between align-items-center bg-light-success text-success fw-bold">
                    <div>
                        <i class="fa-solid fa-gift me-2"></i> ${nombrePromo} (Super Promo)
                    </div>
                    <span class="badge bg-success">${translations[currentLang]['precio_promo']}</span>
                </li>
            `;
        }
    }

    // Alerta de aviso si compró 4 vasos pero aún no ha elegido la promo
    if (promoAlert) {
        if (totalVasos >= 4 && !pedido.promo) {
            promoAlert.innerText = translations[currentLang]['msj_falta_promo'];
            promoAlert.classList.remove('d-none');
        } else {
            promoAlert.classList.add('d-none');
        }
    }

    totalPagar.innerText = `$${precioTotal.toFixed(2)}`;

    // Abrir Modal
    const modalElement = document.getElementById('pedidoModal');
    if (modalElement && typeof bootstrap !== 'undefined') {
        const modalInstance = bootstrap.Modal.getOrCreateInstance(modalElement);
        modalInstance.show();
    }
}

// Confirmar pedido final desde el modal
function confirmarPedidoFinal() {
    const totalVasos = obtenerTotalVasos();
    if (totalVasos === 0) {
        alert(translations[currentLang]['msj_sin_items']);
        return;
    }

    // Ocultar modal de pedido
    const pedidoModalEl = document.getElementById('pedidoModal');
    if (pedidoModalEl && typeof bootstrap !== 'undefined') {
        const modalInstance = bootstrap.Modal.getInstance(pedidoModalEl);
        if (modalInstance) modalInstance.hide();
    }

    // Mensaje de detalle final
    const precioTotal = obtenerPrecioTotal().toFixed(2);
    let msj = currentLang === 'es'
        ? `Has pedido ${totalVasos} minuta(s) por un total de $${precioTotal}.`
        : `You ordered ${totalVasos} shaved ice(s) for a total of $${precioTotal}.`;

    if (pedido.promo) {
        const nombrePromo = translations[currentLang][productKeyMap[pedido.promo]];
        msj += currentLang === 'es'
            ? ` ¡Incluye tu regalazo gratis: ${nombrePromo}!`
            : ` Includes your free specialty: ${nombrePromo}!`;
    }

    const exitoMensajeDetalle = document.getElementById('exitoMensajeDetalle');
    if (exitoMensajeDetalle) {
        exitoMensajeDetalle.innerText = msj;
    }

    // Abrir modal de éxito
    const exitoModalEl = document.getElementById('exitoModal');
    if (exitoModalEl && typeof bootstrap !== 'undefined') {
        const exitoModalInstance = bootstrap.Modal.getOrCreateInstance(exitoModalEl);
        exitoModalInstance.show();
    }

    // Reiniciar pedido
    for (let k in pedido) {
        if (k === 'promo') pedido[k] = null;
        else {
            pedido[k] = 0;
            const cantEl = document.getElementById(`cant-${k}`);
            if (cantEl) cantEl.innerText = '0';
        }
    }
    actualizarEstadoPedido();
}

// Cambiar idioma dinámicamente
function toggleLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    
    const langText = document.getElementById('langText');
    if (langText) {
        langText.innerText = currentLang === 'es' ? 'English' : 'Español';
    }

    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.innerText = translations[currentLang][key];
        }
    });

    actualizarEstadoPedido();
}

// Inicialización de eventos al cargar
document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
        langBtn.addEventListener('click', toggleLanguage);
    }
    actualizarEstadoPedido();
});