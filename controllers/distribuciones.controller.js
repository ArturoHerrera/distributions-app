const distribucionesController = {
  normal(req, res) {
    let cantidadElementos = req.body.cantidadElementos;
    var result = null;
    var resultArray = [];

    result = (1 / cantidadElementos * 100).toFixed(4)+'%';

    for (var i = 0; i < cantidadElementos; i++) {
        resultArray.push("Objeto " + (i + 1));
    }

    var resultData = {
        probabilidad: result,
        cantidadObjetos: resultArray
    }

    console.log(cantidadElementos);
    res.send({"response":resultData});
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
