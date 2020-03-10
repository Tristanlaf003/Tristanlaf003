using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CegepVictoTechInfoH2020P2DA1912124JeuxVie;
using System.Threading;

namespace AffichageJeuxDeLaVie
{
    class Program
    {
        static void Main(string[] args)
        {
            Jeux ju = new Jeux(50,50,30);
            ju.Tableau();
            while (true)
            {
                Console.SetCursorPosition(0, 0);
                Console.Write(ju.ToString()); //état plein
                ju.FaireTransition(); //status lecture
                Thread.Sleep(250);
            } 
        }
    }
}