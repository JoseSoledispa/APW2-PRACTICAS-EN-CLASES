const  libros  = [
    {
        id : 1 ,
        titulo : 'Sistemas distribuidos NodeJs' ,
        idautor : 1
    } ,
    {
        id : 2 ,
        titulo : 'Aprendiendo JS' ,
        idautor : 2
    } ,
    {
        id : 3 ,
        titulo : 'Código Limpio JS' ,
        idautor : 2
    }
]
const  autores  =  [
    {
        id : 1 ,
        nombre : 'Pedro Miguel'
    } ,
    {
        id : 2 ,
        nombre : 'Juan AndrEs'
    } ,
    {
        id : 3 ,
        nombre : 'Julio Verne'
    }
]
/*/
function  buscarLibroPorId ( id ,  callback  ) {
    const  libro  =  libros . buscar ( ( libro ) =>   libro . id === id  ) ;
    si  ( ! libro )
    {
         error   constante =   nuevo  error ( ) ;
        error . message  =  "Libro no encontrado"
        devolver  devolución de llamada ( error )  ;
    }
    devolución de llamada ( nulo ,  libro )
}
function  buscarAutorPorId ( id ,  callback ) {
    const  autor  =  autores . buscar ( ( autor ) => { 
        volver  autor . id === id ;
    } )
    si  ( ! autor )
    {
         error  constante =  nuevo  error ( ) ;
        error . mensaje  =  "Autor no encontrado"
        devolver  devolución de llamada ( error )
    }
    devolver  devolución de llamada ( nulo ,  autor )
}


buscarLibroPorId ( 1 ,  ( err ,  libro ) => {
    si  ( err )
    {
        consola . log ( err . mensaje ) ;
        volver ;
    }
    buscarAutorPorId (  libro . idautor ,  ( err ,  autor ) => {
        libro . autor  =  autor ;
        eliminar  libro . idautor ;
        consola . log ( libro )
    } )
} )/*/