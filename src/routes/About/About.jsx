import React from "react";
import Footer from "../../components/footer/Footer";
import header_img from "../../assets/about-header-img.jpg";
import about_img from "../../assets/about-drawing.jpg";
import "./about.css";

export default function About() {
	return (
		<>
			<header>
				<img src={header_img} className="about-header-img" />
				<h1 className="header-title">About Me</h1>
				<h2 className="header-subtitle">Who I am</h2>
			</header>
			<section id="about">
				<p>
					Desde que soy pequeña me gusta dibujar, así que cuando
					terminé la escuela secundaria decidí hacer una carrera
					relacionada. Empecé a estudiar en IMAGE CAMPUS y en el año
					2019 me recibí como animadora digital.
				</p>
				<p>
					Como siempre hay algo nuevo para aprender y mejorar, luego
					de terminar la carrera de animación seguí haciendo cursos
					para aprender nuevos conceptos y perfeccionar aquellos que
					ya había adquirido con la experiencia, entre ellos: pintura
					digital, anatomía y modelo vivo, entre otros.
				</p>
				<div className="img-info-side">
					<div>
						<p>
							Al empezar a trabajar de manera freelance y en
							equipo aprendí inclusive más cosas y logré
							resultados muy satisfactorios! Es hermoso poder
							poner en práctica todo lo que vengo adquiriendo
							durante mis años como estudiante y artista.
						</p>
						<p>
							A día de hoy, he participado en el desarrollo de
							varios cortos y videoclips, algunos de los cuales inclusive fueron
							nominados a multiples premios en el ámbito.
						</p>
						<p>Actualmente estoy trabajando como animadora de videos musicales para Dinnokkiva, una serie de contenido educativo para niños.</p>
					</div>
					<img src={about_img} className="about-img" />
				</div>
			</section>
			<Footer />
		</>
	);
}