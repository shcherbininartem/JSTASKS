const arr = [
    {name: 'test', price: 200},
    {name: 'test1', price: 300},
    {name: 'test', price: 100},
    {name: 'test', price: 600}];

 const FilteredObj = {};

 for (let item of arr) {
    const ResObj = FilteredObj[item.name];

    if (ResObj) {
        ResObj.price += item.price;
    } else {
        FilteredObj[item.name] = {...item};
    }
 }

 const ResObj = Object.values(FilteredObj);

 console.log(ResObj);