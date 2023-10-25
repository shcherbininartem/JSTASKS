let str1 = 'test education part 2';
let x = 1;

const task2 = (str) => {
    let newString = '';

    if (str.length > 5) {
        newString = str.slice(0,3)+str.slice(-3);

    } else 
   while(true) {
        if (str.length < x){
            break;
        }
    newString = newString + str.slice(0,1);
    x++;
    }
    
    return newString;
    
}


console.log(task2(str1));

