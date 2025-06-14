let express = require('express');
let mongoose = require('mongoose');
let enquiryRouter = require('./routes/web/enquiryRoutes');
require('dotenv').config();
let app = express();

app.use(express.json());

app.use('/api/website/enquiry',enquiryRouter);



mongoose.connect(process.env.DBURL).then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT|| 3000,()=>{
        console.log('server is running');
    });
}
).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});
