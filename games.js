// Données des jeux de groupe
window.GAMES = {
// Imposteur : paires de mots proches "civil|imposteur" (on inverse au hasard)
imp: {
1: [
"Pizza|Burger","Chat|Chien","Plage|Piscine","Café|Thé","Netflix|YouTube","Avion|Train","Bière|Vin","Lune|Soleil",
"Football|Rugby","Paris|Londres","Ski|Snowboard","Guitare|Piano","Pomme|Poire","Mariage|Anniversaire","Médecin|Infirmier",
"Policier|Pompier","Vampire|Zombie","Instagram|TikTok","Croissant|Pain au chocolat","Montagne|Colline","Kebab|Tacos",
"Noël|Halloween","Cinéma|Théâtre","Moto|Scooter","Fourchette|Cuillère","Lit|Canapé","Douche|Bain","Prof|Élève",
"Mer|Lac","Requin|Dauphin","Coca|Pepsi","Glace|Sorbet","Chocolat|Caramel","Facteur|Livreur","Roi|Prince",
"Château|Palais","Banane|Mangue","Tennis|Badminton","Boxe|Judo","Taxi|Uber","Supermarché|Marché","Valise|Sac à dos",
"Lunettes|Lentilles","Montre|Bracelet","Ketchup|Mayonnaise","Raclette|Fondue","Crêpe|Gaufre","Dinosaure|Dragon",
"Fantôme|Sorcière","Pirate|Viking","Astronaute|Pilote","Camping|Hôtel","Vélo|Trottinette","Sapin|Palmier",
"Hiver|Automne","Pluie|Neige","Cheval|Âne","Lion|Tigre","Abeille|Guêpe","Frites|Chips","Couteau|Ciseaux",
"Jean|Jogging","Basket|Chaussure de ville","Rappeur|Chanteur","Concert|Festival","Boulanger|Pâtissier","Sushi|Ramen",
"Champagne|Prosecco","Barbecue|Plancha","Uno|Belote","PlayStation|Xbox","Batman|Superman","Spa|Sauna"
],
3: [
"Bisou|Câlin","Lingerie|Pyjama","Rencard|Coup d'un soir","Tinder|Meetic","Massage|Caresse","Strip-tease|Lap dance",
"Jacuzzi|Baignoire","Menottes|Bandeau","Suçon|Morsure","Ex|Crush","Slow|Twerk","Préservatif|Pilule",
"Draguer|Séduire","Nuit de noces|Lune de miel","Sexto|Nude","Plan à trois|Échangisme","Fantasme|Rêve érotique","Chantilly|Chocolat fondu"
]},
// La Bombe : catégories, chacun cite un truc et passe le téléphone
bomb: {
1: [
"Une marque de voiture","Un pays d'Europe","Un fruit","Un légume","Un animal de la ferme","Un métier","Un prénom féminin",
"Un prénom masculin","Un plat français","Une marque de vêtements","Un sport","Un instrument de musique","Une capitale",
"Un fromage","Un super-héros","Un personnage de dessin animé","Une couleur","Un film de Disney","Un chanteur français",
"Une marque de soda","Un mot qui rime avec « -tion »","Un truc qu'on trouve dans une salle de bain","Une ville de France",
"Un dessert","Une appli de téléphone","Un pokémon","Un footballeur","Un jeu vidéo","Une série télé","Un cocktail",
"Une partie du corps","Un truc qu'on emmène à la plage","Un moyen de transport","Une émission de télé","Un insecte",
"Un oiseau","Un poisson ou animal marin","Une marque de téléphone","Un mot anglais utilisé en français","Une chaîne de fast-food",
"Une boisson alcoolisée","Une épice ou herbe","Un acteur ou une actrice","Un chiffre romain","Un département français",
"Un truc qui pique","Un truc qui colle","Un truc rond","Un truc rouge","Un mot de 3 lettres","Une insulte gentille",
"Un vêtement","Un meuble","Une matière à l'école","Un monument célèbre","Un jeu de société","Un dinosaure",
"Un rappeur","Un truc qu'on trouve dans un frigo","Un personnage historique","Une fête ou un jour férié","Un métal",
"Une langue étrangère","Un outil de bricolage","Un réseau social","Une marque de chips ou de bonbons"
],
3: [
"Un endroit pour un premier rencard","Un truc sexy","Une phrase de drague","Un surnom affectueux","Une tenue sexy",
"Un endroit insolite pour un bisou","Une partie du corps qu'on peut embrasser","Un mot pour dire faire l'amour",
"Un accessoire coquin","Un truc qui rend quelqu'un attirant","Une appli de rencontre","Un fantasme classique",
"Un red flag en couple","Un truc à faire en couple","Une position (sans gêne !)","Un film romantique ou érotique"
]},
// Mime & Devine : mots à faire deviner
mime: {
1: [
"Pompier","Astronaute","Pingouin","Brosse à dents","Parapluie","Embouteillage","Selfie","Karaoké","Chewing-gum","Vampire",
"Dentiste","Kangourou","Surfeur","Bouteille de champagne","Mariage","Escargot","Coiffeur","Ascenseur","Toboggan","Pirate",
"Montagnes russes","Clown","Boxeur","Jongleur","Ninja","Zombie","Licorne","Spaghetti","Sèche-cheveux","Batteur","DJ",
"Pêcheur","Fantôme","Plongeur","Tondeuse à gazon","Raclette","Gorille","Danseuse étoile","Machine à laver","Feu d'artifice",
"Pizzaiolo","Chauffeur de bus","Robot","Méduse","Chef d'orchestre","Bonhomme de neige","Moustique","Barbecue","Taxi",
"Tapis volant","Sumo","Alarme incendie","Yoga","Cow-boy","Agent de sécurité","Tour Eiffel","Escalier","Cascadeur",
"Volcan","Avion en papier","Château de sable","Paparazzi","Photocopieuse","Coup de soleil","Hoquet","Éternuement",
"Grand-mère","Bébé qui pleure","Mime","Statue","Policier","Arbitre","Pom-pom girl","Magicien","Chirurgien","Facteur",
"Influenceur","Serveur","Caissière","Prof de sport","Footballeur qui simule","Lancer de nains","Rodéo","Bowling",
"Golf","Escrime","Saut à l'élastique","Parachute","Trampoline","Patin à glace","Ski","Haltérophilie","Tir à l'arc",
"Course en sac","Château fort","Dragon","Sorcière","Père Noël","Lapin de Pâques","Momie","Loup-garou","Sirène",
"Gâteau d'anniversaire","Popcorn","Glace qui fond","Hamburger","Spaghettis","Huître","Ananas","Banane","Citron",
"Dormir debout","Lendemain de soirée","Gueule de bois","Retard au boulot","Rupture","Demande en mariage","Entretien d'embauche",
"Bouchon sur l'autoroute","Panne d'essence","Bug informatique","Wifi qui ne marche pas","Téléphone sans batterie",
"Douche froide","Moustique la nuit","Réveil qui sonne","Lundi matin","Soldes","File d'attente","Camping sous la pluie"
],
3: [
"Strip-tease","Lap dance","Premier bisou","Rencard raté","Coup de foudre","Drague en boîte","Suçon","Massage","Slow",
"Lune de miel","Lingerie","Jacuzzi","Menottes","Walk of shame","Se faire surprendre","Sexto","Câlin","Clin d'œil",
"Tinder","Dîner aux chandelles","Bain de minuit","Body shot","Twerk","Plan à trois","Fantasme"
]},
// La Roulette : sorts (a = action, v = vérité, g = gage, x = texte libre)
roue: [
{w:22,k:"a",e:"🔥",t:"Action !"},
{w:22,k:"v",e:"💬",t:"Vérité !"},
{w:12,k:"g",e:"🎯",t:"Gage !"},
{w:9,k:"d",e:"🎁",t:"Cadeau !"},
{w:7,k:"b",e:"🍻",t:"Sanction de la roue !"},
{w:8,k:"x",e:"👑",t:"Tu choisis quelqu'un qui prend un gage à ta place."},
{w:6,k:"x",e:"🛡️",t:"Immunité : si la roue retombe sur toi, tu peux relancer."},
{w:7,k:"x",e:"🌍",t:"Tout le monde sauf toi prend le gage : {p}"},
{w:8,k:"x",e:"✊",t:"Duel pierre-feuille-ciseaux contre {j}. Le perdant : {p}"},
{w:6,k:"x",e:"📜",t:"Tu inventes une règle (ex : interdit de dire « oui »). Qui l'enfreint : gage."},
{w:6,k:"x",e:"🗣️",t:"Raconte une anecdote croustillante sur {j}."},
{w:5,k:"x",e:"🔄",t:"Échange ta place avec {j} jusqu'à la fin de la partie."},
{w:4,k:"x",e:"🍀",t:"Rien du tout. Chanceux(se) !"}
]
};
