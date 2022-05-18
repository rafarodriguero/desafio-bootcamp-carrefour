function validarArray (arr, num) {
  try{
  
    if (!arr && !num) throw new ReferenceError("Enviar os Parametros");

    if(typeof arr !== 'object') throw new TypeError ("O Array precisa ser do tipo Object");
    if(typeof num !== 'number') throw new TypeError ("O valor precisa ser do tipo number");

    if (arr.length !== num) throw new RangeError("Tamanho do Array inválido");

    return arr;
  }
  catch (e) {

    if(e instanceof ReferenceError) {
      console.log("Este erro é um Reference Error");
      console.log(e.message);
    } else if (e instanceof TypeError) {
      console.log("Este erro é um Type Error");
      console.log(e.message);
    } else if (e instanceof RangeError) {
      console.log("Este erro é um Range Error");
      console.log(e.message);
    } else {
      console.log("Tipo de erro não esperado:" +e);
    } 

  }
}

console.log(validarArray([1,2,3,4,5],5));