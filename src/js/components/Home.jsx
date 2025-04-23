import React from "react";

//include images into your bundle
import Card from "./Card";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";






//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron
				title="JUEGOS OLÍMPICOS"
				description="Los Juegos Olímpicos son la única competición verdaderamente global, multideportiva y que celebra el deporte en el mundo. Con más de 200 países que participan en más de 400 eventos entre los Juegos de Verano y de Invierno, los Juegos son donde todo el mundo acude a competir, a inspirarse y a estar juntos." />
			<div className="container-fluid">
				<div className="row container py-5 mx-auto">
					<div className="col-12 col-sm-6 col-lg-3 my-1 g-1 " id="columns">
						<Card
							img="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/10/03/15700904961243.jpg"
							title="SALTO DE VALLAS"
							description="los atletas deben correr a la mayor velocidad posible mientras saltan una serie de vallas, que son obstáculos ligeros y móviles. Las vallas tienen una altura específica (91.4 cm para mujeres y 106 cm para hombres en los 100/110 metros y 76.2 cm para los 400 metros). El objetivo es pasar las vallas sin derribarlas y llegar a la meta lo más rápido posible. " />
					</div>
					<div className="col-12 col-sm-6 col-lg-3 my-1 g-1" id="columns">
						<Card
							img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6zKE8QV1mtP1WXIEkipKEp-jzMD4dpQ5cMQ&s"
							title="CICLISMO"
							description="El ciclismo de carretera incluye carreras en línea y contrarreloj individuales, tanto en la categoría masculina como femenina. Las carreras en línea se disputan en circuitos urbanos o semiurbanos, mientras que las contrarreloj son contra el reloj en un recorrido fijo. " />
					</div>
					<div className="col-12 col-sm-6 col-lg-3 my-1 g-1" id="columns">
						<Card
							img="https://efesalud.com/wp-content/uploads/2024/07/natacion-juegos-olimpicos-nadadores-piscina.jpg"
							title="NATACIÓN"
							description="Es una disciplina de competición en la que los nadadores nadan en piscinas, utilizando estilos como el libre, espalda, braza o mariposa. Los nadadores compiten en distancias individuales (50m, 100m, 200m, 400m, 800m, 1500m) y relevos (4x100m, 4x200m)." />
					</div>
					<div className="col-12 col-sm-6 col-lg-3 my-1 g-1" id="columns"> 
						<Card
							img="https://seumelhorjogo.com/wp-content/uploads/2024/02/esgrima.jpg"
							title="ESGRIMA"
							description="La esgrima es un deporte de combate donde dos personas se enfrentan utilizando armas blancas (florete, espada o sable) para intentar tocarse y sumar puntos. El objetivo es no ser tocado mientras se intenta tocar al adversario, utilizando una serie de técnicas de ataque y defensa. " />
					</div>
				</div>
			</div>
			<Footer/>
		</>
	);
};

export default Home;