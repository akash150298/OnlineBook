import express from 'express';
import bodyParser from 'body-parser'; 
import path from 'path';
import { fileURLToPath } from 'url';
import  {shopRoutes} from  './routes/shop.js'
import  {adminRoutes} from './routes/admin.js';
import { get404 } from './controllers/error.js';
import { mongoConnect } from './util/database.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));
// app.use((req, res, next)=>{
// User.findByPk(1)
// .then(user=>{
//     req.user = user;
//     next();
// })
// .catch(err=>console.log(err));
// })
// app.use(bodyParser.json());
// Allows the request to continue to next middle ware in line

app.use(shopRoutes);
app.use(adminRoutes);

app.use(get404);

mongoConnect(()=>{
   app.listen(3000);
})
