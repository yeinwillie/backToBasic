# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Creando las cards

Las cards son recursos muy usados, principalmente cuando se quiere renderizar datos de un fecthing. Los pasos son en general estos:

1. crear la card componente con css o tailwind.
2. Crear las pro e identificar sus estados
3. asignar las prop a la estructura de la card donde se desean renderizar
4. llamar al componente card en la pagina donde se desea mostrar la card o cards
5. realizar el fetch
6. mapear la respuesta para que se renderice una card por cada index del array que devuelve la peticion
7. probar


# notas

- Los key de las cards deben ser unicos y no aleatorios, no deben ser simbolos, el id de la DB seria la mejor opcion, aunque cuaquier otro valos que cumpla con requisito se puede usar
- los nombres de las prop son importantes pueden ser distintos pero cuando pasan entre componentes deben matchearse
- los estados iniciales de un componente, cuando se inicializan las prop, lo hacen una sola vez, pendiente con intentar cambiarlos posteriormente. Si es el estado inicial en un hijo, solo se puede pasar una vez, habria que buscar otra manera para cambiarlo, dentro del hijo.
- 

