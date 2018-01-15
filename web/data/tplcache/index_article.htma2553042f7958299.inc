<?php
$z[0]=Array("channel","\r\nwindow.location.href='[field:typelink /]';\r\n",66,160);
$z[0][4]['type']="son";
$z[0][4]['row']="1";
$z[1]=Array("php","\r\n　　\r\n　　echo '<li>\r\n            <img src=\"'.\$path[\$i].'\" alt=\"\" style=\"width:230px;height:100px;\">\r\n        </li>';\r\n array_pop(\$path);\r\n\$len = count(\$path);\r\n\$str = '';\r\n@me = \$str;\r\nfor (\$i=0; \$i < \$len; \$i++) {\r\n	@me .= '111';\r\n}\r\n　　",212,481);
$z[2]=Array("include","",485,553);
$z[2][4]['runphp']="yes";
$z[2][4]['source']="value";
$z[2][4]['filename']="filespath.php";
$z[3]=Array("sql","\r\n	[field:path runphp=\"yes\"]\r\n	\$p = explode(',', @me);\r\n	array_pop(\$p);\r\n	\$len = count(\$p);\r\n\r\n	@me = '<li>\r\n            <img src=\"/zkadmin/'.\$p[0].'\" alt=\"\" style=\"width:230px;height:100px;\">\r\n        </li>\r\n		<li>\r\n            <img src=\"/zkadmin/'.\$p[1].'\" alt=\"\" style=\"width:230px;height:100px;\">\r\n        </li>\r\n        <li>\r\n            <img src=\"/zkadmin/'.\$p[2].'\" alt=\"\" style=\"width:230px;height:100px;\">\r\n        </li>\r\n        <li>\r\n            <img src=\"/zkadmin/'.\$p[3].'\" alt=\"\" style=\"width:230px;height:100px;\">\r\n        </li>\r\n        <li>\r\n            <img src=\"/zkadmin/'.\$p[4].'\" alt=\"\" style=\"width:230px;height:100px;\">\r\n        </li>\r\n        ';\r\n	\r\n	[/field:path]\r\n",563,1317);
$z[3][4]['sql']="SELECT * FROM dede_banner WHERE id=1";

?>