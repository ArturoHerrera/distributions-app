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
  },
  informacionDistribucion (req, res){
    
    try {
      let tipoDist = null;
      tipoDist = req.body.tipo;
      var result = null;
      /*
      switch (tipoDist){
        case 1:
          resp = 'Caso1';
          console.log(resp);
          customResponse = {
            informacion : resp
          }
          res.status( 200 ).send( { "customResponse" : customResponse } );
        break;
        case 2:
          resp = 'Caso2';
          console.log(resp);
          customResponse = {
            informacion : resp
          }
          res.status( 200 ).send( { "customResponse" : customResponse } );
        break;
        case 3:
          resp = 'Caso3';
          console.log(resp);
          customResponse = {
            informacion : resp
          }
          res.status( 200 ).send( { "customResponse" : customResponse } );
        break;
        case 4:
          resp = 'Caso4';
          console.log(resp);
          customResponse = {
            informacion : resp
          }
          res.status( 200 ).send( { "customResponse" : customResponse } );
        break;
      }*/
  
      if (tipoDist = 1) {
        result = 'SIMON';
      }
      customResponse = {
          informacion : result
      }

      res.status( 200 ).send( { "customResponse" : customResponse } );
    } catch ( error ) {
      res.status( 500 ).send( error );
    }
    
  }
};

module.exports = distribucionesController;
