// Données des 10 jeux adultes
window.GAMES4 = {
// La Bouteille : {s} = celui qui tourne, {t} = la cible
bottle: {
1:["{s} pose une question Vérité à {t}.","{t} fait une Action choisie par {s}.","{s} et {t} trinquent les yeux dans les yeux et boivent ensemble.","{t} distribue {u2}.",
"{s} fait un compliment sincère à {t}.","{t} raconte son pire souvenir de soirée.","{s} et {t} échangent un vêtement (veste, montre…) jusqu'au prochain tour.","{t} imite {s}. Le groupe juge."],
2:["{t} montre son dernier message envoyé à {s}.","{s} demande à {t} de raconter son pire rencard.","{t} note le physique de {s} sur 10.","{s} et {t} font un slow de 20 secondes.",
"{t} révèle à {s} un secret qu'il/elle n'a jamais dit au groupe.","{s} fait une déclaration d'amour façon télénovela à {t}."],
3:["{s} fait un bisou dans le cou de {t}.","{s} et {t} dansent collés 30 secondes.","{s} masse les épaules de {t} pendant 1 minute.","{t} murmure à {s} ce qui l'attire chez lui/elle.",
"{s} s'assoit sur les genoux de {t} jusqu'au prochain tour.","{s} et {t} se regardent dans les yeux 30 secondes à 10 cm."],
4:["{s} et {t} s'embrassent (un vrai bisou).","{t} enlève un vêtement choisi par {s}.","{s} fait une lap dance de 30 secondes à {t}.","{s} embrasse {t} à l'endroit de son choix (zones raisonnables).",
"7 minutes au paradis : {s} et {t} s'isolent 7 minutes… si les deux sont partants.","{s} passe un glaçon de sa bouche à celle de {t}."]
},
// Le Dé coquin
dice: {
soft:{a:["Chante un refrain à","Fais un compliment à","Imite","Fais rire","Fais un bras de fer avec","Raconte un souvenir avec"],z:null},
3:{a:["Embrasse","Masse","Caresse","Souffle doucement sur","Mordille","Effleure du bout des doigts"],z:["la main","le cou","l'épaule","la joue","l'oreille","le poignet"]},
4:{a:["Embrasse","Lèche","Mordille","Masse","Caresse","Embrasse longuement"],z:["le cou","le ventre","la cuisse","le dos","les lèvres","le lobe de l'oreille"]},
t:[5,10,10,15,20,30]
},
// Speed dating
date: {
1:["Ton job de rêve, et pourquoi tu ne le fais pas ?","Ton plus gros défaut en couple ?","Le truc qui te fait craquer direct chez quelqu'un ?","Ton rencard idéal ?",
"Ton pire rencard ?","Ce que tu cherches vraiment en ce moment ?","Ton red flag absolu ?","Chats ou chiens ? Et c'est éliminatoire ?","Tu cuisines ou tu commandes ?",
"Ton dernier coup de cœur (film, série, personne) ?","Ce que tes ex disent de toi ?","Ta destination pour une escapade à deux ?","Plutôt soirée canapé ou soirée jusqu'à 6 h ?","Ton plus gros talent caché ?"],
3:["Ce que tu remarques en premier chez quelqu'un ?","Ton plus gros fantasme de rencard ?","Premier bisou au premier rendez-vous : oui ou non ?","Plutôt séduire avec les yeux ou avec les mots ?",
"Ta tenue qui fait craquer ?","Ce qui te rend irrésistible selon toi ?","L'endroit le plus fou où tu as embrassé quelqu'un ?","Le compliment qui marche toujours sur toi ?",
"Tu préfères qu'on te drague franchement ou subtilement ?","Note mon sourire sur 10, sincèrement."]
},
// Tu me connais ?
know: {
1:["Quelle est la boisson préférée de {s} ?","Quel est le plat préféré de {s} ?","Quel est le métier de rêve de {s} ?","Quelle est la plus grande peur de {s} ?",
"Quelle est la série préférée de {s} ?","Où {s} rêve-t-il/elle de partir en vacances ?","Quel est le pire défaut de {s} selon lui/elle ?","Quel est l'animal préféré de {s} ?",
"À quelle heure {s} se lève-t-il/elle le week-end ?","Quel est le chanteur ou groupe préféré de {s} ?","Quel est le pire job qu'a fait {s} ?","Quelle est la ville natale de {s} ?",
"Quel est le plus gros caprice de {s} ?","Combien de frères et sœurs a {s} ?","Quel est le sport préféré de {s} ?","Quel est le jeu vidéo ou film culte de {s} ?"],
3:["Quel est le type physique de {s} ?","Quel est le pire ex de {s} (prénom ou description) ?","Quelle tenue fait craquer {s} ?","Où {s} a-t-il/elle eu son premier bisou ?",
"Quel est le fantasme avouable de {s} ?","Combien de temps a duré la plus longue relation de {s} ?","Qu'est-ce qui refroidit direct {s} chez quelqu'un ?","Quelle célébrité fait craquer {s} ?"]
},
// Confessions anonymes : idées
conf: {
1:["Un truc que personne ici ne sait sur toi","Ta pire honte de soirée","Un mensonge que tu as dit à quelqu'un ici","Ce que tu penses vraiment de quelqu'un ici (gentiment)",
"Ta plus grosse bêtise au boulot","Un secret de famille pas trop grave","Le truc le plus cher que tu as caché à tes proches"],
3:["Ton fantasme le plus avouable","La personne ici qui te plaît le plus (sans dire ton nom)","Le lieu le plus fou où tu as fait quelque chose de coquin","Ta pire expérience au lit",
"Le nombre de personnes avec qui tu as couché (ou à peu près)","Ce que tu n'as jamais osé faire au lit"]
},
// La Sellette : questions profondes / piquantes
seat: {
1:["Qu'est-ce qui te rend vraiment heureux(se) ?","De quoi as-tu le plus honte ?","Ton plus gros regret ?","Qu'est-ce que tu changerais dans ta vie demain ?","Qui ici compte le plus pour toi ?",
"As-tu déjà eu le cœur brisé ? Raconte.","Qu'est-ce que tes parents ne savent pas de toi ?","Où te vois-tu dans 10 ans ?","Ton plus gros échec ?","Qu'est-ce que tu n'as jamais pardonné ?",
"Quelle est ta plus grande fierté ?","Qu'est-ce qui te met le plus en colère ?","Quand as-tu pleuré pour la dernière fois ?","Quel est ton plus grand complexe ?","Qu'est-ce qui te manque le plus ?",
"Tu te sens où dans ta vie en ce moment, de 1 à 10 ?","Ce que tu aimerais qu'on dise de toi à ton enterrement ?","Le meilleur conseil qu'on t'ait donné ?"],
2:["Pourquoi ta dernière relation s'est terminée ?","As-tu déjà trompé quelqu'un ?","Qu'est-ce que tu reproches à ton ex ?","As-tu déjà été jaloux/jalouse de quelqu'un ici ?","Es-tu amoureux(se) en ce moment ?"],
3:["Quelqu'un ici t'a déjà attiré(e) ? Qui ?","Ton plus gros fantasme ?","Ta meilleure nuit ?","Ce que tu aimerais essayer au lit ?","As-tu déjà couché avec quelqu'un que tu regrettes ?","Ce qui te fait le plus d'effet chez quelqu'un ?"]
},
// Le Tribunal : chefs d'accusation
crime: {
1:["avoir ghosté quelqu'un cette année","être toujours en retard","avoir piqué la dernière part de pizza","ne jamais rendre l'argent prêté","parler de son boulot en soirée",
"être le premier à partir des soirées","avoir oublié un anniversaire important","raconter toujours les mêmes histoires","être scotché(e) à son téléphone","ne jamais payer sa tournée",
"avoir un goût musical douteux","faire semblant d'être malade pour éviter les soirées","se plaindre tout le temps","toujours avoir une excuse"],
3:["draguer tout ce qui bouge","avoir un(e) ex de trop dans ses contacts","envoyer des sextos au travail","avoir des yeux un peu trop baladeurs ce soir","être un(e) briseur(se) de cœurs","avoir menti sur son nombre de partenaires"]
},
// Fredonne-moi ça : titres de chansons (à fredonner, pas à chanter les paroles)
songs:["Thriller – Michael Jackson","Billie Jean – Michael Jackson","Bohemian Rhapsody – Queen","We Will Rock You – Queen","Alors on danse – Stromae","Papaoutai – Stromae",
"Djadja – Aya Nakamura","Les lacs du Connemara – Michel Sardou","Allumer le feu – Johnny Hallyday","Je te promets – Johnny Hallyday","Dernière danse – Indila",
"Bella – Gims","Sapés comme jamais – Gims","Tout oublier – Angèle","Balance ton quoi – Angèle","La Macarena – Los del Río","Despacito – Luis Fonsi","Gangnam Style – PSY",
"Shape of You – Ed Sheeran","Uptown Funk – Bruno Mars","Happy – Pharrell Williams","Get Lucky – Daft Punk","One More Time – Daft Punk","Seven Nation Army – The White Stripes",
"Smells Like Teen Spirit – Nirvana","I Will Survive – Gloria Gaynor","Dancing Queen – ABBA","Mamma Mia – ABBA","Like a Virgin – Madonna","Toxic – Britney Spears",
"Single Ladies – Beyoncé","Umbrella – Rihanna","Diamonds – Rihanna","Rolling in the Deep – Adele","Someone Like You – Adele","Bad Guy – Billie Eilish",
"Blinding Lights – The Weeknd","Shake It Off – Taylor Swift","Wake Me Up – Avicii","Titanium – David Guetta","Les Champs-Élysées – Joe Dassin","L'aventurier – Indochine",
"Ces soirées-là – Yannick","Tourner dans le vide – Indila","La Bohème – Charles Aznavour","Ne me quitte pas – Jacques Brel","La Vie en rose – Édith Piaf",
"Je veux – Zaz","Moi… Lolita – Alizée","Le Sud – Nino Ferrer","Freed from Desire – Gala","Mr. Brightside – The Killers","Eye of the Tiger – Survivor",
"Africa – Toto","Livin' on a Prayer – Bon Jovi","Highway to Hell – AC/DC","Hey Jude – The Beatles","Imagine – John Lennon","Wannabe – Spice Girls",
"Tchiki Boum – Niagara","Tchikita – Jul","Jefe – Ninho","Au DD – PNL","Bande organisée – Collectif 13"]
};
