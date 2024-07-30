import express from 'express';
import * as controller from './controller.js';  

const router = express.Router();

router.post('/generate-qr', controller.generateQr);  

export default router;  
