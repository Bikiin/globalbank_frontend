# Prueba tecnica para frontend developer en Globalbanck 

## Descargar proyecto
Para descargar el proyecto necesitas ejecutar el siguiente comando
```shell
git clone git@github.com:Bikiin/globalbank_frontend.git
```
##  Ejecutar proyecto

Para correr el proyecto existen 2 alternativas

- docker compose
- node en local

### Docker compose
Pasos para usar con docker compose:
```shell
docker compose up
```

Una vez hecho esto, puedes ver el la prueba entrando a http://localhost:4173

Tambien se permite ver los logs de los test que se ejecutaron antes que se realizara el build con:


```shell
docker compose logs tests
```

### Node
En caso de que no quieras o no puedas usar docker compose, esta la alternativa de npm

**⚠ WARNING: Usar node 20.9.0**

Primero tendrias que bajarte las dependencias con
```shell
npm install
```
Una vez hecho esto podras ver la aplicacion ejecutando el comando
```shell
npm run preview
```
La url sigue siendo http://localhost:4173 a menos que tengas ese puerto ocupado

El comando para ejecutaar los tests es 
```shell
npm run test
```


###### gracias por la oportunidad, quedo a la espera de su respuesta.


