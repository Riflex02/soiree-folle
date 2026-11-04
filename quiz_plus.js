// Gros lot de questions Culture G (capitales, villes, histoire, pop culture, sport, boissons)
(function(){
var Q=window.GAMES2.quiz;
function add(x){if(Q.indexOf(x)<0)Q.push(x)}
function shuf(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t}return a}
// Capitales : [libellé avec article, capitale, continent]
var CAP=[
["de la France","Paris","eu"],["de l'Autriche","Vienne","eu"],["de la Pologne","Varsovie","eu"],["de la Tchéquie","Prague","eu"],["de la Hongrie","Budapest","eu"],
["de la Roumanie","Bucarest","eu"],["de la Bulgarie","Sofia","eu"],["de la Grèce","Athènes","eu"],["de la Suède","Stockholm","eu"],["de la Finlande","Helsinki","eu"],
["du Danemark","Copenhague","eu"],["du Royaume-Uni","Londres","eu"],["de la Croatie","Zagreb","eu"],["de la Serbie","Belgrade","eu"],["de la Russie","Moscou","eu"],
["de l'Islande","Reykjavik","eu"],["de la Slovaquie","Bratislava","eu"],["de la Slovénie","Ljubljana","eu"],["de l'Albanie","Tirana","eu"],["de la Lituanie","Vilnius","eu"],
["de la Lettonie","Riga","eu"],["de l'Estonie","Tallinn","eu"],["des Pays-Bas","Amsterdam","eu"],["de l'Ukraine","Kiev","eu"],
["du Japon","Tokyo","as"],["de la Chine","Pékin","as"],["de l'Inde","New Delhi","as"],["de la Thaïlande","Bangkok","as"],["du Vietnam","Hanoï","as"],["des Philippines","Manille","as"],
["de la Malaisie","Kuala Lumpur","as"],["du Pakistan","Islamabad","as"],["de l'Iran","Téhéran","as"],["de l'Irak","Bagdad","as"],["de l'Arabie saoudite","Riyad","as"],
["de l'Afghanistan","Kaboul","as"],["du Népal","Katmandou","as"],["de la Mongolie","Oulan-Bator","as"],["du Qatar","Doha","as"],["des Émirats arabes unis","Abou Dabi","as"],
["du Liban","Beyrouth","as"],["de la Syrie","Damas","as"],["de la Jordanie","Amman","as"],
["de l'Algérie","Alger","af"],["de la Tunisie","Tunis","af"],["du Sénégal","Dakar","af"],["de la Côte d'Ivoire","Yamoussoukro","af"],["du Mali","Bamako","af"],["du Kenya","Nairobi","af"],
["de l'Éthiopie","Addis-Abeba","af"],["du Nigeria","Abuja","af"],["du Ghana","Accra","af"],["du Cameroun","Yaoundé","af"],["de Madagascar","Antananarivo","af"],
["de la République démocratique du Congo","Kinshasa","af"],["de l'Angola","Luanda","af"],
["des États-Unis","Washington","am"],["du Mexique","Mexico","am"],["du Chili","Santiago","am"],["du Pérou","Lima","am"],["de la Colombie","Bogota","am"],
["du Venezuela","Caracas","am"],["de Cuba","La Havane","am"],["de l'Uruguay","Montevideo","am"],["de l'Équateur","Quito","am"],["de la Jamaïque","Kingston","am"],
["du Paraguay","Asunción","am"],["de la Nouvelle-Zélande","Wellington","am"]];
CAP.forEach(function(c){
  var same=CAP.filter(function(x){return x[2]===c[2]&&x[1]!==c[1]}).map(function(x){return x[1]});
  var fakes=shuf(same).slice(0,3);
  if(c[1]==="Yamoussoukro")fakes=["Abidjan"].concat(fakes.filter(function(f){return f!=="Abidjan"}).slice(0,2));
  if(c[1]==="Washington")fakes=["New York","Los Angeles","Chicago"];
  if(c[1]==="Wellington")fakes=["Auckland","Christchurch","Sydney"];
  add("Quelle est la capitale "+c[0]+" ?|"+c[1]+"|"+fakes.join("|"));
});
// Villes : [ville, pays]
var CITY=[["Barcelone","Espagne"],["Munich","Allemagne"],["Milan","Italie"],["Porto","Portugal"],["Rio de Janeiro","Brésil"],["Sydney","Australie"],["Toronto","Canada"],
["Istanbul","Turquie"],["Casablanca","Maroc"],["Cracovie","Pologne"],["Salzbourg","Autriche"],["Anvers","Belgique"],["Rotterdam","Pays-Bas"],["Göteborg","Suède"],
["Bergen","Norvège"],["Séville","Espagne"],["Naples","Italie"],["Genève","Suisse"],["Édimbourg","Royaume-Uni"],["Chicago","États-Unis"],["Osaka","Japon"],
["Shanghai","Chine"],["Bombay","Inde"],["Dubaï","Émirats arabes unis"],["Le Cap","Afrique du Sud"],["Cancún","Mexique"],["Phuket","Thaïlande"],["Bali","Indonésie"],
["Marrakech","Maroc"],["Las Vegas","États-Unis"],["Ibiza","Espagne"],["Mykonos","Grèce"],["Murcie","Espagne"],["Venise","Italie"]];
var COUNTRIES=CITY.map(function(c){return c[1]}).filter(function(v,i,a){return a.indexOf(v)===i});
CITY.forEach(function(c){
  var fakes=shuf(COUNTRIES.filter(function(x){return x!==c[1]})).slice(0,3);
  add("Dans quel pays se trouve "+c[0]+" ?|"+c[1]+"|"+fakes.join("|"));
});
[
"En quelle année a eu lieu la bataille de Waterloo ?|1815|1805|1830|1798","En quelle année s'est terminée la Seconde Guerre mondiale en Europe ?|1945|1944|1946|1939",
"En quelle année a commencé la Première Guerre mondiale ?|1914|1912|1916|1918","En quelle année Napoléon a-t-il été sacré empereur ?|1804|1799|1810|1789",
"En quelle année Christophe Colomb a-t-il atteint l'Amérique ?|1492|1515|1453|1500","En quelle année a eu lieu la bataille de Marignan ?|1515|1492|1610|1415",
"En quelle année ont eu lieu les attentats du 11 septembre ?|2001|2000|2002|1999","En quelle année la peine de mort a-t-elle été abolie en France ?|1981|1975|1968|1990",
"En quelle année les Françaises ont-elles obtenu le droit de vote ?|1944|1936|1958|1918","En quelle année a été fondée la Ve République ?|1958|1946|1962|1968",
"En quelle année est mort Louis XIV ?|1715|1789|1643|1750","En quelle année est sorti le premier tome de Harry Potter (en anglais) ?|1997|2001|1995|1999",
"En quelle année Tim Berners-Lee a-t-il proposé le Web ?|1989|1995|1979|2000","En quelle année a été fondé Google ?|1998|1995|2001|2004",
"En quelle année est sorti l'album Thriller de Michael Jackson ?|1982|1985|1979|1987",
"Combien de côtés a un octogone ?|8|6|10|12","Quel gaz est le plus abondant dans l'air ?|L'azote|L'oxygène|Le dioxyde de carbone|L'argon",
"Quel est l'animal national de l'Écosse ?|La licorne|Le lion|Le cerf|L'aigle","Combien d'yeux a une abeille ?|5|2|4|8",
"Combien de pattes a un crabe, pinces comprises ?|10|8|6|12","Quel est le seul mammifère capable de vraiment voler ?|La chauve-souris|L'écureuil volant|Le colugo|Le pangolin",
"Quel fruit porte ses graines à l'extérieur ?|La fraise|La framboise|La mûre|Le kiwi","De quelle couleur était le cheval blanc d'Henri IV ?|Blanc|Gris|Noir|Alezan",
"Qui a réalisé Pulp Fiction ?|Quentin Tarantino|Martin Scorsese|Steven Spielberg|Guy Ritchie","Dans quel film Dark Vador révèle-t-il « Je suis ton père » ?|L'Empire contre-attaque|Un nouvel espoir|Le Retour du Jedi|La Menace fantôme",
"Comment s'appelle le chien de Tintin ?|Milou|Idéfix|Snoopy|Rantanplan","Comment s'appelle le chien d'Obélix ?|Idéfix|Milou|Pif|Rantanplan",
"Qui est le meilleur ami de Bob l'éponge ?|Patrick|Carlo|Sandy|Plankton","Quel personnage s'exclame « D'oh ! » ?|Homer Simpson|Bart Simpson|Peter Griffin|Fred Pierrafeu",
"Dans Friends, comment s'appelle le café de la bande ?|Central Perk|Starbucks|Monk's Café|The Brew","Quelle série se déroule dans la ville de Hawkins ?|Stranger Things|Dark|The OA|Riverdale",
"Dans La Casa de Papel, comment surnomme-t-on le cerveau du braquage ?|Le Professeur|Berlin|Tokyo|Le Docteur","Combien de saisons compte Game of Thrones ?|8|7|9|6",
"De quel pays vient la série Squid Game ?|La Corée du Sud|Le Japon|La Chine|La Thaïlande","Quel rappeur a sorti l'album Civilisation en 2021 ?|Orelsan|Nekfeu|Booba|PNL",
"Quel chanteur belge a chanté Formidable ?|Stromae|Angèle|Damso|Jacques Brel","Dans quel jeu vidéo se trouve la ville de Los Santos ?|GTA V|Watch Dogs|Mafia|Saints Row",
"Comment s'appelle la princesse dans la saga de jeux qui porte son nom, avec Link ?|Zelda|Peach|Daisy|Samus",
"Combien de joueurs par équipe sur le terrain au football américain ?|11|9|12|15","Quel pays a gagné le plus de Coupes du monde de foot ?|Le Brésil|L'Allemagne|L'Italie|L'Argentine",
"Combien de points vaut un essai au rugby à XV ?|5|3|4|7","Combien de sets faut-il gagner pour remporter un match homme en Grand Chelem ?|3|2|4|5",
"Dans quel sport parle-t-on de « strike » et de « spare » ?|Le bowling|Le baseball|Le golf|Le curling","Qui détient le record du monde du 100 m ?|Usain Bolt|Carl Lewis|Tyson Gay|Yohan Blake",
"Quel tournoi de tennis se joue sur terre battue à Paris ?|Roland-Garros|Wimbledon|L'US Open|Le Masters de Bercy",
"Quel est l'ingrédient principal d'une fondue savoyarde ?|Le fromage|Le chocolat|La viande|Le bouillon","Quel cocktail se sert traditionnellement dans une tasse en cuivre ?|Le Moscow Mule|Le mojito|Le spritz|La margarita",
"Quel alcool est la base d'une margarita ?|La tequila|Le rhum|La vodka|Le gin","De quel pays vient le Jägermeister ?|L'Allemagne|L'Autriche|La Suisse|La Belgique",
"De quel pays vient le limoncello ?|L'Italie|L'Espagne|La Grèce|Le Portugal","Le saké est fabriqué à partir de…|Riz|Orge|Pomme de terre|Raisin",
"Le cognac est une eau-de-vie de…|Raisin|Pomme|Orge|Canne à sucre","Le calvados est une eau-de-vie de…|Pomme|Poire|Raisin|Prune",
"Quel alcool est la base d'un gin tonic ?|Le gin|La vodka|Le rhum|Le whisky","Quel cocktail mélange vodka, jus de canneberge, triple sec et citron vert ?|Le cosmopolitan|Le mojito|Le spritz|Le sex on the beach",
"De quelle couleur est la Chartreuse la plus connue ?|Verte|Rouge|Bleue|Orange","Le pastis est parfumé à…|L'anis|La menthe|La réglisse uniquement|Le citron"
].forEach(add);
})();
