const battlePage = () => {
	const { id, login, img } = JSON.parse(localStorage.getItem("userInfo"));


	return (`
	<div class="battle">
	<div class="battle__field">
		<div class="battle__user battle__user--enemy">
			<div class="battle__user-base">
				<div class="battle__user-img">
					<img src="img/1.jpg" alt="enemy" />
					<div class="battle__user-health">
						<img src="icons/health-insurance.png" alt="health" />
						<p>20</p>
					</div>
				</div>
			</div>
			<div class="battle__user-front">

			</div>
		</div>
		<div class="battle__deck">
			<div class="battle__deck-card"></div>
			<div class="battle__deck-card"></div>
			<div class="battle__deck-card"></div>
		</div>
		<div class="battle__step-time">
			30
		</div>
		<div class="battle__user">
			<div class="battle__user-front">

			</div>
			<div class="battle__user-base">
				<div class="battle__user-img">
					<img src="data:image/jpeg;base64,${img}" alt="i" />
					<div class="battle__user-health">
						<img src="icons/health-insurance.png" alt="health" />
						<p>20</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="battle__choise">
		<div class="battle__choise-text">Choose</div>
		<div class="battle__choise-btns">
			<div class="battle__choise-btn">
				Eagle
			</div>
			<div class="battle__choise-btn">
				Tails
			</div>
		</div>
	</div>
	<div class="battle__money">
		<div class="battle__money-inner">
			Eagle
		</div>

	</div>
</div>
 	`);
};

export default battlePage;