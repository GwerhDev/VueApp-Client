# Prueba técnica para puesto de Desarrollador Web Front-End

Plataforma desarrollada en [VueJs](https://vuejs.org/) v3.3.4. Permite la visualización de una lista de artículos con sus propiedades, consumidos desde una API externa.

## Recursos

Existe un repositorio disponible en [git](https://github.com/GwerhDev/VueApp-Client/).

Existe una versión [online](https://gwerhdev-vue-app.netlify.app/) en Netlify.

## Instalación

Utilizar [npm](https://www.npmjs.com/) v9.5.0 o superior para instalar las dependencias.

```bash
npm i
```
Utilizar [vite](https://vitejs.dev/) para levantar el servidor en local. `http://localhost:5173`
```bash
npm run dev
```

## Uso
- En la Landing Page, clickear en el botón "Entrar" para visualizar los artículos.
- Al entrar, se visualizarán 10 artículos por página provenientes de la API externa.
- Puedes filtrar elementos utilizando el buscador. En caso de utilizar la app en dispositivos móviles, abrir menú tipo "hamburguesa".
- Puedes navegar entre páginas mediante la funcionalidad de "paginación".

## Testing

Utilizar [vitest](https://vitest.dev/) para inicializar los test.
```bash
npm run test
```

## Tecnologías

VueJs, Pinia, Axios, Vite, Vitest && TypeScript