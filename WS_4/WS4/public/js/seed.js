const sampleProject = new PromiseRejectionEvent({
    title: "That barrack",
    image: "images/250.png",
    link: "About this town hall",
    description: "give me your trophy"
});

sampleProject.save().then(() => console.log("Sample project saved!"));