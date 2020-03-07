const fs = require("fs");

// 读取数据
const userString = fs.readFileSync("./database/user.json").toString();
const array = JSON.parse(userString);
console.log(array);

// 存储数据
const userQ = { id: 4, name: "tony", password: "tttt" };
array.push(userQ);

const string = JSON.stringify(array);
fs.writeFileSync("./database/user.json", string);
