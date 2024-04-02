const cardContainer=document.querySelector(".cards");
let allCards= "";
const propiedades_alquiler = [
  {
    nombre: "Main Street",
    src: "",
    descripcion:
      "Este apartamento de dos habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "Anytown",
    habitaciones: 2,
    costo: 2000,
    smoke: false,
    pets: true,
    baños: 1,
    estacionamiento: true,
  },
  {
    nombre: "Ocean Avenue",
    src: "",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar.",
    ubicacion: "Seaside Town",
    habitaciones: 3,
    costo: 2500,
    smoke: false,
    pets: true,
    baños: 3,
    estacionamiento: true,
  },
  {
    nombre: "Main Street",
    src: "",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "Anytown",
    habitaciones: 2,
    costo: 2200,
    smoke: false,
    pets: true,
    baños: 2,
    estacionamiento: true,
  },
];
for (const propiedades_alquiler){
  allcards + =`
  <div>
  <h1>nombre: ${alquiler.nombre}</h1>
  <h2>dirección: ${alquiler.dirección}</h2>
  <p>estacionamientos: ${alquiler.estacionamiento}</p>
  </div>
  `
}
cardContainer.innerHTML = allCards;
export default propiedades_alquiler

