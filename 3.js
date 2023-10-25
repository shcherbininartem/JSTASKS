let xstr = 'abctestabctext'

const task3 = (str) => {
    let newx = '';

    if (str.slice(0,3) == 'abc'){
        newx = 'www' + str.slice(3); 
    }

    else{
        newx = str + "zzz"
    }
    
    return newx;

}

console.log(task3(xstr));