using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using puissance4;
using System.Threading;

namespace AffichageJeux
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Sélectionner un choix \n \t 1-2 joueur \n \t 2-Random \n \t 3-Quitter");
            string choix = Console.ReadLine();
            Console.WriteLine("Entrez une lettre ou un chiffre pour vous identifier lors de la partie. Joueur1:");
            string identifierJoueur1 = Console.ReadLine();
            Console.WriteLine("Entrez une lettre ou un chiffre pour vous identifier lors de la partie. Joueur2:");
            string identifierJoueur2 = Console.ReadLine();
            Console.Clear();
            Console.SetCursorPosition(0, 0);
            if (choix == "1")
            {
                Jeuxpuissance4 ju = new Jeuxpuissance4(identifierJoueur1, identifierJoueur2);
                ju.Tableau();
                while (ju.gagne == true)
                {
                    Console.WriteLine(ju.ToString());
                    string clavier1 = Console.ReadLine();
                    if (clavier1 == "1" || clavier1 == "2" || clavier1 == "3" || clavier1 == "4" || clavier1 == "5" || clavier1 == "6" || clavier1 == "7")
                    {
                        Console.SetCursorPosition(0, 0);
                        int clavier2 = Convert.ToInt32(clavier1);
                        ju.clavier = (clavier2 - 1);
                        ju.Joueur();
                        Console.WriteLine();
                    }
                    else
                    {
                        Console.SetCursorPosition(0, 0);
                        Console.WriteLine("Rejouer");
                    }
                }
                Console.WriteLine(ju.ToString());
                Console.WriteLine(ju.nbjoueur);
                Console.ReadKey();
            }
            else if (choix == "2")
            {
                Jeuxpuissance4 ju = new Jeuxpuissance4(identifierJoueur1, identifierJoueur2);
                ju.Tableau();
                while (ju.gagne == true)
                {
                    Console.SetCursorPosition(0, 0);
                    Console.WriteLine(ju.ToString());
                    ju.Automate();
                    ju.Joueur();
                    Console.WriteLine();
                    Thread.Sleep(200);
                }
                Console.WriteLine(ju.ToString());
                Console.WriteLine(ju.nbjoueur);
                Console.ReadKey();
            }
            else if (choix == "3")
            {
                Environment.Exit(0);
            }
            else if (choix == "4")
            {
                Char jeux = new Char();
                Console.Write(jeux.ToString());
                Console.ReadKey();
            }
        }
    }
}
