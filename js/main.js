var citations = ["Exige beaucoup de toi-même et attends peu des autres. Ainsi beaucoup d'ennuis te seront épargnés.","Dans la vie on ne fait pas ce que l'on veut mais on est responsable de ce que l'on est.","La vie est un mystère qu'il faut vivre, et non un problème à résoudre.","On passe une moitié de sa vie à attendre ceux qu'on aimera et l'autre moitié à quitter ceux qu'on aime.","La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.","Choisissez un travail que vous aimez et vous n'aurez pas à travailler un seul jour de votre vie.","L'homme veut être le premier amour de la femme, alors que la femme veut être le dernier amour de l'homme.","La différence qu'il y a entre les oiseaux et les hommes politiques, c'est que de temps en temps les oiseaux s'arrêtent de voler !","L'honnêteté, la sincérité, la simplicité, l'humilité, la générosité, l'absence de vanité, la capacité à servir les autres - qualités à la portée de toutes les âmes- sont les véritables fondations de notre vie spirituelle.","Un seul être vous manque et tout est dépeuplé."];
var auteur = ["Confucius","Jean-Paul Sartre", "Gandhi", "Victor Hugo","Einstein","Confucius","Oscar Wild","Coluche","Nelson Mandela","Lamartine"];
var aleatoire = null;

$('document').ready(function() {
    
    
    
    aleatoire = Math.floor(Math.random() * citations.length);
    $('.citation').html(citations[aleatoire]);
    $('.auteur').html(auteur[aleatoire]);
    
    $('#generer').click(function(){
        // action du bouton générer
        aleatoire = Math.floor(Math.random() * citations.length);
        $('.citation').html(citations[aleatoire]);
        $('.auteur').html(auteur[aleatoire]);
    });
    
        $('#twitter').click(function(){
        // action du bouton twitter
        window.open('https://twitter.com/intent/tweet?text=' + citations[aleatoire] + " - " + auteur[aleatoire], 'twitter', 'height=scrollbars=0, menubar=0');
    });
    
});
