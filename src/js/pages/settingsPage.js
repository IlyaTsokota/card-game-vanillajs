const settingsPage = () => {
	const { id, login, img } = JSON.parse(localStorage.getItem("userInfo"));

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
						<img src="data:image/jpeg;base64,${img}" alt="avatar" />
						</div>
						<div class="header__name">${login}</div>
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
				<div class="main-page__settings settings">
					<a href="#/main" class="settings__back">Back</a>
					<h1 class="settings__title">Settings</h1>
					<div class="settings__upload">
							<label for="upload">
								<img class="upload__img" src="data:image/jpeg;base64,${img}" alt="avatar" />
								<p>Upload image</p>
							</label>
							<input type="file" id="upload" name="photo" />
						</div>
					<form method="POST" class="settings__form">
						<div class="settings__form-input">
							<label for="name">Login</label>
							<input type="text" name="name" value="${login}" required />
						</div>
						<button class="settings__btn" type="submit">Save</button>
						<p class="form__valid"></p>
					</form>
				</div>
			</div>
		</div>
	</div>
	`);
};

export default settingsPage;