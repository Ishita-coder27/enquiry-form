let express = require('express');
const { enquiryInsert } = require('../../controllers/web/enquirycontroller');
let enquiryRouter = express.Router();


enquiryRouter.post('/insert', enquiryInsert);




module.exports= enquiryRouter;