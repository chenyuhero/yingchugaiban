<?php
$z[0]=Array("field","",16,44);
$z[0][4]['name']="typeurl";
$z[1]=Array("field","",46,75);
$z[1][4]['name']="typename";
$z[2]=Array("sql","\r\n     <li> <a href='[field:typedir/]' target='_blank'>[field:typename/]</a></li>\r\n    ",92,272);
$z[2][4]['sql']="Select * from #@__arctype where reid=~id~ ORDER BY id limit 0,200";

?>