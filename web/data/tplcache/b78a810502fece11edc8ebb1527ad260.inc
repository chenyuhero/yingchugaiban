[field:path runphp="yes"]
	$p = explode(',', @me);
	array_pop($p);
	$len = count($p);
	@me = $p[0];
	
	[/field:path]