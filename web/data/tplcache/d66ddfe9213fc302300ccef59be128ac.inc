<li>
                                <div class="bg-pic2"><img src="[field:small/]" alt="[field:fulltitle/]"></div>
                                <div class="bg-pic">
                                    <a href="[field:arcurl/]"><img src="[field:litpic/]" alt="[field:fulltitle/]"></a>
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
                            {/dede:arclist}
                        </ul>
                    </div>
                    <div class="right">
                        <ul class="news-list">
                            {dede:list orderby='hot' pagesize='3'}
                            <li>
                                <a href="[field:arcurl/]" class="list-a">
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
                                            <div class="more">more>></div>
                                        </div>
                                        <div class="line"></div>
                                        <div class="des">[field:description/]</div>
                                    </div>
                                </a>
                            </li>