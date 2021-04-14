const mainPage = () => {
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
					<div class="main-page__table table">
						<div class="table__header">
							<h2 class="table__title">Statistics</h2>
							<div class="table__statistic">
								<div class="table__statistic-win">
									<span>Win</span>
									<span>0</span>
								</div>
								<div class="table__statistic-lose">
									<span>Lose</span>
									<span>0</span>
								</div>
							</div>
						</div>
						<table class="table__body">
							<thead class="table__thead">
								<tr class="table__thead-row">
									<th class="table__thead-col">Room ID</th>
									<th class="table__thead-col">Enemy</th>
									<th class="table__thead-col">Result</th>
								</tr>
							</thead>
							<tbody class="table__tbody">
								<tr class="table__tbody-row">
									<td class="table__tbody-col">124</td>
									<td class="table__tbody-col">Ilya</td>
									<td class="table__tbody-col">Win</td>
								</tr>
							</tbody>
						</table>
						<div class="table__pagination">
							<p class="table__pagination-item table__pagination-item--active">1</p>
							<p class="table__pagination-item">2</p>
							<p class="table__pagination-item">3</p>
							<p class="table__pagination-item">4</p>
							<p class="table__pagination-item--divider">...</p>
							<p class="table__pagination-item">25</p>
						</div>
					</div>

					<div class="main-page__table table">
						<div class="table__header">
							<h2 class="table__title">Rooms</h2>
							<div class="table__statistic">
								<div class="table__statistic-count">
									<span>Count</span>
									<span>0</span>
								</div>
								<a class="table__btn" href="#/create-room">Create room</a>
							</div>
						</div>
						<table class="table__body">
							<thead class="table__thead">
								<tr class="table__thead-row">
									<th class="table__thead-col">Room ID</th>
									<th colspan="2" class="table__thead-col">Name</th>
								</tr>
							</thead>
							<tbody class="table__tbody">
								<tr class="table__tbody-row">
									<td class="table__tbody-col">124</td>
									<td class="table__tbody-col">Ilya</td>
									<td class="table__tbody-col">
										<a class="table__btn table__btn--join" href="#/join">Join
										</a>
									</td>
								</tr>
							</tbody>
						</table>
						<div class="table__pagination">
							<p class="table__pagination-item table__pagination-item--active">1</p>
							<p class="table__pagination-item">2</p>
							<p class="table__pagination-item">3</p>
							<p class="table__pagination-item">4</p>
							<p class="table__pagination-item--divider">...</p>
							<p class="table__pagination-item">25</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	`);
};

export default mainPage;