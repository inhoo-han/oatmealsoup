$(function() {

    /* colorTest를 위한 공간 */
    let pSW = false;
    $('#test .title').click(function() {
        pSW = !pSW;
        if(pSW) {
            $('#test>div').show('slide', 1000);
        } else {
            $('#test>div').hide('slide', 1000);
        }
    });


    $('#sampleZone').find('img').click(function() {
        let sampleSRC = $(this).attr('src');
        // alert(sampleSRC);
        $('#contents').find('img').attr('src', sampleSRC);
    });


    /* 기능 테스트를 위한 공간 */
    $('#menu .menu01').click(function() {
        alert('로그인하지 않으시면 게임이 저장되지 않습니다.\n그대로 진행하시겠습니까?');
    })
    $('#login .button').click(function() {
        alert('로그인창으로 연결됩니다.\n로그인후에는 마이페이지로 변경됩니다.');
    })
    $('#container .teamName').click(function() {
        alert('About Us로 넘어갑니다. ');
    })
});