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
 función  asíncrona buscarLibroPorId ( id ) {
    const  libro  =  libros . buscar ( ( libro ) =>   libro . id === id  ) ;
    si  ( ! libro )
    {
         error  constante =  nuevo  error ( ) ;
        error . message = "No encontramos el libro" ;
        lanzar  error ;
    }
    devolver  libro ;
} /*/ /*
 función  asíncrona buscarAutorPorId ( id ) {
    const  autor  =  autores . buscar ( ( autor ) => { 
        volver  autor . id === id ;
    } )
    si  ( ! autor )
    {
         error constante =  nuevo  error ( ) ;
        error . message = "No encontramos el autor" ;
        lanzar  error ;
    }
    return  autor ;
}
* */
/*/libros . forEach (  async  ( libro ) => {
    const  librox  =  esperar   buscarLibroPorId 
    ( libro . id ) ;
    consola . registro ( librox )
} )


/*
(asíncrono () =>
{
    tratar
    {
        const libro = esperar buscarLibroPorId (1);
        const autor = aguardar buscarAutorPorId (libro.idautor);
        libro.autor = autor;
        console.log (libro)
    }
    atrapar (err)
    {
        console.log (mensaje de error)
    }
}) ();
* /
*/////////////////////