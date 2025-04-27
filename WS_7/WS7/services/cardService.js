const Project = require('../models');

// This acts like a fake database for now
// const cardItems = [
//     {
//         title: "That barrack",
//         image: "images/250.png",
//         link: "About this town hall",
//         description: "give me your trophy"
//     },
//     {
//         title: "Another barrack",
//         image: "images/250.png",
//         link: "About archer queen",
//         description: "give me your trophy"
//     }
//   ];
  
//   // Service function to get all card items
//   const getAllCard = () => {
//     return cardItems;
//   };

// app.get('/api/projects', async (req,res) => {
//     const projects = await Project.find({});
//     res.json({statusCode: 200, data: projects, message:"Success"})
// });

const cardService = {
  getAllCard: async()=>{
      return await Project.find({});
  }
}

module.exports = cardService;
  