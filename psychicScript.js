let pokemon = ['Alolan Raichu', 'Abra', 'Kadabra', 'Alakazam', 'Mega Alakazam', 'Galarian Ponyta', 'Galarian Rapidash', 'Slowpoke', 'Galarian Slowpoke', 'Slowbro', 'Mega Slowbro', 'Galarian Slowbro', 'Drowzee', 'Hypno', 'Exeggcute', 'Exeggutor', 'Starmie', 'Mr. Mime', 'Galarian Mr. Mime', 'Jynx', 'Galarian Articuno', 'Mewtwo', 'Mega Mewtwo X', 'Mega Mewtwo Y', 'Mew', 'Natu', 'Xatu', 'Espeon', 'Slowking', 'Galarian Slowking', 'Unown', 'Wobbuffet', 'Girafarig', 'Smoochum', 'Lugia', 'Celebi', 'Ralts', 'Kirlia', 'Gardevoir', 'Mega Gardevoir', 'Meditite', 'Medicham', 'Mega Medicham', 'Spoink', 'Grumpig', 'Lunatone', 'Solrock', 'Baltoy', 'Claydol', 'Chimecho', 'Wynaut', 'Beldum', 'Metang', 'Metagross', 'Mega Metagross', 'Latias', 'Mega Latias', 'Latios', 'Mega Latios', 'Jirachi', 'Deoxys Normal Forme', 'Deoxys Attack Forme', 'Deoxys Defense Forme', 'Deoxys Speed Forme', 'Chingling', 'Bronzor', 'Bronzong', 'Mime Jr.', 'Gallade', 'Mega Gallade', 'Uxie', 'Mesprit', 'Azelf', 'Cresselia', 'Victini', 'Munna', 'Musharna', 'Woobat', 'Swoobat', 'Zen Mode', 'Sigilyph', 'Gothita', 'Gothorita', 'Gothitelle', 'Solosis', 'Duosion', 'Reuniclus', 'Elgyem', 'Beheeyem', 'Hisuian Braviary', 'Aria Forme', 'Delphox', 'Espurr', 'Male', 'Female', 'Inkay', 'Malamar', 'Hoopa Confined', 'Hoopa Unbound', "Pa'u Style", 'Oranguru', 'Bruxish', 'Tapu Lele', 'Cosmog', 'Cosmoem', 'Solgaleo', 'Lunala', 'Necrozma', 'Dusk Mane Necrozma', 'Dawn Wings Necrozma', 'Ultra Necrozma', 'Dottler', 'Orbeetle', 'Hatenna', 'Hattrem', 'Hatterene', 'Mr. Rime', 'Male', 'Female', 'Calyrex', 'Ice Rider', 'Shadow Rider', 'Wyrdeer', 'Armarouge', 'Rabsca', 'Flittle', 'Espathra', 'Veluza', 'Farigiraf', 'Scream Tail', 'Iron Leaves']

    new Chart(document.getElementById("offenceChart"), {
        type: 'scatter',
        data:{
            labels: pokemon,
            datasets: [{
                label: "Offence",
                data: [{x:95,y:110},
{x:105,y:90},
{x:120,y:105},
{x:135,y:120},
{x:175,y:150},
{x:85,y:90},
{x:100,y:105},
{x:65,y:15},
{x:65,y:15},
{x:100,y:30},
{x:130,y:30},
{x:100,y:30},
{x:48,y:42},
{x:73,y:67},
{x:60,y:40},
{x:125,y:55},
{x:100,y:115},
{x:100,y:90},
{x:90,y:100},
{x:115,y:95},
{x:125,y:95},
{x:154,y:130},
{x:190,y:130},
{x:194,y:140},
{x:100,y:100},
{x:70,y:70},
{x:95,y:95},
{x:130,y:110},
{x:100,y:30},
{x:110,y:30},
{x:72,y:48},
{x:33,y:33},
{x:90,y:85},
{x:85,y:65},
{x:90,y:110},
{x:100,y:100},
{x:45,y:40},
{x:65,y:50},
{x:125,y:80},
{x:165,y:100},
{x:40,y:60},
{x:60,y:80},
{x:100,y:100},
{x:70,y:60},
{x:90,y:80},
{x:95,y:70},
{x:95,y:70},
{x:40,y:55},
{x:70,y:75},
{x:95,y:65},
{x:23,y:23},
{x:55,y:30},
{x:75,y:50},
{x:135,y:70},
{x:145,y:110},
{x:110,y:110},
{x:140,y:110},
{x:130,y:110},
{x:160,y:110},
{x:100,y:100},
{x:150,y:150},
{x:180,y:150},
{x:70,y:90},
{x:95,y:180},
{x:65,y:45},
{x:24,y:23},
{x:89,y:33},
{x:70,y:60},
{x:125,y:80},
{x:165,y:110},
{x:75,y:95},
{x:105,y:80},
{x:125,y:115},
{x:75,y:85},
{x:100,y:100},
{x:67,y:24},
{x:107,y:29},
{x:55,y:72},
{x:77,y:114},
{x:140,y:55},
{x:103,y:97},
{x:55,y:45},
{x:75,y:55},
{x:95,y:65},
{x:105,y:20},
{x:125,y:30},
{x:125,y:30},
{x:85,y:30},
{x:125,y:40},
{x:112,y:65},
{x:128,y:90},
{x:114,y:104},
{x:63,y:68},
{x:83,y:104},
{x:83,y:104},
{x:54,y:45},
{x:92,y:73},
{x:150,y:70},
{x:170,y:80},
{x:98,y:93},
{x:90,y:60},
{x:105,y:92},
{x:130,y:95},
{x:29,y:37},
{x:29,y:37},
{x:137,y:97},
{x:137,y:97},
{x:127,y:79},
{x:157,y:77},
{x:157,y:77},
{x:167,y:129},
{x:50,y:30},
{x:80,y:90},
{x:56,y:39},
{x:86,y:49},
{x:136,y:29},
{x:110,y:70},
{x:105,y:95},
{x:95,y:85},
{x:80,y:80},
{x:165,y:50},
{x:165,y:150},
{x:105,y:65},
{x:125,y:75},
{x:115,y:45},
{x:55,y:75},
{x:101,y:105},
{x:102,y:70},
{x:110,y:60},
{x:65,y:111},
{x:130,y:104},
],
                backgroundColor: 'rgb(255, 0, 153)',
            }]
        }
    })
    new Chart(document.getElementById("defenceChart"), {
        type: 'scatter',
        data:{
            labels: pokemon,
            datasets: [{
                label: "Defence",
                data: [{x:50,y:85},
{x:15,y:55},
{x:30,y:70},
{x:45,y:95},
{x:65,y:105},
{x:55,y:65},
{x:70,y:80},
{x:65,y:40},
{x:65,y:40},
{x:110,y:80},
{x:180,y:80},
{x:95,y:70},
{x:45,y:90},
{x:70,y:115},
{x:80,y:45},
{x:85,y:75},
{x:85,y:85},
{x:65,y:120},
{x:65,y:90},
{x:35,y:95},
{x:85,y:100},
{x:90,y:90},
{x:100,y:100},
{x:70,y:120},
{x:100,y:100},
{x:45,y:45},
{x:70,y:70},
{x:60,y:95},
{x:80,y:110},
{x:80,y:110},
{x:48,y:48},
{x:58,y:58},
{x:65,y:65},
{x:15,y:65},
{x:130,y:154},
{x:100,y:100},
{x:25,y:35},
{x:35,y:55},
{x:65,y:115},
{x:65,y:135},
{x:55,y:55},
{x:75,y:75},
{x:85,y:85},
{x:35,y:80},
{x:65,y:110},
{x:65,y:85},
{x:85,y:65},
{x:55,y:70},
{x:105,y:120},
{x:80,y:90},
{x:48,y:48},
{x:80,y:60},
{x:100,y:80},
{x:130,y:90},
{x:150,y:110},
{x:90,y:130},
{x:120,y:150},
{x:80,y:110},
{x:100,y:120},
{x:100,y:100},
{x:50,y:50},
{x:20,y:20},
{x:160,y:160},
{x:90,y:90},
{x:50,y:50},
{x:86,y:86},
{x:116,y:116},
{x:45,y:90},
{x:65,y:115},
{x:95,y:115},
{x:130,y:130},
{x:105,y:105},
{x:70,y:70},
{x:110,y:120},
{x:100,y:100},
{x:45,y:55},
{x:85,y:95},
{x:43,y:43},
{x:55,y:55},
{x:105,y:105},
{x:80,y:80},
{x:50,y:65},
{x:70,y:85},
{x:95,y:110},
{x:40,y:50},
{x:50,y:60},
{x:75,y:85},
{x:55,y:55},
{x:75,y:95},
{x:70,y:70},
{x:77,y:128},
{x:72,y:100},
{x:54,y:60},
{x:76,y:81},
{x:76,y:81},
{x:53,y:46},
{x:88,y:75},
{x:60,y:130},
{x:60,y:130},
{x:70,y:70},
{x:80,y:110},
{x:70,y:70},
{x:75,y:115},
{x:31,y:31},
{x:131,y:131},
{x:107,y:89},
{x:89,y:107},
{x:101,y:89},
{x:127,y:109},
{x:109,y:127},
{x:97,y:97},
{x:80,y:90},
{x:110,y:120},
{x:45,y:53},
{x:65,y:73},
{x:95,y:103},
{x:75,y:100},
{x:55,y:95},
{x:65,y:105},
{x:80,y:80},
{x:150,y:130},
{x:80,y:100},
{x:72,y:75},
{x:100,y:80},
{x:85,y:100},
{x:30,y:30},
{x:60,y:60},
{x:73,y:65},
{x:70,y:70},
{x:99,y:115},
{x:88,y:108},
],
                backgroundColor: 'rgb(255, 0, 153)',
            }]
        }
    })