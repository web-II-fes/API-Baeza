// Con esto podemos habilitar o deshabilitar modulos de la API
export const modules= {

    personas: {
    active :true,
    path: "./modules/personas/routes",
    route: "/modules/personas", 
   
    middleware: null
    },

    cursos: {
        active :true,
        path: "./modules/cursos/routes",
        route: "/modules/cursos", 
       
        middleware: null
        }

};