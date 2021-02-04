import Sequelize from 'sequelize';
import db from '../database/db.js';

const Calificacion = db.define('calificacion', {
  id_calificacion: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  calificacion: { type: Sequelize.NUMBER },
  mensaje: { type: Sequelize.TEXT },
  foto: { type: Sequelize.TEXT }
});

export default Calificacion;
