// Lot n°4 pour les autres jeux
(function(){
function add(arr,items){if(!arr)return;items.forEach(function(x){if(arr.indexOf(x)<0)arr.push(x)})}
var A=window.GAMES,B=window.GAMES2,C=window.GAMES3,D=window.GAMES4,E=window.GAMES5;
add(A.imp[1],["Moules-frites|Fish and chips","Carnaval|Halloween","Pétanque|Bowling","Cinéma|Netflix","Tonton|Parrain","Pantoufles|Chaussons","Raclette|Tartiflette","Crêpe|Galette",
"Frigo|Congélateur","Maillot de bain|Short","Pirate|Corsaire","Clown|Mime","Zombie|Momie","Sorcier|Magicien","Roi|Empereur","Licorne|Pégase","Pompe à vélo|Gonfleur","Avocat|Juge","Boxe|Catch","Rhum|Cognac"]);
add(A.imp[3],["Lap dance|Strip-tease","Câlin|Cuillère","Hôtel|Motel","Glaçon|Chantilly","Menottes|Bandeau","Bain moussant|Jacuzzi"]);
add(A.bomb[1],["Une excuse pour être en retard","Un mot qui rime avec « apéro »","Un personnage de dessin animé des années 90","Un truc qu'on trouve dans un sac à main","Une bêtise d'enfance",
"Un truc qu'on dit quand on a trop bu","Un super-pouvoir","Un plat qui sent fort","Un truc qui fait peur","Un mot qui commence par « ch »","Un footballeur français","Une marque de bonbons","Une danse",
"Un truc qu'on fait en vacances","Un objet qu'on perd tout le temps"]);
add(A.mime[1],["Pingouin qui fait du ski","Pizzaiolo qui jongle","Faire une prise de judo","Chat qui a peur d'un concombre","Danseur de breakdance","Sumo qui fait de la danse classique","Vampire qui va chez le dentiste",
"Mannequin qui glisse sur une peau de banane","Astronaute qui cherche ses clés","Zombie qui fait du yoga","Pirate au supermarché","Ninja dans une bibliothèque","Grand-mère au rodéo","Robot qui tombe amoureux",
"Chirurgien qui opère une pizza","Policier qui fait la circulation en dansant","Gorille au restaurant chic","Bébé qui conduit","Statue qui a une crampe","Footballeur qui simule une blessure grave"]);
add(B.quiz,["Quel est le plus grand pays d'Amérique du Sud ?|Le Brésil|L'Argentine|Le Pérou|La Colombie","Quelle mer sépare l'Europe de l'Afrique ?|La Méditerranée|La mer Rouge|La mer Noire|La Manche",
"Combien de bras a une étoile de mer, le plus souvent ?|5|4|6|8","Quel animal produit du lait le plus riche en graisse ?|Le phoque|La vache|La chèvre|La jument",
"Quel est l'oiseau le plus rapide en piqué ?|Le faucon pèlerin|L'aigle royal|Le martinet|Le colibri","Quelle couleur obtient-on en mélangeant du bleu et du jaune ?|Vert|Violet|Orange|Marron",
"Combien de faces a un dé classique ?|6|4|8|12","Combien de cases noires sur un échiquier ?|32|30|36|28","Dans quel pays est né le Tetris ?|L'URSS|Le Japon|Les États-Unis|La Corée du Sud",
"Quel jeu vidéo met en scène un plombier moustachu ?|Super Mario|Sonic|Zelda|Crash Bandicoot","Comment s'appelle le hérisson bleu de Sega ?|Sonic|Shadow|Tails|Knuckles",
"Quel personnage Disney a un nez qui s'allonge quand il ment ?|Pinocchio|Peter Pan|Aladdin|Dingo","Qui a chanté « Thriller » ?|Michael Jackson|Prince|Stevie Wonder|Lionel Richie",
"De quel pays vient le groupe ABBA ?|La Suède|La Norvège|Le Danemark|La Finlande","Quel instrument a 88 touches ?|Le piano|L'orgue|L'accordéon|Le synthétiseur",
"Qui a écrit Roméo et Juliette ?|William Shakespeare|Molière|Victor Hugo|Jean Racine","Qui a écrit Le Comte de Monte-Cristo ?|Alexandre Dumas|Victor Hugo|Jules Verne|Honoré de Balzac",
"Qui a écrit Vingt Mille Lieues sous les mers ?|Jules Verne|H. G. Wells|Alexandre Dumas|Victor Hugo","Combien de temps dure la gestation d'un éléphant, environ ?|22 mois|9 mois|12 mois|36 mois",
"Combien d'heures dort un chat par jour, environ ?|15 heures|8 heures|5 heures|22 heures","Quelle est la couleur du sang d'une pieuvre ?|Bleu|Rouge|Vert|Transparent",
"Quel légume fait pleurer quand on le coupe ?|L'oignon|L'ail|Le poireau|L'échalote… et l'oignon aussi","Combien de bougies sur un gâteau pour les 18 ans… en général ?|18|17|19|20",
"Quel animal est le symbole du Coq sportif et de l'équipe de France ?|Le coq|L'aigle|Le lion|Le loup","Qui est le dieu de la guerre chez les Grecs ?|Arès|Zeus|Apollon|Hermès"]);
B.quiz=B.quiz.filter(function(q){return q.indexOf("L'échalote… et l'oignon aussi")<0&&q.indexOf("Combien de bougies sur un gâteau")<0});
add(B.par[1],["Qui ici survivrait le moins longtemps dans la jungle ?","Qui ici a le pire caractère au réveil ?","Qui ici dépense tout en une soirée ?","Qui ici pourrait devenir youtubeur ?","Qui ici se ferait arnaquer le plus facilement ?",
"Qui ici est le plus mauvais menteur ?","Qui ici a le rire le plus bizarre ?","Qui ici serait le premier à pleurer devant un film ?","Qui ici ferait le meilleur président ?","Qui ici finira avec 10 chats ?"]);
add(B.par[3],["Qui ici a le meilleur déhanché ?","Qui ici a le plus de photos coquines dans son téléphone ?","Qui ici t'a déjà fait un effet bizarre ?","Avec qui ici tu prendrais un bain ?","Qui ici serait le plus doué pour un strip-tease ?"]);
add(C.tab,["Raclette|Fromage|Patates|Appareil|Hiver","Mouton|Laine|Bêler|Animal|Ferme","Toboggan|Glisser|Parc|Enfants|Descendre","Pingouin|Banquise|Oiseau|Noir|Froid","Karaoké|Chanter|Micro|Paroles|Fausse",
"Trampoline|Sauter|Rebondir|Jardin|Toile","Bouchon|Bouteille|Vin|Liège|Ouvrir","Moustique|Piquer|Été|Insecte|Bzz","Sushi|Japon|Poisson|Riz|Cru","Licorne|Corne|Cheval|Magie|Arc-en-ciel",
"Tondeuse|Herbe|Jardin|Couper|Pelouse","Perruque|Cheveux|Faux|Tête|Déguisement","Hamster|Roue|Cage|Rongeur|Petit","Ninja|Japon|Noir|Combat|Discret","Choucroute|Alsace|Chou|Saucisse|Bière"]);
add(C.front["⭐ Célébrités"],["Jean-Claude Van Damme","Patrick Sébastien","Cyril Hanouna","Nabilla","Florent Pagny","Joey Starr","Gims","Soprano","Dalida","Claude François"]);
add(C.front["🦸 Personnages"],["Le Chat Botté","Ratatouille","Stitch","Olaf","Super Mario","Crash Bandicoot","Lara Croft","Rambo","Terminator","Hannibal Lecter"]);
add(C.front["🍸 Soirée"],["Shot de Jäger","Chenille","Danse des canards","Pompe à bière","Limonade","Verre doseur","Glaçons","Paille","Chips au paprika","Kebab de 4 h du matin"]);
add(C.est,["Combien de fois un humain cligne-t-il des yeux par minute, environ ?|17|environ 15 à 20 fois","Combien de pizzas sont mangées en France chaque seconde, environ ?|30|environ 30",
"Quel âge avait Mozart quand il a composé sa première œuvre ?|5|5 ans","Combien de litres de bière boit un Français par an, environ ?|33|environ 33 litres","Combien de fromages différents en France, environ ?|1200|environ 1 200"]);
add(C.deb,["Les escaliers, c'est mieux que l'ascenseur","Il faut dire bonjour au chauffeur de bus","Les pyjamas une-pièce devraient être obligatoires","Les dinosaures auraient fait de super animaux de compagnie",
"Le ketchup est une sauce de luxe","Il faudrait une sieste obligatoire de 30 minutes au boulot","Les pigeons ont plus de droits que nous","La raclette devrait être servie toute l'année"]);
add(C.nioui,["Tu as déjà dit oui ?","Tu sais ce que veut dire non ?","Tu as un frère ?","Tu es fatigué(e) ?","Tu aimes la raclette ?","T'as vu le dernier Marvel ?","Tu connais la réponse ?"]);
add(D.songs,["Moonwalker – Michael Jackson","Black or White – Michael Jackson","Bad – Michael Jackson","Dangerous – Michael Jackson","Jump – Van Halen","Gangsta's Paradise – Coolio",
"Barbie Girl – Aqua","Blue (Da Ba Dee) – Eiffel 65","Mambo No. 5 – Lou Bega","Ice Ice Baby – Vanilla Ice","YMCA – Village People","Le Chasseur – Michel Delpech","Les Lacs du Connemara – Michel Sardou","Lambada – Kaoma","Dragostea Din Tei – O-Zone"]);
add(D.seat[1],["Qu'est-ce qui te fait le plus rire au monde ?","Si tu pouvais changer de vie pendant une semaine, avec qui ?","Ton plus grand moment de courage ?","Qu'est-ce qui te rend jaloux/jalouse ?"]);
add(D.know[1],["Quel est le plat signature de {s} ?","Quelle est la pire peur de {s} ?","Quel super-pouvoir choisirait {s} ?","Quel métier {s} ferait dans une autre vie ?"]);
add(E.miss[1],["Fais un « air guitar » de 10 secondes au milieu du bar.","Demande au barman sa blague préférée.","Fais une révérence à chaque personne qui passe près de ta table pendant 1 minute.","Commande ta boisson en chantant."]);
add(E.secret,["Fais dire « raclette » à {j}.","Fais en sorte que toute la table lève son verre en même temps.","Fais rire {j} avec une imitation.","Fais dire « licorne » à quelqu'un d'une autre table."]);
add(E.toast,["Porte un toast à ta plus grosse bêtise.","Porte un toast avec l'accent marseillais.","Porte un toast à la santé de ton foie.","Porte un toast à {j} comme si tu étais un empereur."]);
})();
