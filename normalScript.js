let pokemon = ['Pidgey', 'Pidgeotto', 'Pidgeot', 'Mega Pidgeot', 'Rattata', 'Alolan Rattata', 'Raticate', 'Alolan Raticate', 'Spearow', 'Fearow', 'Jigglypuff', 'Wigglytuff', 'Meowth', 'Persian', "Farfetch'd", 'Doduo', 'Dodrio', 'Lickitung', 'Chansey', 'Kangaskhan', 'Mega Kangaskhan', 'Tauros', 'Ditto', 'Eevee', 'Partner Eevee', 'Porygon', 'Snorlax', 'Sentret', 'Furret', 'Hoothoot', 'Noctowl', 'Igglybuff', 'Aipom', 'Girafarig', 'Dunsparce', 'Teddiursa', 'Ursaring', 'Porygon2', 'Stantler', 'Smeargle', 'Miltank', 'Blissey', 'Zigzagoon', 'Galarian Zigzagoon', 'Linoone', 'Galarian Linoone', 'Taillow', 'Swellow', 'Slakoth', 'Vigoroth', 'Slaking', 'Whismur', 'Loudred', 'Exploud', 'Azurill', 'Skitty', 'Delcatty', 'Spinda', 'Swablu', 'Zangoose', 'Castform', 'Kecleon', 'Starly', 'Staravia', 'Staraptor', 'Bidoof', 'Bibarel', 'Ambipom', 'Buneary', 'Lopunny', 'Mega Lopunny', 'Glameow', 'Purugly', 'Happiny', 'Chatot', 'Munchlax', 'Lickilicky', 'Porygon-Z', 'Regigigas', 'Arceus', 'Patrat', 'Watchog', 'Lillipup', 'Herdier', 'Stoutland', 'Pidove', 'Tranquill', 'Unfezant', 'Audino', 'Mega Audino', 'Hisuian Zorua', 'Hisuian Zoroark', 'Minccino', 'Cinccino', 'Deerling', 'Sawsbuck', 'Bouffalant', 'Rufflet', 'Braviary', 'Aria Forme', 'Pirouette Forme', 'Bunnelby', 'Diggersby', 'Fletchling', 'Litleo', 'Pyroar', 'Furfrou', 'Helioptile', 'Heliolisk', 'Pikipek', 'Trumbeak', 'Toucannon', 'Yungoos', 'Gumshoos', 'Stufful', 'Bewear', 'Oranguru', 'Type: Null', 'Silvally', 'Komala', 'Drampa', 'Skwovet', 'Greedent', 'Wooloo', 'Dubwool', 'Obstagoon', 'Male', 'Female', 'Wyrdeer', 'Ursaluna', 'Bloodmoon', 'Lechonk', 'Male', 'Female', 'Tandemaus', 'Family of Four', 'Family of Three', 'Smoliv', 'Dolliv', 'Arboliva', 'Green Plumage', 'Blue Plumage', 'Yellow Plumage', 'White Plumage', 'Shroodle', 'Grafaiai', 'Cyclizar', 'Farigiraf', 'Two-Segment Form', 'Three-Segment Form']
    new Chart(document.getElementById("offenceChart"), {
        type: 'scatter',
        data:{
            labels: pokemon,
            datasets: [{
                label: "Offence",
                data: [{x:45,y:56},
{x:60,y:71},
{x:80,y:101},
{x:135,y:121},
{x:56,y:72},
{x:56,y:72},
{x:81,y:97},
{x:71,y:77},
{x:60,y:70},
{x:90,y:100},
{x:45,y:20},
{x:85,y:45},
{x:45,y:90},
{x:70,y:115},
{x:90,y:60},
{x:85,y:75},
{x:110,y:110},
{x:60,y:30},
{x:35,y:50},
{x:95,y:90},
{x:125,y:100},
{x:100,y:110},
{x:48,y:48},
{x:55,y:55},
{x:75,y:75},
{x:85,y:40},
{x:110,y:30},
{x:46,y:20},
{x:76,y:90},
{x:36,y:50},
{x:86,y:70},
{x:40,y:15},
{x:70,y:85},
{x:90,y:85},
{x:70,y:45},
{x:80,y:40},
{x:130,y:55},
{x:105,y:60},
{x:95,y:85},
{x:20,y:75},
{x:80,y:100},
{x:75,y:55},
{x:30,y:60},
{x:30,y:60},
{x:70,y:100},
{x:70,y:100},
{x:55,y:85},
{x:85,y:125},
{x:60,y:30},
{x:80,y:90},
{x:160,y:100},
{x:51,y:28},
{x:71,y:48},
{x:91,y:68},
{x:20,y:20},
{x:45,y:50},
{x:65,y:90},
{x:60,y:60},
{x:40,y:50},
{x:115,y:90},
{x:70,y:70},
{x:90,y:40},
{x:55,y:60},
{x:75,y:80},
{x:120,y:100},
{x:45,y:31},
{x:85,y:71},
{x:100,y:115},
{x:66,y:85},
{x:76,y:105},
{x:136,y:135},
{x:55,y:85},
{x:82,y:112},
{x:15,y:30},
{x:92,y:91},
{x:85,y:5},
{x:85,y:50},
{x:135,y:90},
{x:160,y:100},
{x:120,y:120},
{x:55,y:42},
{x:85,y:77},
{x:60,y:55},
{x:80,y:60},
{x:110,y:80},
{x:55,y:43},
{x:77,y:65},
{x:115,y:93},
{x:60,y:50},
{x:80,y:50},
{x:85,y:70},
{x:125,y:110},
{x:50,y:75},
{x:95,y:115},
{x:60,y:75},
{x:100,y:95},
{x:110,y:55},
{x:83,y:60},
{x:123,y:80},
{x:128,y:90},
{x:128,y:128},
{x:36,y:57},
{x:56,y:78},
{x:50,y:62},
{x:73,y:72},
{x:109,y:106},
{x:80,y:102},
{x:61,y:70},
{x:109,y:109},
{x:75,y:65},
{x:85,y:75},
{x:120,y:60},
{x:70,y:45},
{x:110,y:45},
{x:75,y:50},
{x:125,y:60},
{x:90,y:60},
{x:95,y:59},
{x:95,y:95},
{x:115,y:65},
{x:135,y:36},
{x:55,y:25},
{x:95,y:20},
{x:40,y:48},
{x:80,y:88},
{x:90,y:95},
{x:105,y:95},
{x:95,y:85},
{x:105,y:65},
{x:140,y:50},
{x:135,y:52},
{x:45,y:35},
{x:100,y:65},
{x:90,y:65},
{x:50,y:75},
{x:75,y:111},
{x:75,y:111},
{x:58,y:30},
{x:78,y:33},
{x:125,y:39},
{x:96,y:92},
{x:96,y:92},
{x:96,y:92},
{x:96,y:92},
{x:65,y:75},
{x:95,y:110},
{x:95,y:121},
{x:110,y:60},
{x:100,y:55},
{x:100,y:55},
],
                backgroundColor: 'rgb(0,0,0)',
            }]
        }
    })
    new Chart(document.getElementById("defenceChart"), {
        type: 'scatter',
        data:{
            labels: pokemon,
            datasets: [{
                label: "Defence",
                data: [{x:40,y:35},
{x:55,y:50},
{x:75,y:70},
{x:80,y:80},
{x:35,y:35},
{x:35,y:35},
{x:60,y:70},
{x:70,y:80},
{x:30,y:31},
{x:65,y:61},
{x:20,y:25},
{x:45,y:50},
{x:35,y:40},
{x:60,y:65},
{x:55,y:62},
{x:45,y:35},
{x:70,y:60},
{x:75,y:75},
{x:5,y:105},
{x:80,y:80},
{x:100,y:100},
{x:95,y:70},
{x:48,y:48},
{x:50,y:65},
{x:70,y:85},
{x:70,y:75},
{x:65,y:110},
{x:34,y:45},
{x:64,y:55},
{x:30,y:56},
{x:50,y:96},
{x:15,y:20},
{x:55,y:55},
{x:65,y:65},
{x:70,y:65},
{x:50,y:50},
{x:75,y:75},
{x:90,y:95},
{x:62,y:65},
{x:35,y:45},
{x:105,y:70},
{x:10,y:135},
{x:41,y:41},
{x:41,y:41},
{x:61,y:61},
{x:61,y:61},
{x:30,y:30},
{x:60,y:50},
{x:60,y:35},
{x:80,y:55},
{x:100,y:65},
{x:23,y:23},
{x:43,y:43},
{x:63,y:73},
{x:40,y:40},
{x:45,y:35},
{x:65,y:55},
{x:60,y:60},
{x:60,y:75},
{x:60,y:60},
{x:70,y:70},
{x:70,y:120},
{x:30,y:30},
{x:50,y:40},
{x:70,y:60},
{x:40,y:40},
{x:60,y:60},
{x:66,y:66},
{x:44,y:56},
{x:84,y:96},
{x:94,y:96},
{x:42,y:37},
{x:64,y:59},
{x:5,y:65},
{x:45,y:42},
{x:40,y:85},
{x:95,y:95},
{x:70,y:75},
{x:110,y:110},
{x:120,y:120},
{x:39,y:39},
{x:69,y:69},
{x:45,y:45},
{x:65,y:65},
{x:90,y:90},
{x:50,y:30},
{x:62,y:42},
{x:80,y:55},
{x:86,y:86},
{x:126,y:126},
{x:40,y:40},
{x:60,y:60},
{x:40,y:40},
{x:60,y:60},
{x:50,y:50},
{x:70,y:70},
{x:95,y:95},
{x:50,y:50},
{x:75,y:75},
{x:77,y:128},
{x:90,y:77},
{x:38,y:36},
{x:77,y:77},
{x:43,y:38},
{x:58,y:54},
{x:72,y:66},
{x:60,y:90},
{x:33,y:43},
{x:52,y:94},
{x:30,y:30},
{x:50,y:50},
{x:75,y:75},
{x:30,y:30},
{x:60,y:60},
{x:50,y:50},
{x:80,y:60},
{x:80,y:110},
{x:95,y:95},
{x:95,y:95},
{x:65,y:95},
{x:85,y:91},
{x:55,y:35},
{x:95,y:75},
{x:55,y:45},
{x:100,y:90},
{x:101,y:81},
{x:55,y:95},
{x:65,y:105},
{x:72,y:75},
{x:105,y:80},
{x:120,y:65},
{x:40,y:45},
{x:75,y:80},
{x:70,y:90},
{x:45,y:45},
{x:70,y:75},
{x:70,y:75},
{x:45,y:51},
{x:60,y:78},
{x:90,y:109},
{x:51,y:51},
{x:51,y:51},
{x:51,y:51},
{x:51,y:51},
{x:35,y:35},
{x:65,y:72},
{x:65,y:65},
{x:70,y:70},
{x:80,y:75},
{x:80,y:75},
],
                backgroundColor: 'rgb(0,0,0)',
            }]
        }
    })