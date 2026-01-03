# Odoo – Challenge Diseño Web 

Implementación del mockup propuesto utilizando HTML, SCSS y Bootstrap 5.

## 🖥 Demo

- Deploy: `https://design-challenge-landing-page-1ppu27gz1.vercel.app/`
- Repositorio: `https://github.com/ricardo-angeles-glez/design-challenge-landing-page/`

---

## 📁 Estructura del proyecto

Organicé el proyecto en carpetas separadas para mantener el código modular y fácil de mantener. Este es el árbol principal:

```bash
├── assets/
│   ├── airbnb-white.svg
│   ├── airbnb.svg
│   ├── amazon.svg
│   ├── america-map.svg
│   ├── company_01.png
│   ├── google-white.svg
│   ├── img_01.jpg
│   ├── img_02.jpg
│   ├── img_03.jpg
│   ├── mastercard.svg
│   ├── odoo-white.svg
│   ├── paypal-white.svg
│   ├── paypal.svg
│   ├── person_01.jpg
│   ├── person_02.jpg
│   ├── person_03.jpg
│   ├── slack.svg
│   ├── spotify-white.svg
│   ├── spotify.svg
│   └── Texts.docx
├── index.html
├── js/
│   ├── generate-tree.js
│   ├── main.js
│   └── navbar-scroll.js
├── mock-up.jpg
├── package-lock.json
├── package.json
├── README.md
└── scss/
    ├── components/
    │   ├── _buttons.scss
    │   ├── _card-payment.scss
    │   ├── _cta-banner.scss
    │   ├── _tasks-card.scss
    │   ├── _transactions.scss
    │   └── _zigzag-cards.scss
    ├── custom/
    │   ├── _components.scss
    │   ├── _maps.scss
    │   └── _variables.scss
    ├── main.scss
    ├── _awards.scss
    ├── _base.scss
    ├── _cases.scss
    ├── _faq.scss
    ├── _features.scss
    ├── _footer.scss
    ├── _hero.scss
    ├── _navbar.scss
    └── _sections.scss
```

Usé **SCSS como preprocesador**. La compilación la hice mediante un script de npm (`npm run sass`), que genera el CSS final a partir de `main.scss`.

---

## 🛠 Tecnologías y herramientas

- **HTML5** semántico
- **SCSS** (preprocesador CSS)
- **Bootstrap 5.3** (versión usada en el ejercicio)
- **JavaScript vanilla** para interacciones (navbar, etc.)
- **npm scripts** para compilar SCSS (`npm run sass`)
- Navegadores probados:
  - Chrome  
  - Edge  
  - Opera  
  - Brave  

---

## 🎨 Decisiones de diseño

- **Paleta de colores**  
  Utilicé la paleta asignada en el ejercicio, pero ajusté algunos amarillos que resultaban demasiado llamativos. Los reemplacé por tonos de azul con diferentes intensidades, cuidando siempre el **contraste y la accesibilidad**.

- **Cambios respecto al mockup**  
  - En desktop, el diseño se respetó casi por completo.
  - En la sección de **Awards**, añadí coherencia de navegación: al hacer clic en las cards, llevan a una sección siguiente que originalmente no existía. Usé ideas generadas con ayuda de Claude para diseñar esta interacción.

- **Funcionalidades extra**  
  - Añadí **animaciones sutiles** en hovers y botones.
  - Todas las animaciones están pensadas para ser ligeras y solo se aplican donde aportan a la experiencia de usuario.

---

## 🧩 Desafíos técnicos

- **Más difícil de implementar**  
  La parte más compleja fue diseñar la sección de la **tarjeta de crédito**: traducir el diseño original a una implementación web optimizada, evitando repetir demasiado código. Para eso usé algunas **operaciones matemáticas en SCSS** y una estructura más reutilizable.

- **Responsive design**  
  Tuve varios retos con el responsive porque el diseño estaba pensado inicialmente para desktop, pero en la práctica la mayoría de usuarios navegan desde móviles.  
  Ajusté el **layout en mobile** para reducir la carga cognitiva y hacer la navegación más clara y limpia.

- **Decisiones técnicas complicadas**  
  No suelo usar demasiado Bootstrap, así que trabajar con sus estilos por defecto fue un reto.  
  Para lograr el look & feel que buscaba:
  - Sobrescribí algunos estilos
  - Definí **variables custom** en SCSS
  - Personalicé componentes en lugar de usar los estilos tal cual vienen en Bootstrap

---

## 🚀 Qué mejoraría / Próximos pasos

- **Del mockup original**  
  - Mejoraría la **narrativa visual**: había elementos que no estaban bien alineados.  
  - Corregí eso usando grids adecuados para guiar mejor el ojo y facilitar la lectura rápida.

- **Si tuviera más tiempo**  
  - Rediseñaría la sección de **features** para que aporte más valor real y comunique mejor los beneficios del producto.

- **Versión 2.0**  
  - Añadiría las **páginas que faltan**, extendiendo la landing a un flujo más completo del producto.

---

## ✅ Buenas prácticas aplicadas

- **Metodología CSS**  
  - Usé **BEM** (Block, Element, Modifier) para mantener una estructura clara y escalable en los estilos.

- **Comentarios en el código**  
  - Comenté las partes necesarias para que sea más fácil entender la intención de ciertos bloques y secciones.

- **Convenciones**  
  - Mantengo una nomenclatura consistente basada en BEM y en la estructura de la página (hero, features, faq, etc.).

---

## 🧪 Testing y compatibilidad

- **Navegadores probados**  
  - Chrome  
  - Edge  
  - Opera  
  - Brave  

- **Testing responsive**  
  - Usé las **Chrome DevTools** para probar diferentes tamaños de pantalla y dispositivos simulados.

- **Breakpoints principales**  
  - `max-width: 1200px`
  - `max-width: 991px`  
  En varias secciones, con `max-width: 991px` fue suficiente para ajustar correctamente el layout en mobile/tablet.

---

## 🚢 Deployment

- Código fuente: **GitHub**
- Deploy de producción: **Vercel**
- Demo link: `https://design-challenge-landing-page-1ppu27gz1.vercel.app/`

---

ENGLISH

---

# Odoo – Web Design Challenge

Implementation of the proposed mockup using HTML, SCSS, and Bootstrap 5.

## 🖥 Demo

- Deploy: `https://design-challenge-landing-page-1ppu27gz1.vercel.app/`
- Repository: `https://github.com/ricardo-angeles-glez/design-challenge-landing-page/`

---

## 📁 Project Structure

I organized the project into separate folders to maintain modular and maintainable code. Here's the main directory tree:

```bash
├── assets/
│   ├── airbnb-white.svg
│   ├── airbnb.svg
│   ├── amazon.svg
│   ├── america-map.svg
│   ├── company_01.png
│   ├── google-white.svg
│   ├── img_01.jpg
│   ├── img_02.jpg
│   ├── img_03.jpg
│   ├── mastercard.svg
│   ├── odoo-white.svg
│   ├── paypal-white.svg
│   ├── paypal.svg
│   ├── person_01.jpg
│   ├── person_02.jpg
│   ├── person_03.jpg
│   ├── slack.svg
│   ├── spotify-white.svg
│   ├── spotify.svg
│   └── Texts.docx
├── index.html
├── js/
│   ├── generate-tree.js
│   ├── main.js
│   └── navbar-scroll.js
├── mock-up.jpg
├── package-lock.json
├── package.json
├── README.md
└── scss/
    ├── components/
    │   ├── _buttons.scss
    │   ├── _card-payment.scss
    │   ├── _cta-banner.scss
    │   ├── _tasks-card.scss
    │   ├── _transactions.scss
    │   └── _zigzag-cards.scss
    ├── custom/
    │   ├── _components.scss
    │   ├── _maps.scss
    │   └── _variables.scss
    ├── main.scss
    ├── _awards.scss
    ├── _base.scss
    ├── _cases.scss
    ├── _faq.scss
    ├── _features.scss
    ├── _footer.scss
    ├── _hero.scss
    ├── _navbar.scss
    └── _sections.scss
```

I used **SCSS as a preprocessor**. Compilation is done via an npm script (`npm run sass`), which generates the final CSS from `main.scss`.

---

## 🛠 Technologies & Tools

- **HTML5** semantic markup
- **SCSS** (CSS preprocessor)
- **Bootstrap 5.3** (version specified in the exercise)
- **Vanilla JavaScript** for interactions (navbar, etc.)
- **npm scripts** for SCSS compilation (`npm run sass`)
- Tested browsers:
  - Chrome
  - Edge
  - Opera
  - Brave

---

## 🎨 Design Decisions

- **Color Palette**  
  I used the palette assigned in the exercise, but adjusted some yellows that were too prominent. I replaced them with different shades of blue, always maintaining **contrast and accessibility standards**.

- **Changes from the mockup**  
  - On desktop, the design was mostly respected as-is.
  - In the **Awards section**, I added navigation coherence: clicking on cards navigates to a new section that didn't originally exist. I used ideas generated with Claude's help to design this interaction.

- **Extra Features**  
  - Added **subtle animations** on hovers and buttons.
  - All animations are lightweight and only applied where they enhance user experience.

---

## 🧩 Technical Challenges

- **Most difficult to implement**  
  The most complex part was designing the **credit card section**: translating the original design into an optimized web implementation while avoiding code duplication. I used **mathematical operations in SCSS** and a more reusable structure to solve this.

- **Responsive Design**  
  I faced several responsive challenges because the design was initially desktop-focused, but in reality most users navigate from mobile devices.  
  I adjusted the **mobile layout** to reduce cognitive load and make navigation clearer and more intuitive.

- **Complex Technical Decisions**  
  I don't usually rely heavily on Bootstrap, so working with its default styles was challenging.  
  To achieve the desired look & feel:
  - I overrode some default styles
  - Defined **custom SCSS variables**
  - Customized components instead of using Bootstrap's styles out-of-the-box

---

## 🚀 Improvements & Future Plans

- **From the original mockup**  
  - I would improve the **visual narrative**: some elements weren't properly aligned.  
  - I fixed this using proper grids to better guide the eye and improve readability.

- **If I had more time**  
  - I would redesign the **features section** to provide real value and better communicate product benefits.

- **Version 2.0**  
  - I would add the **missing pages**, extending the landing into a more complete product flow.

---

## ✅ Best Practices Applied

- **CSS Methodology**  
  - Used **BEM** (Block, Element, Modifier) to maintain a clear and scalable style structure.

- **Code Comments**  
  - Added comments where necessary to explain the intent of certain blocks and sections.

- **Naming Conventions**  
  - Maintained consistent naming based on BEM and page structure (hero, features, faq, etc.).

---

## 🧪 Testing & Compatibility

- **Tested Browsers**  
  - Chrome
  - Edge
  - Opera
  - Brave

- **Responsive Testing**  
  - Used **Chrome DevTools** to test different screen sizes and simulated devices.

- **Main Breakpoints**  
  - `max-width: 1200px`
  - `max-width: 991px`  
  In several sections, `max-width: 991px` was sufficient to properly adjust the mobile/tablet layout.

---

## 🚢 Deployment

- Source Code: **GitHub**
- Production Deploy: **Vercel**
- Demo Link: `https://design-challenge-landing-page-1ppu27gz1.vercel.app/`

---
