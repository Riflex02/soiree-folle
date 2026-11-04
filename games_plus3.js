// Lot n°3 (gros volume) pour tous les jeux
(function(){
function add(arr,items){if(!arr)return;items.forEach(function(x){if(arr.indexOf(x)<0)arr.push(x)})}
var A=window.GAMES,B=window.GAMES2,C=window.GAMES3,D=window.GAMES4,E=window.GAMES5;

/* Imposteur */
add(A.imp[1],["Serpent|Lézard","Hélicoptère|Drone","Sushi|Maki","Café|Chocolat chaud","Tente|Camping-car","Gâteau|Tarte","Ascenseur|Escalator","Église|Cathédrale",
"Prison|Commissariat","Brosse à dents|Fil dentaire","Parapluie|Imperméable","Paris|Marseille","Pompier|Ambulancier","Rouge à lèvres|Gloss","Clé|Badge","Peluche|Poupée",
"Bateau|Sous-marin","Volcan|Montagne","Océan|Mer","Tatouage|Piercing","Baskets|Tongs","Chapeau|Casquette","Écharpe|Cravate","Hamburger|Hot-dog","Ordinateur|Tablette",
"Facebook|Instagram","Cheval|Poney","Piscine|Jacuzzi","Agent de sécurité|Vigile","Champagne|Crémant","Pastis|Ricard","Fête foraine|Parc d'attractions",
"Tour Eiffel|Arc de Triomphe","Harry Potter|Le Seigneur des anneaux","Marvel|DC","Pokémon|Digimon","Mario|Luigi","Goku|Vegeta","Netflix|Disney+","Lasagnes|Gratin",
"Ours|Loup","Plongée|Snorkeling","Guitare|Ukulélé","Violon|Violoncelle","Rap|R'n'B","Médecin|Pharmacien","Train|Métro","Lunettes de soleil|Casquette"]);
add(A.imp[3],["Lingerie|Maillot de bain","Sexto|Vocal coquin","Gémissement|Soupir","Nuit de noces|Week-end en amoureux","Pole dance|Lap dance","Sauna|Hammam","Préservatif|Lubrifiant","Fessée|Chatouilles"]);

/* La Bombe */
add(A.bomb[1],["Une marque de voiture allemande","Un pays d'Amérique du Sud","Un fruit exotique","Un sport olympique","Un personnage Marvel","Un Pokémon de la 1re génération",
"Un jeu de cartes","Un truc qu'on trouve dans une trousse","Un mot qui finit par « -ette »","Un métier de l'hôpital","Un ustensile de cuisine","Un mot anglais qu'on dit tout le temps",
"Un truc qui fait du bruit","Un animal de la savane","Un plat italien","Une ville d'Espagne","Une capitale européenne","Un dessert au chocolat","Une marque de baskets",
"Un truc qu'on emmène en camping","Un objet dans une voiture","Une série policière","Un groupe ou chanteur des années 80","Un film d'horreur","Une couleur de cheveux","Un truc vert"]);
add(A.bomb[3],["Un truc qu'on fait sous la couette","Une matière de lingerie","Un compliment sexy","Un lieu pour un premier bisou","Un fantasme de déguisement","Un mot qui rime avec « bisou »"]);

/* Mime */
add(A.mime[1],["Pilote de Formule 1","Chef cuisinier énervé","Moine bouddhiste","Mannequin sur un défilé","Joueur de tennis","Gardien de but","Tracteur","Cueillir des cerises",
"Laver une voiture","Tondre un mouton","Lancer de bowling","Partie de ping-pong","Ouvrir un cadeau nul","Repasser une chemise","Faire du surf","Se faire piquer par une abeille",
"Tomber amoureux","Marcher sur un Lego","Prendre l'avion pour la 1re fois","Perdre au loto","Gagner au loto","Faire un régime","Rater un selfie","Faire la queue à la Poste",
"Jouer à la PlayStation","Pêcher un gros poisson","Monter un meuble Ikea","Coup de soleil","Plongeon raté","Statue de la Liberté","Spiderman","Dark Vador","Un robot qui bugue",
"Un pingouin qui glisse","Un dinosaure","Un singe","Un éléphant","Un serpent","Un chat qui se lèche","Un chien qui court après sa queue"]);
add(A.mime[3],["Dragueur lourd","Premier baiser maladroit","Soirée en amoureux","Se déshabiller sous la couette","Rouler une pelle","Danse lascive","Lingerie qui gratte","Massage des pieds"]);

/* Paranoïa */
add(B.par[1],["Qui ici est le plus susceptible ?","Qui ici serait le pire en cas de zombie ?","Qui ici a le plus de chance ?","Qui ici est le plus têtu ?","Qui ici tient le moins bien l'alcool ?",
"Qui ici partirait en premier d'une soirée ?","Qui ici chante le plus faux ?","Qui ici danse le plus mal ?","Qui ici se plaint le plus ?","Qui ici serait le meilleur parent ?",
"Qui ici serait le pire coloc ?","Qui ici a le plus gros ego ?","Qui ici est le plus gentil ?","Qui ici t'a déjà déçu(e) ?","Qui ici a le plus de dettes envers toi ?",
"Qui ici cuisine le mieux ?","Qui ici est le plus maniaque ?","Qui ici serait le pire patron ?","Qui ici a le plus de potentiel caché ?","Qui ici est le plus fêtard ?"]);
add(B.par[3],["Qui ici a la plus belle voix pour murmurer des mots doux ?","Qui ici a le style le plus sexy ce soir ?","Avec qui ici tu passerais un week-end en amoureux ?","Qui ici a le plus de fantasmes ?",
"Qui ici t'a déjà fait de l'effet ?","Qui ici aurait le plus de succès dans un club de strip-tease ?","Qui ici a déjà eu une aventure d'un soir à ton avis ?","Qui ici embrasse le mieux à ton avis ?",
"Qui ici est le plus sensuel ?","Qui ici pourrait te séduire en une phrase ?"]);

/* Mots interdits */
add(C.tab,["Plongée|Mer|Bouteille|Poisson|Masque","Dentifrice|Dents|Brosse|Tube|Blanc","Mariée|Robe|Mariage|Blanc|Époux","Vélo|Pédales|Roues|Tour de France|Guidon",
"Avion|Pilote|Voler|Ailes|Aéroport","Cimetière|Mort|Tombe|Fleurs|Enterrement","Chewing-gum|Mâcher|Bouche|Collant|Menthe","Sapin|Noël|Arbre|Épines|Vert",
"Pâtes|Italie|Spaghetti|Bolognaise|Cuire","Dragon|Feu|Voler|Chevalier|Ailes","Policier|Police|Arrêter|Uniforme|Menottes","Fromage|Lait|Vache|Raclette|Camembert",
"Chaussettes|Pieds|Paire|Laine|Trou","Ascenseur|Étage|Monter|Bouton|Immeuble","Plage|Sable|Mer|Soleil|Serviette","Marathon|Courir|42|Kilomètres|Course",
"Miroir|Reflet|Regarder|Glace|Salle de bain","Banque|Argent|Compte|Carte|Conseiller","Clown|Cirque|Nez|Rouge|Rire","Hiver|Froid|Neige|Décembre|Saison",
"Sorcière|Balai|Chapeau|Magie|Halloween","Pirate|Bateau|Trésor|Œil|Crochet","Bébé|Pleurer|Couche|Biberon|Petit","Licenciement|Travail|Patron|Virer|Chômage",
"Vacances|Partir|Été|Congés|Plage","Moto|Roues|Casque|Vitesse|Rouler","Pizza|Italie|Four|Fromage|Livreur","Cocktail|Alcool|Bar|Verre|Mélanger",
"Douane|Frontière|Valise|Passeport|Contrôle","Pyramide|Égypte|Triangle|Pharaon|Sable","Lasagnes|Pâtes|Bolognaise|Four|Italie","Strip-tease|Danser|Enlever|Vêtements|Sexy",
"Cupidon|Flèche|Amour|Ange|Saint-Valentin","Saint-Valentin|Amour|Février|Couple|Fleurs","Jacuzzi|Bulles|Chaud|Eau|Spa","Nuit blanche|Dormir|Fête|Matin|Fatigue",
"Témoin|Mariage|Discours|Bague|Ami","Rupture|Couple|Fin|Larguer|Ex","Coloc|Appartement|Partager|Vivre|Loyer","Brunch|Dimanche|Petit-déjeuner|Déjeuner|Œufs"]);

/* Front collé */
add(C.front["⭐ Célébrités"],["Kendji Girac","Vianney","Orelsan","Booba","Nekfeu","Zlatan Ibrahimović","Neymar","Roger Federer","Rafael Nadal","Serena Williams",
"Karim Benzema","Didier Deschamps","Thierry Henry","Elvis Presley","Freddie Mercury","Marilyn Monroe","Charlie Chaplin","Victor Hugo","Molière","Coco Chanel"]);
add(C.front["🦸 Personnages"],["Geralt de Riv","Pikachu","Kratos","Master Chief","Link","Yoda","Jack Sparrow","Le Grinch","Shrek","Gollum","Hermione Granger","Voldemort",
"Thanos","Black Panther","Daenerys Targaryen","Walter White","Joey Tribbiani","Michael Scott","Rick Grimes","Lucky Luke"]);
add(C.front["🐾 Animaux"],["Tigre","Lion","Loup","Renard","Aigle","Hibou","Chauve-souris","Grenouille","Tortue","Morse","Phoque","Lapin","Furet","Chihuahua","Berger allemand"]);
add(C.front["👷 Métiers"],["Croupier","Cascadeur","Pilote de chasse","Chirurgien esthétique","Prof de yoga","Comptable","Sommelier","Garde du corps","Détective privé","Tatoueur"]);
add(C.front["🍸 Soirée"],["Barbecue","Pétanque","Apéro dînatoire","Beer pong","Blind test","Fléchettes","Baby-foot","Billard","Pastis","Mojito géant"]);
add(C.front["🔥 Coquin"],["Pole dance","Fessée","Préservatif parfumé","Chambre d'hôtel","Love room","Body painting","Huile de massage","Plan à trois","Sex-shop","Lune de miel"]);

/* Estimations */
add(C.est,["Combien d'habitants à Lille (ville) environ ?|236000|environ 236 000","Combien de départements compte la France (outre-mer compris) ?|101|101",
"En quelle année est sorti le premier épisode des Simpson (série) ?|1989|1989","En quelle année est sortie la première PlayStation au Japon ?|1994|1994",
"Combien de kilomètres fait un semi-marathon ?|21.1|21,1 km","Combien de joueurs au total sur un terrain de foot pendant un match ?|22|22 joueurs",
"Combien de cartes dans un jeu de belote ?|32|32 cartes","Combien d'États composent les États-Unis ?|50|50 États","Combien de touches sur un clavier AZERTY classique (environ) ?|105|environ 105",
"Combien de marches pour monter au sommet de l'Arc de Triomphe ?|284|284 marches","Quelle est la hauteur de la statue de la Liberté, socle compris (m) ?|93|environ 93 m",
"Combien de calories dans un Big Mac, environ ?|500|environ 500 kcal","Combien de litres dans une baignoire pleine, environ ?|150|environ 150 litres",
"À quelle température fond le chocolat noir, environ (°C) ?|34|environ 32 à 35 °C","En quelle année a été inauguré le stade Pierre-Mauroy à Lille ?|2012|2012"]);

/* Ni oui ni non */
add(C.nioui,["Tu aimes la bière ?","Tu as un tatouage ?","Tu sais faire la cuisine ?","Tu as déjà gagné quelque chose ?","Tu vas répondre un jour ?","Tu connais le prénom de mon chien ?",
"T'as passé une bonne semaine ?","T'aimes le foot ?","Tu as peur du noir ?","Tu bois du café ?","Tu te trouves drôle ?","Tu as un secret ?","Tu as déjà eu un accident ?","Tu fais du sport ?","Tu veux un bisou ?"]);

/* Le Débat */
add(C.deb,["Il faut mettre de la crème fraîche dans la carbonara","Les chats sont des êtres supérieurs","Il faut toujours dire la vérité, même si elle blesse","Les réseaux sociaux rendent malheureux",
"On devrait travailler 4 jours par semaine","La pizza se mange avec les doigts","Les films d'horreur, c'est nul","Les vacances au ski sont surcotées","Les SMS vocaux devraient être interdits",
"Le meilleur film de tous les temps est un dessin animé","Le premier rendez-vous doit se faire au resto","Les gens qui ne boivent pas d'alcool s'amusent plus","Il faut dormir sur le côté gauche du lit",
"La plage, c'est surcoté","Le PSG est le meilleur club de France","Le RC Lens a les meilleurs supporters de France","Les licornes sont plus fortes que les dragons",
"Il faut toujours finir son assiette","Le café, c'est mieux que le thé","La musique des années 80 est la meilleure"]);

/* 2 vérités 1 mensonge */
add(C.ver[1],["Tes blessures et accidents","Tes rencontres insolites","Tes passions cachées","Tes peurs bizarres","Tes jobs d'été","Tes anniversaires","Tes pires repas"]);
add(C.ver[3],["Tes coups de foudre","Tes rencards ratés","Tes lieux coquins"]);

/* Virelangues */
add(C.vir,["Un dragon gradé dégrade un gradé dragon.","As-tu été à Tahiti ?","Mur pourri, trou, rat. Rat dans trou, mur pourri.","Je suis un pauvre pêcheur pressé.",
"Un généreux déjeuner régénérerait des généraux dégénérés.","Tas de riz, tas de rats ; tas de riz tentant, tas de rats tentés.","Sachez, mon cher, que je sèche ces chemises.","Pauvre petit pêcheur, prend patience pour pouvoir prendre plusieurs petits poissons."]);

/* La Sellette */
add(D.seat[1],["Qu'est-ce que tu ferais si tu n'avais pas peur ?","Quelle est la plus belle chose qu'on ait faite pour toi ?","De quoi es-tu le plus reconnaissant(e) ?","Quelle est la leçon la plus dure que tu aies apprise ?",
"Qui t'a le plus inspiré(e) ?","Quelle habitude voudrais-tu perdre ?","Quand t'es-tu senti(e) vraiment seul(e) ?","Quel est ton plus beau voyage et pourquoi ?","Qu'est-ce que tu aimes le plus chez toi ?",
"Qu'est-ce qui te rend fier/fière de tes amis ici ?","Si tu pouvais parler à quelqu'un qui n'est plus là, que dirais-tu ?","Qu'est-ce qui te stresse le plus en ce moment ?"]);
add(D.seat[2],["Quelle est ta plus grosse erreur en amour ?","As-tu déjà aimé quelqu'un sans retour ?","Qu'est-ce qui te fait tomber amoureux(se) ?","Comment tu sais que tu es amoureux(se) ?"]);
add(D.seat[3],["Ce qui te fait le plus craquer au lit ?","Ton plus grand moment de passion ?","Ce que tu aimerais qu'un(e) partenaire ose avec toi ?","Une envie que tu n'as jamais avouée ?"]);

/* Tu me connais ? */
add(D.know[1],["Quel est le film préféré de {s} ?","Quel est le plat que {s} déteste ?","Quelle est la phobie de {s} ?","Quel est le rêve d'enfant de {s} ?","Quel est le plus gros défaut de {s} selon ses potes ?",
"Combien de temps {s} met-il/elle à se préparer ?","Quelle est la marque de téléphone de {s} ?","Quel est le pire voyage de {s} ?","Quelle est la couleur préférée de {s} ?","Quel est le premier job de {s} ?"]);
add(D.know[3],["Quelle partie de son corps {s} préfère-t-il/elle ?","Quel est le type de rencard idéal de {s} ?","Quel est le dernier crush de {s} ?","Quelle tenue {s} trouve-t-il/elle irrésistible ?"]);

/* Speed dating */
add(D.date[1],["Ta passion qui surprend tout le monde ?","Ton dimanche idéal ?","Ce que tu ne supportes pas chez quelqu'un ?","Ton film doudou ?","La qualité que tu cherches avant tout ?",
"Ta plus grosse peur en couple ?","Tu es plutôt mer ou montagne ?","Ton dernier gros coup de cœur musical ?"]);
add(D.date[3],["Ce qui te fait rougir ?","Tu préfères quel type de bisou ?","La tenue qui fait craquer chez l'autre ?","Ton meilleur atout de séduction ?","Tu prends l'initiative ou tu te laisses faire ?","Ce qui te donne envie d'un deuxième rencard ?"]);

/* Le Tribunal */
add(D.crime[1],["prendre toujours la plus grosse part","raconter les secrets des autres","ne jamais répondre aux messages","toujours oublier son portefeuille","être d'une mauvaise foi totale au jeu",
"tricher aux jeux de société","monopoliser la musique en soirée","envoyer des vocaux de 5 minutes","laisser traîner sa vaisselle","se croire plus drôle qu'il/elle ne l'est",
"spoiler les séries","être un(e) mauvais(e) perdant(e)","arriver en soirée les mains vides"]);
add(D.crime[3],["flirter avec tout le monde ce soir","avoir regardé quelqu'un de cette table un peu trop longtemps","avoir un historique de recherche très douteux","stalker ses ex la nuit"]);

/* La Bouteille */
add(D.bottle[1],["{s} et {t} font un bras de fer.","{t} raconte une anecdote embarrassante sur {s}.","{s} et {t} échangent leurs verres pour une gorgée.","{t} imite un animal choisi par {s}.","{s} doit deviner la couleur des sous-vêtements de {t}… sans vérifier !"]);
add(D.bottle[2],["{s} et {t} font un selfie en mode couple.","{t} raconte son pire rencard à {s}.","{s} donne une note de séduction sur 10 à {t}.","{t} chante une chanson d'amour à {s}."]);
add(D.bottle[3],["{s} embrasse la main de {t}.","{t} fait un massage des épaules à {s}.","{s} murmure un compliment sensuel à {t}.","{s} et {t} se tiennent la main jusqu'au prochain tour."]);
add(D.bottle[4],["{s} et {t} échangent un vêtement.","{t} fait un suçon à {s}, s'il/elle accepte.","{s} fait un body shot sur {t}.","{t} danse collé(e) à {s} pendant 30 secondes."]);

/* Confessions */
add(D.conf[1],["Ton plus gros mensonge à tes parents","La pire chose que tu aies dite sur quelqu'un ici","Ton secret le mieux gardé","La chose dont tu as le plus honte au boulot","Ta pire bêtise d'ado"]);
add(D.conf[3],["Ta pire honte au lit","Ton fantasme sur quelqu'un de célèbre","La chose la plus coquine que tu aies faite en public","Le lieu le plus insolite de ta vie sexuelle"]);

/* Chansons à fredonner */
add(D.songs,["Beat It – Michael Jackson","Smooth Criminal – Michael Jackson","Don't Stop Me Now – Queen","Another One Bites the Dust – Queen","Sweet Child O' Mine – Guns N' Roses",
"Billie Jean – Michael Jackson","Thunderstruck – AC/DC","Wonderwall – Oasis","Zombie – The Cranberries","Rasputin – Boney M.","Born to Be Alive – Patrick Hernandez",
"Femme like U – K-Maro","Belle – Notre-Dame de Paris","Il est cinq heures, Paris s'éveille – Jacques Dutronc","Couleur café – Serge Gainsbourg",
"Aïcha – Khaled","Désenchantée – Mylène Farmer","Les Démons de minuit – Images","Ella, elle l'a – France Gall","Partenaire particulier – Partenaire Particulier",
"Bad Romance – Lady Gaga","Poker Face – Lady Gaga","Crazy in Love – Beyoncé","Hips Don't Lie – Shakira","Waka Waka – Shakira","Gimme! Gimme! Gimme! – ABBA",
"Take On Me – a-ha","Final Countdown – Europe","Sweet Dreams – Eurythmics","Don't Start Now – Dua Lipa","Levitating – Dua Lipa","Flowers – Miley Cyrus",
"La Vie en rose – Édith Piaf","Le Lion est mort ce soir – Henri Salvador","Tata Yoyo – Annie Cordy","La Danse des canards – J.J. Lionel",
"Les Sardines – Patrick Sébastien","Ma Benz – NTM","Je danse le mia – IAM","Petit Génie – Jungeli","Ça m'énerve – Helmut Fritz"]);

/* Bar */
add(E.miss[1],["Trouve dans le bar quelqu'un qui a fait le même métier que toi.","Fais un « cheers » avec le barman.","Commande un verre en chantant ta commande.","Fais trinquer ta table avec l'accent ch'ti.",
"Trouve la boisson la plus chère de la carte et décris-la comme un sommelier.","Prends une photo de groupe avec une autre table (si elle accepte).","Récupère une recommandation de série auprès d'un inconnu.",
"Fais deviner une chanson en sifflant à la table voisine.","Trouve quelqu'un dont c'est l'anniversaire ce mois-ci.","Fais un concours de grimaces avec une autre table."]);
add(E.miss[2],["Joue au barman : prends la commande de la table voisine (sans aller au bar).","Fais une déclaration d'amitié à la table voisine.","Demande au DJ ou au barman une chanson et fais danser ta table."]);
add(E.miss[3],["Demande à quelqu'un du bar de deviner ta profession, et fais un pari.","Obtiens un compliment d'un(e) inconnu(e)."]);
add(E.secret,["Fais en sorte que {j} commande la même chose que toi.","Fais dire « Waterloo » à quelqu'un.","Fais changer la musique.","Fais rire toute la table en même temps.","Fais en sorte qu'on te paie une frite.",
"Lance un débat sur l'ananas sur la pizza.","Fais dire « je suis d'accord » à {j} 3 fois.","Fais en sorte que {j} enlève un accessoire.","Fais une photo de groupe sans demander directement."]);
add(E.toast,["Porte un toast à la meilleure gueule de bois de ta vie.","Porte un toast comme un empereur romain.","Porte un toast à {j} façon rappeur.","Porte un toast à la fin du mois.","Porte un toast à ta jeunesse perdue."]);
add(E.bingo,["Quelqu'un fait tomber son téléphone","Quelqu'un oublie sa veste","Le barman fait un clin d'œil","Quelqu'un parle de son boss","Une chanson de Johnny passe",
"Quelqu'un montre une vidéo TikTok","Quelqu'un dit « c'est ma tournée »","Quelqu'un rentre en courant à cause de la pluie","Un chien entre dans le bar","Quelqu'un réclame des chips"]);
add(E.rules,["Interdit de dire « moi » : on dit « l'auteur de ces lignes ». Sinon {b1}.","Le dernier à lever son verre après un « santé » {b1}.","Interdit de regarder son téléphone pendant que quelqu'un parle : {b1}.","Interdit de dire « genre » : {b1}."]);
})();
