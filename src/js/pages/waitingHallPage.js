const waitingHallPage = () => {
	return (`
	<div class="main-page">
		<div class="container">
			<div class="main-page__hall hall">
				<h1 class="hall__title">Waiting hall </h1>
				<p class="hall__wait">Please wait for someone to join...</p>
				<button class="hall__btn room__btn" type="submit">Destroy room</button>
			</div>
		</div>
	</div>
 	`);
};

export default waitingHallPage;