[field:path runphp="yes"]
            $p = explode(',', @me); array_pop($p); $len = count($p); if($len>=1){ @me = '
                <img src="/zkadmin/'.$p[0].'">
                <img src="/zkadmin/'.$p[1].'">
                <img src="/zkadmin/'.$p[2].'">
            '; } [/field:path]