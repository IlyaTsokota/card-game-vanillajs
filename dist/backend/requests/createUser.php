<?php
header('Content-Type: application/json');
$_POST = json_decode(file_get_contents("php://input"), true);

require('../model/Users.php');

create_user($_POST['login'], $_POST['password']);

function create_user($login, $password)
{
	$user = new Users('users');
	$image = file_get_contents('../resources/2.png');
	$res = false;

	if (!$user->find_by_field('u_login', $login)) {
		$user->setUser($login, $password, $image);
		$user->insert();
		$res = true;
	}

	echo json_encode(
		array('result' => $res)
	);
}