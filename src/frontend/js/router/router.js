import signInPage from '../pages/signInPage';
import signUpPage from '../pages/signUpPage';
import congratulationPage from '../pages/congratulationPage';
import mainPage from '../pages/mainPage';
import createRoomPage from '../pages/createRoomPage';
import waitingHallPage from '../pages/waitingHallPage';
import settingsPage from '../pages/settingsPage';

import postData from '../services/services';

export default function router() {

	const myDiv = document.getElementById('main');


	let routes = {};
	let templates = {};

	let template = (name, templateFunction) => {
		templates[name] = templateFunction;
	};

	let route = (path, template) => {
		if (typeof template == "function") {
			routes[path] = template;
		}
		else if (typeof template == "string") {
			routes[path] = templates[template];
		}
	};

	// Give the correspondent route (template) or fail
	let resolveRoute = (route) => {
		try {
			return routes[route];
		} catch (error) {
			throw new Error("The route is not defined");
		}
	};

	let router = (evt) => {
		myDiv.innerHTML = "";
		const url = window.location.hash.slice(1) || "/";
		const routeResolved = resolveRoute(url);
		routeResolved();
	};



	template('signin', () => {
		myDiv.insertAdjacentHTML('afterbegin', signInPage());
		const form = document.querySelector('.signin__form');
		form.removeEventListener('submit', signin);
		form.addEventListener('submit', signin);
	});

	template('create-room', () => {
		myDiv.insertAdjacentHTML('afterbegin', createRoomPage());
		const form = document.querySelector('.room__form');
		form.removeEventListener('submit', createRoom);
		form.addEventListener('submit', createRoom);
		const btn = document.querySelector('.header__info');
		btn.removeEventListener('click', showModal);
		btn.addEventListener('click', showModal);

	});

	template('main', () => {
		myDiv.insertAdjacentHTML('afterbegin', mainPage());

		const btn = document.querySelector('.header__info');
		btn.removeEventListener('click', showModal);
		btn.addEventListener('click', showModal);
	});

	template('settings', () => {
		myDiv.insertAdjacentHTML('afterbegin', settingsPage());

		const btn = document.querySelector('.header__info');
		btn.removeEventListener('click', showModal);
		btn.addEventListener('click', showModal);
	});

	template('waiting-hall', () => {
		myDiv.insertAdjacentHTML('afterbegin', waitingHallPage());
	});

	template('signup', () => {
		myDiv.insertAdjacentHTML('afterbegin', signUpPage());

		const form = document.querySelector('.signup__form');
		form.removeEventListener('submit', signup);
		form.addEventListener('submit', signup);
	});



	route('/', 'signin');
	route('/signin', 'signin');
	route('/signup', 'signup');
	route('/main', 'main');
	route('/create-room', 'create-room');
	route('/waiting-hall', 'waiting-hall');
	route('/settings', 'settings');

	window.addEventListener('load', router);
	window.addEventListener('hashchange', router);

	function showModal(e) {
		e.preventDefault();
		this.nextElementSibling.classList.add('header__menu-list--active');
	}

	function signin(e) {
		e.preventDefault();

		const json = formDataToObject(this);
		console.log(json);
		routes['/congratulation'] = () => {
			myDiv.insertAdjacentHTML('afterbegin', congratulationPage("Welcome back, " + json.login, "main"));
		};
		window.location.hash = "/congratulation";
	}

	function createRoom(e) {
		e.preventDefault();

		const json = formDataToObject(this);
		console.log(json);

		window.location.hash = "/waiting-hall";
	}

	function signup(e) {
		e.preventDefault();

		const json = formDataToObject(this);
		console.log(json);
		routes['/congratulation'] = () => {
			myDiv.insertAdjacentHTML('afterbegin',
				congratulationPage("We're glad you're with us now, " + json.login, "signin"));
		};
		window.location.hash = "/congratulation";

	}
}

function formDataToObject(form) {
	return Object.fromEntries(new FormData(form).entries());
}

