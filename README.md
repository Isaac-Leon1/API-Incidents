
# API Incidentes

![image](https://github.com/Isaac-Leon1/taller10-11/assets/123756226/d02d5891-cd00-494d-a751-d2b02f3c3cbe)

Esta API RESTful nos brinda información acerca de los incidentes relacionados con la delincuencia en el Ecuador.

# Cómo funciona?

Actualmente esta API RESTful es de uso público por lo que no se requiere de una API KEY para crear, modificar o eliminar los incidentes.

LISTAR TODOS LOS INCIDENTES
-
Para tener toda la información almacenada en la base de datos se utiliza un `GET`:

Endpoint: https://apincidents.onrender.com/api/v1/incidents/

OBTENER UN SOLO INCIDENTE
-
Para tener la información de un solo incidente se utiliza su ID, a traves de un `GET`:

Endpoint: https://apincidents.onrender.com/api/v1/incidents/{id}

OBTENER INCIDENTES POR SU TIPO
-
Obtener todos los incidentes que tengan el mismo tipo de delito a traves de query params y del método `GET`:

Endpoint: https://apincidents.onrender.com/api/v1/incidents/?clasific={query}

Tipos de Delitos actualmente:

- Asalto
- Robo
- Terrorismo
- Ataque
- Homicidio

CREAR UN INCIDENTE
-
Para crear un incidente se utiliza de `POST` y su contenido en el body:
El incidente creado requiere del siguiente esquema

```json
  {
    "type:"tipo_de_delito",
    "date":"dia/mes/año",
    "location":"ubicacion_del_incidente",
    "description":"descripcion_del_incidente",
    "status":"En Progreso/ Cerrado / Desconocido",
  }
```
Endpoint: https://apincidents.onrender.com/api/v1/incidents/

MODIFICAR UN INCIDENTE
-
Para la modificación del incidente se requiere del anterior esquema en el `body` y ademas de un parametro URL con el método `PUT`:

Endpoint: https://apincidents.onrender.com/api/v1/incidents/{id}

ELIMINAR UN INCIDENTE
-
Para eliminar un incidente se requiere unicamente del ID y la utilización del método `DELETE`:

Endpoint: https://apincidents.onrender.com/api/v1/incidents/{id}

## Uso Local

Para empezar el proyecto utiliza

```bash
  npm start
```


## Variables de Entorno

Para ejecutar el proyecto, necesitas de la siguiente variable de entorno en tu archivo .env:

`URL` 
La cual debe contener la conexion a la base de datos de Mongo DB
