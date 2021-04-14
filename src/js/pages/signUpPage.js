const signUpPage = () => {
	return (`
	<div class="signup">
		<div class="signup__inner">
			<form class="signup__form form" method="POST">
				<h1 class="form__title">Sign Up</h1>
				<div class="form__input">
					<label for="login">Login</label>
					<input type="text" name="login" required  />
				</div>
				<div class="form__input">
					<label for="password">Password</label>
					<input type="text" name="password"  required />
				</div>
				<div class="form__input">
					<label for="repeatPassword">Repeat password</label>
					<input type="text" name="repeatPassword" required />
				</div>
				<button class="form__btn" type="submit">Sign Up</button>
				<p class="form__valid"></p>
				<a class="form__link" href="#/signin">Sign In</a>
			</form>
		</div>
	</div>
	`);
};

export default signUpPage;