// <script type="text/javascript">
$(document).ready(function () {

    $('#myform1').validate({ // initialize the plugin
        rules: {
            field21: {
                required: true,
                minlength: 5
            },
            field22: {
                required: true,
                maxlength: 10
            },
            field23: {
                required: true,                
                minlength: 5
            },
            field24: {
                required: true,
                minlength: 5
            },
            field25: {
                required: true,
                minlength: 5
            },
             field26: {
                required: true,
                minlength: 5
            },
             field27: {
                required: true,
                minlength: 5
            },
             field28: {
                required: true,
                minlength: 5
            },
             field29: {
                required: true,
                minlength: 5
            },
             field30: {
                required: true,
                minlength: 5
            },
             field31: {
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