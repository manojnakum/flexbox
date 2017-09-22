$(document).ready(function() {	
    var flexDirection = $('input[name=flex-direction]:checked').val();
    var flexWrap = $('input[name=flex-wrap]:checked').val();
    var justifyContent = $('input[name=justify-content]:checked').val();
    var alignItems = $('input[name=align-items]:checked').val();
    var alignContent = $('input[name=align-content]:checked').val();

    $('.flex-container.flex-direction').css('flex-direction',flexDirection);
    $('.flex-container.flex-wrap').css('flex-wrap',flexWrap);
    $('.flex-container.justify-content').css('justify-content',justifyContent);
    $('.flex-container.align-items').css('align-items',alignItems);
    $('.flex-container.align-content').css('align-content',alignContent);

	$('input[name=flex-direction]').change(function() {
        $('.flex-container.flex-direction').css('flex-direction',this.value);
    });

	$('input[name=flex-wrap]').change(function() {
        $('.flex-container.flex-wrap').css('flex-wrap',this.value);
        if(this.value != 'nowrap') {
            $('.flex-container.flex-direction').css('flex-direction','row');
            $("input[name=flex-direction][value='row']").prop("checked",true);
        }
    });

	$('input[name=justify-content]').change(function() {
        $('.flex-container.justify-content').css('justify-content',this.value);
    });

	$('input[name=align-items]').change(function() {
        $('.flex-container.align-items').css('align-items',this.value);
    });

	$('input[name=align-content]').change(function() {
        $('.flex-container.align-content').css('align-content',this.value);
    });
    $('input[type=radio]').change(function() {
        console.log($(this).attr('name'));
        if($(this).attr('name') == 'flex-wrap') {
            $('.flex-container').removeClass('minimal');
        } else if($(this).attr('name') == 'align-content') {
            $('.flex-container').removeClass('minimal');
            $('.flex-container.flex-wrap').css('flex-wrap','wrap');
            $("input[name=flex-wrap][value='wrap']").prop("checked",true);
        } else {
            $('.flex-container').addClass('minimal');            
        }
    });
});