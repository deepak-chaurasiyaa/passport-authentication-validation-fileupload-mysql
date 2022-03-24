const express = require('express');
require('dotenv').config();
const app = express();

const adminRouter = require('./routes/admin.router');
const superAdminRouter = require("./routes/superAdmin.router");
const productRouter = require('./routes/product.router');
const userRouter = require('./routes/user.router');

app.use(express.json())
app.use("/admin",adminRouter);
app.use("/superadmin",superAdminRouter); 
app.use("/product",productRouter);
app.use("/user",userRouter); 


app.listen(process.env.APP_PORT, (req, res) => {
    console.log('Server up running on port : ', process.env.APP_PORT)
})