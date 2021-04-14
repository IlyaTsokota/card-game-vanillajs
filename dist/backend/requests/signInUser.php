<?php

header('Content-Type: application/json');
$_POST = json_decode(file_get_contents("php://input"), true);

require('../model/Users.php');
login($_POST['login'], $_POST['password']);

function login($login, $password)
{
	$user = new Users('users');
	$wasFind = $user->sign_in($login, $password);
	if ($wasFind) {
		$user->find_by_field('u_login', $login);
		echo json_encode(
			array(
				'response' => true,
				'userId' => $user->id,
				'userImage' => base64_encode($user->image)
			)
		);
	} else {
		echo json_encode(
			array(
				'response' => false
			)
		);
	}
}