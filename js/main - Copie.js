var citations = ["Blablabla","hhhhh","hhhhdhdhhdgdffsfs","dggshsjjqhq"];
var auteur = "Auteur Guy";
var aleatoire = null;

$('document').ready(function() {
    
    $('.auteur').html(auteur);
    
    aleatoire = Math.floor(Math.random() * citations.length);
    $('.citation').html(citations[aleatoire]);
    
    $('#generer').click(function(){
        // action du bouton générer
        aleatoire = Math.floor(Math.random() * citations.length);
        $('.citation').html(citations[aleatoire]);
    });
    
        $('#twitter').click(function(){
        // action du bouton twitter
        window.open('https://twitter.com/intent/tweet?text=' + citations[aleatoire] + " - " + auteur, 'twitter', 'height=scrollbars=0, menubar=0');
    });
    
});
