<?php
$z[0]=Array("global","",96,122);
$z[0][4]['name']="cfg_webname";
$z[1]=Array("include","",509,544);
$z[1][4]['filename']="meta.htm";
$z[2]=Array("include","",569,604);
$z[2][4]['filename']="head.htm";
$z[3]=Array("sql","\r\n            [field:path runphp=\"yes\"]\r\n            \$p = explode(',', @me); array_pop(\$p); \$len = count(\$p); if(\$len>=1){ @me = '\r\n                <img src=\"/zkadmin/'.\$p[0].'\">\r\n                <img src=\"/zkadmin/'.\$p[1].'\">\r\n                <img src=\"/zkadmin/'.\$p[2].'\">\r\n            '; } [/field:path]\r\n            ",674,1058);
$z[3][4]['sql']="SELECT * FROM dede_banner WHERE id=1";
$z[4]=Array("include","",1092,1129);
$z[4][4]['filename']="footer.htm";
$z[5]=Array("global","",1243,1269);
$z[5][4]['name']="cfg_powerby";
$z[6]=Array("global","",1275,1299);
$z[6][4]['name']="cfg_beian";

?>