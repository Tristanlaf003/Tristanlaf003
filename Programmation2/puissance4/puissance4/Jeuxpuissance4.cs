using System;
using System.Text;

namespace puissance4
{
    public class Jeuxpuissance4
    {
        private string[,] tableau = new string[6, 7];
        private string joueur1;
        private string joueur2; //Flip flop entre les deux joueurs
        public int clavier;
        private bool tour = true;
        private string joueur;
        public bool gagne = true;
        public string nbjoueur;
        private int partinull = 0;
        public string Joueur1 { get => joueur1; }
        public string Joueur2 { get => joueur2; }
        public int Clavier { get => clavier; }

        public Jeuxpuissance4(string joueur1, string joueur2)
        {
            this.joueur1 = joueur1;
            this.joueur2 = joueur2;

        }

        public Jeuxpuissance4(string[,] tableau)
        {
            this.tableau = tableau;
        }

        public Jeuxpuissance4(int clavier)
        {
            this.clavier = clavier;
        }

        /// <summary>
        /// Permet de sélectionner quel joueur joue
        /// </summary>
        public void Joueur()
        {
            if (tour == true)
            {
                //Joueur1
                VeriDisponible();
                tour = false;
                
            }
            else if (tour == false)
            {
                //Joueur2
                VeriDisponible2();
                tour = true;
                
            }
            Verification();
        }

        private void Partinull()
        {
           partinull++;
            if (partinull == 42)
            {
                gagne = false;
                nbjoueur = "partie nul";
            }
            
        }

        private void Colonne()
        {
            if (tableau[0, clavier] == " ")
            {
                if (tableau[1, clavier] == " ")
                {
                    if (tableau[2, clavier] == " ")
                    {
                        if (tableau[3, clavier] == " ")
                        {
                            if (tableau[4, clavier] == " ")
                            {
                                if (tableau[5, clavier] == " ")
                                {
                                    this.tableau[5, clavier] = joueur;
                                }
                                else
                                {
                                    this.tableau[4, clavier] = joueur;
                                }
                            }
                            else
                            {
                                this.tableau[3, clavier] = joueur;
                            }
                        }
                        else
                        {
                            this.tableau[2, clavier] = joueur;
                        }
                    }
                    else
                    {
                        this.tableau[1, clavier] = joueur;
                    }
                }
                else
                {
                    this.tableau[0, clavier] = joueur;
                }
            }
        }

        private void Verification()
        {
            VeriHorizontal();
            VeriVertical();
            VeriDiagonalDroite();
            VeriDiagonalGauche();
        }

        private void VeriHorizontal()
        {
            for (int x = 0; x < 3; x++)
            {
                if (tableau[x, clavier] == joueur)
                {
                    if (tableau[x + 1, clavier] == joueur)
                    {
                        if (tableau[x + 2, clavier] == joueur)
                        {
                            if (tableau[x + 3, clavier] == joueur)
                            {
                                gagne = false;
                                if (joueur == joueur1)
                                {
                                    nbjoueur = "Joueur 1 à gagné";
                                }
                                else if (joueur == joueur2)
                                {
                                    nbjoueur = "Joueur 2 à gagné";
                                }
                            }
                        }
                    }
                }
            }
        }

        private void VeriVertical()
        {
            for (int x = 0; x < 6; x++)
            {
                for (int y = 0; y < 4; y++)
                {
                    if (tableau[x, y] == joueur)
                    {
                        if (tableau[x, y + 1] == joueur)
                        {
                            if (tableau[x, y + 2] == joueur)
                            {
                                if (tableau[x, y + 3] == joueur)
                                {
                                    gagne = false;
                                    if (joueur == joueur1)
                                    {
                                        nbjoueur = "Joueur 1 à gagné";
                                    }
                                    else if (joueur == joueur2)
                                    {
                                        nbjoueur = "Joueur 2 à gagné";
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        /// <summary>
        /// Point de départ est dans le coin en bas à droite
        /// </summary>
        private void VeriDiagonalDroite()
        {
            for (int x = 5; x > 2; x--)
            {
                for (int y = 0; y < 4; y++)
                {
                    if (tableau[x, y] == joueur)
                    {
                        if (tableau[x - 1, y + 1] == joueur)
                        {
                            if (tableau[x - 2, y + 2] == joueur)
                            {
                                if (tableau[x - 3, y + 3] == joueur)
                                {
                                    gagne = false;
                                    if (joueur == joueur1)
                                    {
                                        nbjoueur = "Joueur 1 à gagné";
                                    }
                                    else if (joueur == joueur2)
                                    {
                                        nbjoueur = "Joueur 2 à gagné";
                                    }
                                }
                            }
                        }
                    }
                }
            }

            for (int x = 0; x < 3; x++)
            {
                for (int y = 6; y > 2; y--)
                {
                    if (tableau[x, y] == joueur)
                    {
                        if (tableau[x + 1, y - 1] == joueur)
                        {
                            if (tableau[x + 2, y - 2] == joueur)
                            {
                                if (tableau[x + 3, y - 3] == joueur)
                                {
                                    gagne = false;
                                    if (joueur == joueur1)
                                    {
                                        nbjoueur = "Joueur 1 à gagné";
                                    }
                                    else if (joueur == joueur2)
                                    {
                                        nbjoueur = "Joueur 2 à gagné";
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        /// <summary>
        /// Point de départ le coin en haut à gauche
        /// </summary>
        private void VeriDiagonalGauche()
        {
            for (int x = 0; x < 3; x++)
            {
                for (int y = 0; y < 4; y++)
                {
                    if (tableau[x,y] == joueur)
                    {
                        if (tableau[x + 1,y +1] == joueur)
                        {
                            if (tableau[x + 2,y + 2] == joueur)
                            {
                                if (tableau[x + 3,y + 3] == joueur)
                                {
                                    gagne = false;
                                    if (joueur == joueur1)
                                    {
                                        nbjoueur = "Joueur 1 à gagné";
                                    }
                                    else if (joueur == joueur2)
                                    {
                                        nbjoueur = "Joueur 2 à gagné";
                                    }
                                }
                            }
                        }
                    }
                }
            }

            for (int x = 5; x > 2; x--)
            {
                for (int y = 6; y > 2; y--)
                {
                    if (tableau[x, y] == joueur)
                    {
                        if (tableau[x - 1, y - 1] == joueur)
                        {
                            if (tableau[x - 2, y - 2] == joueur)
                            {
                                if (tableau[x - 3, y - 3] == joueur)
                                {
                                    gagne = false;
                                    if (joueur == joueur1)
                                    {
                                        nbjoueur = "Joueur 1 à gagné";
                                    }
                                    else if (joueur == joueur2)
                                    {
                                        nbjoueur = "Joueur 2 à gagné";
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        public void Tableau()
        {
            for (int x = 0; x < this.tableau.GetLength(0); x++)
            {
                for (int y = 0; y < this.tableau.GetLength(1); y++)
                {
                    this.tableau[x, y] = " ";
                }
            }

        }

        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();

            for (int x = 0; x < this.tableau.GetLength(0); x++)
            {
                for (int y = 0; y < this.tableau.GetLength(1); y++)
                {
                    sb.Append(" " + this.tableau[x, y] + " ");
                }
                sb.AppendLine();
            }
            if (gagne == false)
            {

            }
            for (int i = 1; i <= tableau.GetLength(1); i++)
            {
                sb.Append(" " + i + " ");
            }
            return sb.ToString();
        }

        public void Automate()
        {
            Random rnd = new Random();
            int rnd1 = rnd.Next(7);
            clavier = rnd1;
        }
        private void VeriDisponible()
        {
            if (tableau[0,clavier] == " ")
            {
                Partinull();
                joueur = joueur1;
                Colonne();
            }
            else
            {
                Automate();
            }
        }

        private void VeriDisponible2()
        {
            if (tableau[0, clavier] == " ")
            {
                Partinull();
                joueur = joueur2;
                Colonne();
            }
            else
            {
                Automate();
            }
        }
    }
}
