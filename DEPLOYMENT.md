# Chabi Landing Page - SEO & Vercel Configuration

## 🔍 Clean URLs (SEO Optimized)

La aplicación utiliza **Vaadin Router** para proporcionar URLs limpias sin hash (`#`), mejorando significativamente el SEO.

### Rutas Disponibles

- `/` - Página de inicio (Hero, Características, Quick Start, Features)
- `/instrucciones` - Guía técnica completa de instalación y configuración

### Routing Configuration

El router está configurado en `src/router.ts` usando Vaadin Router con las siguientes características:

```typescript
router.setRoutes([
  { path: '/', component: 'home-page' },
  { path: '/instrucciones', component: 'instructions-page' },
  { path: '/inicio', redirect: '/' },
  { path: '(.*)', redirect: '/' }, // Catch-all para rutas no encontradas
]);
```

## 🚀 Deployment en Vercel

### Configuración Automática

El archivo `vercel.json` en la raíz del proyecto configura automáticamente:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**Explicación:**
- `buildCommand`: Ejecuta `npm run build` para compilar la app
- `outputDirectory`: El output compilado está en `dist/`
- `rewrites`: Todas las rutas se reescriben a `index.html` para que Vaadin Router las maneje en el cliente

### Pasos para desplegar en Vercel

1. **Conectar el repositorio:**
   ```bash
   vercel --prod
   ```

2. **Vercel detectará automáticamente:**
   - Build command: `npm run build`
   - Output directory: `dist`
   - Framework: Lit + Vite

3. **URLs limpas funcionarán automáticamente:**
   - `https://tuapp.vercel.app/` → Página de inicio
   - `https://tuapp.vercel.app/instrucciones` → Guía técnica

### SEO Optimizations Implementadas

✅ **URLs sin hash** - Mejor indexación en motores de búsqueda  
✅ **Meta tags en index.html** - Descripción optimizada  
✅ **Sitemap compatible** - Todas las rutas están indexables  
✅ **Dynamic routing** - Vaadin Router maneja la navegación sin recargar la página  

## 🏗️ Arquitectura

### Estructura de Componentes

```
src/
├── components/          # Componentes reutilizables
│   ├── chabi-nav.ts
│   ├── chabi-hero.ts
│   ├── chabi-concept.ts
│   ├── chabi-quickstart.ts
│   ├── chabi-instructions.ts
│   ├── chabi-feature-grid.ts
│   └── chabi-footer.ts
├── pages/               # Páginas (views)
│   ├── home-page.ts
│   └── instructions-page.ts
├── router.ts            # Configuración de Vaadin Router
├── app.ts               # Aplicación principal
└── main.ts              # Entry point
```

### Flujo de la Aplicación

1. **main.ts** → Importa estilos CSS y llama a app.ts
2. **app.ts** → Crea la instancia de `chabi-app` que renderiza `chabi-router`
3. **router.ts** → Configura las rutas y renderiza el componente correspondiente
4. **Pages** → Cada página (home-page, instructions-page) renderiza sus componentes

## 🔧 Desarrollo Local

### Iniciar el servidor de desarrollo

```bash
npm run dev
```

Accede a `http://localhost:4173/`

- La navegación es completamente client-side
- Las URLs se actualizan sin recargar la página
- Hot module reload (HMR) está habilitado

### Compilar para producción

```bash
npm run build
```

Output en `dist/`

## 📊 Performance

- **Gzip CSS**: ~3.5 KB
- **Gzip JS**: ~25 KB (incluye Lit + Vaadin Router)
- **SVG Logo**: ~2 KB
- **Total**: ~31 KB (muy ligero)

## 🎯 Future Enhancements

- [ ] Agregar más páginas según sea necesario
- [ ] Implementar prefetching con Vaadin Router
- [ ] Analytics con Google Tag Manager
- [ ] Internationalization (i18n) con Lit
- [ ] PWA capabilities

## 📚 Referencias

- [Vaadin Router Docs](https://github.com/vaadin/router)
- [Lit Documentation](https://lit.dev)
- [Vercel SPA Configuration](https://vercel.com/docs/concepts/projects/project-configuration)
