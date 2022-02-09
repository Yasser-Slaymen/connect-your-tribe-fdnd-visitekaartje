const api="https://tribe.api.fdnd.nl/v1/member";

async function getData(){

    const response= await fetch(api)
    const data =await response.json();
    console.log(data[0].contact)
    // document.querySelector('article h4').innerHTML=data
    // printData(data)

}
getData()