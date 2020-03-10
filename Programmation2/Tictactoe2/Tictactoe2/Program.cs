using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tictactoe2
{
    class Program
    {
        static void Main(string[] args)
        {
            int NombreTour = 9;
            ///Tableau du Tic Tac toe
            string[] tab = new string[9] { " 0 ", " 1 ", " 2 ", " 3 ", " 4 ", " 5 ", " 6 ", " 7 ", " 8 " };
            string[] tab1 = new string[1] { "|" };
            string[] tabCaseUtiliser = new string[9];
            ///FLip flop entre les deux joueurs
            int joueur = 1;
            ///Permet de connaitre qu'elle joue
            int joueurEncoure = 1;
            ///Permet de connaître qu'elle lettre
            string lettre = " ";
            ///Nombre de tour dans un tic tac toe
            for ( int i = 0; i < NombreTour; i++)
            {    
                ///Permet de faire tournée le tab
                int b = 0;
                ///Construction du tableau de tic tac toe
                for (int q = 0; q < 3; q++)
                {
                    Console.WriteLine("+---+---+---+");
                    Console.Write(tab1[0]);
                    ///Afficher les éléments du tableau tab
                    for (int m = 0; m < 3; m++)
                    {
                        Console.Write(tab[b]);
                        Console.Write(tab1[0]);
                        b++;
                    }
                    Console.WriteLine();
                }
                   Console.WriteLine("+---+---+---+");
                /// Permet de faire joueur le joueur1
                if (joueur == 1)
                {
                    ///Tansformer une réponse d'une méthode en varaible utilisable
                    string reponse = Joueur1();
                    if (reponse == "0" | reponse == "1" | reponse == "2" | reponse == "3" | reponse == "4" | reponse == "5" | reponse == "6" | reponse == "7" | reponse == "8")
                    {
                        ///Convertir la variable string à int (lettre à chiffre)
                        int converti = Int32.Parse(reponse);
                        
                        ///Permet de vérifiier si la case est déjà utiliser
                        if (tab[converti] == " X " | tab[converti] == " O ")
                        {
                            ///Ajouter 1 tour de plus
                            NombreTour++;
                            ///Redemander de rejouer au joueur 1
                            Console.WriteLine("Joueur 1, rejouer");
                        }
                        else 
                        {
                            ///Modifie le tableau tab et de mettre la lettre X à la place du chiffre
                            tab[converti] = " X ";
                            ///Permet de connaître la lettre du joueur
                            lettre = " X ";
                            ///Permet de faire le change du flip flop
                            joueur = 2;
                            ///Quel joueur qui joue
                            joueurEncoure = 1;
                        }
                    }
                    else if (reponse == "exit")
                    {
                        ///Quitter le jeu durant la partie
                        Environment.Exit(0);
                    }
                    else
                    {
                        ///Ajouter 1 tour de plus
                        NombreTour++;
                        ///Redemander de rejouer au joueur 1
                        Console.WriteLine("Joueur 1, rejouer");
                    }
                    
                }
           
                ///Permet de faire jouer le joueur 2
                else if (joueur == 2)
                {
                    ///Transformer une réponse d'une méthode en variable utilisable
                    string reponse = Joueur2();
                    if (reponse == "0" | reponse == "1" | reponse == "2" | reponse == "3" | reponse == "4" | reponse == "5" | reponse == "6" | reponse == "7" | reponse == "8")
                    {
                        ///Convertir la variable string à int (lettre à chiffre)
                        int converti = Int32.Parse(reponse);
                        ///Permet de vérifier si la case est déjà utiliser
                        if (tab[converti] == " X " | tab[converti] == " O ")
                        {
                            ///Ajouter 1 tour de plus
                            NombreTour++;
                            ///Redemander de rejoueur au joueur 2
                            Console.WriteLine("Joueur 2, rejouer");
                        }
                        else
                        {
                            ///Modifie le tableau tab et de mettre la lettre X à la place du chiffre
                            tab[converti] = " O ";
                            ///Permet de connaître la lettre du joueur
                            lettre = " O ";
                            ///Permet de faire le change du flip flop
                            joueur = 1;
                            ///Quel joueur qui joue
                            joueurEncoure = 2;
                        }
                    }
                    else if (reponse == "exit")
                    {
                        ///Quitter le jeu durant la partie
                        Environment.Exit(0);
                    }
                    else
                    {
                        ///Ajouter 1 tour de plus
                        NombreTour++;
                        ///Redemander de rejouer au joueur 2
                        Console.WriteLine("Joueur 2, rejouer");
                    }
                }
                ///Vérification du tic tac toe
                int verification1 = 0;
                int verification2 = 1;
                int verification3 = 2;
                ///Vérification horizontal
                for (int boucleVerification = 0; boucleVerification < 3; boucleVerification++)
                {
                    ///Compare le tic tac toe à la lettre du joueur pour voir si il a gagnné
                    if (tab[verification1] == lettre & tab[verification2] == lettre & tab[verification3] == lettre )
                    {
                        ///Dire au joueur qu'il a gagner et qu'elle joueur à gagné
                        Console.WriteLine("Gagnant : Joueur" + joueurEncoure);
                        Console.ReadKey();
                        Environment.Exit(0);
                    }
                    ///Faire changer les lettres dans un tableau
                    verification1+=3;
                    verification2+=3;
                    verification3+=3;
                }
                ///Vérificcation vertical
                int verification4 = 0;
                int verification5 = 3;
                int verification6 = 6;
                for (int boucleVerification = 0; boucleVerification < 3; boucleVerification++)
                {
                    ///Compare le tic tac toe à la lettre du joueur pour voir si il a gagné
                    if (tab[verification4] == lettre & tab[verification5] == lettre & tab[verification6] == lettre)
                    {
                        ///Dire au joueur qu'il a gagner et qu'elle joueur à gagné
                        Console.WriteLine("Gagnant : Joueur" + joueurEncoure);
                        Console.ReadKey();
                        Environment.Exit(0);
                    }
                    ///Faire changer les lettres dans un tableau
                    verification4++;
                    verification5 ++;
                    verification6 ++;
                }
                ///Vérification du diagonale
                int verification7 = 0;
                int verification9 = 8;
                for (int boucleVerification = 0; boucleVerification < 2; boucleVerification++)
                {
                    ///Compare le tic tac toe à la lettre du joueur pour voir si il a gagné
                    if (tab[verification7] == lettre & tab[4] == lettre & tab[verification9] == lettre)
                    {
                        ///Dire au joueur qu'il a gagner et qu'elle joueur à gagné
                        Console.WriteLine("Gagnant : Joueur" + joueurEncoure);
                        Console.ReadKey();
                        Environment.Exit(0);

                    }
                    ///Faire changer les lettres dans un tableau
                    verification7 += 2;
                    verification9-=2;
                }

            }
            ///Partie NULL  si les neuf tour sont fini
            Console.WriteLine("Partie null");
            Console.ReadKey();
            ///Arrêt du jeux
            Environment.Exit(0);
            Console.ReadKey();
        }
        /// <summary>
        /// Le tour du joueur
        /// </summary>
        /// <returns></returns>
       static string Joueur1()
        {
            ///Demander un chiffre au joueur 1
            Console.Write("Joueur 1 'X' : Entrer le chiffre de la case : ");
            ///Lire le chiffre
            string reponse = Console.ReadLine();
            return reponse.ToString();
        }
        /// <summary>
        /// Le tour du joueur 2
        /// </summary>
        /// <returns></returns>
        static string Joueur2()
        {
            ///Demander un chiffre au joueur 2
            Console.Write("Joueur 2 'O': Entrer le chiffre de la case : ");
            ///Lire le chiffre
            string reponse = Console.ReadLine();
            return reponse.ToString();
        }
    }
}
