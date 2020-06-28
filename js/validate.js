// <script type="text/javascript">
$(document).ready(function () {

    $('#myform').validate({ // initialize the plugin
        rules: {
            field1: {
                required: true,
                minlength: 5
            },
            field2: {
                required: true,
                // minlength: 10,
                maxlength: 10
            },
            field3: {
                required: true,                
                minlength: true
            },
            field4: {
                required: true,
                minlength: 5
            },
            field5: {
                required: true,
                minlength: 5
            },
             field6: {
                required: true,
                minlength: 5
            },
             field7: {
                required: true,
                minlength: 5
            },
             field8: {
                required: true,
                minlength: 5
            },
             field9: {
                required: true,
                minlength: 5
            },
             field10: {
                required: true,
                minlength: 5
            },
             field11: {
                required: true,
                minlength: 5
            }
        },
        submitHandler: function (form) { // for demo
            alert('valid form submitted'); // for demo
            return false; // for demo
        }
    });

});
// </script>