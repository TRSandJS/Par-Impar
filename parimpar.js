document.frmPos.txtNuma.focus();

function verifica(){

let a;
let b;
a=parseFloat(document.frmPos.txtNuma.value);
b=a%2
if(b===0)
document.frmPos.txtR.value="Par";
else
document.frmPos.txtR.value="Impar";

}