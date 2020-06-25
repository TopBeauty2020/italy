$(function () {
    var country;
    if (country == 'IT') {
        it_selected = 'selected="selected"';
    } else {
        it_selected = 'selected="selected"';
    }
    selects = $("select[name='country']");
    selects.append('<option value="IT">Italia</option>');
    var change = 0,
        updatePrices = function (item) {
            change = 1;
            $(item.children).each(function () {
                if (this.selected) sel = $(this).val();
            });
            if (typeof sel === 'undefined') {
                sel = 'IT';
            }
            if (sel == 'IT') {
                $('.old_price_val').html('78');
                $('.old_price_cur').html('EUR');
                $('.old_price_sig').html('EUR');
                $('.new_price_val').html('39');
                $('.new_price_cur').html('EUR');
                $('.new_price_sig').html('EUR');
                $('select').val(sel).trigger('change');
                inESializeMask('+(3\\9)9{6,11}')
            }
            change = 0;
        };
    $("select").change(function () {
        if (change == 0) updatePrices(this);
    }).change();
    function inESializeMask (mask) {
        $('[name=phone]').inputmask(mask);
    }
});
