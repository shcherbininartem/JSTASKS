let xstr = '--|_|-|___|--';

const task10 = (str) => {
    let newstr = [];

    for (let x = 0; x < str.length; x++) {
        if (str[x] == '_') {

         newstr.push(0);

        }
        if (str[x] == '-') {

         newstr.push(1);
        }
    }

    let result = newstr.join("");

    return result;

}
console.log(task10(xstr));