import faker from 'faker';
import Lugar from '../models/Lugar.js'
faker.locale = "es_MX";

for (let i = 0; i < 10; i++) {

  let fakePlace = {
    nombre: faker.company.companyName(),
    direccion: faker.address.state() + ', ' + faker.address.city(),
    foto_url: faker.image.technics()
  }
  console.log(faker.image.transport());

}
