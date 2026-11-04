// Lot n°2 de cartes supplémentaires
(function(){
var ADD={
1:{
v:["Quelle est la chose la plus bête que tu aies faite pour impressionner quelqu'un ?","Qui ici t'a le plus déçu(e) une fois ? Pourquoi ?","Ton pire voisin, raconte.","Quel est ton plus gros caprice d'adulte ?",
"Quelle excuse bidon tu sors le plus souvent pour annuler ?","Combien de temps tu as tenu à ton dernier régime ou ta dernière résolution ?","Le pire cadeau que tu aies offert ?","Si tu devais vivre avec quelqu'un d'ici pendant un mois, qui ?",
"Quel est le plus gros mensonge que tu racontes encore à tes parents ?","Ton plus gros fou rire, c'était quand ?","Quelle est la dernière chose que tu as volée, même un stylo ?","Qu'est-ce que tu fais quand personne ne te regarde ?",
"Ta pire honte en public ?","Quelle célébrité tu ne supportes pas ?","Ton pire coloc ou ta pire colocataire ?","Quel est le dernier truc qui t'a mis vraiment en colère ?",
"Qui ici serait le premier à te balancer à la police ?","La chose la plus folle que tu aies faite en vacances ?","Combien de verres pour que tu commences à chanter ?","Ton plus gros échec culinaire ?"],
a:["Fais l'imitation de la personne à ta droite pendant 30 secondes.","Raconte ta pire gueule de bois en mimant les symptômes.","Fais la voix off d'un documentaire animalier en décrivant {j}.",
"Vends-nous ton verre comme un télé-achat.","Fais un rap de 4 phrases sur la soirée.","Montre ta photo la plus moche de ta galerie.","Laisse {j} choisir ton fond d'écran pour la soirée.",
"Fais une danse de victoire comme si tu venais de gagner au loto.","Parle comme un présentateur de JT jusqu'à ton prochain tour.","Fais une demande en mariage improvisée à ton verre.",
"Appelle quelqu'un et commande une pizza… à un ami.","Dis 3 qualités de chaque joueur en moins de 30 secondes.","Tiens une conversation avec {j} uniquement en questions.","Fais 10 pompes d'affilée, sans tricher.","Laisse le groupe te poser 3 questions, réponds sans réfléchir."],
n:["dormi plus de 14 heures d'affilée.","fini un paquet de biscuits entier seul(e).","fait semblant d'être malade pour éviter une soirée.","perdu mes clés plus de 3 fois dans l'année.",
"envoyé une capture d'écran à la personne dont je parlais.","raté mon arrêt parce que je dormais.","inventé une excuse pour quitter un rencard.","menti sur mon âge pour entrer quelque part.",
"pleuré devant une pub.","fait une sieste au travail.","acheté un truc juste parce qu'il était en promo.","eu une dispute pour l'addition.","oublié le prénom de quelqu'un que je connais depuis des années.",
"chanté sous la douche à fond.","menti sur un CV ou lors d'un entretien."],
q:["oublier son portefeuille ce soir ?","finir sur un plateau télé ?","se perdre en rentrant ce soir ?","avoir le plus d'onglets ouverts sur son téléphone ?","se battre avec un distributeur automatique ?",
"refaire sa déco tous les 6 mois ?","écrire un livre sur sa vie ?","se faire arnaquer sur Leboncoin ?","faire une sieste pendant la soirée ?","devenir influenceur(se) ?",
"pleurer à un mariage ?","se lancer dans une reconversion à 40 ans ?"],
t:["Toujours être en retard de 10 minutes | Toujours être en avance de 30 minutes","Lire dans les pensées | Voir l'avenir","Ne plus jamais manger au restaurant | Ne plus jamais cuisiner",
"Vivre à Paris | Vivre à la campagne","Un week-end à Las Vegas | Une semaine aux Maldives","Plus de réseaux sociaux | Plus de séries","Être célèbre | Être riche et inconnu(e)",
"Avoir un majordome | Avoir un chauffeur","Plus jamais de fromage | Plus jamais de pain","Pouvoir te téléporter | Pouvoir t'arrêter le temps","Changer de prénom | Changer de visage",
"Vivre sans musique | Vivre sans internet"]
},
2:{
v:["Quel est le pire truc que tu aies fait à un(e) ex ?","As-tu déjà dragué quelqu'un juste pour un pari ?","Ton plus gros râteau devant témoins ?","Combien d'ex as-tu encore sur les réseaux ?",
"Tu as déjà été jaloux/jalouse d'un(e) ami(e) de ton/ta partenaire ?","As-tu déjà vérifié la localisation de quelqu'un en cachette ?","Le pire surnom qu'un(e) partenaire t'ait donné ?",
"Qui ici aurait le plus de chances de te pardonner une trahison ?","Ce que tu détestes le plus dans les applis de rencontre ?","Ton record de messages envoyés à quelqu'un qui ne répondait pas ?",
"Un red flag que tu as ignoré et regretté ?","As-tu déjà été le/la plus jaloux(se) dans une relation ?","Qu'est-ce que tu cacherais à tes beaux-parents à tout prix ?","Ta pire rupture : par quel moyen ?","Qui ici serait le pire à la tête d'un pays ?"],
a:["Imite ta propre tête quand tu reçois un message de ton crush.","Raconte ton pire rencard en 3 phrases, façon film d'horreur.","Laisse {j} répondre au prochain message que tu reçois.",
"Fais un compliment ultra gênant à {j}.","Mime une scène de jalousie avec {j}.","Laisse le groupe voir tes 3 dernières photos supprimées.","Écris un poème de 4 vers pour {j} et lis-le.",
"Danse sur la prochaine chanson comme si personne ne te regardait.","Fais une vidéo de 10 s pour souhaiter la bonne soirée à ton ex… et ne l'envoie pas (ou bois).","Joue le rôle d'un coach en séduction pour {j} pendant 1 minute."],
n:["regretté un tatouage.","écrit un message à mon ex et supprimé juste avant d'envoyer.","eu un crush sur un(e) collègue marié(e).","rompu avec quelqu'un par message.",
"été pris(e) en train de mentir sur ma localisation.","fait une crise de jalousie pour un like.","menti à mes potes pour aller voir quelqu'un.","eu une relation cachée.",
"stalké quelqu'un pendant plus d'une heure d'affilée.","été pris(e) en flagrant délit de flirt."],
q:["avoir un(e) ex qui lui écrit encore ?","finir en couple avec son/sa meilleur(e) ami(e) ?","mentir sur son nombre d'ex ?","refuser un rencard par flemme ?","se faire tatouer le prénom de quelqu'un ?",
"avoir deux crushs en même temps ?","se remettre avec quelqu'un par ennui ?","lire les messages de son/sa partenaire pendant qu'il/elle dort ?"],
t:["Que ton ex te voie au top | Que ton ex te voie au pire","Un rencard surprise | Un rencard organisé par tes potes","Le/la partenaire parfait(e) mais ennuyeux(se) | Imparfait(e) mais passionnant(e)",
"Avoir toujours raison en couple | Avoir toujours la paix","Ton ex au même boulot | Ton ex comme voisin(e)","Une déclaration publique | Une lettre manuscrite","Ne jamais savoir si on te trompe | Tout savoir, même ce qui fait mal",
"Une relation de 6 mois intense | 6 ans tranquille"]
},
3:{
v:["La tenue qui te fait le plus d'effet sur quelqu'un ?","Ton meilleur souvenir sous la couette ?","Le compliment physique qui te fait fondre ?","Tu as déjà dit oui à un rencard uniquement pour le physique ?",
"Ton plus long baiser ?","Qui ici aurait le plus de succès en boîte ?","Ton fantasme de rencard idéal, sans limite de budget ?","As-tu déjà été surpris(e) en plein câlin ?",
"La partie du corps que tu regardes en premier ?","Le plus beau corps que tu aies vu en vrai ?","Tu dors plutôt nu(e) ou en pyjama ?","As-tu déjà eu un coup de cœur pour quelqu'un dans un train ou un avion ?",
"Le message le plus coquin que tu aies reçu ?","Ce qui t'a le plus excité(e) récemment ?","Tu préfères un bisou dans le cou ou derrière l'oreille ?"],
a:["Fais un bisou sur l'épaule de {j}.","Regarde {j} et dis-lui une phrase sexy sans rire.","Mime un premier baiser avec ta main.","Laisse {j} te faire un massage de la nuque.",
"Fais une danse lente devant {j}.","Murmure le prénom de {j} de la façon la plus sexy possible.","Embrasse la joue de {j} très près de la bouche.","Fais un défilé « sexy » jusqu'au bout de la pièce et retour.",
"Retire une chaussette avec les dents.","Garde ta main dans celle de {j} jusqu'à ton prochain tour.","Décris ton/ta partenaire idéal(e) en regardant {j}.","Fais une photo glamour avec {j}, joue contre joue."],
n:["embrassé quelqu'un dont j'avais oublié le prénom le lendemain.","eu un rencard au cinéma où on n'a pas regardé le film.","flirté par message pendant des heures avec un(e) inconnu(e).",
"fait le premier pas avec quelqu'un de plus âgé.","eu une relation à distance très… créative.","passé une nuit à juste s'embrasser.","dormi chez quelqu'un après un premier rencard.","eu un crush sur le/la partenaire d'un(e) ami(e) présent(e) ce soir."],
q:["envoyer un message coquin par erreur ?","avoir eu le plus d'aventures en vacances ?","faire un strip-tease si on lui demande gentiment ?","craquer pour quelqu'un dans ce bar ?",
"avoir déjà eu un plan dans une voiture ?","séduire quelqu'un en moins de 10 minutes ?","porter de la lingerie sexy en ce moment ?","avoir le meilleur sens de la séduction ?"],
t:["Un bisou de {j} | Un compliment de tout le groupe","Être draguée/dragué en boîte | Sur une appli","Un premier rendez-vous au bar | Au resto","Lumière tamisée | Bougies partout",
"Un slow langoureux | Un rock endiablé","Que ton crush t'écrive | Croiser ton crush par hasard","Une nuit avec un(e) inconnu(e) | Une nuit avec un(e) ex","Être réveillé(e) par des bisous | Par le petit-déj au lit"]
},
4:{
v:["Ton record du plus long temps sans sexe ?","La chose la plus coquine que tu aies faite en vacances ?","As-tu déjà fait l'amour avec quelqu'un rencontré le soir même dans un bar ?","Ton fantasme avec un uniforme ?",
"Le pire endroit où tu l'as fait ?","Combien de partenaires ont eu ton numéro sans que tu les rappelles ?","Ta technique de séduction quand tu veux finir la nuit avec quelqu'un ?",
"As-tu déjà été pris(e) en flagrant délit par un colocataire ?","As-tu déjà simulé pour que ça s'arrête ?","Ce que tu adores qu'on te fasse ?","Le plus gros malaise de ta vie sexuelle ?","Plutôt câlin coquin dans la douche ou dans le lit ?"],
a:["Mordille l'oreille de {j} pendant 5 secondes.","Fais un massage des cuisses de {j} pendant 20 secondes (par-dessus les vêtements).","Raconte à {j} ce que tu lui ferais en 3 phrases.",
"Embrasse {j} dans le cou en le/la tenant par la taille.","Enlève ta ceinture ou un accessoire de façon très sexy.","Danse en mode boîte de strip-tease pendant 20 secondes.","Laisse {j} poser sa main où il/elle veut sur toi pendant 10 secondes (zones raisonnables).",
"Fais semblant d'enlever le haut de {j} avec les dents.","Fais un bisou sur le ventre de {j}.","Échange ton haut avec {j} jusqu'à ton prochain tour."],
n:["fait l'amour dans un train de nuit.","eu un rapport dans une piscine ou un jacuzzi.","envoyé une vidéo intime.","eu une relation avec quelqu'un beaucoup plus âgé(e).",
"fait l'amour en sachant que quelqu'un pouvait entendre.","oublié de verrouiller la porte… au mauvais moment.","été dans un sauna libertin.","fait l'amour en extérieur en pleine journée.","acheté de la lingerie juste pour une nuit.","eu un sex-friend dans mon cercle d'amis."],
q:["avoir déjà fait l'amour dans un lieu public ?","avoir un tiroir rempli d'accessoires ?","dire oui à un plan à trois ce soir ?","avoir le plus de nudes dans son téléphone ?","avoir couché avec un(e) ex de quelqu'un ici ?",
"être le plus bruyant(e) ?","avoir un fantasme d'infirmier(e) ou de pompier ?","finir la soirée sans ses sous-vêtements ?"],
t:["Les menottes | Le jeu de rôle","Dans le noir | Devant un miroir","Doux et lent | Rapide et sauvage","Toute la nuit | Trois fois dans la journée","Être attaché(e) | Attacher",
"Un lap dance de {j} | Un massage de {j}","Une nuit avec ton crush | Une semaine avec ton/ta partenaire idéal(e) sans sexe","Le jacuzzi | La cabine d'essayage"]
}};
for(var l in ADD)for(var m in ADD[l]){var arr=window.CARDS[l][m];ADD[l][m].forEach(function(x){if(arr.indexOf(x)<0)arr.push(x)})}
})();
