<?php

include('../connection/DatabaseConnector.php');

abstract class Model
{
	public $tableName;
	public $db;

	function __construct($tableName)
	{
		$this->setConnection();
		$this->setTable($tableName);
	}

	protected function setTable($tableName)
	{
		$this->tableName = $tableName;
	}

	function setConnection()
	{
		$this->db = new DatabaseConnector('localhost', '3306', 'itsokota2', 'password1234', 'sao_card_battle');
	}

	abstract function find_by_field($field, $value);
	abstract function delete();
	abstract function insert();
	abstract function update();
}