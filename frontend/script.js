let upiLink = '';

async function generateQR() {

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

  // CREATE UPI LINK

  upiLink =

`upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR`;

  // GENERATE QR

  const qrUrl =

`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiLink)}`;

  // SHOW QR

  document.getElementById('qrImage').src =
    qrUrl;

  // SHOW PHONEPE BUTTON

  document.getElementById(
    'phonepeBtn'
  ).style.display = 'block';

  // SAVE DATA IN DATABASE

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

          'Content-Type':
           'application/json'

        },

        body:
         JSON.stringify(paymentData)

      }

    );

  } catch (error) {

    console.log(error);

  }

}

// OPEN PHONEPE

function openPhonePe() {

  const link =
    document.createElement('a');

  link.href = upiLink;

  link.click();

}