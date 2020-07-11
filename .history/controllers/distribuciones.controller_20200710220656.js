const distriprob = require("distriprob");

const distribucionesController = {
  uniforme( req, res ) {

    try {
      let cantidadElementos = null;
      var result = null;
      let resultArray = [];
      let customResponse = null;

      cantidadElementos = req.body.cantidadElementos;
      result = ( 1 / cantidadElementos * 100 ).toFixed( 4 ) + '%';

      for (var i = 0; i < cantidadElementos; i++) {
          resultArray.push( "Objeto " + ( i + 1 ) );
      }
  
      customResponse = {
          probabilidad : result,
          cantidadObjetos : resultArray
      }

      res.status( 200 ).send( { "customResponse" : customResponse } );
    } catch ( error ) {
      res.status( 500 ).send( error );
    }

  },
  binomial(req, res) {
    try {
      distriprob.binomial.pdf(3,10,12);
      let result = 0;
      let x = 0;
      let y = 0;
      let valX = req.body.pExito;
      let valY = req.body.qFracaso;
      let ciclos = req.body.ciclos;
      let probabilidadEventos = req.body.probabilidadEventos;
      let diff = ciclos - probabilidadEventos;

            for ( let i = 1; i <= probabilidadEventos; i++ ) {
              if (i == 1) {
                x = valX;
              } else {
                x = x * valX;
              }
            }

            for ( let i = 1; i <= diff; i++ ) {
              if ( i == 1 ) {
                y = valY;
              } else {
                y = y * valY;
              }
            }

            result = x * y;

            customResponse = {
              probabilidad : result
          }
    
          res.status( 200 ).send( { "customResponse" : customResponse } );
    } catch ( error ) {
      res.status( 500 ).send( error );
    }
  },
  binomial2(req, res) {
    try {
      //let result = distriprob.binomial.pdfSync(3,10,12);
      
      console.log( distriprob.binomial.pdfSync(3,10,12) );   // 0.3989422804014327
      distriprob.binomial.pdfSync(3,10,12).then((result) => {
        console.log(result);    
        res.status( 200 ).send( { "customResponse" : result } );                        // 1
      });

      
    } catch ( error ) {
      res.status( 500 ).send( error );
    }
  },
  poisson(req, res) {
    //TODO
  },
  hipergeometrica(req, res) {
    //TODO
  }
};

module.exports = distribucionesController;
