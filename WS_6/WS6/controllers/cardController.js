//Import the service
const cardService = require('../services/cardService');

//Controller uses the service to get data
// exports.getAllCard = (req, res) => {
//     const projects = cardService.getAllCard();
//     res.json({
//         status: 200,
//         data: projects,
//         message: 'jjj'
//     })
// };

const cardController = {
    getAllCard: async (req, res) => {
      try{
        const projects = await cardService.getAllCard();
        res.json({ data: projects});
      } catch (error){
        res.status(500).json({ message: 'Server error', error: error.message });
      }
    }
  };


module.exports = cardController;