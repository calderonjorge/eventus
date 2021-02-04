// import Evento from '../models/Evento.js';
import Evento from '../models/Evento.js';
import Calificacion from '../models/Calificacion.js';



// Un evento tiene un lugar 
// esta accion añade un evento_id a la tabla lugar
// Evento.hasOne(Lugar, { foreignKey: 'evento_id' });
// Lugar.belongsTo(Evento, { foreignKey: 'evento_id' });

// Un evento tiene una calificacion
Evento.hasOne(Calificacion, { foreignKey: 'evento_id' });
Calificacion.belongsTo(Evento, { foreignKey: 'evento_id' });