
   $(document).ready(function () {

	 $('#submit').click(function () { 
  			 $.ajax({
    				 url: '/formdata',   
     				type: 'POST',    
     				data:  $("#myForm").serialize(),  
     				success: function (response) {  
      						 console.log(response); 
    						 },
     				error: function () {
      						 console.log('error');
     						  }
         });
   })
   })
 