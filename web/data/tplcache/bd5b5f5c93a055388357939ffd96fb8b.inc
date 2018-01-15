[field:path runphp="yes"]
	$p = explode(',', @me);
	array_pop($p);
	$len = count($p);
	
	for ($i=0; $i < $len; $i++) {
		@me .= ".$i.";
	}
	
	[/field:path]