
$(document).ready(function(){	

	//Start Game by Setting Name of Player
	var Player={life:200,prize:[],damage:20};
	var end={name:"GOAL",access:false};
	var name = document.createElement("INPUT");
	var submit=document.createElement("Button");

	submit.append("Start Game");
	submit.setAttribute("id","submit");

	name.setAttribute("id","Name");
	name.setAttribute("type","text");

	$("#entername").append("</br><p id=\"ask\">Enter Your Name: </p>", name," ",submit,"</br></br>");

	$("#submit").click(function(){
		if($("#Name").val()!=""){
			Player.name= $("#Name").val();
			$("#Name").remove();
			$("#submit").remove();
			$("#ask").remove();
			$("#Welcome").next().text("");
			UpdatePlayerStats();
			$("#entername").remove();
			var wall={name:'Wall'};	

	function prize(name,url,message,effect,access){
		this.name=name;		
		this.url=url;	
		this.message=message;
		this.effect=effect;	
		this.access=access;
	}

	var Empty={name:"Empty"};
	var msg=$("#messages");

	var prize1=new prize("The Red Ruby","http://lavalier.com/wordpress/wp-content/uploads/2015/07/1.png","By the power of the Red Ruby, You have gained +20 HP",function(){$("#messages").append(this.message);Player.life=Player.life+20;UpdatePlayerStats();},false);
	var prize2=new prize("Phantom Stone","http://www.jackpotsreview.com/Images/JR-CoolJewels-Character.png","You found the Phantom's Stone!",function(){$("#messages").append(this.message);UpdatePlayerStats();},false);
	var prize3=new prize("Issa Knife","http://www.medievalcollectibles.com/images/Product/large/MC-FM-663.png","Issa Knife!! You just gained +5 Attack Damage",function(){$("#messages").empty();$("#messages").append(this.message);Player.damage=Player.damage+5;UpdatePlayerStats();},false);
	var prize4=new prize("The Magic Conch","http://data.whicdn.com/images/47239328/large.png","Congratulations!! You have been visited by the Magic Conch!", function(){$("#messages").append(this.message);UpdatePlayerStats();},false);
	var prize5=new prize("Stone of Gods","http://www.thejewelleryeditor.com/media/images_thumbnails/filer_public_thumbnails/old/42613/TiffanyBlueBook2014014.jpg__760x0_q75_crop-scale_subsampling-2_upscale-false.jpg","You found the Stone of Gods! Sounds like a cool stone, but pretty useless. Move On.",function(){$("#messages").append(this.message);UpdatePlayerStats();},false);
	var prize6=new prize("Cloak of Western Spirit","http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=84431864","Its the Cloak of the Western Spirit! Go Bald Eagles! yay!",function(){$("#messages").append(this.message);UpdatePlayerStats();},false);
	var prize7=new prize("Ring of Teleport","https://images-eu.ssl-images-amazon.com/images/I/51CvkgoapKL.jpg","It's the Ring of portals! Sorry, I was too lazy to make a function that teleports you across the map. Still yay!",function(){$("#messages").append(this.message);UpdatePlayerStats();},false);
	var prize8=new prize("Hell's Gate","http://thuanphatco.vn/Cms_Data/Contents/ThuanPhatCO/Media/images/url.gif","Hell's Gate! Hell Yeah!",function(){$("#messages").append(this.message);UpdatePlayerStats();},false);
	var prize9=new prize("Sword of the Dead","http://www.ocostumes.com/htc/15dg14594.jpg","By Defeating the Big Bad Wolf, You achieved the sword of the dead, You gained +10 Attack Damage! Finally a SuperPower!",function(){$("#messages").append(this.message);Player.damage=Player.damage+10;UpdatePlayerStats();},false);
	var prize10=new prize("God's Hammer","https://s-media-cache-ak0.pinimg.com/564x/2f/9b/5b/2f9b5b610ce587bd9dd295738c2902c6.jpg","You won the God's Hammer by beating the Midterms! Good job! Keep Goin!",function(){$("#messages").append(this.message);UpdatePlayerStats();},false);
	var prize11=new prize("Wanderer's Boots","https://www.westernbootsales.com/prodimages/karman/tin_haul/1402000070284a_lg.jpg","You won the Wanderer's Boots by beating the whole barber shop! Nice!",function(){$("#messages").append(this.message);UpdatePlayerStats();},false);
	var prize12=new prize("Sword of the Living","http://static.tvtropes.org/pmwiki/pub/images/Dark-Dragon-Blade_2999.jpg","You found sword of the living, and gained +5 Attack damage",function(){$("#messages").append(this.message);Player.damage=Player.damage+5;UpdatePlayerStats();},false);
	var prize13=new prize("Sword of Will","https://blog.roblox.com/wp-content/uploads/2017/02/SoulStealerSword.png","You found the sword of Will, and gained +5 Attack damage",function(){$("#messages").append(this.message);Player.damage=Player.damage+5;UpdatePlayerStats();},false);
	var prizeC6=new prize("The Mediocre Badge","http://images.akamai.steamusercontent.com/ugc/429322061126055279/AF39A05626A0FEF53F295E63B833562BBE92B707/","You found the mediocre badge, yay.",function(){$("#messages").append(this.message);UpdatePlayerStats();},false);

//EXAMPLE CHALLENGE
	function challenge(message,life, runChallenge, prize,url){
		this.message=message;
		this.life=life;
		this.runChallenge=runChallenge;
		this.prize=prize;
		this.url=url;
	}

	function emptyMsg(){
		$("#messages").empty();
	}

	var challenge1=new challenge("<p>Oh NO! Its the Big Bad Wolf !!", 30, function(pos){
		var tempimg=document.createElement("img");
				tempimg.setAttribute("src",challenge1.url);
				tempimg.setAttribute("style","width:40px;height:40px;");
				Table.rows[pos[0]].cells[pos[1]].innerHTML="";
				Table.rows[pos[0]].cells[pos[1]].append(tempimg);	
		msg.empty();
		var place=$("#CurrentPlace");
		place.empty();
		place.append(this.message,"Do You want to Fight him?</p>");

		var yes=document.createElement("Button");
		yes.append("Yes");
		yes.setAttribute("id","Yes");
		place.append(" ",yes," ");

		var No=document.createElement("Button");
		No.append("No");
		No.setAttribute("id","No");
		place.append(No,"</br>");
		

		$("#Yes").click(function(){
			place.empty();
			this.life=0;
			msg.append("You Did ",Player.damage," damage to the Wolf, and received 30 damage.</br>")
			Player.life=Player.life-30;
			if(Player.life<=0){
				$("#messages").empty();
				msg.append("You Died To the Big Bad Wolf. GG.");
				
			}
			else{
				msg.append("You Defeated the Big Bad Wolf!! </br>");
				if(prize9.access===true){
					msg.append("You already collected the prize before, So You can't win it again.</br>");
				 }
				else{
					Player.prize.push(prize9);
					prize9.effect();
					prize9.access=true;
				}
				UpdatePlayerStats();
				previous=[position[0],position[1]];
				position=pos;
				var tempimg=document.createElement("img");
				tempimg.setAttribute("src",challenge1.url);
				tempimg.setAttribute("style","width:40px;height:40px;");
				Table.rows[previous[0]].cells[previous[1]].style.border="6px solid green";
				Table.rows[position[0]].cells[position[1]].innerHTML="";
				Table.rows[position[0]].cells[position[1]].append(tempimg);	
				Table.rows[position[0]].cells[position[1]].style.border="8px solid red";
				
			}
		});

		$("#No").click(function(){
			place.empty();
			msg.append("You decided to not accept the Challenge.</br>");
					
		});


	},prize9,"https://www.nostalgiadecals.com/wp-content/uploads/2015/03/Big-Bad-Wolf-Version-2-Decal.jpg");

	var challenge5=new challenge("<p>Oh NO! Its the Big Bad Wolf Again!!", 30, function(pos){
		var tempimg=document.createElement("img");
				tempimg.setAttribute("src",challenge1.url);
				tempimg.setAttribute("style","width:40px;height:40px;");
				Table.rows[pos[0]].cells[pos[1]].innerHTML="";
				Table.rows[pos[0]].cells[pos[1]].append(tempimg);	
		msg.empty();
		var place=$("#CurrentPlace");
		place.empty();
		place.append(this.message,"Do You want to Fight him Again?</p>");

		var yes=document.createElement("Button");
		yes.append("Yes");
		yes.setAttribute("id","Yes");
		place.append(" ",yes," ");

		var No=document.createElement("Button");
		No.append("No");
		No.setAttribute("id","No");
		place.append(No,"</br>");
		

		$("#Yes").click(function(){
			place.empty();
			this.life=0;
			msg.append("You Did ",Player.damage," damage to the Wolf, and received 30 damage.</br>")
			Player.life=Player.life-30;
			if(Player.life<=0){
				$("#messages").empty();
				msg.append("You Died To the Big Bad Wolf. GG.");
				
			}
			else{
				msg.append("You Defeated the Big Bad Wolf!! </br>");
				if(prize13.access===true){
					msg.append("You already collected the prize before, So You can't win it again.</br>");
				 }
				else{
					Player.prize.push(prize13);
					prize13.effect();
					prize13.access=true;
				}
				UpdatePlayerStats();
				previous=[position[0],position[1]];
				position=pos;
				var tempimg=document.createElement("img");
				tempimg.setAttribute("src",challenge5.url);
				tempimg.setAttribute("style","width:40px;height:40px;");
				Table.rows[previous[0]].cells[previous[1]].style.border="6px solid green";
				Table.rows[position[0]].cells[position[1]].innerHTML="";
				Table.rows[position[0]].cells[position[1]].append(tempimg);	
				Table.rows[position[0]].cells[position[1]].style.border="8px solid red";
				
			}
		});

		$("#No").click(function(){
			place.empty();
			msg.append("You decided to not accept the Challenge.</br>");
					
		});


	},prize9,"https://www.nostalgiadecals.com/wp-content/uploads/2015/03/Big-Bad-Wolf-Version-2-Decal.jpg");


		var challenge2=new challenge("<p>The Midterms are here !!", 30, function(pos){
			var tempimg=document.createElement("img");
				tempimg.setAttribute("src",challenge2.url);
				tempimg.setAttribute("style","width:50px;height:50px;");
				Table.rows[pos[0]].cells[pos[1]].innerHTML="";
				Table.rows[pos[0]].cells[pos[1]].append(tempimg);
		msg.empty();
		var place=$("#CurrentPlace");
		place.empty();
		place.append(this.message,"Do You want to take the Midterms?</p>");

		var yes=document.createElement("Button");
		yes.append("Yes");
		yes.setAttribute("id","Yes");
		place.append(" ",yes," ");

		var No=document.createElement("Button");
		No.append("No");
		No.setAttribute("id","No");
		place.append(No,"</br></br>");
		

		$("#Yes").click(function(){
			place.empty();
			this.life=0;
			msg.append("You did ",Player.damage," damage to the Exams, and received 30 damage.</br>")
			Player.life=Player.life-30;
			if(Player.life<=0){
				$("#messages").empty();
				msg.append("You Died due to the stress from Midterms. GG.");
				
			}
			else{
				msg.append("You Defeated the Midterms and got a B+!! </br>");
				if(prize10.access===true){
					msg.append("You already collected the prize before, So You can't win it again.</br>");
				 }
				else{
					Player.prize.push(prize10);
					prize10.effect();
					prize10.access=true;
				}
				UpdatePlayerStats();
				previous=[position[0],position[1]];
				position=pos;
				var tempimg=document.createElement("img");
				tempimg.setAttribute("src",challenge2.url);
				tempimg.setAttribute("style","width:50px;height:50px;");
				Table.rows[previous[0]].cells[previous[1]].style.border="6px solid green";
				Table.rows[position[0]].cells[position[1]].innerHTML="";
				Table.rows[position[0]].cells[position[1]].append(tempimg);	
				Table.rows[position[0]].cells[position[1]].style.border="8px solid red";
				
			}
		});

		$("#No").click(function(){
			place.empty();
			msg.append("You decided to not accept the Challenge.</br>");
						
		});


	},prize10,"https://www.collegefashion.net/.image/t_share/MTI4ODM2OTM4NDc5MzQ0MDk0/stack-of-books.jpg");

		var challenge3=new challenge("<p>You arrived at the barbershop, and heard people saying \"Chief Keef ain't no hitta Chief Keef ain't this Chief Keef a fake.\"", 30, function(pos){
		var tempimg=document.createElement("img");
				tempimg.setAttribute("src",challenge3.url);
				tempimg.setAttribute("style","width:50px;height:50px;");				
				Table.rows[pos[0]].cells[pos[1]].innerHTML="";
				Table.rows[pos[0]].cells[pos[1]].append(tempimg);	
		msg.empty();
		var place=$("#CurrentPlace");
		place.empty();
		place.append(this.message,"Do You want to fight them?</p>");

		var yes=document.createElement("Button");
		yes.append("Yes");
		yes.setAttribute("id","Yes");
		place.append(" ",yes," ");

		var No=document.createElement("Button");
		No.append("No");
		No.setAttribute("id","No");
		place.append(No,"</br></br>");
		

		$("#Yes").click(function(){
			place.empty();
			this.life=0;
			msg.append("You did ",Player.damage," damage to them, and received 20 damage.</br>")
			Player.life=Player.life-20;
			if(Player.life<=0){
				$("#messages").empty();
				msg.append("The beat went off and you died. GG.");
				
			}
			else{
				msg.append("You beat them up!! </br>");
				if(prize11.access===true){
					msg.append("You already collected the prize before, So You can't win it again.</br>");
				 }
				else{
					Player.prize.push(prize11);
					prize11.effect();
					prize11.access=true;
				}
				UpdatePlayerStats();
				previous=[position[0],position[1]];
				position=pos;
				var tempimg=document.createElement("img");
				tempimg.setAttribute("src",challenge3.url);
				tempimg.setAttribute("style","width:50px;height:50px;");
				Table.rows[previous[0]].cells[previous[1]].style.border="6px solid green";
				Table.rows[position[0]].cells[position[1]].innerHTML="";
				Table.rows[position[0]].cells[position[1]].append(tempimg);	
				Table.rows[position[0]].cells[position[1]].style.border="8px solid red";
				
			}
		});

		$("#No").click(function(){
			place.empty();
			msg.append("You decided to not accept the Challenge. Bang Bang.</br>");
					
		});


	},prize11,"https://68.media.tumblr.com/225d1f42df8c761faa6ea1d1b3196f5b/tumblr_nl9gurxBPo1sit7h3o1_500.gif");

		var challenge4=new challenge("<p>Your landlady is up ahead, and she wants to collect the rent.", 30, function(pos){
			var tempimg=document.createElement("img");
				tempimg.setAttribute("src",challenge4.url);
				tempimg.setAttribute("style","width:50px;height:50px;");
				Table.rows[pos[0]].cells[pos[1]].innerHTML="";
				Table.rows[pos[0]].cells[pos[1]].append(tempimg);			
		msg.empty();
		var place=$("#CurrentPlace");
		place.empty();
		place.append(this.message,"Do You want to fight her?</p>");

		var yes=document.createElement("Button");
		yes.append("Yes");
		yes.setAttribute("id","Yes");
		place.append(" ",yes," ");

		var No=document.createElement("Button");
		No.append("No");
		No.setAttribute("id","No");
		place.append(No,"</br>");
		

		$("#Yes").click(function(){
			place.empty();
			this.life=0;
			msg.append("You did ",Player.damage," damage , and received 25 damage.</br>")
			Player.life=Player.life-25;
			if(Player.life<=0){
				$("#messages").empty();
				msg.append("You died and got kicked out. GG.");
				
			}
			else{
				msg.append("You defeated the landlady and paid your rent!! </br>");
				if(prize12.access===true){
					msg.append("You already collected the prize before, So You can't win it again.</br>");
				 }
				else{
					Player.prize.push(prize12);
					prize12.effect();
					prize12.access=true;
				}
				UpdatePlayerStats();
				previous=[position[0],position[1]];
				position=pos;
				var tempimg=document.createElement("img");
				tempimg.setAttribute("src",challenge4.url);
				tempimg.setAttribute("style","width:50px;height:50px;");
				Table.rows[previous[0]].cells[previous[1]].style.border="6px solid green";
				Table.rows[position[0]].cells[position[1]].innerHTML="";
				Table.rows[position[0]].cells[position[1]].append(tempimg);	
				Table.rows[position[0]].cells[position[1]].style.border="8px solid red";
				
			}
		});

		$("#No").click(function(){
			place.empty();
			msg.append("You decided to not accept the Challenge. You decided to run away like a coward.</br>");
			
		});


	},prize12,"http://orig00.deviantart.net/9a35/f/2008/026/0/c/kung_fu_hustle__landlady_by_telephonewire.jpg");



		var challenge6=new challenge("<p>Uh Oh! The problems in your life you have been ignoring till now want to confront you !!", 15, function(pos){
		var tempimg=document.createElement("img");
				tempimg.setAttribute("src",challenge6.url);
				tempimg.setAttribute("style","width:40px;height:40px;");
				Table.rows[pos[0]].cells[pos[1]].innerHTML="";
				Table.rows[pos[0]].cells[pos[1]].append(tempimg);	
		msg.empty();
		var place=$("#CurrentPlace");
		place.empty();
		place.append(this.message,"Do You want to face them?</p>");

		var yes=document.createElement("Button");
		yes.append("Yes");
		yes.setAttribute("id","Yes");
		place.append(" ",yes," ");

		var No=document.createElement("Button");
		No.append("No");
		No.setAttribute("id","No");
		place.append(No,"</br>");
		

		$("#Yes").click(function(){
			place.empty();
			this.life=0;
			msg.append("You Did ",Player.damage," damage to your issues, and received 15 damage.</br>")
			Player.life=Player.life-15;
			if(Player.life<=0){
				$("#messages").empty();
				msg.append("You Died becasue you can't handle your problems. GG.");
				
			}
			else{
				msg.append("You successfully solved your problems!! Don't be too happy, they will all come back sooner or later.</br>");
				if(prizeC6.access===true){
					msg.append("You already collected the prize before, So You can't win it again.</br>");
				 }
				else{
					Player.prize.push(prizeC6);
					prizeC6.effect();
					prizeC6.access=true;
				}
				UpdatePlayerStats();
				previous=[position[0],position[1]];
				position=pos;
				var tempimg=document.createElement("img");
				tempimg.setAttribute("src",challenge6.url);
				tempimg.setAttribute("style","width:40px;height:40px;");
				Table.rows[previous[0]].cells[previous[1]].style.border="6px solid green";
				Table.rows[position[0]].cells[position[1]].innerHTML="";
				Table.rows[position[0]].cells[position[1]].append(tempimg);	
				Table.rows[position[0]].cells[position[1]].style.border="8px solid red";
				
			}
		});

		$("#No").click(function(){
			place.empty();
			msg.append("You decided to not face your problems. It's ok, I would have done the same.</br>");
					
		});


	},prizeC6,"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/LIFE_magazine_logo.svg/220px-LIFE_magazine_logo.svg.png");

$("#Up").click(function(){
		
				NewMove("UP");
	       });
 $("#Left").click(function(){
		
				NewMove("LEFT");
	       });
 $("#Down").click(function(){
		
				NewMove("DOWN");
	       });
 $("#Right").click(function(){
		
				NewMove("RIGHT");
	       });	     


			var map=[
		[wall,wall,wall,wall,wall,wall,wall,wall,wall,wall],
		[wall,Empty,Empty,Empty,Empty,Empty,wall,Empty,Empty,wall],
		[wall,Empty,wall,Empty,Empty,Empty,wall,challenge1,Empty,wall],
		[wall,prize2,Empty,challenge3,wall,prize7,Empty,prize1,Empty,wall],
		[wall,challenge4,wall,prize3,Empty,Empty,wall,Empty,Empty,wall],
		[wall,Empty,Empty,challenge2,prize4,wall,challenge6,Empty,Empty,wall],
		[wall,challenge5,Empty,wall,Empty,Empty,prize8,Empty,wall,wall],
		[wall,Empty,prize5,Empty,wall,Empty,Empty,wall,Empty,wall],
		[wall,Empty,Empty,Empty,prize6,Empty,Empty,Empty,Empty,wall],		
		[wall,wall,wall,wall,wall,wall,wall,wall,wall,wall]
];

var table=document.createElement("table");
table.setAttribute('class','table table-bordered');
table.setAttribute('id','Board');
var tb=document.createElement('tbody');

//populate the table with rows and columns
for(var x=0;x<10;x++){
	var row=document.createElement('tr');
	for(var y=0;y<10;y++){
		var col=document.createElement('td')
		
		row.appendChild(col);
	}
	tb.appendChild(row);
}
table.appendChild(tb);

$("#Map").append(table);

var Table=document.getElementById('Board');
function getRandom1(){return Math.floor(Math.random() * (4 - 0)) + 0;}
function getRandom2(){return Math.floor(Math.random() * (7 - 5)) + 5;}
var position=[getRandom1(),getRandom2()];
while(map[position[0]][position[1]].name!="Empty"){
	position=[getRandom1(),getRandom2()];
}
var previous=[position[0],position[1]];
endx=getRandom2();
endy=getRandom1();
while(map[endx][endy].name!="Empty"){
	endx=getRandom2();
	endy=getRandom1();
}

	function UpdatePlayerStats(){
		$("#PlayerStats").empty();
		$("#PlayerStats").append("</br><U>Player Name:</U> ",Player.name," || <U>Attack Damage:</U> ",Player.damage,"</br><U>HEALTH:</U> ",Player.life,"</br><U>Prizes Won So Far:</U> </br>");
		Player.prize.map(function(p){				
			p.access=true;
			var temp=document.createElement("img");
			temp.setAttribute("src",p.url);
			temp.setAttribute("style","width:100px;height:100px;");
			$("#PlayerStats").append(temp," ");				
		});
		$("#PlayerStats").append("</br>");
		
	}

Table.rows[endx].cells[endy].innerHTML=end.name;
map[endx][endy]=end;
map[position[0]][position[1]]=Player;
Table.rows[position[0]].cells[position[1]].append("Start");
Table.rows[position[0]].cells[position[1]].style.border="8px solid red";

var pause=false;
function NewMove(move){
	$("#CurrentPlace").empty();
	if(move==="LEFT"){
		TryMove([position[0],position[1]-1]);
	}
	if(move==="RIGHT"){
		TryMove([position[0],position[1]+1]);
	}
	if(move==="UP"){
		TryMove([position[0]-1,position[1]]);
	}
	if(move==="DOWN"){
		TryMove([position[0]+1,position[1]]);
	}

}

function TryMove(pos){
	if(Player.life<=0){
		$("#messages").empty();
		$("#messages").append("You Lost the Game.");
	}
	var element=map[pos[0]][pos[1]];

	if(element.name==="GOAL"){
		$("#messages").empty();
		if(Player.prize.length>=5){
		$("#messages").append("<p>You reached the Goal with at least 5 Prizes! You won! Feel free to explore the rest of the map!</p>");
		Table.rows[pos[0]].cells[pos[1]].innerHTML="";
		Table.rows[pos[0]].cells[pos[1]].append("GG");
		previous=[position[0],position[1]];
		position=pos;
		Table.rows[previous[0]].cells[previous[1]].innerHTML=map[previous[0]][previous[1]].name;
		Table.rows[previous[0]].cells[previous[1]].style.border="6px solid green";
		Table.rows[position[0]].cells[position[1]].innerHTML=map[position[0]][position[1]].name;	
		Table.rows[position[0]].cells[position[1]].style.border="8px solid red";}

		else{
			$("#messages").empty();
			$("#messages").append("<p>You need at least 5 Prizes to Win the Game!</p>");
		}
	}
	else if(element.name==="Empty"||element===Player){
		$("#messages").empty();
		Table.rows[pos[0]].cells[pos[1]].append("Empty");
		previous=[position[0],position[1]];
		position=pos;		
		Table.rows[previous[0]].cells[previous[1]].style.border="6px solid green";
		Table.rows[position[0]].cells[position[1]].innerHTML=map[position[0]][position[1]].name;	
		Table.rows[position[0]].cells[position[1]].style.border="8px solid red";
	}
	else if(element.name==="Wall"){
		$("#messages").empty();
		$("#messages").append("<p>Ouch! You hit a Wall.</p>")
		var tempimg=document.createElement("img");
		tempimg.setAttribute("src","https://www.2017auditions.com/wp-content/uploads/2016/08/how-to-insulate-a-wall-780x350.jpg");
		tempimg.setAttribute("style","width:50px;height:30px;");
		
		Table.rows[pos[0]].cells[pos[1]].innerHTML="";
		Table.rows[pos[0]].cells[pos[1]].append(tempimg);	
		Table.rows[pos[0]].cells[pos[1]].style.border="6px solid green";				
	}
	else if(element.access===true){
		$("#messages").empty();
		$("#messages").append("You already collected the ",element.name,"</br></br>")
		previous=[position[0],position[1]];
		position=pos;		
		Table.rows[previous[0]].cells[previous[1]].style.border="6px solid green";		
		Table.rows[position[0]].cells[position[1]].style.border="8px solid red";		
	}
	else if(element.access==false){
		$("#messages").empty();
		$("#messages").append("<p>You Found a Prize!</p>");
		Player.prize.push(element);
		element.effect();		
		previous=[position[0],position[1]];
		position=pos;
		Table.rows[previous[0]].cells[previous[1]].style.border="6px solid green";
		var tempimg=document.createElement("img");
		tempimg.setAttribute("src",element.url);
		tempimg.setAttribute("style","width:50px;height:50px;");
		Table.rows[position[0]].cells[position[1]].innerHTML="";
		Table.rows[position[0]].cells[position[1]].append(tempimg);	
		Table.rows[position[0]].cells[position[1]].style.border="8px solid red";
		element.access=true;
		
	}
	else{
		element.runChallenge(pos);			
		
	}

}		}
		else{
			$("#PlayerStats").append(" NAME REQUIRED");
		}
	});
		


});