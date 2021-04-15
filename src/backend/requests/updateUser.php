<?php
header('Content-Type: application/json');
$_POST = json_decode(file_get_contents("php://input"), true);

require('../model/Users.php');

update_user($_POST['id'], $_POST['login'], $_FILES['photo']['name']);

function update_user($id, $login, $image)
{
	$user = new Users('users');
	$user->find_by_field("u_id", $id);
	$user->image = file_get_contents($image);
	$user->login = $login;
	$user->update();


	echo json_encode(
		array('result' => true)
	);
}