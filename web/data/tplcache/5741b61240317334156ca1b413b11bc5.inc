[field:path runphp="yes"]
	$p = explode(',', @me);
	array_pop($p);
	$len = count($p);
	@me = '<li>
            <img src="/'.$p[0].'" alt="" style="width:230px;height:100px;">
        </li>';
	
	[/field:path]