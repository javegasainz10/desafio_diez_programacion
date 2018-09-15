var checkElement = $('#mail');

checkElement.blur(check);

function check() {
    if (checkElement.val() === '' || null || undefined || checkElement.val().indexOf('@') < 1 || checkElement.val().indexOf('.') < 2) {
        checkElement.removeClass('is-valid');
        checkElement.addClass('is-invalid');
    } else {
        checkElement.removeClass('is-invalid');
        checkElement.addClass('is-valid');
    }
};