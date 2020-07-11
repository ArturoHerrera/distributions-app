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

      res.send( { "customResponse" : customResponse } );
    } catch ( error ) {
      res.send( error );
    }

  },
  binomial(req, res) {
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
    let lambda = req.body.lambda;
    let x = req.body.x;

    if(req.body.menosDe == true){
      let mResult = 0;
      let resultArray = [];

      console.log(" x --> " , x);
      console.log(" lambda --> " , lambda);

      for (var index = 0; index < x; index++) {
        console.log(" index --> " , index);
        resultArray.push(getpoisson(lambda, index));
      }

      resultArray.forEach(element => {
        mResult = mResult + element;
      });

      res.send( {"probabilidad" : (mResult * 100).toFixed(4)} );  
    } else {
      res.send( {"probabilidad" : (getpoisson(lambda,x) * 100).toFixed(4)} );   
    }
  },
  hipergeometrica(req, res) {
    //getHyper(x,n,k,nmay)
    let x = req.body.x;
    let n = req.body.n;
    let k = req.body.k;
    let nmay = req.body.nmay;

    console.log(" getHyper(x,n,k,nmay) ---> " , getHyper(x,n,k,nmay));
    res.send( {"probabilidad" : (getHyper(x,n,k,nmay) * 100).toFixed(4)} );  
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
  if (n==0){
    n=1;
  }
    var total = 1; 
    for (i=1; i<=n; i++) {
        total = total * i; 
    }
    return total;
}

function getpoisson(lambda,x){
  var e = Math.exp(0-lambda);
var xfact=factorial(x);


  var poissssson = (e*(Math.pow(lambda,x)))/xfact;
    return poissssson;
}

function combination(n,r){
  var nfact = factorial(n)
  var rfact = factorial(r)
var nrfact = factorial(n-r);

  var res = Math.round((nfact/(rfact*nrfact)));
  return res;
}

function getHyper(x,n,k,nmay){
  var kx = combination(k,x);
  var nknx = combination(nmay-k, n-x);
  var nmayn= combination(nmay,n);
  var result = ( kx * nknx)/nmayn;

  return result;
    }

module.exports = distribucionesController;

