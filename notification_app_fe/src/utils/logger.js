const BASE_URL =
"http://4.224.186.213/evaluation-service";

export const Log = async (
 stack,
 level,
 packageName,
 message
)=>{

 try{

   await fetch(
    `${BASE_URL}/logs`,
    {
      method:"POST",

      headers:{
       "Content-Type":"application/json",

       Authorization:
       `Bearer ${localStorage.getItem("token")}`
      },

      body:JSON.stringify({
        stack,
        level,
        package:packageName,
        message
      })
    }
   );

 }catch(err){
   console.log(err);
 }

};