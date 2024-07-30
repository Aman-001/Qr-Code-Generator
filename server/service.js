import QRCode from 'qrcode';

export function formatData(data) {
  const QrCodeText = `Product Id: ${data.id}, Price: $${data.price}`;
  return QrCodeText;
}

export async function generateQrCode(QrCodeText) {
  
  const options = {
    errorCorrectionLevel: 'M',
    type: 'image/png',
    margin: 1,
  };

  const QrCodeBuffer = QRCode.toBuffer(QrCodeText, options);
  return QrCodeBuffer;
}
