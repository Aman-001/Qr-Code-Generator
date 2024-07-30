import express from "express";
import bodyParser from "body-parser";  
import cors from "cors";
import router from "./route.js";  

const app = express();
const port = 5500;

app.use(bodyParser.json()); 
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
