<?php
header('Content-Type: application/json');
$_POST = json_decode(file_get_contents("php://input"), true);

require('../model/Users.php');

update_user($_POST['login'], $_POST['photo']);

function update_user($login, $image)
{
	$user = new Users('users');
	$res = false;
	if ($user->find_by_field('u_login', $login)) {
		$user->image = $image;
		$user->login - $login;
		$user->update();
		$res = true;
	}

	echo json_encode(
		array('result' => $res)
	);
}