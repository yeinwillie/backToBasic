# React + Vite

## Introducción:


Practica de fetching a varias API, la idea adcional a practicar es probar un par de metodos, tradicional con Hooks de react (UseEffect + UseState) y uno con promesas y Suspense. 

## Concluciones encontrdas

* Es mas complejo entender como funciona el suspense que los hooks UseEffect y menos UseState
* La lectura del codigo con suspense se me hace mas facil de leer y una vez que lo entiendes pareces familiarisarse al mommento
* El renderizado de suspense me parece mas atractivo, porque lo hace una sola vez, aunque parece que la pagina se hace mas lenta, el hecho de que tenga dos renderizado el useEffect hace parecer que la pagina funciona mal al inicio y despues si, Haciendo obligatorio utilizar un esqueleto o spinners

* Use el loading en suspense y nunca aparecio en el renderizado

* La velocidad es mucho mayor en suspense, asi que desde la experiencia de usuario parece que la pagina carga al momento, aunque es cierto que depende mucho de la api (hay imagen con la respuesta en carpeta public)

* Use una api cuya latencia es alta y no se noto mucha diferencia en los renderizados

* Cuando se manejen efectos secundarios como eventos u otros y tener experiencias mas fluidas de usuario puede resultar en una combinacion de ambos metodos

## Por revisar

* No se manejaron los estados globales en suspense, tal vez con react query
* Habria que hacer pruebas y buscar soluciones para los estados locales, tal vez, react cache u otro
* Probar promise all y all settled


| Front-end  | Yein España  | [![linkedin]](https://www.linkedin.com/in/yein-e-734a7a233/)  |