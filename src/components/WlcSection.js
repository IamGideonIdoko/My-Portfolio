import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../igifexstyles/WlcSection.css';
import codingimg from '../igifexstyles/images/coding.svg';
import Aos from 'aos';
import "aos/dist/aos.css";



const WlcSection = () => {
	const [isAnimatable, setIsAnimatable] = useState(true);

window.setTimeout(function () { setIsAnimatable(false); console.log("state is ", isAnimatable)}, 4500);

	useEffect(() => {
	Aos.init({});
}, [])



return (
		<div className="welcome-section">
			<div className="ws-left">
			<img src={codingimg} alt="programmer illustration" className="coding-img2" />
			<h4 data-aos={isAnimatable ? "fade-up" : ""} data-aos-duration="1000" style={{opacity: '0.9'}}>Hey<span className="wave-emoji" role="img" aria-label="wave emoji">👋</span>, I'm </h4>
			<h1 data-aos={isAnimatable ? "fade-up" : ""} data-aos-duration="1000" data-aos-delay="500" className="ifex-name">Gideon Idoko.</h1>

			<h4 data-aos={isAnimatable ? "fade-right" : ""} data-aos-duration="1000" data-aos-delay="1500" className='description'>I'm a creative <b style={{color: 'var(--primary-font-color)', opacity: '0.8'}}>Frontend Developer</b> based in Nigeria.</h4>
			<p data-aos={isAnimatable ? "fade-left" : ""} data-aos-duration="1000" data-aos-delay="2500">I build visually appealing fully responsive websites and applications using awesome technologies like <span className="op1">CSS</span>, <span className="op1">JavaScript</span> and <span className="op1">PHP</span> basically. Check out my <span className="op1 tool-link"><Link to="/about#toolbox" >toolbox</Link></span> for a comprehensive list of tools I currently work with.</p>
			<div data-aos={isAnimatable ? "fade-up" : ""} data-aos-duration="1000" data-aos-delay="3000" className="cta-wrapper">
			<Link to="/projects" className="pbtn">My Projects</Link>
			</div>
			</div>
			<div className="ws-right">
				<img src={codingimg} alt="programmer illustration" className="coding-img" draggable="false" />
			</div>
		</div>
	)
}

export default WlcSection;