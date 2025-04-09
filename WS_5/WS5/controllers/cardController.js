//Import the service
const cardService = require('../services/cardService');

//Controller users the service to get data
exports.getAllCard = (req, res) => {
    const projects = cardService.getAllCard();
    res.json({
        status: 200,
        data: projects,
        message: 'jjj'
    })
};

module.exports = cardController;