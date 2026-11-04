// Lot n°2 de contenu pour tous les jeux
(function(){
function add(arr,items){if(!arr)return;items.forEach(function(x){if(arr.indexOf(x)<0)arr.push(x)})}
var A=window.GAMES,B=window.GAMES2,C=window.GAMES3,D=window.GAMES4,E=window.GAMES5;
add(A.imp[1],["Bière|Cidre","Lille|Lens","Welsh|Croque-monsieur","Frites|Potatoes","Karaoké|Blind test","Pinte|Demi","Barman|Serveur","Braderie|Brocante","Mariage|Baptême","Facture|Addition","Uber|Bus de nuit","Gin|Vodka","Bar|Pub"]);
add(A.imp[3],["Bisou|Pelle","Strip-poker|Action ou vérité","Câlin|Massage","Jacuzzi|Sauna"]);
add(A.bomb[1],["Un mot qui commence par « bi »","Un truc qu'on fait au réveil","Une marque de bière","Un plat du Nord","Une ville du Nord","Un truc qu'on trouve dans un bar","Une chanson à chanter en soirée","Un acteur français","Un jeu vidéo Nintendo","Une boisson chaude"]);
add(A.bomb[3],["Un mot doux au lit","Un endroit où il est interdit de faire l'amour","Un truc à ranger dans un tiroir coquin","Un prénom sexy"]);
add(A.mime[1],["Commander au bar sans voix","Ouvrir une bière avec un briquet","Danser sur du Michael Jackson","Rater une marche","Chercher ses clés","Photographe de mariage","Agent de sécurité en ronde","Serveur débordé","Jongler avec des verres","Supporter pendant un penalty"]);
add(A.mime[3],["Dégrafer un soutien-gorge d'une main","Strip-tease raté","Bisou passionné","Drague lourde au bar","Rencard Tinder catastrophique"]);
add(B.quiz,[
"Quelle est la capitale de la Suisse ?|Berne|Genève|Zurich|Lausanne","Quelle est la capitale de la Norvège ?|Oslo|Stockholm|Helsinki|Copenhague",
"Quelle est la capitale de l'Irlande ?|Dublin|Belfast|Cork|Galway","Quelle est la capitale de la Turquie ?|Ankara|Istanbul|Izmir|Antalya",
"Quelle est la capitale de l'Argentine ?|Buenos Aires|Santiago|Lima|Montevideo","Quelle est la capitale de la Corée du Sud ?|Séoul|Busan|Pyongyang|Incheon",
"Quelle est la capitale de l'Égypte ?|Le Caire|Alexandrie|Louxor|Gizeh","Quelle est la capitale du Brésil ?|Brasília|Rio de Janeiro|São Paulo|Salvador",
"Combien de trous sur un parcours de golf standard ?|18|9|12|21","Dans quel pays se trouve Marrakech ?|Le Maroc|L'Algérie|La Tunisie|L'Égypte",
"Quelle est la monnaie du Royaume-Uni ?|La livre sterling|L'euro|Le dollar|Le franc","Quelle est la monnaie de la Suisse ?|Le franc suisse|L'euro|La couronne|Le mark",
"Qui a composé La Flûte enchantée ?|Mozart|Beethoven|Bach|Chopin","Qui a peint Guernica ?|Pablo Picasso|Salvador Dalí|Joan Miró|Henri Matisse",
"Qui a sculpté Le Penseur ?|Auguste Rodin|Michel-Ange|Camille Claudel|Donatello","Dans quelle ville se trouve la Sagrada Família ?|Barcelone|Madrid|Séville|Valence",
"Dans quelle ville se trouve Big Ben ?|Londres|Édimbourg|Dublin|Manchester","Quel est le plus grand des félins ?|Le tigre|Le lion|Le jaguar|Le léopard",
"Combien de chromosomes a un être humain ?|46|23|48|44","Quel élément chimique a pour symbole O ?|L'oxygène|L'or|L'osmium|L'ozone",
"Quelle est la plus grande planète du système solaire ?|Jupiter|Saturne|Neptune|Uranus","Quelle planète est la plus proche du Soleil ?|Mercure|Vénus|Mars|La Terre",
"Combien de planètes dans le système solaire ?|8|9|7|10","Quel groupe a chanté Bohemian Rhapsody ?|Queen|The Beatles|Pink Floyd|The Rolling Stones",
"Dans quelle série trouve-t-on Daenerys Targaryen ?|Game of Thrones|The Witcher|Vikings|The Crown","Dans The Witcher, comment s'appelle le sorceleur ?|Geralt de Riv|Ciri|Jaskier|Vesemir",
"Quel studio a créé World of Warcraft ?|Blizzard|Ubisoft|Valve|EA","Dans Call of Duty Black Ops, quel mode avec des morts-vivants est culte ?|Zombies|Infection|Survie|Horde",
"Quel super-héros se bat avec un bouclier rond étoilé ?|Captain America|Thor|Iron Man|Black Panther","Comment s'appelle le marteau de Thor ?|Mjolnir|Stormbreaker|Excalibur|Gungnir",
"Combien de Dragon Balls faut-il réunir pour invoquer le dragon ?|7|5|9|12","En quelle année est sorti le premier film Iron Man ?|2008|2006|2010|2012",
"Combien de fois la France a-t-elle gagné la Coupe du monde de foot ?|2|1|3|4","Quel club joue au stade Pierre-Mauroy ?|Le LOSC|Le RC Lens|Le PSG|L'OM",
"Quel club joue au stade Bollaert-Delelis ?|Le RC Lens|Le LOSC|Valenciennes|Amiens","Dans quel sport s'illustre Teddy Riner ?|Le judo|La lutte|La boxe|Le rugby",
"Quel plat du Nord est à base de viandes en gelée ?|Le potjevleesch|La carbonade|Le welsh|La flamiche","Le welsh est fait principalement avec…|Du cheddar fondu et de la bière|Du maroilles et des frites|De la mozzarella|Du comté et du vin blanc",
"Quelle ville accueille la plus grande braderie d'Europe ?|Lille|Lyon|Bordeaux|Strasbourg","Combien de joueurs par équipe dans l'eau au water-polo ?|7|6|5|8"
]);
add(B.par[1],["Qui ici a le plus changé depuis l'école ?","Qui ici est le plus bordélique ?","Qui ici finirait en téléréalité ?","Qui ici a le plus de secrets ?","Qui ici est le plus mauvais conducteur ?",
"Qui ici ment le mieux ?","Qui ici garderait le mieux un secret ?","Qui ici a les pires goûts en amour ?","Qui ici est le plus radin au resto ?","Qui ici serait le meilleur témoin de mariage ?"]);
add(B.par[3],["Qui ici a déjà envoyé un nude à ton avis ?","Qui ici embrasserais-tu en premier si tu devais ?","Qui ici a le regard le plus séducteur ?","Qui ici ferait le meilleur massage ?",
"Qui ici a le plus de succès ?","Avec qui ici passerais-tu une nuit dans un jacuzzi ?","Qui ici a les plus belles mains ?","Qui ici a déjà eu une histoire avec quelqu'un d'ici ?"]);
add(C.tab,["Braderie|Lille|Moules|Frites|Septembre","Welsh|Fromage|Bière|Pain|Nord","Karaoké|Chanter|Micro|Paroles|Soirée","Pinte|Bière|Verre|Demi|Litre",
"Addition|Payer|Restaurant|Serveur|Note","Pourboire|Serveur|Argent|Laisser|Merci","Shot|Verre|Alcool|Petit|Cul sec","Barman|Cocktail|Bar|Servir|Comptoir",
"Sous-bock|Carton|Verre|Table|Bière","Gin tonic|Alcool|Citron|Cocktail|Tonic","Câlin|Bras|Serrer|Tendresse|Douceur","Massage|Dos|Mains|Huile|Détente",
"Coup de foudre|Amour|Regard|Tomber|Cœur","Célibataire|Seul|Couple|Libre|Tinder","Week-end|Samedi|Dimanche|Repos|Vendredi","Lundi|Semaine|Travail|Début|Dimanche",
"Sieste|Dormir|Après-midi|Canapé|Repos","Mojito|Menthe|Rhum|Citron|Cocktail"]);
add(C.front["🍸 Soirée"],["Sous-bock","Pourboire","DJ","Shot de tequila","Braderie","Welsh","Gin tonic","Danseur fou","Dernier métro","Videur sympa"]);
add(C.front["🔥 Coquin"],["Strip-poker","Love hotel","Nuisette","Bisou dans le cou","Fantasme","Sextoy","Glaçon","Bandeau","Plan cul","Porte-jarretelles"]);
add(C.est,["En quelle année la tour Eiffel a-t-elle été inaugurée ?|1889|1889","Combien de km entre Lille et Marseille par la route, environ ?|1000|environ 1 000 km",
"Combien de pays en Afrique ?|54|54 pays","Combien d'habitants à Paris intra-muros (en millions) ?|2.1|environ 2,1 millions","En quelle année sont sortis les premiers jeux Pokémon au Japon ?|1996|1996",
"Quelle est la vitesse de pointe d'un guépard (km/h) ?|110|environ 100 à 110 km/h","Combien de verres de 25 cl dans un fût de 30 litres ?|120|120 verres",
"Combien d'épisodes compte Dragon Ball Z ?|291|291 épisodes","Combien de saisons compte la série Shameless (version US) ?|11|11 saisons",
"En quelle année est sorti World of Warcraft ?|2004|2004","En quelle année est mort Napoléon ?|1821|1821"]);
add(C.nioui,["Tu connais bien tout le monde ici ?","T'as aimé ta journée ?","Tu reprends un verre ?","Tu dors ici ce soir ?","Tu es fort(e) à ce jeu ?","T'as déjà été amoureux/amoureuse ?","Tu veux que j'arrête ?","On se connaît depuis longtemps ?"]);
add(C.deb,["Le Nord, c'est mieux que le Sud","La bière, c'est mieux que le vin","On peut très bien aller seul(e) au bar","Il faut toujours laisser un pourboire",
"Le karaoké devrait être obligatoire en soirée","Les shots, c'est toujours une mauvaise idée","Rentrer avant 1 h du matin, c'est rater sa soirée","Le meilleur moment d'une soirée, c'est l'apéro"]);
add(C.ver[1],["Tes vacances les plus folles","Tes bêtises au boulot","Tes talents en cuisine"]);
add(C.ver[3],["Tes sextos","Tes premières fois coquines"]);
add(D.seat[1],["Quelle personne t'a le plus marqué(e) dans ta vie ?","Si tu pouvais revivre une journée, laquelle ?","Qu'est-ce qui te fait peur dans le fait de vieillir ?","Qui aimerais-tu appeler là, maintenant ?",
"Ton plus beau souvenir avec quelqu'un ici ?","Es-tu fier/fière de la personne que tu es devenu(e) ?","Qu'est-ce que tu n'as jamais osé dire à quelqu'un ici ?","Quel rêve as-tu abandonné ?"]);
add(D.seat[2],["Qu'est-ce qui t'a fait le plus mal en amour ?","Tu crois au grand amour ?","Qu'est-ce qui te fait rester avec quelqu'un ?"]);
add(D.seat[3],["Ta plus grosse folie pour une nuit ?","Ton point faible en séduction ?","Ce que tu n'as jamais avoué à un(e) partenaire ?","Quelqu'un ici t'a déjà fait rougir ?"]);
add(D.know[1],["Quel est le surnom de {s} chez ses potes ?","Quel est le dernier pays visité par {s} ?","Quelle boisson {s} commande-t-il/elle au bar ?","Quel est le pire souvenir de soirée de {s} ?",
"Quelle est la saison préférée de {s} ?","À quel âge {s} a-t-il/elle eu son permis ?"]);
add(D.know[3],["Quel est le plus long rencard de {s} ?","Qu'est-ce que {s} trouve sexy ?","Quel est le premier truc que {s} regarde chez quelqu'un ?"]);
add(D.date[1],["Ce qui te fait rire à coup sûr ?","Ton plat signature pour impressionner ?","Ton pire tic ?","Ton dernier gros fou rire ?","La destination de tes rêves ?"]);
add(D.date[3],["Bisou au premier rencard ou au troisième ?","Ce que tu portes pour un rencard qui compte ?","Ton meilleur souvenir de flirt ?","Si on matche, on va où après ?"]);
add(E.miss[1],["Fais deviner ton métier au barman en 3 questions maximum.","Trouve quelqu'un dans le bar qui porte le même prénom qu'un membre de ta famille.","Trinque avec ta table en 5 langues différentes.",
"Commande un verre uniquement avec des gestes.","Fais un pierre-feuille-ciseaux avec quelqu'un d'une autre table : le perdant trinque avec vous.","Fais dédicacer un sous-bock par le barman."]);
add(E.miss[2],["Demande à une autre table de noter le style de ta table sur 10.","Fais chanter joyeux anniversaire à la table voisine… pour un faux anniversaire.","Trouve quelqu'un qui est allé dans le même pays que toi en vacances."]);
add(E.miss[3],["Demande à une personne qui te plaît de choisir ton prochain verre.","Fais un compliment sincère à 3 inconnus."]);
add(E.secret,["Fais parler toute la table de dinosaures.","Place le mot « parapluie » 3 fois dans la soirée.","Fais en sorte que {j} te fasse un câlin.","Fais applaudir la table sans le demander directement.",
"Fais goûter ton verre à 3 personnes.","Fais dire à {j} le prénom de son premier crush.","Fais dire « je t'aime » à quelqu'un, même pour rire."]);
add(E.toast,["Porte un toast à ton premier amour.","Porte un toast au patron du bar.","Porte un toast comme un pirate.","Porte un toast avec l'accent ch'ti.","Porte un toast en chuchotant.","Porte un toast à la meilleure décision de ta vie."]);
add(E.bingo,["Quelqu'un pleure de rire","Quelqu'un commande des frites","Quelqu'un perd son téléphone 2 minutes","Un inconnu se joint à la conversation","Quelqu'un parle de foot",
"Quelqu'un dit « je ne bois plus jamais »","Le barman offre un verre","Quelqu'un tente un tour de magie","Quelqu'un renverse sa bière sur lui","Une chanson de Jul passe"]);
add(E.rules,["Interdit de dire « tu » : on vouvoie tout le monde, sinon {b1}.","À chaque fois que la musique change, le dernier à applaudir {b1}.","Chaque fois que quelqu'un dit « santé », toute la table doit trinquer : le dernier {b1}."]);
})();
