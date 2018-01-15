[field:path runphp="yes"]
	$p = explode(',', @me);
	array_pop($p);
	$len = count($p);
	@me = $len;
	$a = '';
	for ($i=0; $i < 5; $i++) {
		$a .= $i;
	}
	
	@me = $a;
	[/field:path]