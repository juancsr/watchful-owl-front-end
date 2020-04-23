# WatchfulOwlFrontEnd
Web APP para obtener información relevante de articulos.

# Back-end
Puedes encontrar el back-end de está app en: https://github.com/juancsr/watchful-owl-back-end/blob/dev/README.md

# Firebase
Puedes ver la app completamente funcional en: https://watchful-owl.firebaseapp.com


# ¿Cómo puedo ejecutarlo? 

**Para que esta aplicación funcione correctamente, su API también debe estar en ejecución, reivsa [aquí](https://github.com/juancsr/watchful-owl-back-end) para ver el API**

## Prerequisitos
* node -> [aquí](https://nodejs.org/en/) (Yo recomiendo la versión LTS)
* npm (usualmente viene con la instalación de node)
* anguar / angular cli -> [aquí](https://cli.angular.io/)

### Ejecución
1. Abre la terminal de tu preferencia 
2. Clona el proyecto `git clone https://github.com/juancsr/watchful-owl-front-end`
3. Ve a la carpeta del proyecto `cd watchful-owl-front-end`
4. Corre `npm install` para instalar todas las dependencias (esto puede llevar un rato)
5. Corre `ng serve` o `npm run start`
6. Ve a tu navegador y escribe la siguiente dirección `http://localhost:4200`
7. (Opcional) tal vez el servicio de aylien no esté disponible por problemas de [cors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) si es así, corre `ng serve --open` para que el proyecto se ejecute por debajo de un proxy (el proxy ya está configurado en el purto 3000)

## Construir

~Original de angular...
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

