[field:path runphp="yes"]
	$p = explode(',', @me);
	array_pop($p);
	$len = count($p);
	if($len>=1){

		@me = '<li>
	            <img src="/zkadmin/'.$p[0].'" alt="" style="width:230px;height:100px;">
	        </li>
			<li>
	            <img src="/zkadmin/'.$p[1].'" alt="" style="width:230px;height:100px;">
	        </li>
	        <li>
	            <img src="/zkadmin/'.$p[2].'" alt="" style="width:230px;height:100px;">
	        </li>
	        <li>
	            <img src="/zkadmin/'.$p[3].'" alt="" style="width:230px;height:100px;">
	        </li>
	        <li>
	            <img src="/zkadmin/'.$p[4].'" alt="" style="width:230px;height:100px;">
	        </li>
	        ';
	    }
	
	[/field:path]