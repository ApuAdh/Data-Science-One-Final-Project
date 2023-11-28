let pokemon = ['Gastly', 'Haunter', 'Gengar', 'Mega Gengar', 'Alolan Marowak', 'Hisuian Typhlosion', 'Misdreavus', 'Galarian Corsola', 'Shedinja', 'Sableye', 'Mega Sableye', 'Shuppet', 'Banette', 'Mega Banette', 'Duskull', 'Dusclops', 'Drifloon', 'Drifblim', 'Mismagius', 'Spiritomb', 'Dusknoir', 'Froslass', 'Rotom', 'Altered Forme', 'Origin Forme', 'Yamask', 'Galarian Yamask', 'Cofagrigus', 'Hisuian Zorua', 'Hisuian Zoroark', 'Frillish', 'Jellicent', 'Litwick', 'Lampent', 'Chandelure', 'Golett', 'Golurk', 'Honedge', 'Doublade', 'Aegislash Shield Forme', 'Aegislash Blade Forme', 'Phantump', 'Trevenant', 'Average Size', 'Small Size', 'Large Size', 'Super Size', 'Average Size', 'Small Size', 'Large Size', 'Super Size', 'Hoopa Confined', 'Decidueye', 'Sensu Style', 'Sandygast', 'Palossand', 'Mimikyu', 'Dhelmise', 'Lunala', 'Dawn Wings Necrozma', 'Marshadow', 'Blacephalon', 'Sinistea', 'Polteageist', 'Cursola', 'Runerigus', 'Dreepy', 'Drakloak', 'Dragapult', 'Spectrier', 'Shadow Rider', 'Male', 'Female', 'Skeledirge', 'Ceruledge', 'Bramblin', 'Brambleghast', 'Greavard', 'Houndstone', 'Annihilape', 'Flutter Mane', 'Chest Form', 'Roaming Form', 'Gholdengo']
    new Chart(document.getElementById("offenceChart"), {
        type: 'scatter',
        data:{
            labels: pokemon,
            datasets: [{
                label: "Offence",
                data: [{x:100,y:80},
{x:115,y:95},
{x:130,y:110},
{x:170,y:130},
{x:80,y:45},
{x:119,y:95},
{x:85,y:85},
{x:65,y:30},
{x:90,y:40},
{x:75,y:50},
{x:85,y:20},
{x:75,y:45},
{x:115,y:65},
{x:165,y:75},
{x:40,y:25},
{x:70,y:25},
{x:60,y:70},
{x:90,y:80},
{x:105,y:105},
{x:92,y:35},
{x:100,y:45},
{x:80,y:110},
{x:95,y:91},
{x:100,y:90},
{x:120,y:90},
{x:55,y:30},
{x:55,y:30},
{x:95,y:30},
{x:85,y:70},
{x:125,y:110},
{x:65,y:40},
{x:85,y:60},
{x:65,y:20},
{x:95,y:55},
{x:145,y:80},
{x:74,y:35},
{x:124,y:55},
{x:80,y:28},
{x:110,y:35},
{x:50,y:60},
{x:140,y:60},
{x:70,y:38},
{x:110,y:56},
{x:66,y:51},
{x:66,y:56},
{x:66,y:46},
{x:66,y:41},
{x:90,y:84},
{x:85,y:99},
{x:95,y:69},
{x:100,y:54},
{x:150,y:70},
{x:107,y:70},
{x:98,y:93},
{x:70,y:15},
{x:100,y:35},
{x:90,y:96},
{x:131,y:40},
{x:137,y:97},
{x:157,y:77},
{x:125,y:125},
{x:151,y:107},
{x:74,y:50},
{x:134,y:70},
{x:145,y:30},
{x:95,y:30},
{x:60,y:82},
{x:80,y:102},
{x:120,y:142},
{x:145,y:130},
{x:165,y:150},
{x:112,y:78},
{x:100,y:78},
{x:110,y:66},
{x:125,y:85},
{x:65,y:60},
{x:115,y:90},
{x:61,y:34},
{x:101,y:68},
{x:115,y:90},
{x:135,y:135},
{x:75,y:10},
{x:75,y:80},
{x:133,y:84},
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
                data: [{x:30,y:35},
{x:45,y:55},
{x:60,y:75},
{x:80,y:95},
{x:110,y:80},
{x:78,y:85},
{x:60,y:85},
{x:100,y:100},
{x:45,y:30},
{x:75,y:65},
{x:125,y:115},
{x:35,y:33},
{x:65,y:63},
{x:75,y:83},
{x:90,y:90},
{x:130,y:130},
{x:34,y:44},
{x:44,y:54},
{x:60,y:105},
{x:108,y:108},
{x:135,y:135},
{x:70,y:70},
{x:77,y:77},
{x:120,y:120},
{x:100,y:100},
{x:85,y:65},
{x:85,y:65},
{x:145,y:105},
{x:40,y:40},
{x:60,y:60},
{x:50,y:85},
{x:70,y:105},
{x:55,y:55},
{x:60,y:60},
{x:90,y:90},
{x:50,y:50},
{x:80,y:80},
{x:100,y:37},
{x:150,y:49},
{x:140,y:140},
{x:50,y:50},
{x:48,y:60},
{x:76,y:82},
{x:70,y:55},
{x:70,y:55},
{x:70,y:55},
{x:70,y:55},
{x:122,y:75},
{x:122,y:75},
{x:122,y:75},
{x:122,y:75},
{x:60,y:130},
{x:75,y:100},
{x:70,y:70},
{x:80,y:45},
{x:110,y:75},
{x:80,y:105},
{x:100,y:90},
{x:89,y:107},
{x:109,y:127},
{x:80,y:90},
{x:53,y:79},
{x:45,y:54},
{x:65,y:114},
{x:50,y:130},
{x:145,y:105},
{x:30,y:30},
{x:50,y:50},
{x:75,y:75},
{x:60,y:80},
{x:80,y:100},
{x:65,y:75},
{x:65,y:75},
{x:100,y:75},
{x:80,y:100},
{x:30,y:35},
{x:70,y:70},
{x:60,y:55},
{x:100,y:97},
{x:80,y:90},
{x:55,y:135},
{x:70,y:70},
{x:25,y:45},
{x:95,y:91},
],
                backgroundColor: 'rgb(255,69,0)',
            }]
        }
    })