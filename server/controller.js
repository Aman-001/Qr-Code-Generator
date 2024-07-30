import * as service from './service.js';  

export const generateQr = async (req, res) => {
  try {
    const { data } = req.body;
    const QrCodeText = service.formatData(data);
    const QrCodeBuffer = await service.generateQrCode(QrCodeText);

    res.setHeader('Content-Disposition', 'attachment; filename=qrCode.png'); 
    res.type('image/png').send(QrCodeBuffer);
  } catch (error) {
    console.log('Error while generating QR: ', error);
    return res.status(500).send({ error: 'Internal Server Error' });
  }
};