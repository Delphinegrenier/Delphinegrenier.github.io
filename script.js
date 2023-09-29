let chapters = {
  debut: {
    titre: "Le message radio",
    description: `Après de longues heures passées à réparer votre vieille radio dans ce nouveau monde apocalyptique, le grésillement cède la place à une voix brisée. Le message vous informe de l'existence d'une ville de survivants, un havre de sécurité appelé "New Haven." Votre cœur s'emballe d'espoir à l'idée d'un refuge potentiel, mais vous savez que la route vers cette destination est semée d'embûches. Votre aventure commence ici, alors que vous vous apprêtez à traverser un monde déchu et hostile pour atteindre ce bastion lointain.`,
    image:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-last-of-us/7/78/The_Last_of_Us%E2%84%A2_Part_I_20220915055736.jpg?width=814",
    boutons: [
      {
        titre: "Rester au campement",
        destination: "campement",
      },
      {
        titre: "Débuter le voyage",
        destination: "intersection",
      },
    ],
  },
  campement: {
    titre: "Le campement mortel",
    description: `Dans votre hésitation, vous choisissez de rester au campement. Les jours passent, mais les réserves de nourriture s'amenuisent rapidement. La faim insupportable vous affaiblit, et votre aventure prend fin tragiquement, votre corps sans vie gisant parmi les débris.`,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz4788dKwS_bG9nrNMCQCkFhkucSAHjUgbprj9nI4woyRZuqBI",
    boutons: [
      {
        titre: "Recommencer",
        destination: "debut",
      },
    ],
  },
  intersection: {
    titre: "L'intersection'",
    description: `La décision est prise. Vous allez écouter le message radio et entreprendre le périlleux voyage vers New Haven. La ville en ruines s'étend devant vous, une toile de fond sombre pour votre quête désespérée. Vous vous trouvez devant une intersection séparant deux directions: la banlieue ou le centre-ville. Les deux chemins semblent sécuritaire, mais il n'y a aucune certitude.`,
    image:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-last-of-us/d/df/The_Last_of_Us%E2%84%A2_Part_I_20220916025604.jpg",
    boutons: [
      {
        titre: "Traverser la ville",
        destination: "ville",
      },
      {
        titre: "Vers la banlieue",
        destination: "banlieue",
      },
    ],
  },
  banlieue: {
    titre: "Bloqués en Banlieue",
    description: `Vous choisissez de contourner la ville par la banlieue, mais une rencontre inattendue se produit. Des survivants armés bloquent votre chemin. La tension monte, et vous réalisez que vous ne pourrez pas avancer sans résoudre ce problème. Cependant, leur possession d'armes constitue une menace que vous ne pouvez ignorer.`,
    image:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-last-of-us/d/d3/The_Last_of_Us%E2%84%A2_Part_I_20220914034807.jpg?width=814",
    boutons: [
      {
        titre: "Leur parler",
        destination: "rencontre",
      },
      {
        titre: "Voler une arme",
        destination: "vol",
      },
    ],
  },
  rencontre: {
    titre: "La rencontre violente",
    description: `Vous décidez de tenter votre chance en abordant les survivants armés, espérant une issue pacifique. Malheureusement, leur hostilité est manifeste, et avant même que vous ne puissiez prononcer un mot, ils ouvrent le feu, mettant brutalement fin à votre aventure.`,
    image:
      "https://static.wikia.nocookie.net/thelastofus/images/7/7a/Survivors.jpg/revision/latest?cb=20120205051852",
    boutons: [
      {
        titre: "Recommencer",
        destination: "debut",
      },
    ],
  },
  vol: {
    titre: "Vol et fuite",
    description: `Avec audace, vous optez pour la discrétion, subtilisant furtivement une arme à feu et la glissant dans votre poche arrière. Incapable de progresser plus avant dans la banlieue, vous faites demi-tour et choisissez de repasser par le centre-ville, l'arme volée maintenant votre seule lueur d'espoir.`,
    image:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-last-of-us/f/f5/The_Last_of_Us%E2%84%A2_Part_I_20220909042131.jpg?width=814",
    boutons: [
      {
        titre: "Traverser la ville",
        destination: "ville",
      },
    ],
  },
  ville: {
    titre: "Confrontation avec les infectés",
    description: `Le centre-ville s'étend devant vous, mais il est tout sauf désert. Vous vous retrouvez face à face avec des infectés, leurs yeux vides et leur démarche titubante vous rappelant la nature impitoyable de ce monde. Ils s'aperçoivent de votre présence. Vous reculez de quelques pas avant de prendre une décision.`,
    image:
      "https://cdna.artstation.com/p/assets/images/images/000/028/180/large/fungalmen_ill_hn_01.jpg?1400242229",
    boutons: [
      {
        titre: "Rester immobile",
        destination: "course", // Accès au prochain chapitre seulement s'ils ont volé l'arme - Code plus bas
      },
      {
        titre: "S'enfuir",
        destination: "course",
      },
    ],
  },
  course: {
    titre: "Course contre la mort",
    description: `Malheureusement, les infectés vous aggrippent, et vous n'avez pas d'arme pour vous défendre. Votre souffle se mélange au leur alors qu'ils s'abattent sur vous, mettant brutalement fin à votre voyage.`,
    image:
      "https://cdn.vox-cdn.com/thumbor/0aBP1M7JC0bcRx2XbzbqPnriYPg=/0x0:1280x720/1200x0/filters:focal(0x0:1280x720):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/24387919/infected_runners.1359953276.jpg",
    boutons: [
      {
        titre: "Recommencer",
        destination: "debut",
      },
    ],
  },
  arme: {
    titre: "L'arrivé",
    description: `Vous dégainez l'arme à feu que vous avez volée et ouvrez le feu sur les infectés qui vous poursuivent. Votre main tremble, mais vous parvenez à abattre les menaces qui vous entourent et traverser la ville. Enfin, vous atteignez New Haven, mais l'accueil n'est pas chaleureux. Les individus qui vous accueillent sont ceux à qui vous avez volé l'arme. Leurs regards accusateurs vous transpercent alors qu'ils vous demandent si vous êtes l'individu responsable du vol.`,
    image:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-last-of-us/4/4b/The_Last_of_Us%E2%84%A2_Part_I_20220914203310.jpg?width=814",
    boutons: [
      {
        titre: "Dire la vérité",
        destination: "confession",
      },
      {
        titre: "Mentir",
        destination: "mentir",
      },
    ],
  },
  confession: {
    titre: "La confession",
    description: `Face à la vérité, vous choisissez d'être honnête. Vous avouez avoir volé leur arme pour survivre, et leur colère gronde. Vous vous retrouvez sous le feu de leurs armes, mettant brutalement fin à votre quête pour New Haven.`,
    image:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-last-of-us/e/e1/The_Last_of_Us%E2%84%A2_Part_I_20220915061147.jpg?width=814",
    boutons: [
      {
        titre: "Recommencer",
        destination: "debut",
      },
    ],
  },
  mentir: {
    titre: "Le Mensonge bienvenu",
    description: `Au lieu de la vérité, vous choisissez de mentir. Vous niez avoir volé leur arme, et ils semblent vous croire. Vous êtes autorisé à entrer à New Haven, mais le poids de votre mensonge pèse sur votre conscience alors que vous poursuivez votre histoire dans cette nouvelle communauté.`,
    image:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/the-last-of-us/9/92/The_Last_of_Us%E2%84%A2_Part_I_20220908170548.jpg?width=814",
    boutons: [
      {
        titre: "Terminer",
        destination: "debut",
      },
    ],
  },
};

function goToChapter(cle) {
  // Si l'utilisateurs à récupérer une arme dans le chapitre vol, il peut passer au prochain chapitre, sinon il passe au chapitre qui cause la fin
  if (cle == "vol") {
    chapters["ville"].boutons[0].titre = "Utiliser l'arme volée";
    chapters["ville"].boutons[0].destination = "arme";
  }
  if (chapters[cle] !== undefined) {
    console.log(chapters[cle].titre);
    console.log(chapters[cle].description);
    console.log("Options: ");
    chapters[cle].boutons.forEach((items) => {
      console.log(
        `➔ ${items.titre}
Tapez goToChapter("${items.destination}")`
      );
    });
  } else {
    console.log("Mauvaise clé de chapitre");
  }
}

goToChapter("debut");
