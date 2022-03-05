import cors from "cors";
import "dotenv/config";
import express from 'express';
import {Request, Response, NextFunction} from 'express';

import { router } from "./routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use((error: Error, req : Request,resp: Response, next: NextFunction) => { 
    return resp.json({statu: "Error", message: error.message})
});

// app.get('/github', (req, res) => {
//     res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
// })

// app.get('/signin/callback', (req, res) => {
//   const {code}  = req.query;
//   return res.json(code);
// })

app.listen(process.env.SERVER_PORT, () => console.log(`Server on port ${process.env.SERVER_PORT}`));