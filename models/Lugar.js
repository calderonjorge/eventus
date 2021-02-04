import Sequelize from 'sequelize';
import db from '../database/db.js';

const Lugar = db.define('lugar', {
  id_lugar: { type: Sequelize.INTEGER, primaryKey: true },
  nombre: { type: Sequelize.STRING },
  direccion: { type: Sequelize.STRING },
  foto_url: { type: Sequelize.STRING },
});

export default Lugar;
