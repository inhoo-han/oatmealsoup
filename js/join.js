$(function() {
    // checkbox 전체선택 클릭
    $('#checkbox .join_form_all').click(function() {
        if($('#all_cb').is(':checked')){
            $('.join_form_cb input').prop('checked', true);
        } else{
            $('.join_form_cb input').prop('checked', false);
        }
    });

    // 선택 체크에 따른 전체선택 여부
    $('.join_form_etc').click(function() {
        let total = $('input.join_form_input_cb').length;
        let checked = $('input.join_form_input_cb:checked').length;
        
        if(total != checked) {
            $('#all_cb').prop("checked", false);
        } else {
            $('#all_cb').prop("checked", true); 
        }
    });

    $()
});