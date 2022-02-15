const api="https://tribe.api.fdnd.nl/v1/member"
const h1 =document.querySelector('h1')
get()
async function get(){

  try{
    const response= await fetch(api)
    const data = await response.json()
    printData(data)
  console.log(data.data)
  

 }catch(e){
   
   console.log("Error:",e.message)
   
 }
    

}

function printData(data){
  
  h1.innerHTML= data.data[2].name + ' ' + data.data[2].surname


}
