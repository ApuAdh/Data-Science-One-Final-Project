new Chart(document.getElementById('preferredAttackStat'), {
type: 'polarArea',
data: {
    labels: ['Grass', 'Fire', 'Water', 'Bug', 'Normal', 'Dark', 'Poison', 'Electric', 'Ground', 'Ice', 'Fairy', 'Steel', 'Fighting', 'Psychic', 'Rock', 'Ghost', 'Dragon', 'Flying'],
  datasets: [{
    label: 'Preferred Attack',
    data: [84.45652173913044, 100.3157894736842, 87.57714285714286, 79.07, 82.06, 99.69662921348315, 86.6413043478261, 95.1046511627907, 93.68888888888888, 99.2, 88.21917808219177, 101.49397590361446, 109.89010989010988, 101.16030534351145, 96.31395348837209, 99.27380952380952, 113.10227272727273, 92.37878787878788],
    borderWidth: 1
    }]
},
    options: {
        plugins:{legend:{display:false}},
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
new Chart(document.getElementById('speedStat'), {
    type: 'polarArea',
    data: {
        labels: ['Grass', 'Fire', 'Water', 'Bug', 'Normal', 'Dark', 'Poison', 'Electric', 'Ground', 'Ice', 'Fairy', 'Steel', 'Fighting', 'Psychic', 'Rock', 'Ghost', 'Dragon', 'Flying'],
        datasets: [{
        label: 'Speed',
        data: [62.02173913043478, 75.47368421052632, 68.09142857142857, 60.78, 71.39333333333333, 78.23595505617978, 68.26086956521739, 82.90697674418605, 59.36666666666667, 69.13846153846154, 68.0, 62.30120481927711, 81.12087912087912, 76.52671755725191, 54.58139534883721, 67.76190476190476, 83.0909090909091, 85.5530303030303],
        borderWidth: 1
        }]
    },
        options: {
        plugins:{legend:{display:false}},
        scales: {
            y: {
              beginAtZero: true
            }
        }
    }
});
new Chart(document.getElementById('defenseStat1'), {
    type: 'polarArea',
    data: {
        labels: ['Grass', 'Fire', 'Water', 'Bug', 'Normal', 'Dark', 'Poison', 'Electric', 'Ground', 'Ice', 'Fairy', 'Steel', 'Fighting', 'Psychic', 'Rock', 'Ghost', 'Dragon', 'Flying'],
        datasets: [{
        label: 'Physical Defence',
        data: [72.9927536231884, 70.77894736842106, 74.65714285714286, 70.69, 61.593333333333334, 71.87640449438203, 67.91304347826087, 69.05813953488372, 88.33333333333333, 79.01538461538462, 74.3972602739726, 108.78313253012048, 79.1978021978022, 76.55725190839695, 102.55813953488372, 78.02380952380952, 86.97727272727273, 68.39393939393939],
        borderWidth: 1
        }]
    },
        options: {
        plugins:{legend:{display:false}},
        scales: {
            y: {
              beginAtZero: true
            }
        }
    }
});
new Chart(document.getElementById('defenseStat2'), {
    type: 'polarArea',
    data: {
        labels: ['Grass', 'Fire', 'Water', 'Bug', 'Normal', 'Dark', 'Poison', 'Electric', 'Ground', 'Ice', 'Fairy', 'Steel', 'Fighting', 'Psychic', 'Rock', 'Ghost', 'Dragon', 'Flying'],
        datasets: [{
        label: 'Special Defence',
        data: [72.43478260869566, 72.88421052631578, 71.30857142857143, 65.49, 64.9, 70.89887640449439, 71.1413043478261, 69.81395348837209, 67.23333333333333, 75.18461538461538, 86.05479452054794, 81.18072289156626, 72.82417582417582, 87.29770992366412, 71.06976744186046, 78.55952380952381, 86.32954545454545, 71.06818181818181],
        borderWidth: 1
        }]
    },
        options: {
        plugins:{legend:{display:false}},
        scales: {
            y: {
              beginAtZero: true
            }
        }
    }
});