const jogadores = [
    {
        posicao: "goleiro", 

        jogadores: [
            {
                nome: "Alisson",
                overall: 91,
                time: "Liverpool",
                liga: "prl",
                pais: "br",
                foto: "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p212831.png?padding=0.7",
            },
            {
                nome: "Neuer",
                overall: 88,
                time: "Bayern",
                liga: "bun",
                pais: "de",
                foto: "https://cdn3.futbin.com/content/fifa26/img/players/167495.png?fm=png&ixlib=java-2.1.0&verzion=1&w=162&s=843ea056bd21de97ad1c7d797c7448df",
            },
            {
                nome: "Martinez",
                overall: 86,
                time: "Aston Villa",
                liga: "prl",
                pais: "ar",
                foto: "https://cdn3.futbin.com/content/fifa26/img/players/202811.png?fm=png&ixlib=java-2.1.0&verzion=1&w=512&s=7085a21d2bdfc5d92047e8e54025fc70",
            },
            {
                nome: "Courtois",
                overall: 91,
                time: "Real Madrid",
                liga: "lal",
                pais: "be",
                foto: "https://cdn3.futbin.com/content/fifa26/img/players/192119.png?fm=png&ixlib=java-2.1.0&verzion=1&w=512&s=9e2b685d49d90c141b63266865d980dd",
            },
            {
                nome: "Ter Stegen",
                overall: 87,
                time: "Barcelona",
                liga: "lal",
                pais: "de",
                foto: "https://cdn3.futbin.com/content/fifa26/img/players/192448.png?fm=png&ixlib=java-2.1.0&verzion=1&w=162&s=1b3f7a672fee3ec0dd4fdff0ed0bdc17",
            },
            {
                nome: "Oblak",
                overall: 90,
                time: "Atletico Madrid",
                liga: "lal",
                pais: "si",
                foto: "https://cdn3.futbin.com/content/fifa26/img/players/200389.png?fm=png&ixlib=java-2.1.0&verzion=1&w=162&s=71d94a2a6bb981c537eb69d215902737",
            },
            {
                nome: "Donnaruma",
                overall: 90,
                time: "Man City",
                liga: "prl",
                pais: "it",
                foto: "https://cdn3.futbin.com/content/fifa26/img/players/230621.png?fm=png&ixlib=java-2.1.0&verzion=1&w=512&s=589b7d85cdb178ec8f9f4d7b4d9b5215",
            },
            {
                nome: "Kobel",
                overall: 85,
                time: "Dortmund",
                liga: "bun",
                pais: "ch",
                foto: "https://cdn3.futbin.com/content/fifa26/img/players/235073.png?fm=png&ixlib=java-2.1.0&verzion=1&w=162&s=aa118437b5e532f53960b484169ea546",
            },
            {
                nome: "Sommer",
                overall: 85,
                time: "Inter",
                liga: "sra",
                pais: "ch",
                foto: "https://cdn3.futbin.com/content/fifa26/img/players/177683.png?fm=png&ixlib=java-2.1.0&verzion=1&w=162&s=a8b084faa61a09b84054fc7627a9657a",
            },
            {
                nome: "Mamardashvilli",
                overall: 88,
                time: "Liverpool",
                liga: "prl",
                pais: "ge",
                foto: "https://cdn3.futbin.com/content/fifa26/img/players/262621.png?fm=png&ixlib=java-2.1.0&verzion=1&w=512&s=4429a46b091760b4b35d07648006a7e3",
            },
            {
                nome: "Vicario",
                overall: 88,
                time: "Tottenham",
                liga: "prl",
                pais: "it",
                foto: "https://cdn3.futbin.com/content/fifa26/img/players/240091.png?fm=png&ixlib=java-2.1.0&verzion=1&w=512&s=bcc4a7ab46d9bbe71632b334e827afc6",
            },
            {
                nome: "Raya",
                overall: 86,
                time: "Arsenal",
                liga: "prl",
                pais: "br",
                foto: "https://cdn3.futbin.com/content/fifa26/img/players/220901.png?fm=png&ixlib=java-2.1.0&verzion=1&w=512&s=65586ceeb04ad540e6a305ea52441ac9",
            },
            {
                nome: "Unai Simón",
                overall: 84,
                time: "Bilbao",
                liga: "lal",
                pais: "es",
                foto: "https://cdn3.futbin.com/content/fifa26/img/players/230869.png?fm=png&ixlib=java-2.1.0&verzion=1&w=512&s=8e3b3ad002c63d0039cb6ef233910f4f",
            },
            {
                nome: "Lunin",
                overall: 83,
                time: "Real Madrid",
                liga: "lal",
                pais: "ua",
                foto: "https://cdn3.futbin.com/content/fifa26/img/players/243952.png?fm=png&ixlib=java-2.1.0&verzion=1&w=512&s=3bc7b2a925e1f5698c01094d67fd8c72",
            },
            {
                nome: "Pickford",
                overall: 84,
                time: "Everton",
                liga: "prl",
                pais: "gb-eng",
                foto: "https://cdn3.futbin.com/content/fifa26/img/players/204935.png?fm=png&ixlib=java-2.1.0&verzion=1&w=162&s=41e0d9546a175e960a9a3b60b918bf9b",
            },
            
        ]


    },
    {
        posicao: "zagueiro", 

        jogadores: [
            {
                nome: "Cubarsi",
                overall: 89,
                time: "Barcelona",
                liga: "lal",
                pais: "es",
                foto: "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p212831.png?padding=0.7",
            },
            {
                nome: "Araujo",
                overall: 88,
                time: "Barcelona",
                liga: "lal",
                pais: "uy",
                foto: "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p212831.png?padding=0.7",
            },
            {
                nome: "Huijsen",
                overall: 87,
                time: "Real Madrid",
                liga: "lal",
                pais: "es",
                foto: "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p212831.png?padding=0.7",
            },
            {
                nome: "Rudiger",
                overall: 88,
                time: "Real Madrid",
                liga: "lal",
                pais: "de",
                foto: "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p212831.png?padding=0.7",
            },
            {
                nome: "Gvardiol",
                overall: 88,
                time: "Man City",
                liga: "prl",
                pais: "hr",
                foto: "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p212831.png?padding=0.7",
            },
            {
                nome: "Pacho",
                overall: 86,
                time: "Paris",
                liga: "li1",
                pais: "co",
                foto: "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p212831.png?padding=0.7",
            },
            {
                nome: "Pavard",
                overall: 85,
                time: "Inter",
                liga: "sra",
                pais: "fr",
                foto: "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p212831.png?padding=0.7",
            },
            {
                nome: "Bastoni",
                overall: 87,
                time: "Inter",
                liga: "sra",
                pais: "it",
                foto: "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p212831.png?padding=0.7",
            },
            {
                nome: "Van Dijk",
                overall: 91,
                time: "Liverpool",
                liga: "prl",
                pais: "nl",
                foto: "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p212831.png?padding=0.7",
            },
            {
                nome: "Tah",
                overall: 87,
                time: "Leverkusen",
                liga: "bun",
                pais: "de",
                foto: "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p212831.png?padding=0.7",
            },
            {
                nome: "Marquinhos",
                overall: 87,
                time: "Paris",
                liga: "li1",
                pais: "br",
                foto: "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p212831.png?padding=0.7",
            },
            {
                nome: "Saliba",
                overall: 88,
                time: "Arsenal",
                liga: "prl",
                pais: "fr",
                foto: "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p212831.png?padding=0.7",
            },
            {
                nome: "Ruben Dias",
                overall: 90,
                time: "Man City",
                liga: "prl",
                pais: "br",
                foto: "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p212831.png?padding=0.7",
            },
            {
                nome: "Van De Ven",
                overall: 87,
                time: "Tottenham",
                liga: "prl",
                pais: "nl",
                foto: "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p212831.png?padding=0.7",
            },
            {
                nome: "Romero",
                overall: 90,
                time: "Tottenham",
                liga: "prl",
                pais: "ar",
                foto: "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p212831.png?padding=0.7",
            },
            {
                nome: "Upamecano",
                overall: 86,
                time: "Bayern",
                liga: "bun",
                pais: "fr",
                foto: "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p212831.png?padding=0.7",
            },
            {
                nome: "Kim Min Jae",
                overall: 87,
                time: "Bayern",
                liga: "bun",
                pais: "kr",
                foto: "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p212831.png?padding=0.7",
            },
            {
                nome: "Dante",
                overall: 83,
                time: "Nice",
                liga: "li1",
                pais: "br",
                foto: "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p212831.png?padding=0.7",
            },
            {
                nome: "Hummels",
                overall: 84,
                time: "Dortmund",
                liga: "bun",
                pais: "de",
                foto: "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p212831.png?padding=0.7",
            },
            {
                nome: "Gimenez",
                overall: 88,
                time: "Atletico Madrid",
                liga: "lal",
                pais: "uy",
                foto: "https://ratings-images-prod.pulse.ea.com/FC25/full/player-portraits/p212831.png?padding=0.7",
            },
        ]


    },
    {
        posicao: "lateral", 

        jogadores: [
            {
                nome: "",
                overall: "",
                time: "",
                liga: "",
                pais: "",
                foto: "",
            }
        ]


    },
    {
        posicao: "meiocampo", 

        jogadores: [
            {
                nome: "",
                overall: "",
                time: "",
                liga: "",
                pais: "",
                foto: "",
            }
        ]


    },
    {
        posicao: "ponta", 

        jogadores: [
            {
                nome: "",
                overall: "",
                time: "",
                liga: "",
                pais: "",
                foto: "",
            }
        ]


    },
    {
        posicao: "atacante", 

        jogadores: [
            {
                nome: "",
                overall: "",
                time: "",
                liga: "",
                pais: "",
                foto: "",
            }
        ]


    }
]