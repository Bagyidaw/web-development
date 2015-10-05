<?php

class SimpleClass
{
	public $var = 'a default value';
	
	public function displayVar() {
		echo $this->var;
	}
 
}

$instance = new SimpleClass();

$assigned = $instance;
$reference= & $instance;

$instance->var = '$assigned will have this value';
$instance = null;

var_dump($instance);
var_dump($reference);
var_dump($assigned);

?>
