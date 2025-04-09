// This acts like a fake database for now
const cardItems = [
    {
        title: "That barrack",
        image: "images/250.png",
        link: "About this town hall",
        description: "give me your trophy"
    },
    {
        title: "Another barrack",
        image: "images/250.png",
        link: "About archer queen",
        description: "give me your trophy"
    }
  ];
  
  // Service function to get all food items
  const getAllCard = () => {
    return cardItems;
  };
  
  module.exports = {
    getAllCard
  };
  