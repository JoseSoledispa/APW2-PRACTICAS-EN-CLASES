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

//función  buscarLibroPorId ( id )
{
    //devolver  nueva  promesa ( ( resolver ,  rechazar ) => {
        const  libro  =  libros . buscar ( ( libro ) =>   libro . id === id  ) ;
        si  ( ! libro )
        {
              //error  constante =  nuevo  error ( ) ;
            error . mensaje = "Libro no encontrado" ;
            rechazar ( error ) ;
        }
        resolver ( libro ) ;
   // } )
}
//función  buscarAutorPorId ( libro )
{
    //devolver  nueva  promesa ( ( resolver ,  rechazar ) => {
        const  autor  =  autores . buscar ( ( autor ) => { 
            //volver  autor . id === libro . idautor ;
        } )
        si  ( ! autor )
        {
             //error  constante =  nuevo  error ( ) ;
            error . mensaje = "Autor no encontrado" ;
            rechazar ( error ) ;
        }
        libro . autor =  autor ;
        resolver ( libro ) ;
   // } )
}
buscarLibroPorId ( 1 ) . entonces ( ( libro ) => {
    //volver  buscarAutorPorId ( libro ) ;
} ) . entonces ( ( libro ) => {
    consola . log ( libro )
} ) . catch ( ( error ) => {
    consola . log ( error . mensaje )/*/****** */
} )