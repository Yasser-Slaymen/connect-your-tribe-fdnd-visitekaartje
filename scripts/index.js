const api="https://tribe.api.fdnd.nl/v1/member"
const h1 =document.querySelector('h1')
get()
async function get(){

  try{
    const response= await fetch(api)
    const data = await response.json()
    //  const filter = data.data.filter(student=> student.name.startsWith('D') )
    printData(data)
  //   printData(filter)
  // // console.log(filter)
  

 }catch(e){
   
   console.log("Error:",e.message)
   
 }
    

}


function printData(data){
   console.log(data)
   h1.innerHTML= data.data[2].name + ' ' + data.data[2].surname


}
// function printData(x){
//   // console.log(x)
//   h1.innerHTML= x[3].name


//  }