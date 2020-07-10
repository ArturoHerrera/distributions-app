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
      let result,x,y,ciclos,n = 0;
      ciclos = req.body.ciclos;
      n = req.body.pEventos;
      let diff = ciclos - n;
            for (var i = 1; i <= n; i++) {
              if (i == 1) {
                x = req.body.valX;
              } else {
                x = x * req.body.valX;
              }
            }

            for (var i = 1; i <= diff; i++) {
              if (i == 1) {
                y = req.body.valY;
              } else {
                y = y * req.body.valY;;
              }
            }
            result = x * y;
          customResponse = {
              resultado : result
          }
    
          res.status( 200 ).send( { "customResponse" : customResponse } );
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
  
      if (tipoDist == 1) {
        console.log('SIUU');
        result = 'En esta distribución todos y cada uno de los resultados del experimento tiene la misma probabilidad de ocurrir.';
      }
      if (tipoDist == 2) {
        result = 'Es de las más utilizadas por sus aplicaciones. Los experimentos  que corresponden a distribuciones '
        + 'binomiales cumplen las siguientes características: '
        + 'Se realizan n intentos independientes y en cada uno se tienen dos resultados posibles (éxito y fracaso). '
        + 'Cuando se soluciona una situación que corresponde a una distribución binomial se tiene en cuenta la siguiente información: '
        + 'n: número de intentos independientes que se realizan (tamaño de la muestra) '
        + 'p: probabilidad de éxito '
        + 'Series1 '
        + 'q: probabilidad de fracaso '
        + 'p + q =1 '
        + 'x: número de éxitos que se desean tener. '
        + 'La fórmula que se utiliza para determinar la probabilidad binomial es: 𝐵(𝑥;𝑛;𝑝) = 𝑐𝑥𝑝 𝑥 𝑞(𝑛−𝑥)';
      }
      if (tipoDist == 2) {
        result = 'Es de las más utilizadas por sus aplicaciones. Los experimentos  que corresponden a distribuciones '
        + 'binomiales cumplen las siguientes características: '
        + 'Se realizan n intentos independientes y en cada uno se tienen dos resultados posibles (éxito y fracaso). '
        + 'Cuando se soluciona una situación que corresponde a una distribución binomial se tiene en cuenta la siguiente información: '
        + 'n: número de intentos independientes que se realizan (tamaño de la muestra) '
        + 'p: probabilidad de éxito '
        + 'Series1 '
        + 'q: probabilidad de fracaso '
        + 'p + q =1 '
        + 'x: número de éxitos que se desean tener. '
        + 'La fórmula que se utiliza para determinar la probabilidad binomial es: 𝐵(𝑥;𝑛;𝑝) = 𝑐𝑥𝑝 𝑥 𝑞(𝑛−𝑥)';
      }
      if (tipoDist == 3) {
        result = 'Representa el número de éxitos en una muestra aleatoria de tamaño n seleccionada de N resultados  '
        + 'posibles, de los cuales k son considerados como éxitos y N-k son considerados fracasos. '
        + 'La fórmula que se utiliza para determinar probabilidades en las situaciones que corresponden a distribuciones de probabilidad hipergeométrica es: '
        + 'ℎ(𝑥;𝑛;𝑘;𝑁) =.𝑘𝐶𝑥 . (𝑁−𝑘)𝐶(𝑛−𝑥)/𝑁𝐶𝑛'
        + 'h=probabilidad hipergeométrica'
        + 'x= éxitos '
        + 'n= número de elementos '
        + '  k= elementos de éxito '
        + 'N=  Grupo Total '
        + 'x = 0, 1, 2,3,….n son los valores que se sacan de la muestra.';
      }
      if (tipoDist == 4) {
        result = 'Representa el número de resultados que ocurren en un intervalo de tiempo dado o en una región específica indicado por t. '
        + ' 𝑝(𝑥;𝜆) = 𝑒−𝜆(𝜆)𝑥/𝑥!'
        + 'x es el número de éxitos. '
        + 'λ representa el promedio de éxitos esperados en una unidad de tiempo.';
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
