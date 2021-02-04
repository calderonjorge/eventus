import Sequelize from 'sequelize';
import db from '../database/db.js';

const Servicio = db.define('servicio', {
  id_servicio: { type: Sequelize.INTEGER, primaryKey: true },
  nombre: { type: Sequelize.STRING },
  descripcion: { type: Sequelize.STRING },
  icon_url: { type: Sequelize.STRING }
});

export default Servicio;