function validate() {
    let usernameRegex = new RegExp('\\b[a-zA-Z0-9]{3,20}\\b');
    let emailRegex = new RegExp('^[\\w]+@[\\w.]+[\\w.]*$');
    let passwordRegex = new RegExp('\\b[\\w]{5,15}\\b');
    let usernameForm = $('#username');

    let emailForm = $('#email');
    let passwordForm = $('#password');
    let confirmPasswordForm = $('#confirm-password');
    let companyCheckbox = $('#company');
    let companyInfoForm = $('#companyInfo');
    let submitButton = $('#submit');
    let companyNumberForm = $('#companyNumber');
    let validMark = $('#valid');
    $(submitButton).on('click', formValidation);
    $(companyCheckbox).on('change', companyDetails);

    function companyDetails() {
        if ($(companyCheckbox).prop('checked')) {
            $(companyInfoForm).css('display', '');
        }
        else {
            $(companyInfoForm).css('display', 'none');
        }
    }


    function formValidation(e) {
        e.preventDefault();
        let isValid = true;


        if (usernameRegex.test(usernameForm.val())) {
            $(usernameForm).css('border', 'none');
        }
        else {
            isValid = false;
            $(usernameForm).css('border-color', 'red');
        }


        if (emailRegex.test(emailForm.val())) {
            $(emailForm).css('border', 'none');
        }
        else {
            isValid = false;
            $(emailForm).css('border-color', 'red');
        }


        if (passwordRegex.test(passwordForm.val())) {
            $(passwordForm).css('border', 'none');
            if(confirmPasswordForm.val() === passwordForm.val()){
                            $(confirmPasswordForm).css('border', 'none');
                        }
                        else{
                            isValid = false;
                            $(confirmPasswordForm).css('border-color', 'red');
                $(passwordForm).css('border-color', 'red');
                        }

        }
        else {
            isValid = false;
            $(passwordForm).css('border-color', 'red');
            $(confirmPasswordForm).css('border-color', 'red');
        }


        if ($(companyCheckbox).prop('checked')) {
            let companyNumber = Number(companyNumberForm.val());
            console.log(companyNumber);
            if (companyNumber >= 1000 && companyNumber <= 9999) {
                $(companyNumberForm).css('border', 'none');
            }
            else {
                $(companyNumberForm).css('border-color', 'red');
                isValid = false;
            }
        }

        if (isValid) {
            $(validMark).css('display', '');
        }
        else{
            $(validMark).css('display', 'none');
        }
    }

}

