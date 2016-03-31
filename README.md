# app-tpl
Estructura básica para la creación de aplicaciones web utilizando angularjs. Se tomaron varias ideas y buenas prácticas de los repos y publicaciones de [John Papa](https://github.com/johnpapa).

# blocks.auth y blocks.history
Se agregaron dos modulos reutilizables. blocks.auth para la autenticación contra un servidor utilizando JWT y blocks.history para simular la navegación que ofrecen las pantallas modales, sin tener pantallas modales.

# server
Para el backend se utilizo [Siervo](https://github.com/gringonivoli/siervo) un nano framework php y [Firebase jwt-php](https://github.com/firebase/php-jwt) para la autenticación por medio de JWT. Los demas paquetes php no deberían ser necesarios para comenzar. Se uso php para el backend por una cuestión de comodidad, pero se podría utilizar cualquier otra tecnología. 