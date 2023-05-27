 $(document).ready(function(){
   var $valid= $("#envoyer");
   $valid.click(function(e){
      e.preventDefault(); 
      
      if($("#prenom").val() == ""|| $("#nom").val() == "" || $("#pseudo").val() == "" || $("#tel").val() == "" || $("#mdp").val() ==  ""|| $("#confirmation").val() ==  ""|| $("#mail").val() == ""){
         $("#erreur").css('display', 'block');
         $("#prenom").css('border-color','red');
        
         $("#nom").css('border-color','red');
         
         $("#pseudo").css('border-color','red');
        
         $("#tel").css('border-color','red');
         
         $("#mdp").css('border-color','red');
        
         $("#confirmation").css('border-color','red');
      
         $("#mail").css('border-color','red');
        
      }
      else{
         $("#erreur").css('display', 'none');
         $("#bravo").css('display', 'block');
           
      }

   });

   $("#prenom").keyup(function(){
      
       if ($("#prenom").val()!= $("#prenom").val().match(/[a-zA-Z]+$/)){
         $(this).css('border-color' ,'red');
        $(this).next().css("display", "block");
      }
      else{
         $(this).css('border-color' ,'green' );
         $(this).next().css("display", "none");
        
      }
   
   });

   $("#nom").keyup(function(){
      
      if ($("#nom").val()!=$("#nom").val().match(/[a-zA-Z]+$/)){
         $(this).css('border-color' ,'red');
       $(this).next().css("display", "block");
     }
     else{
      
       $(this).css('border-color' ,'green' );
        $(this).next().css("display", "none");
     }
  
  });
  $("#pseudo").keyup(function(){
      
      if ($("#pseudo").val().match(/^[a-z0-9_-]{8,16}$/)){
        $(this).css('border-color' ,'green' );
        $(this).next().css("display", "none");
      }
      else{
        $(this).css('border-color' ,'red');
        $(this).next().css("display", "block");

      }

   });

   $("#mdp").keyup(function(){
      
      if ( $("#mdp").val().match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).{8,}$/)){
         $(this).css('border-color' ,'green');
         $(this).next().css("display", "none");
      }else{
         $(this).css('border-color' ,'red');
        $(this).next().css("display", "block");
      }

   });
  
  
   $("#confirmation").keyup(function(){
      if($(this).val() != $("#mdp").val()){ // si la confirmation est différente du mot de passe
          
          $(this).css('border-color' ,'red');
          $(this).next().css("display", "block");
        
      }
      else{
         $(this).css('border-color' ,'red');
         $(this).next().css("display", "block");
      }
  });
  
  $("#mail").keyup(function(){
      if($("#mail").val().match(/^[a-z0-9._-]+@[a-z0-9._-]{2,}/)){ // si la confirmation est différente du mot de passe
       
         $(this).css('border-color' ,'green');
         $(this).next().css("display", "none");
     
      }
       else{
         $(this).css('border-color' ,'red');
         $(this).next().css("display", "block");
      }
   });
   
   $("#tel").keyup(function(){
         if($("#tel").val().match(/^(([+][(]([0-9]{2,3})[)])|0)[0-9]{9,10}$/)){     
         $(this).css('border-color' ,'green');
         $(this).next().css("display", "none");
      }else{
         $(this).css('border-color' ,'red');
         $(this).next().css("display", "block");
      }
      
   });
});
