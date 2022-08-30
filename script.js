// associations number to text description
const textHour = [
  'minuit', 'une', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'midi'];

const textMinute = [
  'pile', 'une', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize',
  'quatorze', 'et quart', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf', 'vingt', 'vingt-et-un', 'vingt-deux', 'vingt-trois',
  'vingt-quatre', 'vingt-cinq', 'vingt-six', 'vingt-sept', 'vingt-huit', 'vingt-neuf', 'et demi', 'trente-et-une', 'trente-deux',
  'trente-trois', 'trente-quatre', 'moins-vingt-cinq', 'trente-six', 'trente-sept', 'trente-huit', 'trente-neuf', 'moins vingt',
  'quarante-et-une', 'quarante-deux', 'quarante-trois', 'quarante-quatre', 'moins le quart', 'quarante-six', 'quarante-sept',
  'quarante-huit', 'quarante-neuf', 'moins-dix', 'cinquante-et-un', 'cinquante-deux', 'cinquante-trois', 'cinquante-quatre',
  'moins cinq', 'cinquante-six', 'cinquante-sept', 'cinquante-huit', 'cinquante-neuf'
];

module.exports = {
  textHour,
  textMinute,
  hourTranscription,
  checkHourFormat
}

// Control hour format
function checkHourFormat(hourId){
  let hourRGEX = /^([01][0-9]|2[0-3]):[0-5][0-9]$/;
  return hourRGEX.test(hourId);
}

// execute hour transcription in french language
function hourTranscription(hourMinute){
  // hour and minutes separator is :
  // so elt[0] represents hours
  //    elt[1] represents minutes)
  elt = hourMinute.split(':');
  
  // beyond 30 minutes, minutes are counted down from next hour
  let specDay = '';
  if (textMinute[parseInt(elt[1])].includes('moins')){
    elt[0]++;
  }
  
  // 24 hours format reduced to 12 hours format
  format12Hours = elt[0]
  if (elt[0] > 12){
    format12Hours = elt[0] % 12;
  }
  
  // Specific mentions depending on 18 and 12 hours limits
  if (elt[0] > 12){
    specDay = 'de l\'après-midi';
  }
  if (elt[0] >= 18){
    specDay = 'du soir'
  }

  specHour = 'heures';
  switch (textHour[parseInt(format12Hours)]){
    case 'minuit':
      specDay = '';
    case 'midi':
      specHour ='';
      break;
    case 'une':
      specHour = 'heure';
  }
  response = 'Il est ' + textHour[parseInt(format12Hours)] + ' ' + specHour + ' ' + textMinute[parseInt(elt[1])] + ' ' + specDay + ".";
  return response;
}