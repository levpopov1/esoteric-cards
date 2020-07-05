// $(function () {
//     $('[data-toggle="tooltip"]').tooltip();


//     $('#user-icon').click(function(e){
//         $('.userPanel').toggle();
//     });

//     // ---------------- Login page stuff -----------------
//     // these control the gradient animation on the login page
//     // remove these if using the CSS Animation Keyframes
//     $('#authScreen #login-tab').click(function(){
//         $('#authScreen').css('background-position', '0% 50%');
//     });
//     $('#authScreen #register-tab').click(function(){
//         $('#authScreen').css('background-position', '100% 50%');
//     });


//     // client-side input validation
//     $("#authScreen input[type='text']").change(function() {
//         // check for epcial characters and flash a warning message if any exist

//     });

//     // automatically generate username from firstname and surname fields
//     $('#authScreen #register-firstname').change(function() {
//         $('#authScreen #register-username').val($(this).val());
//     });
//     $('#authScreen #register-lastname').change(function() {
//         $('#authScreen #register-username').val($('#authScreen #register-username').val() + '.' + $(this).val());
//     });


// });


// $('.dropdown-menu').on("click.bs.dropdown", function (e) {
//     e.stopPropagation();
//     e.preventDefault();
// });