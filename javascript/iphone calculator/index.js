function parseNunber(value){
  return parseFloat(value).toPrecision(4).replace(/\.?[0]+$/g,'')
}
[
  2.7800000000000002,
  2.78000000,
  2,
  2.10,
  2.01

].map(item => parseNunber(item))

function calc(first, op, second){
  let value = eval(`${first}${op}${second}`);
  return parseNunber(value);
}

const utilities = document.querySelectorAll(".color__gray-1");
const digit = document.querySelectorAll(".digit");
const operator = document.querySelectorAll(".operator");
const number = document.querySelector(".number");
const submit = document.querySelector(".submit");
const bgorange = document.querySelectorAll(".color__orange");
const comma = document.querySelector(".comma");
let operatorval = "";
let a = "";
let b = "";
let c = "";
let d = "";
let floata = "";
let floatb = "";
let plus = "";
let pluss = "";
utilities.forEach((item) => {
  item.addEventListener("click", (event) => {
    if(!item.classList.contains("bg__gray-1")){
      item.classList.add("bg__gray-1");
      setTimeout(() => {
        item.classList.remove("bg__gray-1");
      },210);
    }
    if (item.textContent == "AC") {
      number.textContent = "0";
      a = "";
      b = "";
      c = "";
      d = "";
      plus = "";
      pluss = "";
      operatorval = "";
      floata = "";
      floatb = "";
      operator.forEach(item => {
        item.classList.remove("bg__orange");
      })
    }
    if (item.textContent == "+/-") {
      number.textContent = `-${number.textContent}`;
      if (a && b) {
        a = eval(`${a}*-1`);
        b = eval(`${b}*-1`);
      } else if (a) {
        a = eval(`${a}*-1`);
      } 
    }
    if (item.textContent == "%") {
      f = "";
      let value = "";
      if(number.textContent.includes(",")){
          f= number.textContent.replace(",",".");
           value = parseFloat(eval(`${f}/100`));
      }else{
         value = parseFloat(eval(`${number.textContent}/100`));
      }
      number.textContent = value;
      if (b) {
        b = eval(`${b}/100`);
      } 
      if (a) {
        a = eval(`${a}/100`);
      } 
    }
  });
});



operator.forEach((item) => {
  item.addEventListener("click", (event) => {
    operatorval = item.textContent;
    if (operatorval == "x") {
      operatorval = "*";
    }
    b = "";
    if(!item.classList.contains("bg__orange")){
      bgorange.forEach(item => {
        item.classList.remove("bg__orange");
      })
      item.classList.add("bg__orange");
  }
  });
});

digit.forEach((item) => {
  item.addEventListener("click", (event) => {
    const value = item.textContent;
    if (operatorval) {
      if(floatb){
        floatb = `${d},`;
        pluss = `${d}`;
        b += value;
        number.textContent = `${floatb}${b}`;
        floatb = `${d}.`;
        b = eval(`${floatb}${b}`);
        floatb = "";
    }else{
      b += value;
      if(pluss){
        number.textContent = `${b.replace(".",",")}`;
      }else{
        number.textContent = b;
      }
    }
      
    } else {
      if(floata){
          floata = `${c},`;
          plus = `${c}`;
          a += value;
          number.textContent = `${floata}${a}`;
          floata = `${c}.`;
          a = parseFloat(eval(`${floata}${a}`)).toFixed(1);
          floata = "";
      }else{
        a += value;
        if(plus){
          number.textContent = `${a.replace(".",",")}`;
        }else{
          number.textContent = a;
        }
      }
    }

    operator.forEach(item => {
      item.classList.remove("bg__orange");
    })


    if(!item.classList.contains("bg__gray-0")){
      item.classList.add("bg__gray-0");
      setTimeout(() => {
        item.classList.remove("bg__gray-0");
      },250);
    }
  });
  
});

submit.addEventListener("click", (event) => {
  if(!submit.classList.contains("bg__orange")){
    submit.classList.add("bg__orange");
    setTimeout(() => {
      submit.classList.remove("bg__orange");
    },150)
  }
  if (operatorval) {
    if (a && b) {
      var value = calc(a, operatorval, b);
      number.textContent = String(value).replace(".",",");
      a = value;
    } else if (a && b == "") {
      var value = calc(a, operatorval, a);
      number.textContent = String(value).replace(".",",");
      a = value;
    } else if(b) {
      var value = calc(0, operatorval, b);
      number.textContent = String(value).replace(".",",");
      a = value;
    } else {
      console.error('no a, b ???')

    }
  } else {
    console.error('no op ???')

  }
});

comma.addEventListener("click", ()=>{
  if(!comma.classList.contains("bg__gray-0")){
    comma.classList.add("bg__gray-0");
    setTimeout(() => {
      comma.classList.remove("bg__gray-0");
    },250);
  }
  if(a && b){
    floatb = `${b},`;
    number.textContent = floatb;
    d = b;
    b="";
  }
  else if(b){
    floatb = `${b},`;
    number.textContent = floatb;
    d =b;
    b="";
  }
  else if(a){
    floata = `${a},`;
    number.textContent = floata;
     c = a;
    a = "";
  }
});




