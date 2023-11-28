let pokemon = ['Squirtle', 'Wartortle', 'Blastoise', 'Mega Blastoise', 'Psyduck', 'Golduck', 'Poliwag', 'Poliwhirl', 'Poliwrath', 'Tentacool', 'Tentacruel', 'Slowpoke', 'Slowbro', 'Mega Slowbro', 'Seel', 'Dewgong', 'Shellder', 'Cloyster', 'Krabby', 'Kingler', 'Horsea', 'Seadra', 'Goldeen', 'Seaking', 'Staryu', 'Starmie', 'Aqua Breed', 'Magikarp', 'Gyarados', 'Mega Gyarados', 'Lapras', 'Vaporeon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops', 'Totodile', 'Croconaw', 'Feraligatr', 'Chinchou', 'Lanturn', 'Marill', 'Azumarill', 'Politoed', 'Wooper', 'Quagsire', 'Slowking', 'Qwilfish', 'Corsola', 'Remoraid', 'Octillery', 'Mantine', 'Kingdra', 'Suicune', 'Mudkip', 'Marshtomp', 'Swampert', 'Mega Swampert', 'Lotad', 'Lombre', 'Ludicolo', 'Wingull', 'Pelipper', 'Surskit', 'Carvanha', 'Sharpedo', 'Mega Sharpedo', 'Wailmer', 'Wailord', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt', 'Feebas', 'Milotic', 'Rainy Form', 'Spheal', 'Sealeo', 'Walrein', 'Clamperl', 'Huntail', 'Gorebyss', 'Relicanth', 'Luvdisc', 'Kyogre', 'Primal Kyogre', 'Piplup', 'Prinplup', 'Empoleon', 'Bibarel', 'Buizel', 'Floatzel', 'Shellos', 'Gastrodon', 'Finneon', 'Lumineon', 'Mantyke', 'Wash Rotom', 'Palkia', 'Origin Forme', 'Phione', 'Manaphy', 'Oshawott', 'Dewott', 'Samurott', 'Hisuian Samurott', 'Panpour', 'Simipour', 'Tympole', 'Palpitoad', 'Seismitoad', 'Red-Striped Form', 'Blue-Striped Form', 'White-Striped Form', 'Tirtouga', 'Carracosta', 'Ducklett', 'Swanna', 'Frillish', 'Jellicent', 'Alomomola', 'Ordinary Form', 'Resolute Form', 'Froakie', 'Frogadier', 'Greninja', 'Ash-Greninja', 'Binacle', 'Barbaracle', 'Skrelp', 'Clauncher', 'Clawitzer', 'Volcanion', 'Popplio', 'Brionne', 'Primarina', 'Solo Form', 'School Form', 'Mareanie', 'Toxapex', 'Dewpider', 'Araquanid', 'Wimpod', 'Golisopod', 'Pyukumuku', 'Bruxish', 'Tapu Fini', 'Sobble', 'Drizzile', 'Inteleon', 'Chewtle', 'Drednaw', 'Cramorant', 'Arrokuda', 'Barraskewda', 'Dracovish', 'Arctovish', 'Rapid Strike Style', 'Male', 'Female', 'Quaxly', 'Quaxwell', 'Quaquaval', 'Wiglett', 'Wugtrio', 'Finizen', 'Zero Form', 'Hero Form', 'Veluza', 'Dondozo', 'Curly Form', 'Droopy Form', 'Stretchy Form', 'Iron Bundle', 'Walking Wake']
    new Chart(document.getElementById("offenceChart"), {
        type: 'scatter',
        data:{
            labels: pokemon,
            datasets: [{
                label: "Offence",
                data: [{x:50,y:43},
{x:65,y:58},
{x:85,y:78},
{x:135,y:78},
{x:65,y:55},
{x:95,y:85},
{x:50,y:90},
{x:65,y:90},
{x:95,y:70},
{x:50,y:70},
{x:80,y:100},
{x:65,y:15},
{x:100,y:30},
{x:130,y:30},
{x:45,y:45},
{x:70,y:70},
{x:65,y:40},
{x:95,y:70},
{x:105,y:50},
{x:130,y:75},
{x:70,y:60},
{x:95,y:85},
{x:67,y:63},
{x:92,y:68},
{x:70,y:85},
{x:100,y:115},
{x:110,y:100},
{x:15,y:80},
{x:125,y:81},
{x:155,y:81},
{x:85,y:60},
{x:110,y:65},
{x:90,y:35},
{x:115,y:55},
{x:80,y:55},
{x:115,y:80},
{x:65,y:43},
{x:80,y:58},
{x:105,y:78},
{x:56,y:67},
{x:76,y:67},
{x:20,y:40},
{x:60,y:50},
{x:90,y:70},
{x:45,y:15},
{x:85,y:35},
{x:100,y:30},
{x:95,y:85},
{x:65,y:35},
{x:65,y:65},
{x:105,y:45},
{x:80,y:70},
{x:95,y:85},
{x:90,y:85},
{x:70,y:40},
{x:85,y:50},
{x:110,y:60},
{x:150,y:70},
{x:40,y:30},
{x:60,y:50},
{x:90,y:70},
{x:55,y:85},
{x:95,y:65},
{x:50,y:65},
{x:90,y:65},
{x:120,y:95},
{x:140,y:105},
{x:70,y:60},
{x:90,y:60},
{x:48,y:60},
{x:78,y:60},
{x:80,y:35},
{x:120,y:55},
{x:15,y:80},
{x:100,y:81},
{x:70,y:70},
{x:55,y:25},
{x:75,y:45},
{x:95,y:65},
{x:74,y:32},
{x:104,y:52},
{x:114,y:52},
{x:90,y:55},
{x:40,y:97},
{x:150,y:90},
{x:180,y:90},
{x:61,y:40},
{x:81,y:50},
{x:111,y:60},
{x:85,y:71},
{x:65,y:85},
{x:105,y:115},
{x:57,y:34},
{x:92,y:39},
{x:49,y:66},
{x:69,y:91},
{x:60,y:50},
{x:105,y:86},
{x:150,y:100},
{x:150,y:120},
{x:80,y:80},
{x:100,y:100},
{x:63,y:45},
{x:83,y:60},
{x:108,y:70},
{x:108,y:85},
{x:53,y:64},
{x:98,y:101},
{x:50,y:64},
{x:65,y:69},
{x:95,y:74},
{x:92,y:98},
{x:92,y:98},
{x:92,y:98},
{x:78,y:22},
{x:108,y:32},
{x:44,y:55},
{x:87,y:98},
{x:65,y:40},
{x:85,y:60},
{x:75,y:65},
{x:129,y:108},
{x:129,y:108},
{x:62,y:71},
{x:83,y:97},
{x:103,y:122},
{x:153,y:132},
{x:52,y:50},
{x:105,y:68},
{x:60,y:30},
{x:58,y:44},
{x:120,y:59},
{x:130,y:70},
{x:66,y:40},
{x:91,y:50},
{x:126,y:60},
{x:25,y:40},
{x:140,y:30},
{x:53,y:45},
{x:63,y:35},
{x:40,y:27},
{x:70,y:42},
{x:35,y:80},
{x:125,y:40},
{x:60,y:5},
{x:105,y:92},
{x:95,y:85},
{x:70,y:70},
{x:95,y:90},
{x:125,y:120},
{x:64,y:44},
{x:115,y:74},
{x:85,y:85},
{x:63,y:66},
{x:123,y:136},
{x:90,y:75},
{x:90,y:55},
{x:130,y:97},
{x:112,y:78},
{x:100,y:78},
{x:65,y:50},
{x:85,y:65},
{x:120,y:85},
{x:55,y:95},
{x:100,y:120},
{x:45,y:75},
{x:70,y:100},
{x:160,y:100},
{x:102,y:70},
{x:100,y:35},
{x:120,y:82},
{x:120,y:82},
{x:120,y:82},
{x:124,y:136},
{x:125,y:109},
],
                backgroundColor: 'rgb(255,69,0)',
            }]
        }
    })
    new Chart(document.getElementById("defenceChart"), {
        type: 'scatter',
        data:{
            labels: pokemon,
            datasets: [{
                label: "Defence",
                data: [{x:65,y:64},
{x:80,y:80},
{x:100,y:105},
{x:120,y:115},
{x:48,y:50},
{x:78,y:80},
{x:40,y:40},
{x:65,y:50},
{x:95,y:90},
{x:35,y:100},
{x:65,y:120},
{x:65,y:40},
{x:110,y:80},
{x:180,y:80},
{x:55,y:70},
{x:80,y:95},
{x:100,y:25},
{x:180,y:45},
{x:90,y:25},
{x:115,y:50},
{x:70,y:25},
{x:95,y:45},
{x:60,y:50},
{x:65,y:80},
{x:55,y:55},
{x:85,y:85},
{x:105,y:70},
{x:55,y:20},
{x:79,y:100},
{x:109,y:130},
{x:80,y:95},
{x:60,y:95},
{x:100,y:55},
{x:125,y:70},
{x:90,y:45},
{x:105,y:70},
{x:64,y:48},
{x:80,y:63},
{x:100,y:83},
{x:38,y:56},
{x:58,y:76},
{x:50,y:50},
{x:80,y:80},
{x:75,y:100},
{x:45,y:25},
{x:85,y:65},
{x:80,y:110},
{x:85,y:55},
{x:95,y:95},
{x:35,y:35},
{x:75,y:75},
{x:70,y:140},
{x:95,y:95},
{x:115,y:115},
{x:50,y:50},
{x:70,y:70},
{x:90,y:90},
{x:110,y:110},
{x:30,y:50},
{x:50,y:70},
{x:70,y:100},
{x:30,y:30},
{x:100,y:70},
{x:32,y:52},
{x:20,y:20},
{x:40,y:40},
{x:70,y:65},
{x:35,y:35},
{x:45,y:45},
{x:43,y:41},
{x:73,y:71},
{x:65,y:35},
{x:85,y:55},
{x:20,y:55},
{x:79,y:125},
{x:70,y:70},
{x:50,y:50},
{x:70,y:70},
{x:90,y:90},
{x:85,y:55},
{x:105,y:75},
{x:105,y:75},
{x:130,y:65},
{x:55,y:65},
{x:90,y:140},
{x:90,y:160},
{x:53,y:56},
{x:68,y:76},
{x:88,y:101},
{x:60,y:60},
{x:35,y:30},
{x:55,y:50},
{x:48,y:62},
{x:68,y:82},
{x:56,y:61},
{x:76,y:86},
{x:50,y:120},
{x:107,y:107},
{x:100,y:120},
{x:100,y:120},
{x:80,y:80},
{x:100,y:100},
{x:45,y:45},
{x:60,y:60},
{x:85,y:70},
{x:80,y:65},
{x:48,y:48},
{x:63,y:63},
{x:40,y:40},
{x:55,y:55},
{x:75,y:75},
{x:65,y:55},
{x:65,y:55},
{x:65,y:55},
{x:103,y:45},
{x:133,y:65},
{x:50,y:50},
{x:63,y:63},
{x:50,y:85},
{x:70,y:105},
{x:80,y:45},
{x:90,y:90},
{x:90,y:90},
{x:40,y:44},
{x:52,y:56},
{x:67,y:71},
{x:67,y:71},
{x:67,y:56},
{x:115,y:86},
{x:60,y:60},
{x:62,y:63},
{x:88,y:89},
{x:120,y:90},
{x:54,y:56},
{x:69,y:81},
{x:74,y:116},
{x:20,y:25},
{x:130,y:135},
{x:62,y:52},
{x:152,y:142},
{x:52,y:72},
{x:92,y:132},
{x:40,y:30},
{x:140,y:90},
{x:130,y:130},
{x:70,y:70},
{x:115,y:130},
{x:40,y:40},
{x:55,y:55},
{x:65,y:65},
{x:50,y:38},
{x:90,y:68},
{x:55,y:95},
{x:40,y:30},
{x:60,y:50},
{x:100,y:80},
{x:100,y:90},
{x:100,y:60},
{x:65,y:75},
{x:65,y:75},
{x:45,y:45},
{x:65,y:60},
{x:80,y:75},
{x:25,y:25},
{x:50,y:70},
{x:40,y:40},
{x:72,y:62},
{x:97,y:87},
{x:73,y:65},
{x:115,y:65},
{x:60,y:95},
{x:60,y:95},
{x:60,y:95},
{x:114,y:60},
{x:91,y:83},
],
                backgroundColor: 'rgb(255,69,0)',
            }]
        }
    })