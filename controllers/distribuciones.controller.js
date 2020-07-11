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
  binomial2(req, res) {
    /*
    Formula
    B(x,n,p) -> Un Resultado
    B( (x..y) ,n,p) -> Donde x..y es un rango
    */
    try {

      let n = req.body.n;
      let p = req.body.p;

      console.log("-- 1 --");

      if(req.body.rango == true){

        console.log("-- 2 --");

        let x = req.body.x;
        let y = req.body.y;
        let mResult = 0;
        let resultArray = [];

        console.log("-- 3 --");

        for (let index = (x + 1); index < y; index++) {

          console.log(" num ---> ", getCombinacion(n,p,index));
          console.log(" index ---> ", index);
          resultArray.push( getCombinacion(n,p,index) );

        }

        for (let index = 0; index < resultArray.length; index++) {
          console.log("resultArray", resultArray[index]);
          mResult = mResult + resultArray[index];
          
        }

        console.log("-- 4 --");

        res.send( {"probabilidad" : (100 * mResult).toFixed(4)} );   
      } else {

        let x = req.body.x;
        console.log("-- 5 --");

	      /*getCombinacion(n,p,x).then((result) => {
          res.send( result );                        
        });*/

        var num = getCombinacion(n,p,x);

        res.send( {"probabilidad" : (100 * num).toFixed(4)} );  
  
      }

    } catch ( error ) {
      res.send( error );
    }
  },
  poisson(req, res) {
    //TODO
  },
  hipergeometrica(req, res) {
    //TODO
  }
};


function getCombinacion(n,p,x){
  console.log(" -- getCombinacion -- ");
  var nfact=factorial(n);
  var xfact=factorial(x);
  var nxfact = factorial(n-x);
  var combinationss = (nfact/(xfact*nxfact));
  var pelevado = Math.pow(p,x);
  var qelevado = Math.pow(1-p,n-x);
  var result = combinationss * (pelevado) * (qelevado);
  return result;
}

function factorial(n){
  console.log(" -- factorial -- ");
  var total = 1; 
  for (i=1; i<=n; i++) {
      total = total * i; 
  }
  return total;
}

module.exports = distribucionesController;

