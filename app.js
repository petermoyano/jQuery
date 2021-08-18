
$('#movies').submit(function(event){
    event.preventDefault();
    let movie = event.currentTarget[0].value;
    let rating = event.currentTarget[1].value;
    newLi = document.createElement('LI');
    $('#list').append(newLi);
    newLi.append(`movie = ${movie}, rating = ${rating}`);
});