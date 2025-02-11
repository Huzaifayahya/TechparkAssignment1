const num = prompt("Enter a number: ");

let table = "";

for (let i = 1; i <= 10; i++) {
  table += `${num} x ${i} = ${num * i}\n`;
}

alert(table);
console.log(table);