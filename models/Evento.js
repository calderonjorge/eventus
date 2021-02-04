import Sequelize from "sequelize";
import db from "../database/db.js";


const Evento = db.define('evento', {
  id_evento: { type: Sequelize.INTEGER, primaryKey: true },
  cliente: { type: Sequelize.STRING },
  tipo: { type: Sequelize.STRING },
  num_personas: { type: Sequelize.INTEGER },
  fecha: { type: Sequelize.DATE },
  foto: { type: Sequelize.TEXT }
});


export default Evento;
