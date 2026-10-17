# 🍓 Portafolio de Proyecto Web: Minuta Fresh

**Estudiante:** Ivonne Alexandra Flores Valdez  
**Fecha:** 16/10/2026  
**Sitio web en Vercel:** [Pega aquí tu enlace de Vercel]  
**Repositorio GitHub:** [Pega aquí el enlace de tu repositorio de GitHub]  

---

## Índice

1. Identidad de marca y producto
2. Investigación técnica
3. Integraciones especiales
4. Anexos y evidencias gráficas
5. Conclusiones y autoevaluación

---

## 1. Identidad de marca y producto

### Ficha del producto

- **Nombre comercial:** Minuta Fresh.
- **Descripción:** Minuta Fresh es una propuesta artesanal de minutas de hielo con jarabes de sabores frutales y tradicionales salvadoreños. Su página web presenta un menú ampliado de 9 sabores, una sección de "Super Promo" (al comprar 4 minutas de vaso recibes 1 especialidad en plato gratis), reproductor de música de fondo, selector de idioma (Español/Inglés), modo oscuro y un resumen de pedido en tiempo real.
- **Público objetivo:** Jóvenes, estudiantes, familias y personas que buscan una opción refrescante, deliciosa y accesible.
- **Objetivo:** Presentar Minuta Fresh en una página web atractiva, moderna, organizada y fácil de utilizar.

### Diseño visual

**Logotipo**

![Logotipo de Minuta Fresh](assets/logo.png)

**Paleta de colores**

| Color | Código HEX | Uso en el sitio | Justificación |
| :--- | :--- | :--- | :--- |
| **Verde olivo** | `#4D5638` | Navegación y elementos principales | Comunica naturalidad y combina con la idea de frutas. |
| **Verde salvia** | `#87916D` | Botones y detalles | Aporta equilibrio y armonía visual. |
| **Beige** | `#E7C99A` | Botones y detalles destacados | Da una sensación cálida y artesanal. |
| **Crema claro** | `#F5F3EE` | Fondo de secciones | Facilita una lectura cómoda. |
| **Blanco** | `#FFFFFF` | Texto y contraste | Mantiene una apariencia limpia. |

**Tipografía:** El sitio utiliza **Playfair Display** para títulos destacados y **Poppins** para textos de cuerpo y navegación. *Playfair Display* aporta elegancia, mientras que *Poppins* es moderna y legible.

**Carrusel de Bootstrap**

![Carrusel de productos](assets/carousel-demo.png)

El carrusel permite mostrar varias imágenes de las minutas y navegar entre ellas mediante controles.

### Propuesta de valor

Minuta Fresh busca presentar minutas de sabores frutales de manera atractiva y facilitar que los visitantes conozcan el producto y contacten con el emprendimiento desde una sola página.

---

## 2. Investigación técnica

### 2.1 JavaScript Vanilla

JavaScript es un lenguaje que permite agregar interactividad a una página web. HTML organiza el contenido, CSS define su apariencia y JavaScript controla acciones. Entre sus conceptos están las variables, funciones, eventos y el DOM. En el proyecto se utiliza para cambiar el tema visual, controlar el selector de idioma, manejar la música de fondo, calificar el cuestionario y administrar el carrito de compras.

```javascript
function cambiarCantidad(producto, cambio) {
    if (pedido[producto] !== undefined) {
        pedido[producto] = Math.max(0, pedido[producto] + cambio);
        actualizarEstadoPedido();
    }
}