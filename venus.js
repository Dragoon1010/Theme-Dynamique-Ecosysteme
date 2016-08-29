//declaration de tout les Actors
var galaxie = new Actor("galaxie");
var etoiles = new Actor("etoiles");
var etoile = new Actor("etoile");

var venus = new Actor("venus");

//propriété etoiles et etoiles filante
etoiles.rotation = <70, 70, 70>;
galaxie.position = <-15, 10, -21>;

var rnd_startX = 0;
var rnd_endX = 0;
var rnd_starty = 0;
var rnd_endY = 0;
var rnd_start = 0;
var rnd_end = 0;
var rnd_dg = 0;

//fonctions 

function random()
{
    rnd_dg = Math.floor((Math.random() * 2) -1);
    rnd_startX = Math.floor((Math.random() * 101) + 200);
    rnd_endX = Math.floor((Math.random() * 101) + 200);
    rnd_starty = Math.floor((Math.random() * 401) - 200);
    rnd_endY = Math.floor((Math.random() * 401) - 200);
   
    rnd_start = <rnd_dg * rnd_startX, rnd_startY, -200>;
    rnd_end = <-rnd_dg * rnd_endX, rnd_endY, -200>;
}

random();

etoile.position = rnd_start;

function etoileFilante()
{
    if(etoile.position->x != rnd_end->x && etoile.position->y != rnd_end->y)
        {
            etoile.setPosition(rnd_end, 4.0, INTERPOLATION_LINEAR);
        }
    else if(etoile.position->x == rnd_end->x && etoile.position->y == rnd_end->y)
        {
			random();
            etoile.position = rnd_start;
        }
};

    function planete()
{
    venus.rotation->y += 0.001;
    galaxie.rotation->z -= 0.01;
};
 
 //timers
System.timer[0] = new IntervalTimer(0.01, planete);
System.timer[0] = new IntervalTimer(5.0, etoileFilante);