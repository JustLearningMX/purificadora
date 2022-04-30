//REALIZA UN FETCH A LA API, RECIBE EL PATH AL QUE DESEA ACCEDER Y
//EL TIPO DE SOLICITUD QUE DESEA IMPLEMENTAR

//función asíncrona
export async function requestApi(path, req, arrBody, arrUsuario, token) {

  const API = "https://purificadora-rio-jordan-api.herokuapp.com/v1"; //Base de la API a consumir
  // const API = "http://localhost:4015/v1";

  const body = (req === "POST") ? arrBody : {};

  if(req === "GET"){
    
  //path y tipo de solicitud
    const resultado = await fetch(API + path, {
      //Se concatena api y path
      mode: "cors",
      method: req, //tipo de petición
      headers: new Headers({
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        "Authorization": token,
      }),
    }); //Si todo OK se retorna el JSON con los resultados, si no el error
    return resultado.ok ? await resultado.json() : await {"error": resultado.status, "errorMsg": resultado.statusText};
  }
  else if(req === "POST")
  {
    // console.log(body);
    const resultado = await fetch(API + path, {
      //Se concatena api y path
      mode: "cors",
      method: req, //tipo de petición
      body: JSON.stringify(body),
      usuario: arrUsuario ? JSON.stringify(arrUsuario) : null,
      headers: new Headers({
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      }),
    }); 
    //Retornamos los datos recibidos de la petición
    return await resultado.json();
  }
} 