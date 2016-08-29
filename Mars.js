//declaration de tout les Actors
var etoiles = new Actor("etoiles");
var etoile = new Actor("etoile");
var boot = new Actor("bootlogo");

var mars = new Actor("mars");
var deimos = new Actor("deimos");
var phobos = new Actor("phobos");

//propriété etoiles et etoiles filante
etoiles.rotation = <20, 20, 20>;

var rnd_startX = 0;
var rnd_endX = 0;
var rnd_starty = 0;
var rnd_endY = 0;
var rnd_start = 0;
var rnd_end = 0;
var rnd_dg = 0;

//propriété bootlogo
var hide = <0.9, 0.0, 0.9, 1.0>;
var show = <0.1, 0.0, 0.1, 1.0>;
boot.color = <1.0, 1.0, 1.0, 1.0>;

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
    mars.rotation->y += 0.001;
    deimos.rotation->y += 0.01;
    phobos.rotation->y += 0.01;
};

 function bootlogo()
{
    boot.setColor( <0.0, 0.0, 0.0, 0.0>, 2.0, INTERPOLATION_BEZIER, hide );
};

//timers
System.timer[0] = new IntervalTimer(0.01, planete);
System.timer[0] = new IntervalTimer(5.0, etoileFilante);
System.timer[0] = new IntervalTimer(3.0, bootlogo);