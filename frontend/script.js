async function payNow() {

  const name =
   document.getElementById('name').value;

  const amount =
   document.getElementById('amount').value;

  if (!name || !amount) {

    alert('Please fill all fields');

    return;

  }

  // YOUR REAL UPI ID

  const upiId =
   '7032472492@axl';

  // UPI LINK

  const upiLink =

`upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR`;

  // SAVE DATA IN DATABASE

  const paymentData = {

    name,

    amount,

    paymentStatus: 'PENDING'

  };

  await fetch(

   'http://localhost:5000/save-payment',

   {

    method: 'POST',

    headers: {

      'Content-Type':
       'application/json'

    },

    body:
     JSON.stringify(paymentData)

   }

  );

  // OPEN UPI APP

  window.location.href =
   upiLink;

}