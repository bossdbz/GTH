#pragma strict
var read : boolean = false;
var F : GUIText;
var texteF : GUIText;

F.enabled = false;
texteF.enabled = false;


function Start () {
	
}

function Update () {
	if(read)
	{
		gestionAffiche();
	}
}


function gestionAffiche() 
{ 
 	if(Input.GetKey("f")) 
	{  
  			F.enabled = false;
  			texteF.enabled = true;
	}
}


function affiche()
{
	read = true;
	F.enabled = true;
	Debug.Log("affiche");
	
}

function efface()
{
	read = false;
	F.enabled = false;
	texteF.enabled = false;
	Debug.Log("enleve");
}

function OnTriggerEnter (other : Collider)
{
	if (other.gameObject.tag == "Player") 
	{
		Debug.Log("entre");
		changeText();
		affiche();		
	}
	
}

function OnTriggerExit (other : Collider)
{
	if (other.gameObject.tag == "Player") 
	{
		Debug.Log("sort");
		efface();		
	}
}

function changeText()
{
	if(this.name=="objet-Temple1")
	{
		texteF.text="Les Aztèques, étaient un peuple amérindien du groupe nahua, c'est-à-dire de langue nahuatl. Vivant\ndans la vallée de Mexico vers le début du xive siècle. Ils avaient atteint un niveau de civilisation\nparmi les plus avancés d'Amérique et dominaient,\navec les autres membres de leur Triple alliance, le plus vaste empire de la Mésoamérique postclassique.";
	}
	if(this.name=="objet-Temple2")
	{
		texteF.text="L'arrivée, en 1519, des conquistadors menés par Hernán Cortés scella la fin de leur règne.\n Le 13 août 1521, les Espagnols, aidés par un grand nombre d’alliés autochtones, finirent par remporter le \nsiège de Tenochtitlan et par capturer le dernier dirigeant aztèque, Cuauhtémoc.";
	}	
	if(this.name=="objet-Temple3")
	{
		texteF.text="L’origine des Mexicas demeure incertaine. Les codex montrent que les Aztèques revendiquaient une\ndouble origine nordique et toltèque, qui leur conférait le prestige à la fois de la vaillance\nguerrière des chasseurs-cueilleurs et de l'héritage culturel des fondateurs de Tula. \nLes Aztèques partageaient effectivement avec ces peuples la même langue (le nahuatl),\n mais aussi les mêmes croyances astrales, la même pratique des sacrifices humains et une même organisation \nmilitariste de la société.";
	}
	if(this.name=="objet-Temple4")
	{
		texteF.text="D'après les codex aztèques, ce peuple aurait quitté son territoire d'origine en l'an 1-couteau de silex\n (en 1116 dans le calendrier grégorien). Guidés par le dieu Huitzilopochtli, ils auraient erré\npendant plusieurs générations avant de se fixer sur le site actuel de Mexico. ";
	
	}
	/*if(this.name=="objet-Temple5")
	{
		texteF.text="ok2";
	}*/
	if(this.name=="objet-Temple6")
	{
		texteF.text="Le blason du actuel du Mexique est inspiré d'un glyphe aztèque symbolisant la fondation de Mexico-Tenochtitlan.";
	}
	if(this.name=="objet-Temple7")
	{
		texteF.text="Acamapichtli est le premier souverain aztèque. Lui-même n'est sans doute pas d'origine aztèque mais toltèque. ";
	}
	if(this.name=="objet-Temple8")
	{
		texteF.text="Atlantes  de 5 mètres de haut, en forme de guerriers célestes qui soutenaient les poutres\nde la toiture des temples, et quelques colonnes cylindriques en forme de serpents";
	}
	if(this.name=="objet-Temple9")
	{
		texteF.text="Les Espagnols et leurs alliés amérindiens arrivèrent devant Tenochtitlan le 8 novembre 1519. \nMoctezuma les accueillit d’abord pacifiquement ; puis la méfiance et l’hostilité s’installèrent pour\n culminer avec le massacre du Templo Mayor et la mort du chef aztèque. ";
	}
	if(this.name=="objet-Temple10")
	{
		texteF.text="Les conquistadores décidèrent de fuir la ville le 1er juillet 1520 après les affrontements de la Noche\n Triste (« la nuit triste »). Après la mort de Moctezuma II, Cuitláhuac lui succéda, mais son \nrègne fut bref, car il succomba à une épidémie de variole. Cuauhtémoc fut alors intronisé\n empereur et opposa une résistance farouche aux Espagnols, lorsque ceux-ci revinrent pour assiéger\nTenochtitlan avec leurs alliés amérindiens au printemps 1521. ";
	}
	if(this.name=="objet-Temple11")
	{
		texteF.text="L'exécution de Cuauhtémoc en 1524 marque la fin de l'Empire aztèque. Le déclin de l’empire aztèque\n provoqua la libération des autres cultures amérindiennes du centre du Mexique.";
	}
	if(this.name=="objet-Temple12")
	{
		texteF.text="La langue nahuatl est aujourd'hui parlée par 1,5 million de personnes, principalement dans les zones\nmontagneuses des États du centre du Mexique. Les dialectes locaux dérivés de l'espagnol, de\nl'espagnol mexicain en général, et la langue espagnole dans le monde ont tous été influencés, à des degrés divers, par le nahuatl. ";
	}
	if(this.name=="objet-Temple13")
	{
		texteF.text="La ville de Mexico a été construite sur les ruines de Tenochtitlan, ce qui fait d’elle l'une des villes les\n plus anciennes des Amériques. Beaucoup d'autres villes au Mexique et en Amérique centrale \nont également conservé leurs noms nahuatl.";
	}
	if(this.name=="objet-Temple14")
	{
		texteF.text="La cuisine mexicaine est toujours principalement basée sur des produits agricoles\n (maïs, tomate, haricot rouge, courge, piment, avocat, cactus) et des préparations culinaires (tortilla, tamal, mole,\natole, pozole, pulque, mezcal, tequila) d'origine mésoaméricaine qui étaient consommés par les Aztèques.";
	}
	if(this.name=="objet-Temple15")
	{
		texteF.text="Dès les premières années de la colonisation espagnole, le christianisme a rapidement été imposé aux\npeuples amérindiens, par l'intermédiaire de baptêmes de masse forcés ou de baptêmes \nindividuels volontaires, cette nouvelle identité religieuse faisant office de naturalisation";
	}
	if(this.name=="objet-Temple16")
	{
		texteF.text="Les Aztèques se battaient pour conquérir plus de terres ou simplement pour faire des prisonniers\n pour les sacrifier à leurs dieux. C'est pourquoi ils organisaient régulièrement des chasses à l'homme\nappelées « guerres fleuries » contre les peuples périphériques de l'empire. ";
	}
	if(this.name=="objet-Temple17")
	{
		texteF.text="À l'origine, la structure tribale des Aztèques était fondée sur l'existence de clans. En revanche, au \nmoment de la conquête espagnole, la société était fortement hiérarchisée. La classe la plus élevée, \nqui était devenue une sorte d'aristocratie héréditaire au xvie siècle, était celle des pipiltin.";
	}
	if(this.name=="objet-Temple18")
	{
		texteF.text="Les aristocrates aztèque étaient généralement désignés à vie par leurs concitoyens,\n mais toujours avec l'aval du pouvoir central qui devait confirmer ce choix et les nommait parfois même directement. ils bénéficiaient des revenus des terres qui leur étaient attribuées et recevaient en outre une part des tributs prélevés sur les peuples de l'empire. Ils ne payaient pas d'impôts.";
	}
	if(this.name=="objet-Temple19")
	{
		texteF.text="Les prêtres étaient exemptés d'impôts et menaient une vie célibataire, rythmée par les jeûnes, les\nrituels et les pénitences. Ils avaient un rôle social en s'occupant des hôpitaux et en gardant les livres sacrés. ";
	}
	if(this.name=="objet-Temple20")
	{
		texteF.text="Les commerçants étaient divisés en deux classes : les tlanamaca, qui vendaient sur les marchés de\n leur environnement proche des produits issus souvent de leur propre production et portés par eux-mêmes et leurs proches,\n et les pochteca, qui étaient spécialisés dans le commerce de longue distance et qui faisaient\n transporter leurs produits par des porteurs professionnels (les tlameme).";
	}
	if(this.name=="objet-Temple21")
	{
		texteF.text="Les macehualtin (sing. macehualli), c'est-à-dire les « gens du commun », formaient la majorité de la\n population. Ils étaient astreints au service militaire ainsi qu'aux travaux collectifs et devaient payer \nun tribut à l'État aztèque. ils exerçaient différentes fonctions : artisans, artistes, paysans. ";
	}
	if(this.name=="objet-Temple22")
	{
		texteF.text="Tous les enfants, quel que soit leur sexe ou leur rang social, recevaient l'une ou l'autre forme\n d'éducation. Dans un premier temps, jusqu'à l'âge de quinze ans selon le Codex Mendoza, les enfants \nétaient éduqués par leurs parents dans le cadre du calpulli. L’apprentissage de formules appelées huehuetlatolli (« paroles de l’ancien ») \nconstituait une grande partie de l’enseignement. Il s’agissait le plus souvent de formules pieuses et de proverbes basés sur les valeurs de la société aztèque. ";
	}
	if(this.name=="objet-Temple23")
	{
		texteF.text="La prospérité de la civilisation aztèque a en grande partie reposé sur une agriculture efficace qui a\n permis de nourrir des millions d’individus. Les Aztèques ont d’abord pratiqué une agriculture vivrière \npluviale qui s’est améliorée progressivement en utilisant diverses techniques d’irrigation, telles que les canaux et les digues.";
	}
	if(this.name=="objet-Temple24")
	{
		texteF.text="En l'absence d'animaux de trait et de véhicules à roues, le principal mode de transport utilisé en\n Mésoamérique était la marche à pied. Pour transporter des produits, on utilisait le plus souvent un \nmecapal, système de sangle frontale en coton ou en fibre de maguey attachée à deux cordes qui supportent le poids des produits chargé sur le dos. ";
	}
	if(this.name=="objet-Temple25")
	{
		texteF.text="Certains affirment que les Aztèques n'utilisaient pas de monnaie, les recherches historiques\n contemporaines attestent que plusieurs types de monnaies étaient utilisées régulièrement, en \nparticulier les graines de cacao, le coton, de petites haches en cuivre et la poudre d’or.";
	}
	if(this.name=="objet-Temple26")
	{
		texteF.text="Dans l'empire aztèque, le commerce était extrêmement développé. Certains vendeurs sur les\nmarchés étaient de petits vendeurs, des agriculteurs pouvaient vendre certains de leurs\n produits, les potiers vendaient leurs vaisselle d'autres fournisseurs étaient des marchands \nprofessionnels qui voyagaient d'un marché à l’autre à la recherche de profits. ";
	}
	if(this.name=="objet-Temple27")
	{
		texteF.text="Les Aztèques admiraient tellement l’artisanat mixtèque qu'ils faisaient venir à Tenochtitlan des\n orfèvres et leur demandaient de travailler l'or dans le style mixtèque. Les Aztèques admiraient \négalement les codex mixtèques, aussi certains d'entre eux ont été réalisés par les Mixtèques pour les Aztèques.";
	}
	if(this.name=="objet-Temple28")
	{
		texteF.text="Les Mexicas font référence à au moins deux manifestations du surnaturel : teotl et ixiptla. Teotl, que\n les Espagnols et les savants européens ont systématiquement traduit improprement par « dieu » ou « démon »,\n visait plutôt une force impersonnelle qui imprégnait le monde. Les ixiptla, en revanche, étaient des représentations physiques. ";
	}
	if(this.name=="objet-Temple29")
	{
		texteF.text="Les dieux, selon les croyances en vigueur au Mexique à l'époque aztèque avaient successivement créé quatre mondes ou « soleils ».";
	}
	if(this.name=="objet-Temple30")
	{
		texteF.text="Selon les croyances aztèques, les guerriers morts au combat ou sacrifiés se rendaient au ciel oriental\n près du Soleil puis revenaient sous forme d'un papillon ou d'un colibri au bout de quatre ans. ";
	}
	if(this.name=="objet-Temple31")
	{
		texteF.text="Dans les quatre jours qui suivaient sa naissance, l'enfant recevait son nom par un prêtre. Il subissait\n un lavage rituel et la cérémonie était achevée par un banquet. La cérémonie du mariage, \norganisée chez l'homme, donnait lieu à des rites comme le partage d'un plat commun par les époux.\n La polygamie était une pratique courante, surtout parmi les classes sociales élevées. À l'approche de la mort, le vieillard pouvait confesser ses fautes à un prêtre et devait faire La plupart des morts étaient incinérés .\n La famille du défunt devait encore brûler des offrandes 80 jours après le décès.";
	}
	if(this.name=="objet-Temple32")
	{
		texteF.text="Dans les quatre jours qui suivaient sa naissance, l'enfant recevait son nom par un prêtre. Il subissait\n un lavage rituel et la cérémonie était achevée par un banquet. La cérémonie du mariage, \norganisée chez l'homme, donnait lieu à des rites comme le partage d'un plat commun par les époux.\n La polygamie était une pratique courante, surtout parmi les classes sociales élevées. À l'approche de la mort, le vieillard pouvait confesser ses fautes à un prêtre et devait faire La plupart des morts étaient incinérés .\n La famille du défunt devait encore brûler des offrandes 80 jours après le décès.";
	}
	if(this.name=="objet-Temple33")
	{
		texteF.text="La religion aztèque pratiquait le rite du sacrifice humain de manière régulière et massive. \nLes sacrifices avaient généralement lieu dans la cité, dans une enceinte cérémonielle, devant un temple, \nle plus souvent en haut d'une pyramide dont la montée symbolisait l'approche vers le dieu. \nLes méthodes de sacrifice étaient variées ( pendaison, crémation, noyade ) et dépendaient du dieu \nauquel on consacrait les victimes ainsi que du rituel.";
	}
	if(this.name=="objet-Temple34")
	{
		texteF.text="Les Aztèques jouaient une variante de jeu de balle. Ce jeu rituel, appelé tlachtli en nahuatl, était \nréservé aux classes supérieures de la société aztèque. Deux équipes s'affrontaient sur un terrain en forme de H de longueur variable (30 à 65 m)151. \nSon but semble avoir été de faire passer une grosse balle de caoutchouc dur, appelé ulli, \ndans un anneau vertical fixé à environ trois mètres de haut. Il y avait deux anneaux, fixés à deux murs l'un en face de l'autre.";
	}
	
	if(this.name=="objet-Temple35")
	{
		texteF.text="Les règles du jeu : Jeu de balle étaient complexes. Les joueurs n'avaient le droit de frapper la balle\nqu'avec leurs genoux et leurs hanches, à l'exclusion de toute autre partie du corps. \nLa balle ne devait pas toucher terre, et si la balle tombait, l'équipe qui l'avait laissée tomber écopait d'une pénalité.\n Le jeu en soi était assez violent, car, bien que les joueurs fussent munis d'un équipement de protection, \nil n'était pas rare qu'un participant décédât d'un coup reçu dans l'estomac.";
	}
	if(this.name=="objet-Temple35-2")
	{
		texteF.text="Les guérisseurs étaient spécialisés : certains apprenaient à reconnaître et classer les plantes\n médicinales ; les autres élaboraient des traitements. Plus d’une centaine de préparations étaient\nconnues, du déodorant à la pâte dentifrice, etc. Certains guérisseurs étaient capables d’opérer, \nde soigner les maladies de peau, les maux digestifs. Ils savaient poser des emplâtres et réaliser des saignées.";
	}
	if(this.name=="objet-Temple35-3")
	{
		texteF.text="La cuisine aztèque était essentiellement végétarienne, à base de maïs, courges, haricots, piments et \nde graines de huauhtli (amarante) et de chia (sauge). Le maïs était consommé sous forme de galette, de pain et de bouillie. ";
	}
	if(this.name=="objet-Temple35-4")
	{
		texteF.text="Le lac Texcoco était une importante source de gibier d'eau, d'écrevisses et de poisson. \nD'autres poissons et crustacés de mer étaient importés depuis le golfe du Mexique pour les classes sociales supérieures. \nLes Aztèques mangeaient du dindon et du chien (xoloitzcuintle) mais la volaille et la viande de boucherie étaient rares. \nLes Aztèques consommaient aussi des insectes comme les chapulines, des chenilles et des larves riches en protéines.";
	}
	if(this.name=="objet-Temple36")
	{
		texteF.text="Les élites mangeaient occasionnellement de la chair humaine dans certaines cérémonies religieuses. \nD'après le récit de plusieurs conquistadors, après les sacrifices, les guerriers mangeaient la chair des sacrifiés";
	}
	
	if(this.name=="objet-Temple37")
	{
		texteF.text="Le patolli était une sorte de jeu de l'oie sur 52 cases, en référence aux 52 années du cycle solaire. ";
	}
	
	if(this.name=="objet-Temple38")
	{
		texteF.text="L'écriture nahuatl apparaît au xiie siècle de notre ère. \nElle servait à consigner des écrits économiques (registres d'impôts, tributs), historique (comme le Codex Xolotl) et religieux (tonalamatl). \nElle combinait des éléments pictographiques, des idéogrammes et des symboles phonétiques.";
	}
	if(this.name=="objet-Temple39")
	{
		texteF.text="Peinture et enluminure : les Aztèques ont revêtu de peintures les parois de leurs temples et de leurs palais. ";
	}
	if(this.name=="objet-Temple40")
	{
		texteF.text="Sculpture et orfèvrerie : La plupart des œuvres ont été détruites par les Espagnols, car elles représentaient à leurs yeux des supports d'idolâtrie. \nElles représentaient des dieux des animaux et des végétaux.Les artisans aztèques excellaient dans l'art du masque en pierre.";
	}
	if(this.name=="objet-Temple41")
	{
		texteF.text="Les études de cette civilisation précolombienne se fondent sur les codex mésoaméricains, les témoignages des conquistadors, \nles travaux des chroniqueurs du xvie et xviie siècle ainsi que, depuis le xixe siècle, les fouilles archéologiques.";
	}
	if(this.name=="objet-Temple43")
	{
		texteF.text="Le masque de jade représente le dieu : Xipe Totec , il est, dans la mythologie aztèque, un dieu du renouveau de la nature,\n de l'agriculture et des pluies nocturnes fertiles.Il s'écorche lui-même pour nourrir l'humanité,\n symbolisant ainsi le grain de maïs perdant son enveloppe avant de germer. Il est également le patron des orfèvres.";
	}
	if(this.name=="objet-Temple44")
	{
		texteF.text="Le mot nahuatl tlatoani signifie littéralement « celui qui parle » . C'était le titre du plus haut dirigeant militaire et religieux d’une cité-État de la Mésoamérique. ";
	}
	if(this.name=="objet-Temple45")
	{
		texteF.text="Moctezuma Ier est un empereur aztèque qui règne de 1440 à 1469. \nMoctezuma est le véritable fondateur de l'empire et de la puissance aztèque.\n Il entreprend toute une série de guerre contre ses voisins, \nvainqueur des Otomis de Xilotepec et s'empare des territoires correspondant aux actuels États de Guerrero, \nMorelos, Puebla et Oaxaca au Mexique c’est-à-dire au nord, au sud et au sud-est de l'actuelle Mexico. ";
	}
}