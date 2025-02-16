import { useRef, useEffect } from 'react';
import QRious from 'qrious';

const QRCode = ({ data }) => {
  const qrRef = useRef(null);

  useEffect(() => {
    if (data) {
      const qrContent = `
        Participant Details:
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone}
        USN: ${data.usn}
        College: ${data.college}
        Department: ${data.department}

        Event Details:
        Title: ${data.selectedEvent.title}
        Description: ${data.selectedEvent.description}
        Date: ${data.selectedEvent.date || 'N/A'}
        Time: ${data.selectedEvent.time || 'N/A'}
        Venue: ${data.selectedEvent.venue || 'N/A'}
      `;

      new QRious({
        element: qrRef.current,
        value: qrContent,
        size: 300,
        backgroundAlpha: 0,
        foreground: '#006B38FF'
      });
    }
  }, [data]);

  return (
    <div className="qr-container">
      <h3>Event Pass & Payment Receipt</h3>
      <canvas ref={qrRef}></canvas>
      <p>Scan QR code to verify participation</p>
    </div>
  );
};

export default QRCode;