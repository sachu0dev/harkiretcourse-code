function validateInput(arr){
  if(typeof(arr) !== 'object' && arr.length > 0){
    return false;
  }
  for(let i = 0;  i < arr.lengh; i++){
    if(typeof(arr[i]) !== 'string'){
      return false;
    }
  }
  return true;
}

console.log(validateInput(['this','this', 1]));


const z = require('zod')
const schema = z.array(z.string());
console.log(schema.safeParse(['this','this']));