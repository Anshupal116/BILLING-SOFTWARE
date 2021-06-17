// Name
const Iname = document.getElementById('name');

const fun = ( ) => {
const Iname = document.getElementById('name').value;
    const Dname = document.getElementById('cName').value = `Mr. ${Iname}`;
}

Iname.addEventListener('keyup', fun);
// Mail
const Iname1 = document.getElementById('email');

const fun1 = ( ) => {
const Iname1 = document.getElementById('email').value;
    const Dname1 = document.getElementById('cEmail').value = `${Iname1}`;
}
Iname1.addEventListener('keyup', fun1);

// calculation table

const quantity = document.getElementById('food');

const fun2 = ( ) => {
const quantity =  document.getElementById('food').value;
   const Samosa = document.getElementById('samosa').innerHTML  = "Samosa";
  const price =  document.getElementById('Price').innerHTML  = `${10}`;
   document.getElementById('quantity').innerHTML = `${quantity}`;
   document.getElementById('calculation').innerHTML = `${price} * ${quantity} = ${quantity * price}`;
}
quantity.addEventListener('keyup', fun2);
