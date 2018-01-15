<li>
                                <div class="bg-pic2"><img src="[field:small/]" alt="[field:fulltitle/]"></div>
                                <div class="bg-pic">
                                    <a href="[field:arcurl/]" [field:array runphp='yes']  
if(@me['flag']=='c,p,j'){  
@me=" class=\"theme-login\">";  
}  
else {  
@me=" class=\"list-a\">";  
}  
[/field:array]  <img src="[field:litpic/]" alt="[field:fulltitle/]"></a>
                                </div>
                                <div class="des">
                                    <div class="table">
                                        <div class="table-cell">
                                            <div class="num">[field:global.autoindex/]</div>
                                            <div class="day">[field:pubdate function='strftime("%d",@me)'/]</div>
                                            <div class="date">[field:pubdate function='strftime("%Y-%m",@me)'/]</div>
                                        </div>
                                    </div>
                                </div>
                            </li>