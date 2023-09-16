function printBody(jsonBody){
    console.log(jsonBody)
}


function response(result){
    result.json().then(printBody)
} 

const sendObj = {
    method:"GET",
}

fetch ('http://localhost:3001/',sendObj).then(response)