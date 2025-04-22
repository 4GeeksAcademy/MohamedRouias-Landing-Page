import React from "react";

//include images into your bundle
import Card from "./Card";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";




const cards = [
	{
		image: "https://picsum.photos/id/10/200/https://e00-especiales-marca.uecdn.es/juegos-olimpicos/images/enciclopedia/atletismog.jpg",
		title: "Salto de vallas",
		description: "Dos corredores de atletismo en la modalidad de vallas",
	},
	{
		image: "https://picsum.photos/id/17/200/300",
		title: "Sendero",
		description: "Sendero con lindo paisaje",
	},
	{
		image: "https://picsum.photos/id/28/200/300",
		title: "Bosque",
		description: "Bosque con lindo paisaje",
	},
	{
		image: "https://picsum.photos/id/54/200/300",
		title: "Montaña",
		description: "Montaña con lindo paisaje",
	}
];


//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron
				title="Éste es el fukin Jumbotron"
				description="Aquí hablaremos de lo que mas me gusta que es el deporte. Habrán varios deportes de los que comentaremos detalles diferenciativos" />
			<div className="text-center">
				<Card
					img=""
					title="Primera clase de React!"
					description="Después de la clase de testing vemos esta clase" />
				<Card />
				<Card />
				<Card />
			</div>f
		</>
	);
};

export default Home;