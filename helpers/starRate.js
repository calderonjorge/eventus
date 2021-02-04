function starRate(calificacion) {
  let estrellas = '';
  for (let i = 0; i < calificacion; i++) estrellas += '★'
  for (let i = calificacion; i < 5; i++) estrellas += '☆'

  return estrellas;
}

export default starRate;