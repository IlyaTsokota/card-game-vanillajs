const createRoomPage = () => {
	return (`
	<div class="main-page">
	<div class="container">
		<div class="main-page__inner">
			<div class="main-page__header header">
				<a class="header__link" href="#/main">
					This is the best card game for you!
				</a>
				<a href="#" class="header__info">
					<div class="header__icon">
						<img src="icons/Alice.png" alt="awaa" />
					</div>
					<div class="header__name">John</div>
					<div class="header__down">
						<img src="icons/down.png" alt="down" />
					</div>

				</a>
				<ul class="header__menu-list">
					<li class="header__menu-item">
						<a href="#/settings" class="header__menu-link">Settings</a>
					</li>
					<li class="header__menu-item">
						<a href="#" class="header__menu-link">Exit</a>
					</li>
				</ul>
			</div>
			<div class="main-page__room room">
				<div class="room__header">
					<a href="#/main" class="room__back">Back</a>
					<h1 class="room__title">Create room</h1>
					<form method="POST" class="room__form">
						<div class="room__form-input">
							<label for="name">Name</label>
							<input type="text" name="name" required />
						</div>
						<button class="room__btn" type="submit">Create</button>
					</form>
					</div>
				</div>
			</div>
		</div>
	</div>
	`);
};

export default createRoomPage;