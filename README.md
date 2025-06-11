# TechStore - Ecommerce con Astro

Un ecommerce moderno y responsivo construido con Astro y Tailwind CSS.

## 🚀 Características

- **Framework moderno**: Construido con Astro para máximo rendimiento
- **Diseño responsivo**: Se adapta perfectamente a todos los dispositivos
- **Carrito funcional**: Sistema de carrito con localStorage
- **Filtros por categoría**: Filtra productos por categorías
- **Interfaz moderna**: Diseño limpio y profesional con Tailwind CSS
- **Productos dinámicos**: Sistema de productos con imágenes de alta calidad

## 📦 Productos Incluidos

- Smartphones
- Laptops
- Auriculares
- Relojes inteligentes
- Cámaras digitales
- Tablets

## 🛠️ Instalación

1. **Instala las dependencias:**
   ```bash
   npm install
   ```

2. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

3. **Abre tu navegador en:**
   ```
   http://localhost:4321
   ```

## 📱 Páginas Disponibles

- **Inicio** (`/`) - Página principal con productos destacados
- **Productos** (`/productos`) - Catálogo completo con filtros
- **Carrito** (`/carrito`) - Gestión del carrito de compras

## 🎨 Tecnologías Utilizadas

- **Astro** - Framework principal
- **Tailwind CSS** - Estilos y diseño
- **TypeScript** - Tipado estático
- **Unsplash** - Imágenes de productos

## 📁 Estructura del Proyecto

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   └── ProductCard.astro
│   ├── data/
│   │   └── products.ts
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro
│       ├── productos.astro
│       └── carrito.astro
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## 🛍️ Funcionalidades del Carrito

- **Agregar productos**: Haz clic en "Agregar al carrito"
- **Gestionar cantidades**: Incrementa o decrementa desde el carrito
- **Eliminar productos**: Botón de eliminar en cada producto
- **Persistencia**: El carrito se guarda en localStorage
- **Contador dinámico**: El header muestra el número de productos

## 🎯 Características Especiales

- **Envío gratis**: En compras superiores a $100
- **Filtros intuitivos**: Filtra por categorías con un clic
- **Feedback visual**: Confirmación al agregar productos
- **Diseño moderno**: Interfaz limpia y profesional

## 🌐 Despliegue

Para construir el sitio para producción:

```bash
npm run build
```

Los archivos se generarán en la carpeta `dist/` listos para desplegar en cualquier servidor web estático.

## 📧 Soporte

¿Tienes preguntas o sugerencias? Este es un proyecto de demostración para mostrar las capacidades de Astro en el desarrollo de ecommerce.

---

**TechStore** - Tu tienda de tecnología de confianza 🚀 