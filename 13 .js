let arr1 = 
[{name: 'width', value: 300}, 
{name: 'height', value: 100}]

const transformation = (array) =>{

    return Object.fromEntries(array.map(({ name, value }) => [name, value]));
    
    }
    
    console.log(transformatiom(arr1));