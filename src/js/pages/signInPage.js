const signInPage = () => {
	return (`
		<div div class="signin" >
			<div class="signin__inner">
				<form class="signin__form form">
					<h1 class="form__title">Sign In</h1>
					<div class="form__input">
						<label for="login">Login</label>
						<input type="text" name="login" required />
					</div>
					<div class="form__input">
						<label for="password">Password</label>
						<input type="text" name="password" required />
					</div>
					<button class="form__btn" type="submit">Sign In</button>
					<p class="form__valid"></p>
					<a class="form__link" href="#/signup">Sign Up</a>
				</form>
			</div>
		</div > 
		`
	);
};

export default signInPage;