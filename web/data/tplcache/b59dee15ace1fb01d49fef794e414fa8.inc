<div class="des" style="text-align: left;border: 1px solid #6D3D1F;
                width: 938px;height:auto;
                line-height: 30px;
                overflow: hidden;
                margin:0 auto ">
                    <div class="right" id="div_all[field:id/]">
                    	<div class="title">
                            [field:fulltitle/]<!-- 招聘标题-->
                    	</div>
                        <script>
                            document.getElementById('div_all[field:id/]').onclick = function(){
                                if(document.getElementById('[field:id/]').style.display == 'none'){
                                    document.getElementById('[field:id/]').style.display = 'block';
                                    document.getElementById('[field:id/]').style.display = 'none';
                                    document.getElementById('[field:id/]').style.display = 'none';
                                    document.getElementById('span_[field:id/]').innerText = '<<'
                                } else if(document.getElementById('[field:id/]').style.display == 'block'){
                                    document.getElementById('[field:id/]').style.display = 'none';
                                    document.getElementById('span_[field:id/]').innerText = '>>'
                                }
                            };
                        </script>
                        <div id="[field:id/]" style="display: none">
                            [field:body/]
                        </div>
                        <span id="span_[field:id/]" style="margin-left: 95%;">>></span>
                    </div>
		        </div>
			      <div class="mainblank20"></div>