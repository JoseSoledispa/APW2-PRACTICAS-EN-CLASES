const  axios     =  require ( 'axios' ) . por defecto ;
const  cheerio   =  require ( 'cheerio' ) ;
const  mangosta  =  require ( 'mangosta' ) ;
const  cron      =  require ( 'nodo-cron' ) ;

const  {  MONGO_URI  }  =   require ( './config' ) ;
const  { Noticias }  =  require ( './models' ) ;


    cron . horario ( "* * * * *" ,  async  ( ) => {
    tratar
    //{
        const  resconexion  =   esperar  mangosta . conectar ( MONGO_URI )
        const  html =   aguardar  axios . get ( "https://cnnespanol.cnn.com/" ) ;
        const  $  =  cheerio . cargar ( datos html . )
        const  titulos  =   $ ( ".news__title" ) ;
        let  arregloNoticias = [ ] ;
        titulos . cada uno ( async  ( índice ,  elemento ) => {
            const  Noticia  =  {
                titulo : $ ( elemento ) . texto ( ) . toString ( )  ,
                enlace : $ ( elemento ) . niños ( ) . attr ( "href" ) 
            }
            // aguarda Noticias.create (Noticia);
            arregloNoticias =  [ ... arregloNoticias ,  Noticia ] ;
        } )
        //console.log(arregloNoticias)
            Noticias . crear ( arregloNoticias ) ;
    }
    //catch ( err ) {
        //consola . log ( err )
    //}//
} )
 ;