import signInPage from '../pages/signInPage';
import signUpPage from '../pages/signUpPage';
import congratulationPage from '../pages/congratulationPage';
import mainPage from '../pages/mainPage';
import createRoomPage from '../pages/createRoomPage';
import waitingHallPage from '../pages/waitingHallPage';
import settingsPage from '../pages/settingsPage';
import { postData } from '../services/services';

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
		const form = document.querySelector('.settings__form');
		form.removeEventListener('click', updateUser);
		form.addEventListener('click', updateUser);
		const upload = document.querySelector('#upload');
		upload.removeEventListener("change", changeSettingsImage);
		upload.addEventListener("change", changeSettingsImage);
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

	function changeSettingsImage(e) {
		e.preventDefault();
		setSrcImgFromPathImage(e.target.files[0], document.querySelector('.upload__img'));
	}

	function setSrcImgFromPathImage(file, el) {
		const reader = new FileReader();
		reader.readAsDataURL(file, 'UTF-8');
		reader.addEventListener('load', (event) => {
			el.src = event.target.result;
		});
	}


	function showModal(e) {
		e.preventDefault();
		this.nextElementSibling.classList.add('header__menu-list--active');
	}

	function signin(e) {
		e.preventDefault();
		const json = formDataToObject(this);
		const msg = this.querySelector('.form__valid');

		postData('./backend/requests/signInUser.php', JSON.stringify(json))
			.then((data) => {
				if (data.response) {

					routes['/congratulation'] = () => {
						myDiv.insertAdjacentHTML('afterbegin', congratulationPage("Welcome back, " + json.login, "main"));
					};

					window.location.hash = "/congratulation";
					localStorage.setItem("userInfo", JSON.stringify({ id: data.userId, login: json.login, img: data.userImage }));

				} else {
					msg.textContent = 'Wrong login or password!';
					msg.classList.add('form__valid--active');
				}
			})
			.catch((err) => {
				console.error(err);
			});
	}

	function updateUser(e) {
		e.preventDefault();
		const json = formDataToObject(this);
		const msg = this.querySelector('.form__valid');
		const reader = new FileReader();
		reader.readAsDataURL(document.querySelector('#upload').files[0], 'UTF-8');
		reader.addEventListener('load', (event) => {
			json.photo = event.target.result;
			postData('./backend/requests/updateUser.php', JSON.stringify(json))
				.then(({ result }) => {
					if (result) {
						localStorage.setItem("userInfo", JSON.stringify({ login: json.login, img: json.photo }));
						msg.textContent = 'Update success!';
						msg.classList.add('form__valid--active');
						msg.style.color = 'green';
					} else {
						msg.textContent = 'Fail!';
						msg.classList.add('form__valid--active');
					}
				})
				.catch((err) => {
					console.error(err);
				});

		});


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
		const { login, password, repeatPassword } = json;
		const msg = this.querySelector('.form__valid');
		if (password !== repeatPassword) {
			msg.textContent = 'Password mismatch!';
			msg.classList.add('form__valid--active');
			return;
		}

		postData('./backend/requests/createUser.php', JSON.stringify(json))
			.then(({ result }) => {
				if (result) {
					routes['/congratulation'] = () => {
						myDiv.insertAdjacentHTML('afterbegin',
							congratulationPage("We're glad you're with us now, " + login, "signin"));
					};
					window.location.hash = "/congratulation";
				} else {
					msg.textContent = 'User already exists!';
					msg.classList.add('form__valid--active');
				}
			})
			.catch((err) => {
				console.error(err);
			});
	}
}

function formDataToObject(form) {
	return Object.fromEntries(new FormData(form).entries());
}

