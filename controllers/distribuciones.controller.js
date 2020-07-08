const distribucionesController = {
  unirforme( req, res ) {

    let cantidadElementos = null;
    var result = null;
    var resultArray = [];
    var customResponse = null;

    try {
      cantidadElementos = req.body.cantidadElementos;
      result = ( 1 / cantidadElementos * 100 ).toFixed( 4 ) + '%';

      for (var i = 0; i < cantidadElementos; i++) {
          resultArray.push( "Objeto " + ( i + 1 ) );
      }
  
      customResponse = {
          probabilidad : result,
          cantidadObjetos : resultArray
      }

      res.send( { "customResponse" : customResponse } );
    } catch ( error ) {
      res.status( 500 ).send( error );
    }

  },
  binomial(req, res) {
    //TODO
  },
  poisson(req, res) {
    //TODO
  },
  hipergeometrica(req, res) {
    //TODO
  }
};

module.exports = distribucionesController;
