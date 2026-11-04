// Lot n°5 : du contenu en plus dans tous les jeux
(function(){
function add(arr,items){if(!arr)return;items.forEach(function(x){if(arr.indexOf(x)<0)arr.push(x)})}
var C=window.CARDS,A=window.GAMES,B=window.GAMES2,G3=window.GAMES3,D=window.GAMES4,E=window.GAMES5,M=window.MIXDATA,L=window.GAMES6,R=window.GAMES7;

/* ===== Cartes ===== */
add(C[1].v,["Quel est le pire truc que tu aies fait à un(e) coloc ?","Ta plus grosse colère au volant ?","La chose la plus chère que tu aies perdue ?","Qui ici a déjà vu ton pire côté ?",
"Quelle est la rumeur la plus folle que tu aies entendue sur toi ?","Ton pire repas de famille ?","Ta plus grosse peur ridicule ?","Quel est ton guilty pleasure à la télé ?","Qu'est-ce que tu fais en premier en rentrant chez toi ?",
"Ton plus gros moment de solitude en vacances ?","Combien de temps tu peux tenir sans te doucher, honnêtement ?","Qui ici t'a déjà fait le plus rire ?","Quel est le dernier mensonge que tu as dit à ton boss ?",
"Si tu devais manger un seul plat toute ta vie ?","Qu'est-ce que tu n'avoueras jamais à tes parents ?","Ton pire cauchemar récurrent ?","Quel est le compliment qui te gêne le plus ?","Ton pire achat sur Vinted ou Leboncoin ?",
"Qui ici serait le meilleur pour garder ton animal ?","Ton record de verres en une soirée ?"]);
add(C[1].a,["Fais une démonstration de danse des années 80.","Raconte un souvenir d'enfance comme si c'était un film d'action.","Fais le tour de la table en serrant la main de chacun comme un ministre.","Imite le bruit de ton réveil… et ta tête quand il sonne.",
"Parle uniquement en chantant jusqu'à ton prochain tour.","Fais semblant d'être un serveur et prends la commande de toute la table.","Récite les jours de la semaine à l'envers, le plus vite possible.","Fais une pub pour {j} comme s'il/elle était à vendre.",
"Imite ton parent quand il/elle est énervé(e).","Fais le présentateur de Questions pour un champion pendant 30 secondes.","Mime un cuisinier qui se brûle.","Fais 10 secondes de moonwalk.","Dis 5 choses que tu adores chez {j}.","Raconte une blague nulle et ris-en toi-même très fort.","Fais l'interview de ton verre comme une star."]);
add(C[1].n,["chanté faux au karaoké en pensant chanter juste.","perdu un pari stupide.","fait la queue au mauvais guichet pendant 20 minutes.","oublié un rendez-vous chez le médecin.","renversé un verre sur quelqu'un.",
"pleuré de rire au point de ne plus respirer.","mangé un plat entier de pâtes à 3 h du matin.","fait semblant d'être occupé(e) au téléphone dans un ascenseur.","crié en regardant un match.","raté un train en le regardant partir.",
"répondu « bien et toi ? » à quelqu'un qui ne m'avait rien demandé.","menti sur un livre que je n'avais pas lu.","été en retard à mon propre anniversaire."]);
add(C[1].q,["se perdre dans son propre quartier ?","devenir un meme sur Internet ?","faire une crise de nerfs chez Ikea ?","écrire à son ex à cause de la nostalgie ?","dépenser 100 € en jeux sur téléphone ?","adopter un cochon ?","se marier en jogging ?","oublier son anniversaire de mariage ?","gagner un concours de mangeur de hot-dogs ?","faire un road trip sans GPS ?"]);
add(C[1].t,["Pouvoir parler aux animaux | Pouvoir parler aux plantes","Revivre ton enfance | Voir ton futur","Un an sans fromage | Un an sans chocolat","Être le meilleur danseur | Le meilleur chanteur","Avoir un coloc fantôme | Un coloc qui ronfle",
"Vivre dans un film Disney | Dans un film Marvel","Être toujours trempé(e) | Toujours avoir du sable dans tes chaussures","Ne plus jamais pouvoir t'asseoir | Ne plus jamais pouvoir t'allonger","Un chien qui parle | Un chat qui chante","Être riche et seul(e) | Pauvre et entouré(e)"]);
add(C[2].v,["Quel est le message le plus gênant de ta conversation avec ton ex ?","Tu as déjà été jaloux/jalouse d'une personne ici ?","Le pire moment d'un premier rencard pour toi ?","Tu as déjà dragué le/la partenaire d'un(e) ami(e) ?",
"Qui ici serait le pire beau-père ou la pire belle-mère ?","Tu as déjà eu peur de te faire griller par ton/ta partenaire ? Pour quoi ?","Ton plus gros mensonge sur une appli de rencontre ?","Ta pire réaction en apprenant une infidélité ?",
"Combien de temps tu attends avant de répondre à un crush ?","Tu as déjà été amoureux/amoureuse de deux personnes en même temps ?","Qui ici t'a déjà fait une crise de jalousie ?","Tu as déjà rompu par flemme ?"]);
add(C[2].a,["Mime ta tête quand ton crush ne répond pas.","Fais un selfie « couple » avec {j} et une pose ridicule.","Imite la voix que tu prends quand tu dragues.","Lis le dernier message reçu de ta mère avec une voix sexy.","Décris ton ex en 3 mots, sans méchanceté (ou presque).",
"Fais une demande en mariage à {j} avec un objet de la table.","Raconte ton pire rencard en mimant uniquement.","Fais un compliment à {j} façon Shakespeare."]);
add(C[2].n,["recontacté un(e) ex à cause d'une chanson.","fait semblant de ne pas avoir vu un message.","eu un crush sur le serveur ou la serveuse d'un bar.","dragué quelqu'un sur un réseau social pro.","eu une rupture qui a duré plus d'un an à se terminer.","menti sur ma situation amoureuse pour ne pas blesser quelqu'un."]);
add(C[2].q,["se faire larguer pour un(e) prof de yoga ?","écrire un poème à son crush ?","se remettre avec son ex le soir du Nouvel An ?","tomber amoureux/amoureuse en vacances ?","avoir un dossier de captures d'écran de ses ex ?"]);
add(C[2].t,["Que ton ex épouse ton/ta meilleur(e) ami(e) | Que ton ex devienne ton boss","Un premier rencard en visio | Un premier rencard avec ta famille","Être largué(e) en public | Larguer en public","Une ex jalouse | Un ex collant"]);
add(C[3].v,["Ton meilleur souvenir de slow ?","Qu'est-ce qui te fait craquer en premier : les yeux, le sourire ou la voix ?","Qui ici a la plus belle voix ?","Ton bisou le plus inattendu ?","Tu as déjà fantasmé sur quelqu'un rencontré en soirée ?",
"Ce que tu portes pour te sentir sexy ?","Ta technique pour faire comprendre que tu es intéressé(e) ?","Tu as déjà eu un coup de foudre physique en salle de sport ?","La partie de ton corps dont tu es le/la plus fier/fière ?","Ton rencard le plus romantique ?"]);
add(C[3].a,["Fais un massage du crâne à {j} pendant 30 secondes.","Regarde {j} et décris-lui son plus bel atout.","Fais un bisou sur le front de {j}.","Danse un slow imaginaire avec {j}, joue contre joue.","Murmure une phrase de drague ultra kitsch à {j}.",
"Prends la main de {j} et lis-lui son avenir amoureux.","Fais une photo de profil sexy avec l'aide de {j}.","Assieds-toi tout près de {j} jusqu'à ton prochain tour."]);
add(C[3].n,["embrassé quelqu'un sur une piste de danse.","fait un câlin coquin dans une voiture.","eu un rencard qui a fini à 6 h du matin.","dragué quelqu'un en vacances sans parler sa langue.","flirté avec un(e) collègue lors d'un séminaire.","envoyé un message coquin et regretté juste après."]);
add(C[3].q,["finir la soirée en rouleau de printemps sur le canapé ?","faire le premier pas ce soir ?","avoir le plus de suçons cette année ?","séduire quelqu'un en dansant ?","envoyer un vocal coquin bourré(e) ?"]);
add(C[3].t,["Un bisou dans le cou | Un bisou sur l'épaule","Danser collé(e) | Danser en rythme","Un rencard en terrasse | Un rencard au coin du feu","Être séduit(e) par un regard | Par une voix"]);
add(C[4].v,["Ton fantasme de lieu public ?","La chose la plus osée que tu aies faite au téléphone ?","Tu as déjà eu un plan dans la maison de tes parents ?","Ton record de partenaires en un mois ?","Le meilleur moment pour toi : matin, après-midi ou nuit ?",
"La position que tu détestes ?","Tu as déjà fait l'amour en étant pressé(e) par le temps ? Où ?","Un fantasme que tu as avoué et regretté ?"]);
add(C[4].a,["Embrasse le cou de {j} jusqu'à ce qu'il/elle rie.","Fais une lap dance de 30 secondes sur la chanson de ton choix à {j}.","Mime une scène de film coquin avec {j}, habillés.","Enlève un vêtement de ton choix et donne-le à {j} jusqu'à la fin du tour.",
"Murmure à {j} les 3 choses que tu lui ferais.","Laisse {j} te faire un suçon (si tu es partant(e)).","Passe ta main lentement dans le dos de {j} pendant 10 secondes."]);
add(C[4].n,["fait l'amour dans un camping avec des voisins à côté.","fait l'amour sous la pluie.","utilisé un déguisement au lit.","eu un rapport dans un lieu de travail désert.","envoyé une vidéo coquine en direct."]);
add(C[4].q,["avoir un fantasme de pompier ?","finir la soirée sans haut ?","faire l'amour dans un ascenseur cette année ?","avoir déjà fait l'amour avec quelqu'un rencontré le jour même ?"]);
add(C[4].t,["Une nuit torride | Un week-end romantique","Les préliminaires | Le grand final","Doux | Sauvage","Dans une cabane | Dans un palace"]);

/* ===== Mix ===== */
add(M.virus[1],["{p} doit répondre à chaque question par une autre question.","Tout le monde doit applaudir quand {p} boit.","{p} est le juge : il/elle tranche tous les débats.","{p} n'a plus le droit d'utiliser ses mains pour boire… sauf la main de {j} !",
"{p} doit parler comme Yoda.","Interdit de dire « non » à {p} : {B1} sinon.","{p} imite un présentateur à chaque fois qu'il/elle parle."]);
add(M.all[1],["Tous ceux qui ont déjà été en retard au boulot cette semaine {B1p}.","Tous ceux qui ont déjà eu un accident de voiture {B1p}.","Tous ceux qui ont un ex qui est dans leurs abonnés {B1p}.","Tous ceux qui n'ont pas mangé de légumes aujourd'hui {B1p}.",
"Tous ceux qui ont déjà fait une soirée pyjama adulte {B1p}.","Tous ceux qui ont un enfant ou un neveu/nièce {B1p}.","Le dernier à avoir changé de téléphone distribue {U2}."]);
add(M.all[3],["Tous ceux qui ont déjà embrassé quelqu'un ce mois-ci {B1p}.","Tous ceux qui ont des sous-vêtements rouges ce soir {B2p}."]);

/* ===== Autres jeux ===== */
add(A.imp[1],["Marteau|Tournevis","Clé|Cadenas","Crocodile|Alligator","Tigre|Panthère","Cerf|Élan","Pizza|Calzone","Tacos|Burrito","Sushi|Sashimi","Mojito|Caïpirinha","Bière blonde|Bière brune",
"Barbe|Moustache","Mascara|Eye-liner","Basket|Volley","Natation|Plongée","Karaté|Judo","Avion|Hélicoptère","Bateau|Kayak","Fusée|Satellite","Bus|Tram","Métro|RER"]);
add(A.bomb[1],["Un truc qu'on trouve à la plage","Un mot qui finit par « -age »","Un personnage de série","Un objet en plastique","Un truc qui roule","Un mot qui commence par « pa »","Un plat qu'on mange avec les doigts","Une raison de pleurer","Une chanson de Michael Jackson","Un truc qu'on fait au bureau"]);
add(A.mime[1],["Faire un selfie raté","Danser la macarena","Se réveiller avec la gueule de bois","Monter à cheval","Se faire couper les cheveux","Promener un chien têtu","Ouvrir un bocal impossible","Faire du ski de fond","Passer l'aspirateur","Chanter sous la douche"]);
add(B.quiz,["Quelle est la capitale de la Colombie ?|Bogota|Medellín|Cali|Caracas","Combien de jours compte le mois de février d'une année bissextile ?|29|28|30|31","Quel est le symbole chimique de l'argent ?|Ag|Ar|Au|Al",
"Quel pays est surnommé le « pays du Soleil-Levant » ?|Le Japon|La Chine|La Corée du Sud|La Thaïlande","Combien de cordes a un violon ?|4|5|6|3","Qui a peint Les Nymphéas ?|Claude Monet|Edgar Degas|Auguste Renoir|Paul Cézanne",
"Quel est le plus long fleuve d'Europe ?|La Volga|Le Danube|Le Rhin|La Loire","Combien d'anneaux sur le drapeau olympique ?|5|4|6|7","Quel est le nom du vaisseau de Han Solo ?|Le Faucon Millenium|L'Enterprise|Le Destroyer stellaire|Le Nostromo",
"Quel personnage dit « Vers l'infini et au-delà ! » ?|Buzz l'Éclair|Woody|Superman|Captain Marvel","Quelle couleur obtient-on en mélangeant rouge et bleu ?|Violet|Vert|Marron|Orange","Combien de minutes dure une mi-temps au foot ?|45|40|30|50",
"Quel fruit est le plus produit au monde ?|La banane|La pomme|L'orange|Le raisin","Quel pays a inventé les frites, selon les Belges ?|La Belgique|La France|Les Pays-Bas|L'Espagne"]);
B.quiz=B.quiz.filter(function(q){return q.indexOf("Quel fruit est le plus produit au monde")<0&&q.indexOf("selon les Belges")<0});
add(B.par[1],["Qui ici serait le pire en cas de panne d'ascenseur ?","Qui ici a le plus de chance de gagner au loto ?","Qui ici ronfle le plus ?","Qui ici a la pire écriture ?","Qui ici mentirait pour avoir la dernière part ?"]);
add(B.par[3],["Qui ici a le plus beau corps à ton avis ?","Qui ici t'inviterais-tu à boire un verre en tête-à-tête ?","Qui ici serait le plus coquin en vacances ?"]);
add(G3.tab,["Garage|Voiture|Maison|Porte|Outils","Camping-car|Vacances|Rouler|Dormir|Route","Château de sable|Plage|Seau|Pelle|Mer","Cinéma|Film|Écran|Popcorn|Salle","Banane|Jaune|Fruit|Singe|Peau","Bowling|Quilles|Boule|Strike|Piste",
"Loto|Numéros|Gagner|Argent|Ticket","Mariage|Bague|Église|Robe|Fête","Facteur|Lettres|Courrier|Poste|Vélo","Dentiste|Dents|Carie|Fraise|Bouche"]);
add(G3.est,["En quelle année a été inventé le téléphone ?|1876|1876","Combien de titres compte l'album Thriller de Michael Jackson ?|9|9 titres"]);
add(G3.deb,["On devrait pouvoir amener son chien au bureau","Les vacances en famille, c'est un sport extrême","Il faut dire la vérité sur un cadeau nul","Les rideaux, c'est surcoté","Le petit-déjeuner salé est meilleur que le sucré"]);
add(G3.nioui,["Tu aimes les chats ?","Tu as déjà voyagé seul(e) ?","Tu es du matin ?","Tu as fini ton verre ?","Tu sais nager le papillon ?"]);
add(D.seat[1],["Quel est le moment où tu as été le plus fier/fière de toi ?","Qu'est-ce que tu aimerais apprendre avant tes 40 ans ?","Quelle est la chose la plus courageuse que tu aies faite ?"]);
add(D.seat[3],["Qu'est-ce qui te fait perdre la tête chez quelqu'un ?","Ton meilleur souvenir sous la couette ?"]);
add(D.songs,["Remember the Time – Michael Jackson","They Don't Care About Us – Michael Jackson","Wanna Be Startin' Somethin' – Michael Jackson","Pump It – Black Eyed Peas","I Gotta Feeling – Black Eyed Peas","Sexy Back – Justin Timberlake","Can't Stop the Feeling – Justin Timberlake","Mi Gente – J Balvin","Feel Good Inc. – Gorillaz","Ma philosophie – Amel Bent"]);
add(E.miss[1],["Trouve quelqu'un dans le bar qui fait le même boulot que toi.","Fais trinquer ta table avec une autre table en même temps.","Demande au barman de te surprendre avec une boisson (sans alcool si tu veux)."]);
add(E.secret,["Fais en sorte que {j} chante une chanson.","Fais dire « pastèque » à quelqu'un.","Fais en sorte que toute la table fasse un toast à toi."]);
add(L.pitch,["Une machine à remonter le temps qui ne recule que de 5 minutes","Des lacets qui se défont tout seuls","Un aspirateur à moustiques","Un pull de Noël avec chauffage intégré","Un téléphone qui ne capte que tes ex"]);
add(L.excuse,["Tu as oublié d'aller chercher ton enfant à l'école.","Tu as mangé le dessert du mariage avant les mariés.","Tu as mis le feu au barbecue des voisins."]);
add(L.complot,["Les plantes vertes nous espionnent","Les pingouins ont inventé le smoking","Le vendredi 13 est une invention des assureurs","Les feux d'artifice sont des messages pour les extraterrestres"]);
add(L.bruit,["Un dragon qui a mal aux dents","Un aspirateur amoureux","Un poisson rouge qui se dispute","Un ninja qui marche sur des chips"]);
add(L.persona,["un ninja retraité","la dernière frite du paquet","un Pokémon qui veut devenir comptable","un sapin de Noël en janvier"]);
add(L.phrase,["Où est passée ma chaussette gauche ?","Je viens du futur pour te dire de ne pas manger ce kebab.","Silence, ma raclette est en train de cuire."]);
add(L.dico,["Écornifleur|Pique-assiette, parasite qui vit aux dépens des autres.","Pétulant|Plein d'entrain, vif et impétueux.","Atrabilaire|Grincheux, d'humeur noire.","Galimatias|Discours confus et embrouillé."]);
add(R.spy,["Salon de coiffure pour chiens","Fête foraine","Bowling","Karaoké","Club de strip-tease","Vestiaire de foot","Prison de haute sécurité","Escape game","Maison hantée","Croisière"]);
add(R.mouton[1],["Combien de fois par mois tu vas au resto ?|Combien de fois par mois tu appelles tes parents ?","Qui ici gagnerait à un jeu télé ?|Qui ici perdrait ses clés en premier ?","Combien d'heures par semaine tu passes en voiture ?|Combien d'heures par semaine tu passes devant des séries ?"]);
add(R.mouton[3],["Combien de bisous tu as donnés cette semaine ?|Combien de verres tu as bus cette semaine ?","Qui ici a le plus de succès ?|Qui ici est le plus maladroit ?"]);
})();
