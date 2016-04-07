# app-tpl
Estructura básica para la creación de aplicaciones web utilizando angularjs. Se tomaron varias ideas y buenas prácticas de los repos y publicaciones de [John Papa](https://github.com/johnpapa).

# blocks.auth y blocks.history
Se agregaron dos módulos reutilizables. blocks.auth para la autenticación contra un servidor utilizando JWT y blocks.history para simular la navegación que ofrecen las pantallas modales, sin tener pantallas modales.

# server
Para el backend se utilizó [Siervo](https://github.com/gringonivoli/siervo) un nano framework php y [Firebase jwt-php](https://github.com/firebase/php-jwt) para la autenticación por medio de JWT. Los demas paquetes php no deberían ser necesarios para comenzar. Se uso php para el backend por una cuestión de comodidad, pero se podría utilizar cualquier otra tecnología.

## LICENSE

(MIT License)

Copyright (c) 2015 Maxi Nivoli <m_nivoli@hotmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.