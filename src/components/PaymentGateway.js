import axios from 'axios';
import { useState } from 'react';
import QRCode from './QRCode';
import '../styles/Pay.css';
const PaymentGateway = ({ formData, eventDetails }) => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const [qrData, setQrData] = useState(null);

 
  const PHONEPE_MERCHANT_ID = 'YOUR_MERCHANT_ID';
  const PHONEPE_SALT_KEY = 'YOUR_SALT_KEY';
  
  const initiatePayment = async () => {
    try {
      const payload = {
        merchantId: PHONEPE_MERCHANT_ID,
        amount: eventDetails.amount * 100,
        merchantTransactionId: `TXN_${Date.now()}`,
        callbackUrl: `${window.location.origin}/payment-success`,
        userDetails: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone
        },
        eventDetails
      };

      
      const signature = btoa(JSON.stringify(payload) + PHONEPE_SALT_KEY);

     
      const response = await axios.post('https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay', {
        request: btoa(JSON.stringify(payload)),
        signature
      });

      setTransactionId(response.data.transactionId);
      setPaymentSuccess(true);
      
    
      setQrData({
        ...formData,
        ...eventDetails,
        transactionId: response.data.transactionId,
        amount: eventDetails.amount,
        paymentStatus: 'Completed'
      });

    } catch (error) {
      console.error('Payment failed:', error);
      setQrData({
        ...formData,
        ...eventDetails,
        paymentStatus: 'Failed'
      });
    }
  };

  return (
    <div className="payment-gateway">
      {!paymentSuccess ? (
        <div>
          <h3>Payment Details</h3>
          <p>Event: {eventDetails.title}</p>
          <p>Amount: ₹{eventDetails.amount}</p>
          <button onClick={initiatePayment} className="btn">
            Pay with PhonePe
          </button>
        </div>
      ) : (
        <div>
          <QRCode data={qrData} />
          <p>Transaction ID: {transactionId}</p>
        </div>
      )}
    </div>
  );
};

export default PaymentGateway;