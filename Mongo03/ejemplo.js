const  mangosta  =   require ( "mangosta" ) ;
const  conexion  =  `mongodb + srv: // joancema: jacm1310@cluster0.x7met.mongodb.net/prueba6A? retryWrites = true & w = mayoría` ;

/*/( asíncrono  ( ) => {
   /*///esperar  mangosta . connect ( conexion ,  {  useNewUrlParser : verdad ,  useUnifiedTopology : verdadera  } ) ;
    const  Usuario  =   mangosta . modelo ( "Usuario" ,  {  nombre : String  } ) ;
    const  usuario1  =  new  Usuario ( { nombre : "Roger Cruz" } ) ;
   //const  guardo =   espera  usuario1 . guardar ( ) ;
  // const  respuesta  =  aguardar al  usuario . encontrar ( ) ;
    consola . log ( respuesta ) ;
//} ) ( ) ;
