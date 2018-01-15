[field:path runphp="yes"]
	$p = explode(',', @me);
	array_pop($p);
	$len = count($p);
	<!-- @me = $len; -->
	$a = '';
	for ($z=0; $z < $len; $z++) {
		$a .= $z;
	}
	
	@me = $a;
	[/field:path]