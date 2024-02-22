function validateInput(arr){
  if(!Array.isArray(arr) || arr.length === 0){
    return false; 
  }
  for(let i = 0;  i < arr.length; i++){
    if(typeof(arr[i]) !== 'string'){
      return false; 
    }
  }
  return true; 
}

console.log(validateInput(['this','this',1])); 


const z = require('zod')
const schema = z.array(z.string());
console.log(schema.safeParse(['this','this']));