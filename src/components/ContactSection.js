import React from 'react';
import BottomNav from './BottomNav';
import '../igifexstyles/ContactSection.css';

const ContactSection = () => {

const allRenderedicons = document.querySelectorAll('.rendered-icons');
 if(allRenderedicons.length > 0) { 
   allRenderedicons.forEach(icon => {
     icon.style.display = 'none';
   })
 }

	return (
		<div className="contact-section">
			<h2 className="cs-head-txt">Contact<span className="dash"></span></h2>
			<p>Do you have a project in mind? Do you have a project that needs a fix? Do you want me to collaborate with you in a project or want to get to know me more?</p>
			<p>I'm currently <b>open</b> to jobs and opportunites.</p>

			<h3 className="help-out">I'll be glad to help out.</h3>			

			<h1 className="reach-out">Kindly reach out to me via:</h1>
			<div className="contact-info">
			<div>
			<h4>Email</h4>
				<p className="email-info"><a href="mailto:if3cofr3sh@gmail.com" >if3cofr3sh@gmail.com</a><span></span></p>
			</div>
			<div>
				<h4>Phone(NG)</h4>
				<p className="tel-info"><a href="tel:+2349036290221">+(234) 903 629 0221</a><span></span></p>
			</div>
			</div>
			<h3>Connect with me:</h3>
				<div className="connect-links">
                 <ul>
                   <li><a href="https://github.com/IGIfeanyichukwu" target="_blank"><i className="fab fa-github"></i></a></li>
                   <li><a href="https://codepen.io/IGIfeanyichukwu" target="_blank"><i className="fab fa-codepen"></i></a></li>
                   <li><a href="https://twiiter.com/IGIfeanyichukwu" target="_blank"><i className="fab fa-twitter"></i></a></li>
                   <li><a href="https://linkedin.com/in/IGIfeanyichukwu" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                 </ul>
               </div>
               <p className="foot-text">&copy; 2020 - Ifex | <i className="fas fa-code"></i> with <span role="img" aria-label="heart emoji">❤️</span> | All rights reserved.</p>

               <div>
               	<BottomNav backward="about" />
               </div>
		</div>
	)
}	


export default ContactSection;