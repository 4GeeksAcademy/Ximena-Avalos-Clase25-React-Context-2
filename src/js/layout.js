import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Agendas } from "./views/agendas";
import { Contacts } from "./views/contacts";
import { AddContact } from "./views/addContact";
import { EditContact } from "./views/editContact";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import AddAgendaModal  from "./component/addAgendaModal";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
						<Route path="/agendas" element={<Agendas />} />
						<Route path="/agendas/:agendaSlug" element={<Contacts />} />
						<Route path="/agendas/:agendaSlug/add-contact" element={<AddContact />} />
						<Route path="/agendas/:agendaSlug/edit-contact/:contactId" element={<EditContact />} />
					</Routes>
					<Footer />
					<AddAgendaModal /> 
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);