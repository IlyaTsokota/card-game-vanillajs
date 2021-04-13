const congratulationPage = (text, link) => {
	return (`
		<div class="congratulation">
			<div class="congratulation__inner">
				<form class="congratulation__form form">
					<h1 class="form__title">${text}</h1>
					<a class="form__btn" href="#/${link}">Next</a>
				</form>
			</div>
		</div>
	`);
};
export default congratulationPage;