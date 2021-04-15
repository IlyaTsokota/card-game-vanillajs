<?php
include('../model/Model.php');

class Users extends Model
{
	public $id;
	public $login;
	public $password;
	public $image;
	public $is_admin;

	public function find_by_field($field, $value)
	{
		$query = "SELECT * FROM $this->tableName where $field = '$value'";

		$user = $this->db->conn->query($query)->fetch();

		if (is_bool($user)) {
			$this->setDefaultValues();
			return false;
		}

		$this->id = $user["u_id"];
		$this->login = $user["u_login"];
		$this->password = $user["u_password"];
		$this->image = $user["u_img"];
		$this->is_admin = $user["u_isadmin"];

		return 	true;
	}

	private function setDefaultValues()
	{
		$this->id = null;
		$this->login = null;
		$this->password = null;
		$this->image = null;
		$this->is_admin = null;
	}

	public function setUser($login, $password, $image, $id = null)
	{
		$this->login = $login;
		$this->password = $password;
		$this->image = $image;
		$this->id = $id;
	}

	function delete()
	{
		$query = "DELETE FROM $this->tableName WHERE u_id = $this->id";
		$request = $this->db->conn->prepare($query);
		$request->execute();

		if (!$request->rowCount()) {
			return;
		}

		$this->setDefaultValues();
	}

	function insert()
	{
		$query = "INSERT INTO  $this->tableName ( u_login, u_password, u_img, u_isadmin) VALUES (:login, :pass, :image, false)";

		$request = $this->db->conn->prepare($query);
		$request->execute(array(
			':login' => $this->login,
			':pass' => $this->password,
			':image' => $this->image,
		));
	}

	function update()
	{
		$query = "UPDATE $this->tableName  SET `u_login`= :login, `u_password`= :pass, `u_img`= :u_img, u_isadmin = '0' WHERE `u_id`= :id";

		$request = $this->db->conn->prepare($query);
		$request->execute(array(
			':login' => $this->login,
			':pass' => $this->password,
			':u_img' => $this->image,
			':id' => $this->id
		));
	}

	function sign_in($login, $password)
	{
		$query = "SELECT * FROM $this->tableName where u_login = '$login' and u_password = '$password'";
		$user = $this->db->conn->query($query)->fetch();

		if (is_bool($user)) {
			$this->setDefaultValues();
			return false;
		}

		return true;
	}
}