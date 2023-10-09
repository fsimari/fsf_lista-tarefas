

$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();
        const nomeTarefa = $('#inserir-tarefa').val();
        const novoItem = $('<li></li>').text(nomeTarefa); 
        $('#lista-tarefas').append(novoItem);
        $('#inserir-tarefa').val('');
    });

    $('ul').on('click', 'li', function() {
        $(this).toggleClass('riscado'); 
    });

    
});

