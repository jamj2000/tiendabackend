# BACKEND (con Node, Express y MongoDB)

> **ESTE MINITUTORIAL ES UNA VERSIÓN RESUMIDA DEL BACKEND DE ESTA APLICACIÓN**
> 
> A tener en cuenta:
>
> - Mucho del código que aparece en este minitutorial está simplificado con fines didácticos.
> - Para ver todo el código, revisar el código fuente de este repositorio.
> - **La parte frontend de esta aplicación puede verse en [tiendafrontend](https://github.com/jamj2000/tiendafrontend)**


## Introducción


[página de descargas de node](https://nodejs.org/es/download/)


## Inicio de un proyecto

Para iniciar el proyecto hacemos:

```console
mkdir  tiendabackend
cd  tiendabackend

npm  init  -y
```

La última sentencia nos crea un archivo **`package.json`** con la metainformación del proyecto. La opción `y` o `--yes` es para que no nos pregunte y escriba una configuración por defecto en dicho archivo. Siempre podemos editarlo más adelante y modificar la version, añadir el autor, ...

Es muy aconsejable crear un archivo `.gitignore` con el siguiente contenido:

```
node_modules/
.env
```

De esta forma indicamos que la carpeta `node_modules` y el archivo `.env` no serán incluidos en el repositorio, sólo permanecerán en el directorio de trabajo.

El archivo `.env` (abreviatura de *environment*) es donde pondremos las **variables de entorno**, tales con la URL de conexión a la base de datos. 


## Conexión a la base de datos


**`DB_URI=mongodb+srv://`**`usuario`**`:`**`contraseña`**`@`**`servidor`**`/`**`basedatos`**`?retryWrites=true&w=majority`**