

membriTeam = [

    {"nome" : "Wayne Barnett",
    "ruolo": "Founder & CEO",
    "foto": "wayne-barnett-founder-ceo.jpg"
    },

    {"nome" : "Angela Caroll",
    "ruolo": "Chief Editor",
    "foto": "angela-caroll-chief-editor.jpg"
    },

    {"nome" : "Walter Gordon",
    "ruolo": "Office Manager",
    "foto": "walter-gordon-office-manager.jpg"
    },

    {"nome" : "Angela Lopez",
    "ruolo": "Social Media Manager",
    "foto": "angela-lopez-social-media-manager.jpg"
    },

    {"nome" : "Scott Estrada",
    "ruolo": "Developer",
    "foto": "scott-estrada-developer.jpg"
    },

    {"nome" : "Barbara Ramos",
    "ruolo": "Graphic Designer",
    "foto": "barbara-ramos-graphic-designer.jpg"
    },
   
]


const containerSelection = document.querySelector("#container");
console.log(containerSelection);

for (let i = 0; i < membriTeam.length; i++) {
    let objectiesimo = membriTeam[i];
    
   const nomeMembro = objectiesimo.nome;
   const ruoloMembro = objectiesimo.ruolo;
   const fotoMembro = objectiesimo.foto;

   const cardElement = `<div class="card"> 
                            <img src=img/${fotoMembro} alt="">
                            <div class="cardElement_description">${nomeMembro}</div> 
                            <div class="cardElement_description">${ruoloMembro}</div> 
                          
                        </div>`;

    containerSelection.innerHTML += cardElement;
}



