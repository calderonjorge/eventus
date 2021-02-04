// Controla las paginas a mostrar en el sitio
import Servicio from '../models/Servicio.js';
import Evento from '../models/Evento.js';
import Calificacion from '../models/Calificacion.js';
import db from '../database/db.js';
import starRate from '../helpers/starRate.js'

//Pruebas
const apiController = async (req, res) => {

  try {
    const resultado = await Calificacion.findAll({
      attributes: ['evento_id', 'calificacion', 'mensaje', 'foto'],
      include: [{ model: Evento, attributes: ['cliente'] }],
      limit: 4
    });


    // const evento = await Evento.findAll({ limit: 4, include: Calificacion });

    //  {
    //   include: [{ model: Calificacion }, { model: Lugar }]
    // }

    // Evento.findAll({
    //   include: [{
    //     model: Lugar,
    //     include: [{ model: Role }, { model: User }],
    //   }],
    // });

    // const evento = await Evento.findOne({
    //   where: {
    //     name: "Jack Sparrow"
    //   },
    //   include: Ship
    // });

    res.json(resultado)
  } catch (error) {
    res.json(error)
  }
}


const indexController = async (req, res) => {
  const querysDB = [];
  querysDB.push(Servicio.findAll({ limit: 3 }));
  querysDB.push(Calificacion.findAll({
    attributes: ['evento_id', 'calificacion', 'mensaje', 'foto'],
    include: [{ model: Evento, attributes: ['cliente'] }],
    limit: 4
  }));

  try {
    const data = await Promise.all(querysDB);

    // construir las estrellas
    for (let i = 0; i < data[1].length; i++) {
      data[1][i].calificacion = starRate(data[1][i].calificacion)
    }

    res.render('index', {
      title: 'Inicio',
      services: data[0],
      comments: data[1]
    });

  } catch (error) {
    console.log(error);
  }
}



const servicesController = async (req, res) => {
  try {
    const services = await Servicio.findAll();
    res.render('services', {
      title: 'Servicios',
      services
    });
  } catch (error) {
    console.log(error);
  }
}


const eventosController = async (req, res) => {
  try {
    const [eventos, metadata] = await db.query('select id_evento, tipo, cliente, num_personas, fecha, calificacion, mensaje, evento.foto from lugar, lugar_evento, evento, calificacion where evento.id_evento=calificacion.evento_id and lugar.id_lugar=lugar_evento.lugar_id and evento.id_evento=lugar_evento.evento_id');

    // Construir las estrellas y acortar los menasjes cortos
    for (let i = 0; i < eventos.length; i++) {
      eventos[i].calificacion = starRate(eventos[i].calificacion);
      if (eventos[i].mensaje.length > 300) {
        eventos[i].mensaje = eventos[i].mensaje.substr(0, 300) + '...'
      }
    }
    res.render('eventos', {
      title: 'Eventos',
      eventos
    });


  } catch (error) {
    console.log(error);
  }
}


const eventoController = async (req, res) => {
  const { id_evento } = req.params;
  const querys = [];
  querys.push(db.query('SELECT nombre AS lugar,direccion,foto_url, cliente, tipo, fecha, num_personas, evento.foto, calificacion, mensaje FROM lugar, lugar_evento, evento, calificacion WHERE evento.id_evento=calificacion.evento_id AND lugar.id_lugar=lugar_evento.lugar_id AND evento.id_evento=lugar_evento.evento_id AND id_evento=' + id_evento));
  querys.push(db.query('select  nombre, icon_url, descripcion from servicio, servicio_evento where id_servicio=servicio_id and evento_id=' + id_evento));

  try {
    const data = await Promise.all(querys);
    const evento = data[0][0][0];
    const services = data[1][0];
    evento.calificacion = starRate(evento.calificacion)

    res.render('evento', {
      title: evento.tipo,
      evento,
      services
    });
  } catch (error) {
    console.log(error);
  }
}


const contactoController = (req, res) => {
  try {
    res.render('contacto', {
      title: 'Contacto'
    });
  } catch (error) {
    console.log(error);
  }
}




export {
  indexController,
  servicesController,
  eventosController,
  eventoController,
  apiController,
  contactoController
}