let chapters = {
    debut: {
        titre: "Le premier titre",
        description: "descriptionwrwffwfw",
        image: "",
        boutons: [{
            titre: "aller à la fin",
            destination: "fin"
        }, 
        {
            titre: "aller à la fin pareil",
            destination: "fin"
        }]
    },
    radio: {
        titre: "Le message radio",
        description: "Vous recevez un message radio...",
        image: "",
        boutons: []
    },
    fin: {
        titre: "titre2",
        description: "description2",
        image: "",
        boutons: []
    }
};

function goToChapter(cle) {
    console.log(chapters[cle].description);
};
