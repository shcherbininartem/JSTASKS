let long = 7;

const FigureArray = (length) =>{
    let arr = [];
    const str = "x";
    let text = "";
    
    for (let i = 0; i < length; i++){
    
    text += str;
    arr += text + "\n";
    
    }
    
    return arr;

    }
    
    console.log(FigureArray(long));