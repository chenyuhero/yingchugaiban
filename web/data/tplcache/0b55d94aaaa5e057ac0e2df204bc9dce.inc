<li>
                                <a href="[field:arcurl/]"  [field:array runphp='yes']  
if(@me['flag']=='c,p'){  
@me=" class=\"theme-login\">";  
}  
else {  
@me=" class=\"list-a\">";  
}  
[/field:array]  
                                    <div class="list-left">
                                        <div class="table">
                                            <div class="table-cell">
                                                <div class="day">[field:pubdate function='strftime("%d",@me)'/]</div>
                                                <div class="date">[field:pubdate function='strftime("%Y-%m",@me)'/]</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="list-right">
                                        <div class="title">
                                            <div class="title-a">[field:fulltitle/]</div>
                                            <div class="more"></div>
                                        </div>
                                        <div class="line"></div>
                                        <div class="des">[field:description/]</div>
                                    </div>
                                </a>
                            </li>