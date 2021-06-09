function calFunction(){
let first = +document.getElementById('first').value;
let second = +document.getElementById('second').value;
sum = first + second;
for (let i=first+1; i<second;i++){
    sum += i
}
document.getElementById('sum').innerHTML = sum;
}