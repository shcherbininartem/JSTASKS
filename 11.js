const string = 'abcbacabcqbcabcbnaba';
let mastring = string.split();

console.log(mastring.map(e => /^[a-c]+$/.test(e))); 