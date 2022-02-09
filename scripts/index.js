getData()
const api='https://thronesapi.com/api/v2/Characters';

async function getData(){

    const response= await fetch(api)
    const data =await response.json();
    console.log(data[4].family)
      document.querySelector('article h4').innerHTML=data[0].family
    // printData(data)

}
