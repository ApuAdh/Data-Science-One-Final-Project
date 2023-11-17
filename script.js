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
new Chart(document.getElementById('statDistribution'), {
  type: 'line',
  data: {
      labels: ["Gen1", "Gen2", "Gen3", "Gen4", "Gen5", "Gen6", "Gen7", "Gen8", "Gen9"],
      datasets: [
      {
          label: 'Physical Attack Average',
          data: [77.95098039215686, 72.08928571428571, 81.03030303030303, 82.28, 83.25988700564972, 77.875, 87.56, 85.58715596330275, 81.88695652173914],
          borderWidth: 2.5,
          borderColor: 'rgb(0,0,0)',
      },{
          label: "Special Attack Average",
          data: [69.90686274509804, 66.24107142857143, 75.6, 76.824, 71.64406779661017, 75.1590909090909, 78.02, 75.13761467889908, 70.5304347826087],
          borderWidth: 2.5,
          borderColor: 'rgb(0, 145, 173)'
      },{
          label: "HP Average",
          data: [65.5343137254902, 71.34821428571429, 66.80606060606061, 72.904, 72.27118644067797, 70.14772727272727, 71.63, 76.28440366972477, 76.6],
          borderWidth: 2.5,
          borderColor: 'rgb(217, 108, 6)'
      },{
          label: "Defence Average",
          data: [71.65686274509804, 73.58928571428571, 74.04848484848485, 78.032, 72.0225988700565, 78.45454545454545, 79.21, 77.3211009174312, 72.55652173913043],
          borderWidth: 2.5,
          borderColor: 'rgb(189, 191, 9)'
      },{
          label: "Special Defence Average",
          data: [68.97549019607843, 74.14285714285714, 71.13939393939394, 77.28, 68.16949152542372, 75.92045454545455, 75.75, 73.40366972477064, 70.30434782608695],
          borderWidth: 2.5,
          borderColor: 'rgb(217, 108, 6)'
      }, {
          label: "Speed Average",
          data: [73.26960784313725, 61.80357142857143, 67.38181818181818, 71.312, 68.96045197740114, 67.25, 67.77, 72.33944954128441, 75.52173913043478],
          borderWidth: 2.5,
          borderColor: 'rgb(255, 87, 187)'
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