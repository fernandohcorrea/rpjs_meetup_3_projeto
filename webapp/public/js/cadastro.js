$(function() {

    let cadastro = {

        btnSend: null,

        onReady : function()
        {
            let scope = this;

            scope.btnSend = $('#btnSendId');
            scope.btnSend.on('click', scope.sendData);

            $("#formCadId").submit(function(e){
                return false;
            });

        },

        sendData : function()
        {

            let data = {
                email : $('#inputEmailId').val(),
                name: $('#inputNameId').val(),
            };

            $.ajax({
                url : `${apiUrl}/users`,
                method: 'POST',
                data : data,
                success : function(a,b,c){
                    $('#modalCadId').modal('toggle');
                },
                error : function(a,b,c){
                    console.error(a,b,c);
                },
                complete: function(){
                    $('#inputEmailId').val('');
                    $('#inputNameId').val('');
                }
            })
        }

    }

    cadastro.onReady();
});