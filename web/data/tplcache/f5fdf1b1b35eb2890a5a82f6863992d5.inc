[field:path runphp="yes"]
            $p = explode(',', @me); array_pop($p); $len = count($p); if($len>=1){ @me = '
            <li>
                <img src="/zkadmin/'.$p[0].'">
            </li>
            <li>
                <img src="/zkadmin/'.$p[1].'">
            </li>
            <li>
                <img src="/zkadmin/'.$p[2].'">
            </li>
            <li>
                <img src="/zkadmin/'.$p[3].'">
            </li>
            <li>
                <img src="/zkadmin/'.$p[4].'">
            </li>
            '; } [/field:path]