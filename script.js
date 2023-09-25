let chapters = {
    debut: {
        titre: "Le premier titre",
        description: `Après de longues heures passées à réparer votre vieille radio, le grésillement cède la place à une voix brisée. Le message vous informe de l'existence d'une ville de survivants, un havre de sécurité appelé "New Haven." Votre cœur s'emballe d'espoir à l'idée d'un refuge potentiel, mais vous savez que la route vers cette destination est semée d'embûches. Votre aventure commence ici, alors que vous vous apprêtez à traverser un monde déchu et hostile pour atteindre ce bastion lointain.`,
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
