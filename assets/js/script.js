let chapters = {
  debut: {
    titre: "Le message radio",
    description: `Après de longues heures passées à réparer votre vieille radio dans ce nouveau monde apocalyptique, le grésillement cède la place à une voix brisée. Le message vous informe de l'existence d'une ville de survivants, un havre de sécurité appelé "New Haven." Votre cœur s'emballe d'espoir à l'idée d'un refuge potentiel, mais vous savez que la route vers cette destination est semée d'embûches. Votre aventure commence ici, alors que vous vous apprêtez à traverser un monde déchu et hostile pour atteindre ce bastion lointain.`,
    image: "./assets/images/debut.jpg",
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
    image: "./assets/images/campement.png",
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
    image: "./assets/images/intersection.jpg",
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
    image: "./assets/images/banlieue.jpg",
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
    image: "./assets/images/rencontre.jpg",
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
    image: "./assets/images/vol.jpg",
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
    image: "./assets/images/ville.jpg",
    boutons: [
      {
        titre: "Rester immobile",
        destination: "course",
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
    image: "./assets/images/course.jpg",
    boutons: [
      {
        titre: "Recommencer",
        destination: "debut",
      },
    ],
  },
  arme: {
    titre: "L'arrivée",
    description: `Vous dégainez l'arme à feu que vous avez volée et ouvrez le feu sur les infectés qui vous poursuivent. Votre main tremble, mais vous parvenez à abattre les menaces qui vous entourent et traverser la ville. Enfin, vous atteignez New Haven, mais l'accueil n'est pas chaleureux. Les individus qui vous accueillent sont ceux à qui vous avez volé l'arme. Leurs regards accusateurs vous transpercent alors qu'ils vous demandent si vous êtes l'individu responsable du vol.`,
    image: "./assets/images/arme.jpg",
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
    image: "./assets/images/confession.jpg",
    video: "confessionVideo",
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
    image: "./assets/images/mentir.jpg",
    video: "mentirVideo",
    boutons: [
      {
        titre: "Terminer",
        destination: "debut",
      },
    ],
  },
};

function goToChapter(cle) {
  let chapitre = chapters[cle];
  let btn = chapitre.boutons;
  let divMedia = document.querySelector(".media");
  //Création d'un nouvel audio
  const audio = new Audio("./assets/audio/audio.wav");

  // Création d'un "text to speech"
  let msg = new SpeechSynthesisUtterance();
  let voices = window.speechSynthesis.getVoices();
  msg.voice = voices[3];
  msg.volume = 0.0; // From 0 to 1
  msg.rate = 1.5; // From 0.1 to 10
  msg.pitch = 0; // From 0 to 2
  msg.text = chapitre.description;
  msg.lang = "fr";

  speechSynthesis.speak(msg);

  if (cle === "vol") {
    chapters["ville"].boutons[0].titre = "Utiliser l'arme volée";
    chapters["ville"].boutons[0].destination = "arme";
    localStorage.setItem("vol", true);
  }
  if (cle === "debut") {
    chapters["ville"].boutons[0].titre = "Rester immobile";
    chapters["ville"].boutons[0].destination = "course";
  }

  if (chapitre !== undefined) {
    let titreChapitre = document.querySelector("h2");
    let descriptionChapitre = document.querySelector(".description");

    titreChapitre.innerText = chapitre.titre;

    descriptionChapitre.innerText = chapitre.description;

    //Enleve le premier child de DivMedia pour qu'ensuite on ajoute une nouvelle balise selon si vidéo ou non
    while (divMedia.firstChild) {
      divMedia.removeChild(divMedia.firstChild);
    }

    // Ajout de video
    if (chapitre.video) {
      let videoChapitre = chapitre.video;
      let video = `<video class="img" src="./assets/video/${videoChapitre}.mp4" muted loop autoplay></video>`;
      divMedia.innerHTML = video;
    } else {
      let nouvImg = document.createElement("img");
      divMedia.appendChild(nouvImg);
      nouvImg.setAttribute("src", chapitre.image);
      nouvImg.classList.add("img");
    }

    const boutons = document.querySelector("#barreoption");

    while (boutons.firstChild) {
      boutons.removeChild(boutons.firstChild);
    }
    for (let i = 0; i < btn.length; i++) {
      const nouveauBtn = document.createElement("button");

      nouveauBtn.textContent = btn[i].titre;
      nouveauBtn.addEventListener("click", () => {
        goToChapter(btn[i].destination);
        //Joue audio au click du bouton
        audio.volume = 0.4;
        audio.play();
      });

      boutons.appendChild(nouveauBtn);
    }
  }
  //Sauvegarde local storage
  localStorage.setItem("cle", cle);
}

// Afficher la derniere page ouverte si déjà joué, sinon afficher le début.
let cleActuelle = localStorage.getItem("cle");
if (cleActuelle) {
  goToChapter(cleActuelle);
} else {
  goToChapter("debut");
}

// Ajouter un addEventListener sur le bouton Réinitialiser pour clear le local storage et amener au chapitre début
const boutonReinitialiser = document.querySelector(".boutonReinitialiser");
boutonReinitialiser.addEventListener("click", function () {
  localStorage.clear();
  goToChapter("debut");
  musique.currentTime = 0;
});

//Ajout de musique et bouton pour arrêter la musique
const boutonMusique = document.querySelector(".boutonMusique");
const musique = new Audio("./assets/audio/tlou_theme.wav");
musique.volume = 0.5;
musique.play();
musique.loop = true;

boutonMusique.addEventListener("click", function () {
  if (musique.paused) {
    musique.play();
    let iconplay = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 544 512">
    <g id="icomoon-ignore">
    </g>
    <path d="M445.020 461.020c-6.143 0-12.283-2.343-16.971-7.028-9.372-9.373-9.372-24.568 0-33.941 43.819-43.821 67.952-102.080 67.952-164.050 0-61.969-24.133-120.229-67.952-164.049-9.372-9.373-9.372-24.569 0-33.941s24.569-9.372 33.941 0c52.885 52.886 82.011 123.2 82.011 197.99s-29.126 145.104-82.011 197.99c-4.686 4.686-10.828 7.029-16.97 7.029zM359.765 415.765c-6.143 0-12.283-2.343-16.971-7.028-9.372-9.372-9.372-24.568 0-33.941 65.503-65.503 65.503-172.085 0-237.588-9.372-9.373-9.372-24.569 0-33.941 9.372-9.371 24.569-9.372 33.941 0 40.797 40.795 63.265 95.037 63.265 152.733s-22.468 111.938-63.265 152.735c-4.686 4.687-10.828 7.030-16.97 7.030v0zM274.51 370.51c-6.143 0-12.284-2.343-16.971-7.029-9.373-9.373-9.373-24.567 0-33.94 40.55-40.55 40.55-106.529 0-147.078-9.373-9.373-9.373-24.569 0-33.941s24.568-9.372 33.941 0c59.265 59.265 59.265 155.696 0 214.961-4.686 4.684-10.828 7.027-16.97 7.027z"></path>
    <path d="M208.003 480c-4.164 0-8.256-1.625-11.317-4.687l-123.313-123.313h-57.373c-8.836 0-16-7.163-16-16v-160c0-8.836 7.164-16 16-16h57.373l123.313-123.314c4.577-4.577 11.458-5.945 17.437-3.468s9.877 8.311 9.877 14.782v416c0 6.472-3.898 12.306-9.877 14.782-1.979 0.82-4.059 1.218-6.12 1.218z"></path>
    </svg>
    `;
    boutonMusique.innerHTML = iconplay;
  } else {
    musique.pause();
    let iconmute = `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512">
    <g id="icomoon-ignore">
    </g>
    <path d="M480 309.574v42.426h-42.426l-53.574-53.574-53.574 53.574h-42.426v-42.426l53.574-53.574-53.574-53.574v-42.426h42.426l53.574 53.574 53.574-53.574h42.426v42.426l-53.574 53.574 53.574 53.574z"></path>
    <path d="M208.003 480c-4.164 0-8.256-1.625-11.317-4.687l-123.313-123.313h-57.373c-8.836 0-16-7.163-16-16v-160c0-8.836 7.164-16 16-16h57.373l123.313-123.314c4.577-4.577 11.458-5.945 17.437-3.468s9.877 8.311 9.877 14.782v416c0 6.472-3.898 12.306-9.877 14.782-1.979 0.82-4.059 1.218-6.12 1.218z"></path>
    </svg>`;
    boutonMusique.innerHTML = iconmute;
  }
});
