async function payNow() {

  const name =
    document.getElementById('name').value;

  const amount =
    document.getElementById('amount').value;

  if (!name || !amount) {

    alert('Please fill all fields');

    return;

  }

  // MOBILE NUMBER BASED UPI

  const upiId =
    '7032472492@axl';

  // SAVE DATA

  const paymentData = {

    name,

    amount,

    paymentStatus: 'PENDING'

  };

  try {

    await fetch(

      'https://upi-payment-app-t4th.onrender.com/save-payment',

      {

        method: 'POST',

        headers: {
          'Content-Type': 'application/json'
        },

        body:
         JSON.stringify(paymentData)

      }

    );

  } catch (error) {

    console.log(error);

  }

  // UPI LINK

  const upiLink =

`upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR`;

  // OPEN PAYMENT APP

  const link =
    document.createElement('a');

  link.href = upiLink;

  link.click();

}