const arr = [ 
    {name: 'test', age: 34, country: 'RF'},
    {name: 'test2', age: 12, country: 'RF'},
    {name: 'test1', age: 54, country: 'RF'}
]

let asc = "asc";
let desc = "desc";  

const sortFunk = (users, mode) => {
    let res
    
    if (mode == "desc") {
    res = users.sort((a, b) => a.age < b.age ? 1 : -1);
    
    }else{
    res = users.sort((a, b) => a.age > b.age ? 1 : -1);
    
    }
    
    return res

    }

 console.log(sortFunk(arr, asc))