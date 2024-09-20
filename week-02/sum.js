function sum(ary) {
    return ary.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(sum([1, 5, 3, 2])); //11