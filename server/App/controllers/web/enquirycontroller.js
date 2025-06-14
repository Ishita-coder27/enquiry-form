let enquiryInsert=(req, res) => {

    res.send({
        message: "Enquiry Inserted Successfully",
        data: req.body
    }); 
}

module.exports = {
    enquiryInsert: enquiryInsert
};