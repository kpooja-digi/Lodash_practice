var _ = require('lodash');

console.log("Hello Lodash!!")
console.log("_",_)

//array

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const nestedArray = [1, 2, [[3],4, 4], 5, 6, [[7.8],7, 7,]]

console.log(_.chunk(array, 3))
console.log(_.concat(array, 0))
console.log(_.drop(array, 0))
// console.log(_.fill(array,"a"))
console.log(_.findIndex(array, 3))
console.log(_.flattenDeep(nestedArray))
console.log(_.flattenDepth(nestedArray,1))
// console.log(_.join(array,"~"))
console.log(_.pull(array, 3, 4))


console.log(_.isArray(array))
console.log(_.isBoolean(array))
console.log(_.isLength(4))

// object

const obj = {
    firstname: "john",
    lastname: "smith",
    technologies: {
      javascript: "advanced",
    },
};

const obj1 = {
    firstname: "kim",
}
    

console.log(_.get(obj, "lastname"))
console.log(_.get(obj, "technologies.javascript"))
console.log(_.findKey(obj, "john"))
console.log(_.has(obj, "firstname"))
// console.log(_.invert(obj))
console.log(_.keys(obj))
console.log(_.merge(obj, obj1))
console.log(_.omit(obj, "technologies"))
console.log(_.pick(obj, "technologies"))
console.log(_.values(obj))

//string
const name = " john smith"

console.log(_.capitalize(name))
console.log(_.upperCase(name))
console.log(_.camelCase(name))
console.log(_.endsWith(name,"h"))
console.log(_.repeat(name,3))

