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
      let result,x,y = 0;
            let diff = ciclos - n;

            for (var i = 1; i <= n; i++) {
              if (i == 1) {
                x = valX;
              } else {
                x = x * valX;
              }
            }

            for (var i = 1; i <= diff; i++) {
              if (i == 1) {
                y = valY;
              } else {
                y = y * valY;
              }
            }

            return x * y;
    } catch (error) {
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
