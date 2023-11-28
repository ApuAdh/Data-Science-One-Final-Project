let pokemon = ['Pikachu', 'Partner Pikachu', 'Raichu', 'Alolan Raichu', 'Alolan Geodude', 'Alolan Graveler', 'Alolan Golem', 'Magnemite', 'Magneton', 'Voltorb', 'Hisuian Voltorb', 'Electrode', 'Hisuian Electrode', 'Electabuzz', 'Jolteon', 'Zapdos', 'Chinchou', 'Lanturn', 'Pichu', 'Mareep', 'Flaaffy', 'Ampharos', 'Mega Ampharos', 'Elekid', 'Raikou', 'Electrike', 'Manectric', 'Mega Manectric', 'Plusle', 'Minun', 'Shinx', 'Luxio', 'Luxray', 'Pachirisu', 'Magnezone', 'Electivire', 'Rotom', 'Heat Rotom', 'Wash Rotom', 'Frost Rotom', 'Fan Rotom', 'Mow Rotom', 'Blitzle', 'Zebstrika', 'Emolga', 'Joltik', 'Galvantula', 'Tynamo', 'Eelektrik', 'Eelektross', 'Stunfisk', 'Incarnate Forme', 'Therian Forme', 'Zekrom', 'Helioptile', 'Heliolisk', 'Dedenne', 'Charjabug', 'Vikavolt', 'Pom-Pom Style', 'Togedemaru', 'Tapu Koko', 'Xurkitree', 'Zeraora', 'Yamper', 'Boltund', 'Toxel', 'Amped Form', 'Low Key Form', 'Pincurchin', 'Full Belly Mode', 'Hangry Mode', 'Dracozolt', 'Arctozolt', 'Regieleki', 'Pawmi', 'Pawmo', 'Pawmot', 'Tadbulb', 'Bellibolt', 'Wattrel', 'Kilowattrel', 'Sandy Shocks', 'Iron Hands', 'Iron Thorns', 'Miraidon']
    new Chart(document.getElementById("offenceChart"), {
        type: 'scatter',
        data:{
            labels: pokemon,
            label: "Offence",
            datasets: [{
                data: [{x:55,y:90},
{x:80,y:120},
{x:90,y:110},
{x:95,y:110},
{x:80,y:20},
{x:95,y:35},
{x:120,y:45},
{x:95,y:45},
{x:120,y:70},
{x:55,y:100},
{x:55,y:100},
{x:80,y:150},
{x:80,y:150},
{x:95,y:105},
{x:110,y:130},
{x:125,y:100},
{x:56,y:67},
{x:76,y:67},
{x:40,y:60},
{x:65,y:35},
{x:80,y:45},
{x:115,y:55},
{x:165,y:45},
{x:65,y:95},
{x:115,y:115},
{x:65,y:65},
{x:105,y:105},
{x:135,y:135},
{x:85,y:95},
{x:75,y:95},
{x:65,y:45},
{x:85,y:60},
{x:120,y:70},
{x:45,y:95},
{x:130,y:60},
{x:123,y:95},
{x:95,y:91},
{x:105,y:86},
{x:105,y:86},
{x:105,y:86},
{x:105,y:86},
{x:105,y:86},
{x:60,y:76},
{x:100,y:116},
{x:75,y:103},
{x:57,y:65},
{x:97,y:108},
{x:55,y:60},
{x:85,y:40},
{x:115,y:50},
{x:81,y:32},
{x:125,y:111},
{x:145,y:101},
{x:150,y:90},
{x:61,y:70},
{x:109,y:109},
{x:81,y:101},
{x:82,y:36},
{x:145,y:43},
{x:98,y:93},
{x:98,y:96},
{x:115,y:130},
{x:173,y:83},
{x:112,y:143},
{x:45,y:26},
{x:90,y:121},
{x:54,y:40},
{x:114,y:75},
{x:114,y:75},
{x:101,y:15},
{x:95,y:97},
{x:95,y:97},
{x:100,y:75},
{x:100,y:55},
{x:100,y:200},
{x:50,y:60},
{x:75,y:85},
{x:115,y:105},
{x:59,y:45},
{x:103,y:45},
{x:55,y:70},
{x:105,y:125},
{x:121,y:101},
{x:140,y:50},
{x:134,y:72},
{x:135,y:135},
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
                data: [{x:40,y:50},
{x:50,y:60},
{x:55,y:80},
{x:50,y:85},
{x:100,y:30},
{x:115,y:45},
{x:130,y:65},
{x:70,y:55},
{x:95,y:70},
{x:50,y:55},
{x:50,y:55},
{x:70,y:80},
{x:70,y:80},
{x:57,y:85},
{x:60,y:95},
{x:85,y:90},
{x:38,y:56},
{x:58,y:76},
{x:15,y:35},
{x:40,y:45},
{x:55,y:60},
{x:85,y:90},
{x:105,y:110},
{x:37,y:55},
{x:75,y:100},
{x:40,y:40},
{x:60,y:60},
{x:80,y:80},
{x:40,y:75},
{x:50,y:85},
{x:34,y:34},
{x:49,y:49},
{x:79,y:79},
{x:70,y:90},
{x:115,y:90},
{x:67,y:85},
{x:77,y:77},
{x:107,y:107},
{x:107,y:107},
{x:107,y:107},
{x:107,y:107},
{x:107,y:107},
{x:32,y:32},
{x:63,y:63},
{x:60,y:60},
{x:50,y:50},
{x:60,y:60},
{x:40,y:40},
{x:70,y:70},
{x:80,y:80},
{x:84,y:99},
{x:70,y:80},
{x:70,y:80},
{x:120,y:100},
{x:33,y:43},
{x:52,y:94},
{x:57,y:67},
{x:95,y:75},
{x:90,y:75},
{x:70,y:70},
{x:63,y:73},
{x:85,y:75},
{x:71,y:71},
{x:75,y:80},
{x:50,y:50},
{x:60,y:60},
{x:35,y:35},
{x:70,y:70},
{x:70,y:70},
{x:95,y:85},
{x:58,y:58},
{x:58,y:58},
{x:90,y:70},
{x:90,y:80},
{x:50,y:50},
{x:20,y:25},
{x:40,y:40},
{x:70,y:60},
{x:41,y:35},
{x:91,y:83},
{x:35,y:40},
{x:60,y:60},
{x:97,y:85},
{x:108,y:68},
{x:110,y:84},
{x:100,y:115},
],
                backgroundColor: 'rgb(255,69,0)',
            }]
        }
    })