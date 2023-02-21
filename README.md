# Movile Test Zemoga 

Implementación básica de una aplicación que obtiene datos de una API remota y muestra una lista de publicaciones. El usuario también puede marcar publicaciones como favoritas, borrarlas o eliminar las que no lo son.

Este es un breve resumen del proyecto:

App.tsx: El componente raíz de la app. Utiliza createStackNavigator para crear una pila de pantallas para la aplicación. Incluye dos pantallas: PostList y PostDetails.

PostList.tsx: Un componente que muestra una lista de publicaciones. Obtiene la lista de publicaciones de una API remota mediante Axios y las almacena en el estado. El estado también incluye una matriz de ID de entradas favoritas. El componente muestra cada entrada utilizando el componente PostItem y permite al usuario marcar una entrada como favorita, borrarla o eliminar entradas no favoritas.

PostItem.tsx: Un componente que renderiza un único post. Recibe los datos de la entrada como props y muestra el título, el ID de usuario y un icono de "favorito" que cambia dependiendo de si la entrada está marcada como favorita. También incluye un icono "eliminar" que permite al usuario borrar la entrada.

PostDetails.tsx: Un componente que muestra los detalles de un único post. Recibe los datos de la entrada como props y obtiene la lista de comentarios de esa entrada de una API remota mediante Axios. El componente muestra el título de la entrada, el cuerpo y la lista de comentarios.

Instalación 
------------

    $ Clonar el repositorio
    $ npm install
    $ para mac instalar pods npx pod-install ios 
    $ react-native run-android
    $ react-native run-ios


Librerías 
------------

* RNTL: React Native Testing Library (RNTL) es una solución ligera para probar componentes React Native. Proporciona funciones de utilidad ligeras en la parte superior de react-test-renderer , de una manera que fomenta mejores prácticas de pruebas.
* Jest: Jest es un framework de pruebas de JavaScript diseñado para garantizar la corrección de cualquier código JavaScript.
* Axios: alternativa que nos brinda multitud de ventajas

- La API es unificada para las solicitudes Ajax.
- Está optimizado para facilitar el consumo de servicios web, API REST y que devuelvan datos JSON.
- De fácil utilización y como complemento perfecto para las páginas convencionales.
- Pesa poco, apenas 13KB minimizado. Menos aún si se envía comprimido al servidor.
- Compatibilidad con todos los navegadores en sus versiones actuales.
* React Native Vector Icons: Librería para manejo de estilos con más de 3000 íconos de libre uso.
