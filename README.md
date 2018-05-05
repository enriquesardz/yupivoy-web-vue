# Yupivoy Web - Vue  app

>Projecto para el sitio [Yupivoy](www.yupivoy.com) con [VueJS](https://vuejs.org/v2/guide/) como framework.

# Getting started (Build setup)
Se requiere lo siguiente:

 - Terminal Git (Windows) - [Descarga Windows](https://git-scm.com/download/win)
- NodeJS - [Descarga Version actual (8.11.1)](https://nodejs.org)

Para buildear el proyecto por primera vez se requiere:

 - Correr el comando `npm install`. Esto instala todas las librerias necesarias para el proyecto.

Una vez instaladas las dependencias/modulos/etc corriendo npm install, para poder ver el proyecto en navegador se utilizan:
```bash
# IMPORTANTE
# Antes de los siguientes comandos se requiere
# correr esto y dejar que se termine el proceso de descarga

npm install

# Corre el projecto en el navegador en localhost:8080(default)
# Quick reload, utilizado durante desarrollo

npm run dev

# Minifica los archivos y crea un dist/ este se
# utiliza cuando se quiera publica la pag en produccion

npm run build

```
Como dato importante, las librerias que actualmente se utilizan son (puede cambiar):
- [VuetifyJS](https://vuetifyjs.com/en/getting-started/quick-start) - Para maquetado y componentes estilo Material Design, esto permite poder maquetar la pagina mas facilmente y responsiva.

# Versionamiento
### Version 1 (1.0.0)