# BACKEND (con Node, Express y MongoDB)

> **ESTE MINITUTORIAL ES UNA VERSIÓN RESUMIDA DEL BACKEND DE ESTA APLICACIÓN**
> 
> Demo desplegada en [Heroku](https://tiendabackend.herokuapp.com)
>
> A tener en cuenta:
>
> - Mucho del código que aparece en este minitutorial está simplificado con fines didácticos.
> - Para ver todo el código, revisar el código fuente de este repositorio.
> - **La parte frontend de esta aplicación puede verse en [tiendafrontend](https://github.com/jamj2000/tiendafrontend)**


## Introducción

Para trabajar con el entorno de ejecución Node.js y su gestor de paquetes podemos realizar la instalación desde los repositorios de Debian/Ubuntu o derivadas con:

```console
sudo  apt  install  nodejs  npm
```

O, si deseamos una versión más actualizada, podemos recurrir al sitio oficial de Node.js:

[Página de descargas de node](https://nodejs.org/es/download/)


## Inicio de un proyecto

Para iniciar el proyecto hacemos:

```console
mkdir  tiendabackend
cd  tiendabackend

npm  init  -y
```

La última sentencia nos crea un archivo **`package.json`** con la metainformación del proyecto. La opción `y` o `--yes` es para que no nos pregunte y escriba una configuración por defecto en dicho archivo. Siempre podemos editarlo más adelante y modificar la version, añadir el autor, ...


El archivo `.env` (abreviatura de *environment*) es donde pondremos las **variables de entorno**, tales con la URL de conexión a la base de datos. 


## Edición de package.json

El archivo **`package.json`** es el archivo de gestión de proyecto y dependencias. En él. podremos editar el nombre del autor, la versión, el tipo de licencia, etc.

Una parte muy importante es indicar el punto de entrada. En este proyecto será el archivo **`server.js`**, que crearemos más adelante.

Para definir dicho punto de entrada, lo hacemos con la línea:

```
  "main": "server.js",
```

El archivo `package.json` tendrá una apariencia semejante a la siguiente:

```
{
  "name": "tiendabackend",
  "version": "1.0.0",
  "description": "Backend of a Fullstack webapp",
  "author": "jamj2000 at google dot com",
  "license": "GPL",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon server.js"
  },
  "keywords": [
    "webapp",
    "backend",
    "fullstack"
  ]
}
```

También hemos modificado una de las líneas de `scripts`. En concreto:

```
    "dev": "nodemon server.js"
```

Esta línea indica que cuando ejecutemos `npm run dev` en el terminal, lo que se va a ejecutar en última instancia es el comando `nodemon server.js`.  

NOTA: Los scripts se ejecutan desde el terminal de texto con `npm run` *nombre_script*.

NOTA: `nodemon` es un paquete de Node.js que ejecuta node en mode monitor, es decir, está comprobando constantente cualquier cambio en nuestros archivos, y si detecta alguno, entonces vuelve a reiniciar el entorno de ejecución con los nuevos cambios. Esto es muy útil para el proceso de desarrollo de la aplicación.

## Servidor web

En el archivo **`server.js`** escribiremos el código para crear nuestro propio servidor web. En su versión mínima, solamente son necesarias 3 líneas.


```javascript
const express = require('express');

const app = express();

app.listen(3000);
```

Como nuestro backend se va a destinar a proporcionar una API RESTful y el intercambio de información se va a realizar en formato JSON, modificaremos el archivo anterior para que tenga la siguiente apariencia:

```javascript
const express = require('express');

const app = express();

// MIDDLEWARE
app.use(express.json());    

// SERVIDOR WEB
app.listen(3000, () => console.log("Servidor iniciado..."));
```

También hemos añadido un callback en la última línea para que, cuando el servidor web esté iniciado, nos muestre un mensaje indicando tal circunstancia.

Ya podemos probar nuestro servidor web, con el comando:

```console
npm  run  dev
```

No obstante, esto dará un error. El motivo es que necesitamos instalar los paquetes **`express`** y **`nodemon`**.

El primero se instalará como dependencia de aplicación y el segundo como dependencia de desarrollo. La diferencia entre uno y otro es que el primero es necesario para el funcionamiento de la aplicación, mientras que el segundo sólo es necesario para facilitar el trabajo de desarrollo.

Deberemos ejecutar:

```console
npm  install  express
npm  install  nodemon  -D
```

Si echamos un vistazo al archivo **`package.json`** veremos que dichos paquetes (también llamados módulos) han quedado registrados en dicho archivo:


```
{
  "name": "tiendabackend",
  "version": "1.0.0",
  "description": "Backend of a Fullstack webapp",
  "author": "jamj2000 at google dot com",
  "license": "GPL",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon server.js"
  },
  "keywords": [
    "webapp",
    "backend",
    "fullstack"
  ],
  "devDependencies": {
    "nodemon": "^2.0.2"
  },
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

También veremos que se ha creado una carpeta `node_modules` con dichos módulos en su interior, además de muchos otros que son dependencias de los anteriores.

Ahora, ya podremos ejecutar `npm run dev`, y si no hay errores, podremos abrir el navegador y acceder a la url `http://localhost:3000`.

## Rutas


## Controlador


## Modelo


## ¿Vistas?

No hay. Esto no es una aplicación MVC (Modelo-Vista-Controlador).



## Base de datos

Como servidor de base de datos vamos a usar MongoDB en su versión Cloud. Para ello podemos registrarnos en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) en su modalidad *Free*, que nos proporciona 512 MB de almacenamiento, más que suficiente para lo que queremos hacer.

Una vez registrados, crearemos un cluster (por defecto son de 3 máquinas), luego una base de datos y un usuario y contraseña para acceder a dicha base de datos. A dicho usuario le daremos permisos de lectura y escritura.

Una vez realizados estos pasos, conseguiremos la URL de acceso para aplicación de Node.js. Tiene un formato similar al siguiente:

`mongodb+srv://`***`usuario`***`:`***`contraseña`***`@`***`servidor`***`/`***`basedatos`***`?retryWrites=true&w=majority`

Y en nuestro archivo **`.env`** escribiremos la línea:

`DB_URI=mongodb+srv://`***`usuario`***`:`***`contraseña`***`@`***`servidor`***`/`***`basedatos`***`?retryWrites=true&w=majority`

Deberemos sustituir `usuario`, `contraseña`, `servidor` y `basedatos` por los nuestros.

> Nota: 
>
> Una forma más sencilla de trabajar, al menos durante el proceso de desarrollo, es utilizar una base de datos local. 
> Aunque cuando vayamos a desplegar la aplicación en Internet deberemos recurrir a una base de datos on-line.
>
> Si utilizamos un servidor MongoDB local, la URL tendrá la forma:
>
> `mongodb://localhost:27017/`*basedatos*


## Control de versiones (Git)

Para el control de versiones se usará **git** y **[GitHub](https://github.com)**.

Seguiremos los siguientes pasos:

1. Inicializa el repositorio local:

```
git  init
```

2. Edita el archivo `.gitignore` con el siguiente contenido:

```
node_modules/
.env
```

De esta forma indicamos que la carpeta `node_modules` y el archivo `.env` no serán incluidos en el repositorio, sólo permanecerán en el directorio de trabajo. 

`node_modules` contiene las dependencias y no es aconsejable añadirlo al repositorio. Su contenido será *re-**creado*** a partir  del archivo `package-lock.json` una vez se despliegue en producción.

`.env` es el archivo que guarda las **variables de entorno**. Dicho contenido nunca debe añadirse al repositorio, puesto que puede contener información sensible, tal como URLs, usuarios, contraseñas, ... 


3. Añade todo el contenido al repositorio:

```
git  add  .
git  commit  -m "Añadido contenido"
```

4. Crea un repositorio totalmente vacío en GitHub.

Una vez hecho, copia la URL de dicho repositorio.

5. Añade el vínculo al repositorio remoto de GitHub creado previamente.

`git  remote  add  origin  https://github.com/` *usuario* `/` *repositorio.git*

Sustituye *usuario* y *repositorio.git* por tu usuario y tu repositorio. 


6. Sube el contenido al repositorio remoto de Github.

```
git  push  -u  origin master
```



## Despliegue

Para el despligue usaremos **[Heroku](https://www.heroku.com/)**.

Seguiremos los siguientes pasos:

1. Si no tienes cuenta en Heroku, crea una.

Para ello, visita **[Heroku](https://www.heroku.com/)** y date de alta en el plan *Free*.

2. Instala la herramienta `heroku-cli`. En [este enlace](https://devcenter.heroku.com/articles/heroku-cli) tienes la información necesaria.

3. Inicia sesión en el terminal.

```
heroku  login  --interactive
```

4. Crea una nueva aplicación.

`heroku  apps:create` *nombre_aplicación*  

Esta operación, además de crear la aplicación, reserva un repositorio git para su alojamiento.

Sustituye *nombre_aplicación* por el valor que desees. 

> NOTA: Muchos nombres de aplicación pueden estar ya cogidos, sobre todo si son nombres sencillos o habituales.

5. Añade el vínculo al repositorio remoto de Heroku creado previamente.

`git  remote  add  heroku  https://git.heroku.com/` *nombre_aplicación.git*

Sustituye *nombre_aplicación* por el nombre de tu aplicación. 

6. Despliega el contenido en Heroku.

```
git  push  heroku  master
```

7. Comprueba su funcionamiento.

```
heroku  open
```
