/*

Hurdle Version: 0.1.0
By Konstantino Sparakis
Copyright (c) 2014

Hurdle is 100% free and open-source.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the 'Software'), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
$(document).on('change', '.btn-file :file', function() {
    var input = $(this),
        numFiles = input.get(0).files ? input.get(0).files.length : 1,
        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.trigger('fileselect', [numFiles, label]);
});

var fileContent = "";
var inputCount = 0;
var isChecked = false;
var tmppath; 
$(document).ready(function() {
  
$('#actions2').hide();
$('#titleForm').hide();

	
	$('#fileGetter').change( function(event) {
      var getter = URL.createObjectURL(event.target.files[0]);
       
	   tmppath = getter;
	   
	   var template = "";

 
	   
	  
     });



    $('.btn-file :file').on('fileselect', function(event, numFiles, label) {
		
       // console.log(numFiles);
        //console.log(label);
		inputCount=0;
		clearForm();
		$('#remoteValue').val('');
		
		 $.ajax({
    url: tmppath,
	
    type: 'get',
    success: function(html) {
		fileContent= "";
        fileContent = String(html);
        fileContent.concat(fileContent);
        //console.log(fileContent); // the change!
		$('#remoteValue').val('');
		scanForFilePath(fileContent);
		scanFileContent(fileContent);
		
    } });
    });

      
	


  
      var numberOfpages = 2;  //Change to number of pages you have

   //This hides all pages except the start at page
		var startAtPage = 0;  //Change to page # you want to start at || DEFAULT = 0;
		
		for(var i=0;i < numberOfpages+1;i++)
			  {
				    var fielder = "#page"+i;
				  if(i == startAtPage)
				  {
					//do nothing
					$(fielder).toggleClass('pages start-page');;
				  }
				  else{

					  $(fielder).hide(); 
				  }
			  }


    //Thanks goes out to TrazeK on stack overflow for assistance on this
    $('.forward').click(function() {
        $this = $(this);
        flipPage($this.data('current'), $this.data('next'));
    });
    $('.back').click(function() {
        $this = $(this);
        flipBack($this.data('current'), $this.data('back'));
    });


	
});  ////////
//////
////
///// ENDD OF DOCUMENT.onReady



//Slides  to the left for going to next page
     function flipPage(fromPage,toPage)
     {
        var fromPage = "#page"+ fromPage;
        var toPage = "#page"+ toPage;

        $(toPage).css("left","20%");
                                           // v  Changes animaton duration
        $(fromPage).animate({left: '-150%'}, 500, function() {
                $(fromPage).hide();   
                $(toPage).fadeIn(200).show();
        });

    }

     //slides to the right, for going back a page
    function flipBack(fromPage,toPage)
    {
        var fromPage = "#page"+ fromPage;
        var toPage = "#page"+ toPage;

       
		$(toPage).css("left","20%");
        $(fromPage).animate({left: '150%'}, 500, function() {
            $(fromPage).hide();   
            $(toPage).fadeIn(200).show();
        });
    }
	
function createNewItem()
{
	$('#welcome').hide();
	$('#titleForm').show();
	if(inputCount%2==0)
{
	var create = " <div id='inputs"+inputCount+"' style=' background-color:#f5f7fa;margin-top:0px;width:500px;margin-left:auto;margin-right:auto;padding-bottom:5px;padding-left:8px;padding-top:1px'><h5> Input "+inputCount+":<a class='btn btn-danger'href='#' style='width:25px;height:25px;float:right;margin-right:5px' onClick='deleteItem("+inputCount+");'>x</a></h5> <div id='remote'class='input-group' style='width:150px;float:none;z-index:0;'><span class='input-group-btn'><span class='btn btn-primary btn-file' style='width:60px'>Value:</span></span><input  style='width:150px;display:inline-block;margin-right:20px' id='iv"+inputCount+"' type='text' class='form-control'><span class='input-group-btn'><span class='btn btn-primary btn-file' style='width:60px'>Key:</span></span><input  style='width:150px;display:inline-block' id='in"+inputCount+"' type='text' class='form-control'></div> <!-- input-group --></div></div>";
	
}else{
	var create = " <div id='inputs"+inputCount+"' style=' background-color:#e6e9ed;margin-top:0px;width:500px;margin-left:auto;margin-right:auto;padding-bottom:5px;padding-left:8px;padding-top:1px'><h5> Input "+inputCount+":<a class='btn btn-danger'href='#' style='width:25px;height:25px;float:right;margin-right:5px' onClick='deleteItem("+inputCount+");'>x</a></h5> <div id='remote'class='input-group' style='width:150px;float:none;z-index:0;'><span class='input-group-btn'><span class='btn btn-primary btn-file' style='width:60px'>Value:</span></span><input  style='width:150px;display:inline-block;margin-right:20px' id='iv"+inputCount+"' type='text' class='form-control'><span class='input-group-btn'><span class='btn btn-primary btn-file' style='width:60px'>Key:</span></span><input  style='width:150px;display:inline-block' id='in"+inputCount+"' type='text' class='form-control'></div> <!-- input-group --></div></div>";
}
	$( "#tabler" ).append( create );
	
	inputCount ++;
	//Adds input to tablesho
	
	
}


function clearForm()
{
	
	$('#welcome').show();
	$('#fileGetter').val('');
	$('#titleForm').hide();
    $('#tabler').remove();
	$('#page0').append(" <div id='tabler'></div>");
	inputCount =0;
}

function TestSubmit()
{
	var tester = $('#remoteValue').val();
	if(tester == "")
	{
		console.log("ERROR");
		showError("Please type add file location");
	}
	else
	{
		
		createForm();
		
		$("#submit-Form").ajaxSubmit({success:showResults, fail:showFail});
	}
	
	
	return false;
}

function createForm()
{
	//get location to submit
	var action;
	if(isChecked == true) // local
	{
       
  		action = tmppath;
		//console.log(tmppath);
	}
	else{ //remote
	    
	    var header =$( "#remoteType option:selected" ).text();
		if(header=="localhost/")
		{
			header="http://"+header;
		}
		//console.log(header);
		
		action = header + $('#remoteValue').val();
			//console.log(action);
	}
  		$("#submit-Form").replaceWith(" <form id='submit-Form' action='"+action+"' method='post' ></form>");
		
	//loop through all divs to get value and add them to form as hidden
	
	for(i=0;i<inputCount;i++)
	{
		var create = " <input type='hidden' name='"+$('#in'+i).val+"' value='"+$('#iv'+i).val+"'>";
		$( "#submit-Form" ).append( create );
	}
	
}

function showResults(data)
{
	flipPage(0,1);
		$('#actions').hide();
		$('#actions2').show();
		var k = data.match(/<br>/g);  

         
		 for(var i=0;i<k;i++)
		 {
			data = data.replace(/<br>/, "<p>");
		 }
	$("#textArea").replaceWith( "<div id='#textArea' class='textArea'>	"+data+" </div>");
}


function showFail(data)
{
	showError("Error in Ajax submit. Check file location url for mispellings.");
}

function showError()
{
}

function deleteItem(itemNum)
{
	$('#in'+itemNum).val('');
	$('#iv'+itemNum).val('');

}

function newForm()
{
	clearForm();
    $('#actions').show();
	$('#actions2').hide();
	$('#remoteValue').val('');
 	flipBack(1,0);
}

function editForm()
{ 
	    $('#actions').show();
		$('#actions2').hide();
		flipBack(1,0);
}

function reSubmit()
{
		$("#submit-Form").ajaxSubmit({success:showResults, fail:showFail});
	return false;
}

var posts=[];
var enumChecked = true;
function scanFileContent(data)
{
	if(enumChecked == false)
	{
		var n = data.search(/\$_POST\[/);
		if(n > -1)
		{
			var k = data.length;
			var res = data.substring(n+8, k);
			n = res.search(/\];/);
			posts.push(res.substring(0,n));
			var newData = res.substring(n+2,k);
			scanFileContent(newData);
		}
		else
		{
			addInputsFromArray(posts);

		}
	}
	else
	{
		var n = data.search(/\$_POST\[/);
		if(n > -1)
		{
			var k = data.length;
			var res = data.substring(n+7, k);
			n = res.search(/\];/);
			posts.push(res.substring(0,n));
			var newData = res.substring(n+2,k);
			scanFileContent(newData);
		}
		else
		{
			addInputsFromArray(posts);

		}
	}
	
}

function addInputsFromArray()
{
	
	var create;
	$('#welcome').hide();
	$('#titleForm').show();
	for(var i=0;i< posts.length;i++){
	//console.log(i%2);
		if(i%2 == 0)
		{
			
			
			create = " <div id='inputs"+i+"' style=' background-color:#f5f7fa;margin-top:0px;width:500px;margin-left:auto;margin-right:auto;padding-bottom:5px;padding-left:8px;padding-top:1px'><h5> Input "+i+":<a class='btn btn-danger'href='#' style='width:25px;height:25px;float:right;margin-right:5px' onClick='deleteItem("+i+");'>x</a></h5> <div id='remote'class='input-group' style='width:150px;float:none;z-index:0;'><span class='input-group-btn'><span class='btn btn-primary btn-file' style='width:60px'>Value:</span></span><input  style='width:150px;display:inline-block;margin-right:20px' id='iv"+i+"' type='text' class='form-control'><span class='input-group-btn'><span class='btn btn-primary btn-file' style='width:60px'>Key:</span></span><input  style='width:150px;display:inline-block' id='in"+i+"' type='text'  value='"+posts[i]+"' class='form-control'></div> <!-- input-group --></div></div>";
			
		}else{
		
				create = " <div id='inputs"+i+"' style=' background-color:#e6e9ed;margin-top:0px;width:500px;margin-left:auto;margin-right:auto;padding-bottom:5px;padding-left:8px;padding-top:1px'><h5> Input "+i+":<a class='btn btn-danger'href='#' style='width:25px;height:25px;float:right;margin-right:5px' onClick='deleteItem("+i+");'>x</a></h5> <div id='remote'class='input-group' style='width:150px;float:none;z-index:0;'><span class='input-group-btn'><span class='btn btn-primary btn-file' style='width:60px'>Value:</span></span><input  style='width:150px;display:inline-block;margin-right:20px' id='iv"+i+"' type='text' class='form-control'><span class='input-group-btn'><span class='btn btn-primary btn-file' style='width:60px'>Key:</span></span><input  style='width:150px;display:inline-block' id='in"+i+"' type='text'  value='"+posts[i]+"' class='form-control'></div> <!-- input-group --></div></div>";
		}

		inputCount++;
		$( "#tabler" ).append( create );
   }
}

function scanForFilePath(data)
{
		var n = data.search(/hurdle:{/);
		var k = data.length;
		
		var newdata = data.substring(n+8, k);
	     var l = newdata.search(/\}/);
		 newdata = newdata.substring(0,l);
	     if( newdata.search(/localhost/)> -1)
		 {
			 $('#remoteType').val("localhost");
			 newdata= newdata.substring(10,newdata.length);
			  $('#remoteValue').val(newdata);
		 }
		 else if( newdata.search(/http:\/\//)> -1)
		 {
			  $('#remoteType').val("http");
			  	 newdata= newdata.substring(7,newdata.length);
			  $('#remoteValue').val(newdata);
		 }
		 else if( newdata.search(/https\:\/\//)> -1)
		 {
			  $('#remoteType').val("https");
			  	 newdata= newdata.substring(8,newdata.length);
			  $('#remoteValue').val(newdata);
		 }
		 else
		 {
			 //error using unsupported url
		 }
		 
}


