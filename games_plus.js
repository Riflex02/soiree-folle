// Contenu supplémentaire (ton plus adulte) pour les jeux existants
(function(){
function add(arr,items){items.forEach(function(x){if(arr.indexOf(x)<0)arr.push(x)})}
var G1=window.GAMES,G2=window.GAMES2,G3=window.GAMES3;
add(G1.imp[1],["Vin rouge|Vin rosé","Whisky|Rhum","Apéro|Brunch","Loyer|Crédit immobilier","CDI|CDD","Patron|Manager","Télétravail|Bureau","Belle-mère|Beau-père",
"Divorce|Séparation","Boîte de nuit|Bar","Mojito|Spritz","Chômage|Arrêt maladie","Afterwork|Séminaire","Las Vegas|Ibiza","Cocktail|Shot","Ikea|Leroy Merlin","Gueule de bois|Insomnie","Mariage|Pacs"]);
add(G1.imp[3],["Sextoy|Menottes","Suçon|Bisou dans le cou","Coup d'un soir|Sex-friend","Nuisette|Porte-jarretelles","Club libertin|Boîte de nuit","Love hotel|Motel","Fantasme|Fétiche","Body shot|Shot","Préliminaires|Massage","Nude|Photo en maillot"]);
add(G1.bomb[1],["Un truc qu'on dit à son boss","Une excuse pour ne pas aller au boulot","Une marque d'alcool","Un truc qu'on trouve dans une boîte de nuit","Une raison de rompre",
"Un mot pour dire « bourré »","Un truc qu'on fait le lendemain de soirée","Un métier qui paie bien","Un truc qui coûte trop cher","Une destination de vacances",
"Un truc qu'on oublie toujours en voyage","Une série Netflix","Un truc qu'on dit en réunion","Un jeu de bar","Une excuse pour partir d'une soirée","Un truc qu'on ne dit pas à sa belle-mère"]);
add(G1.bomb[3],["Un endroit pour faire l'amour","Un truc qu'on dit au lit","Un surnom coquin","Une partie du corps sexy","Un accessoire pour une soirée coquine","Un uniforme qui fait fantasmer",
"Un truc qui tue l'ambiance au lit","Un mot pour dire « embrasser »","Une raison de ne pas rappeler après un rencard","Un endroit pour un rencard secret","Un truc à faire avec de la chantilly"]);
add(G1.mime[1],["Entretien d'embauche raté","Réunion Zoom qui bugue","Collègue relou","Lendemain de cuite","Barman","Videur de boîte","Rentrer en douce à 5 h du matin","Démission",
"Déménagement","Faire sa déclaration d'impôts","Enterrement de vie de garçon","Créneau raté","Mariage arrosé","Ouvrir une bouteille de champagne","Fin de soirée en boîte"]);
add(G1.mime[3],["Premier rendez-vous gênant","Préliminaires","Soutien-gorge qui résiste","Se faire surprendre au lit","Massage coquin","Speed dating","Strip-poker","Se rhabiller en vitesse","Séduction au bar","Réveil à côté d'un(e) inconnu(e)"]);
add(G2.quiz,[
"Combien de grammes d'alcool pur dans un verre standard en France ?|10 g|5 g|20 g|15 g",
"Quel est le taux d'alcool maximal au volant pour un conducteur confirmé en France ?|0,5 g/L de sang|0,2 g/L|0,8 g/L|1 g/L",
"De quel pays vient la tequila ?|Le Mexique|L'Espagne|Cuba|Le Pérou",
"Quel alcool est la base d'un mojito ?|Le rhum|La vodka|La tequila|Le gin",
"Quel cocktail associe Apérol, prosecco et eau gazeuse ?|Le spritz|Le bellini|Le mojito|La sangria",
"Le champagne doit être produit dans quelle région ?|La Champagne|La Bourgogne|L'Alsace|Le Bordelais",
"Quel cépage fait la réputation du Beaujolais ?|Le gamay|Le merlot|Le pinot noir|Le cabernet",
"Combien de bouteilles de 75 cl dans un magnum ?|2|1|3|4",
"Quelle bière est d'origine irlandaise ?|Guinness|Heineken|Leffe|Corona",
"Avec quoi fabrique-t-on la tequila ?|L'agave|La canne à sucre|Le raisin|L'orge",
"Combien de semaines de congés payés minimum par an en France ?|5 semaines|4 semaines|6 semaines|3 semaines",
"Quelle est la durée légale du travail par semaine en France ?|35 heures|39 heures|37 heures|40 heures",
"En quelle année les pièces et billets en euros sont-ils arrivés ?|2002|1999|2000|2004",
"Combien de régions en France métropolitaine depuis 2016 ?|13|22|18|15",
"Quelle est la capitale des Hauts-de-France ?|Lille|Amiens|Arras|Calais",
"Combien de joueurs par équipe sur un terrain de handball ?|7|6|5|8",
"Quel joueur a remporté le plus de Ballons d'or ?|Lionel Messi|Cristiano Ronaldo|Michel Platini|Johan Cruyff",
"Quel pays a gagné la Coupe du monde de foot 2022 ?|L'Argentine|La France|Le Brésil|La Croatie",
"Où se sont déroulés les Jeux olympiques d'été 2024 ?|Paris|Los Angeles|Tokyo|Londres",
"Quel réseau social appartient au groupe Meta ?|Instagram|TikTok|Snapchat|X (ex-Twitter)",
"Que signifie le premier « S » de « SMS » ?|Short|Simple|Speed|Secure",
"Quelle série suit la famille Gallagher à Chicago ?|Shameless|Breaking Bad|Les Soprano|This Is Us",
"Dans Breaking Bad, quel est le métier de Walter White au début ?|Prof de chimie|Pharmacien|Avocat|Policier",
"Quel acteur joue Iron Man dans les films Marvel ?|Robert Downey Jr.|Chris Evans|Chris Hemsworth|Mark Ruffalo",
"Quel est le vrai nom de Stromae ?|Paul Van Haver|Paul Pogba|Stéphane Maes|Paul Martin",
"Quel organe élimine l'essentiel de l'alcool du sang ?|Le foie|Les reins|L'estomac|Le pancréas",
"Combien de temps faut-il environ pour éliminer un verre standard d'alcool ?|1 h à 1 h 30|15 minutes|4 heures|30 minutes",
"Qui a écrit Les Fleurs du mal ?|Charles Baudelaire|Arthur Rimbaud|Paul Verlaine|Victor Hugo",
"Quelle boisson est servie dans une flûte ?|Le champagne|Le whisky|Le cognac|La bière"
]);
add(G2.par[1],["Qui ici gagne le mieux sa vie ?","Qui ici finira divorcé(e) ?","Qui ici est le plus hypocrite ?","Qui ici serait le pire patron ?","Qui ici a déjà trompé quelqu'un à ton avis ?",
"Qui ici boit le plus ?","Qui ici te doit encore de l'argent ?","Qui ici a le pire caractère en couple ?","Qui ici ne tiendrait pas une semaine sans ses parents ?","Qui ici parle le plus dans le dos des autres ?"]);
add(G2.par[3],["Qui ici a le plus beau fessier ?","Qui ici serait le meilleur coup à ton avis ?","Qui ici aimerais-tu voir en sous-vêtements ?","Avec qui ici ferais-tu un plan à trois ?",
"Qui ici a le plus de photos osées dans son téléphone ?","Qui ici est le plus pervers en secret ?","Qui ici a le plus de partenaires à son actif ?","Qui ici pourrait te faire craquer ce soir ?",
"Qui ici a la bouche la plus embrassable ?","Qui ici serait le plus endurant ?"]);
add(G3.tab,["Apéro|Boire|Chips|Soir|Copains","Patron|Chef|Travail|Boss|Bureau","Salaire|Argent|Mois|Payer|Travail","Divorce|Mariage|Séparer|Avocat|Ex",
"Tinder|Appli|Swipe|Match|Rencontre","Loyer|Payer|Appartement|Mois|Propriétaire","Impôts|Argent|État|Payer|Déclaration","Cocktail|Boire|Alcool|Bar|Verre",
"Videur|Boîte|Porte|Entrer|Costaud","Préservatif|Protection|Sexe|Capote|Pharmacie","Lingerie|Sous-vêtements|Dentelle|Sexy|Femme","Strip-tease|Enlever|Vêtements|Danser|Sexy",
"Rencard|Rendez-vous|Amour|Restaurant|Premier","Sex-friend|Ami|Sexe|Couple|Plan","Champagne|Bulles|Fête|Bouteille|Pétiller","Belle-mère|Mari|Femme|Famille|Mère",
"Afterwork|Boulot|Collègues|Bar|Soir","Télétravail|Maison|Bureau|Ordinateur|Travail","Jacuzzi|Bulles|Eau|Chaud|Bain","Lune de miel|Mariage|Voyage|Couple|Mariés"]);
G3.front["🍸 Soirée"]=["Barman","Videur","Gueule de bois","Mojito","Ex toxique","Belle-mère","DRH","Huissier","Contrôleur fiscal","Enterrement de vie de jeune fille","Afterwork",
"Karaoké","Apéro","Champagne","Boîte de nuit","After","Tequila","Pinte","Créneau","Taxi de 5 h du matin","Lendemain de soirée","Pot de départ","Chômage","Télétravail","Mariage"];
G3.front["🔥 Coquin"]=["Sex-friend","Strip-teaser","Body shot","Lap dance","Speed dating","Walk of shame","Plan à trois","Jacuzzi","Préservatif","Club libertin","Rencard Tinder",
"Lune de miel","Menottes","Lingerie","Suçon","Nude","Sexto","Coup d'un soir","Préliminaires","Massage aux huiles"];
add(G3.est,["Combien de mariages par an en France, environ ?|240000|environ 240 000","Combien de jours fériés en France (hors Alsace-Moselle) ?|11|11 jours",
"Combien de bulles dans une flûte de champagne, environ ?|1000000|environ 1 million","Combien de bouteilles de champagne vendues par an dans le monde (en millions) ?|300|environ 300 millions",
"Combien d'heures dans une année (non bissextile) ?|8760|8 760 heures","Combien de kilomètres fait le périphérique parisien ?|35|environ 35 km"]);
add(G3.nioui,["Tu as déjà trompé quelqu'un ?","Tu es célibataire ?","Tu bosses demain ?","Tu as bu ce soir ?","Tu aimes ton job ?","Tu rentres seul(e) ce soir ?","Tu as encore ton ex dans tes contacts ?","Tu as déjà dit « je t'aime » ?"]);
add(G3.deb,["Rester ami avec son ex, c'est possible","Coucher le premier soir, c'est une bonne idée","Le télétravail, c'est mieux que le bureau","En couple, il faut un compte commun",
"L'argent fait le bonheur","La fidélité, c'est dépassé","On peut être amoureux de deux personnes à la fois","Il faut vivre ensemble avant de se marier",
"Les applis de rencontre ont tué la drague","Avoir des potes du sexe opposé en couple, aucun souci","Le mariage ne sert plus à rien","Un job passion mal payé vaut mieux qu'un job chiant bien payé",
"Les vacances entre potes sont mieux qu'en couple","La jalousie est une preuve d'amour","Il faut tout dire à son/sa partenaire, même ses fantasmes"]);
add(G3.ver[1],["Ton boulot","Tes cuites","Tes galères d'argent","Tes colocs","Tes pires patrons"]);
add(G3.ver[3],["Tes coups d'un soir","Les endroits insolites","Tes pires rencards Tinder","Ce que tu as fait en vacances sans le dire"]);
})();
