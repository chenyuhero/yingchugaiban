[field:path runphp="yes"]
	$p = explode(',', @me);
	array_pop($p);
	$len = count($p);
	@me = $len;
	$a = '';
	for ($i=0; $i < @me; $i++) {
		$a .= $i;
	}
	
	@me = 1;
	[/field:path]