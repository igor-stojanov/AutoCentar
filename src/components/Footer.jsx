import React from "react";
import "./style.css"; // Assuming your CSS is in a file called style.css

const App = () => {
	return (
		<div>
			<div className="navigacija">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.950595479137!2d20.476014676466512!3d44.80219547736427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7a9e3e6f4ee1%3A0x340a0c388b6e8399!2z0KHQuNC90ZLQtdC70LjRm9C10LLQsCwg0JHQtdC-0LPRgNCw0LQ!5e0!3m2!1ssr!2srs!4v1727430665213!5m2!1ssr!2srs"
					width="600"
					height="450"
					style={{ border: 0 }}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					title="Google Maps"
				></iframe>
			</div>
			<footer className="footer">
				<div className="fut1">
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publ
					</p>
				</div>
				<div className="fut2">
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publ
					</p>
				</div>
				<div className="fut3">
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publ
					</p>
				</div>
			</footer>
		</div>
	);
};

export default App;
