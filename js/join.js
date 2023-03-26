$(function() {
    //checkbox 전체선택 클릭
    $('#checkbox .join_form_all').click(function() {
        if($('#all_cb').is(':checked')){
            $('.join_form_cb input').prop('checked', true);
        } else{
            $('.join_form_cb input').prop('checked', false);
        }
    });

    //선택 체크에 따른 전체선택 여부
    $('.join_form_etc').click(function() {
        let total = $('input.join_form_input_cb').length;
        let checked = $('input.join_form_input_cb:checked').length;
        
        if(total != checked) {
            $('#all_cb').prop("checked", false);
        } else {
            $('#all_cb').prop("checked", true); 
        }
    });

    //비밀번호와 비밀번호 확인 동일여부 체크
    $('#pw').keyup(function(){
        $('#pw_notice').html('<br>');
      });
  
      $('#pw_check').keyup(function(){
  
          if($('#pw').val() != $('#pw_check').val()){
            $('#pw_notice').html('비밀번호 일치하지 않음<br>');
            $('#pw_notice').attr('color', '#f82a2aa3');
          } else{
            $('#pw_notice').html('비밀번호 일치함<br>');
            $('#pw_notice').attr('color', '#199894b3');
          }
  
      });

});