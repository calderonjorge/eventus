import Sequelize from 'sequelize';
import db from '../database/db.js';

const Servicio_Evento = db.define('servicios_eventos', {
  evento_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  servicio_id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
});

export default Servicio_Evento;