[field:path runphp="yes"]
	$p = explode(',', @me);
	array_pop($p);
	$len = count($p);
	@me = '';
	for ($i=0; $i < $len; $i++) {
		@me .= '<li>
	            <img src="'.$p[$i].'" alt="" style="width:230px;height:100px;">
	        </li>';
	}
	
	[/field:path]