const right_section = document.querySelector('.right_section');
const trainings = document.querySelectorAll('.card_training');
const series_training = gon.series_training;
const exercices = gon.exercices

const title_training = (text) => {
  return `<h1 id='title_training' class="text-center">${text}</h1>`
};

const card = (name_exercice, progress) => {
  return `<div class="card m-b-20 card-body text-xs-center">
    <h5 class="card-title serie_name">${name_exercice}</h5>
    <p class="card-text">
    ${progress}
    </p>
  </div>`
};

const progress = (goal, done) => {
  if (done > goal) {
    return `<div class="progress m-b-20">
      <div class="progress-bar bg-success" role="progressbar" style="width: ${goal * 100}%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="${done}"></div>
      <div class="progress-bar bg-info" role="progressbar" style="width: %" aria-valuenow="${done - goal * 100}}" aria-valuemin="0" aria-valuemax="${done}"></div>
    </div>`
  } else if (done) {
    return `<div class="progress m-b-20">
      <div class="progress-bar bg-success" role="progressbar" style="width: ${done / goal * 100}%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
    </div>`
  } else {
    return `<div class="progress m-b-20">
      <div class="progress-bar bg-success" role="progressbar" style="width: 0%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
    </div>`
  }
};

const createTitle =(text) => {
  right_section.innerHTML = title_training(text);
};

createTitle("Cliquez sur un programme");

// const series_for_training = (training_id) => {
//   series_training[training_id]
// };

trainings.forEach(function(training) {

  training.addEventListener('click', (event) => {

    const id = training.attributes["data-id"].value;
    const prog = document.querySelector(`[data-id="${id}"]`);
    const name = prog.attributes["data-name"].value
    createTitle(name);

    console.log(series_training[id]);
    console.log(exercices);

    // Je veux sélectionner les séries du programme que j'ai sélectionné
    series_training[id].forEach(function(serie) {
    // Faire un each sur chaque
      // Ajouter la Card
        // avec les bonnes valeurs
        // et si possible
      right_section.insertAdjacentHTML('beforeEnd', card(exercices[serie['exercice_id']]['name'], progress(serie['goal'], serie['done'])));
    });


    // Recupérer les infos pour les crées


  });
});



