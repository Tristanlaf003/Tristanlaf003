using System;
using System.Collections.Generic;
using System.Text;

namespace CegepVictoTechInfoH2020P2DA1912124JeuxVie
{
    public class Jeux
    {
        private int xtaille;
        private int ytaille;
        private int changeDeVivre; //10%
        private string[,] tableau;
        private string[,] tableau2;
        private Random rnd = new Random();
        public bool enTransition;

        /// <summary>
        /// Permet de générer le premier tableau
        /// </summary>
        public void Tableau()
        {
            tableau = new string[xtaille, ytaille];

            //tableau[1, 1] = "*";
            //tableau[1, 2] = "*";
            //tableau[1, 3] = "*";
            

            
            for (int i = 0; i < tableau.GetLength(0); i++)
            {
                for (int y = 0; y < tableau.GetLength(0); y++)
                {
                    int chiffre = rnd.Next(changeDeVivre);
                    if (chiffre <= this.changeDeVivre)
                    {
                        if (chiffre == 0)
                        {
                            tableau[i, y] = "*"; //Cellule vivant
                        }
                    }
                    else
                    {
                        tableau[i, y] = " "; //Cellule morte
                    }
                }
            }
        }
        /// <summary>
        /// Permet de faire un flip flop
        /// </summary>
        public void FaireTransition()
        {
            if (enTransition)
            {
                PasserEnCyclePlein();
            }
            else
            {
                PasseEnModeTransition();
            }
            this.enTransition = !enTransition;
        }

        private void PasserEnCyclePlein()
        {
       
        }
        /// <summary>
        /// Permet de faire appelle à la méthode calculVoisin et la mise à jour du tableau
        /// </summary>
        private void PasseEnModeTransition()
        {
            calculVoisin();
            miseAJourTableauPrincipal();

        }
        /// <summary>
        /// Permet d'appeller les méthodes calculCoeurGrille et calculBodure
        /// </summary>
        private void calculVoisin()
        {
            tableau2 = new string[xtaille, ytaille];
            calculCoeurGrille(); //Tout sauf les bords
            calculBordure();
        }
        /// <summary>
        /// Permet de calculer les voisins des cellules de chaque cellules et de savoir
        /// si la cellule doit naitre, de mourrir ou qu'elle fait rien
        /// </summary>
        private void calculCoeurGrille()
        {
            for (int i = 1; i < (tableau.GetLength(0) - 1); i++)
            {
                for (int y = 1; y < (tableau.GetLength(0) - 1); y++)
                {
                    int celluleVivant = 0;
                    if (tableau[i - 1, y - 1] == "*")
                    {
                        celluleVivant++;
                    }
                    if (tableau[i - 1, y] == "*")
                    {
                        celluleVivant++;
                    }
                    if (tableau[i - 1, y + 1] == "*")
                    {
                        celluleVivant++;
                    }
                    if (tableau[i, y - 1] == "*")
                    {
                        celluleVivant++;
                    }
                    if (tableau[i, y + 1] == "*")
                    {
                        celluleVivant++;
                    }
                    if (tableau[i + 1, y - 1] == "*")
                    {
                        celluleVivant++;
                    }
                    if (tableau[i + 1, y] == "*")
                    {
                        celluleVivant++;
                    }
                    if (tableau[i + 1, y + 1] == "*")
                    {
                        celluleVivant++;
                    }
                    if (tableau[i, y] == "*" && celluleVivant == 2)
                    {
                        tableau2[i, y] = "*";
                    }
                    if (tableau[i, y] == "*" && celluleVivant < 2)
                    {
                        tableau2[i, y] = "-";
                    }
                    else if (celluleVivant > 3 || celluleVivant < 3)
                    {
                        tableau2[i, y] = "-";
                    }
                    else if (celluleVivant == 3)
                    {
                        tableau2[i, y] = "+";
                    }
                }
            }
        }
        /// <summary>
        /// Faire appeller les méthodes calculCoin,calculLigneHaut,calculLignebase,
        /// calculColonneGauche,calculColonneDroite
        /// </summary>
        private void calculBordure()
        {
            calculCoin();
            calculLigneHaut();
            calculLigneBas();
            calculColonneGauche();
            calculColonneDroite();
        }
        /// <summary>
        /// Permet de calculer les voisins des quatre coins du jeux pour
        /// savoir si la cellule doit naitre, mourrir ou que'elle fait rien
        /// </summary>
        private void calculCoin()
        {

            //Premier coin à gauche
            int celluleVivant2 = 0;
            if (tableau[0, 1] == "*")
            {
                celluleVivant2++;
            }
            if (tableau[1, 1] == "*")
            {
                celluleVivant2++;
            }
            if (tableau[1, 0] == "*")
            {
                celluleVivant2++;
            }
            if (tableau[0, 0] == "*" && celluleVivant2 == 2)
            {
                tableau2[0, 0] = "*";
            }
            else if (tableau[0, 0] == "*" && celluleVivant2 < 2)
            {
                tableau2[0, 0] = "-";
            }
            else if (celluleVivant2 == 3)
            {
                tableau2[0, 0] = "+";
            }
            else if (celluleVivant2 > 3 || celluleVivant2 < 3)
            {
                tableau2[0, 0] = "-";
            }
            //Deuxième coin à la droite
            celluleVivant2 = 0;
            if (tableau[0, (tableau.GetLength(0) - 1)] == "*")
            {
                celluleVivant2++;
            }
            if (tableau[1, (tableau.GetLength(0) - 1)] == "*")
            {
                celluleVivant2++;
            }
            if (tableau[1, tableau.GetLength(0) - 1] == "*")
            {
                celluleVivant2++;
            }
            if (tableau[1, tableau.GetLength(0) - 1] == "*" && celluleVivant2 == 2)
            {
                tableau2[1, tableau.GetLength(1) - 1] = "*";
            }
            else if (tableau[1, tableau.GetLength(0) - 1] == "*" && celluleVivant2 < 2)
            {
                tableau2[1, tableau.GetLength(1) - 1] = "-";
            }
            else if (celluleVivant2 == 3)
            {
                tableau2[1, tableau.GetLength(1) - 1] = "+";
            }
            else if (celluleVivant2 > 3 || celluleVivant2 < 3)
            {
                tableau2[1, tableau.GetLength(0) - 1] = "-";
            }
            //Troisième coin en bas à gauche
            celluleVivant2 = 0;
            if (tableau[(tableau.GetLength(0) - 1), 0] == "*")
            {
                celluleVivant2++;
            }
            if (tableau[(tableau.GetLength(0) - 1), 1] == "*")
            {
                celluleVivant2++;
            }
            if (tableau[tableau.GetLength(0) - 1, 1] == "*")
            {
                celluleVivant2++;
            }
            if (tableau[tableau.GetLength(0) - 1, 0] == "*" && celluleVivant2 == 2)
            {
                tableau2[tableau.GetLength(0) - 1, 0] = "*";
            }
            if (tableau[tableau.GetLength(0) - 1, 0] == "*" && celluleVivant2 < 2)
            {
                tableau2[tableau.GetLength(0) - 1, 0] = "-";
            }
            else if (celluleVivant2 == 3)
            {
                tableau2[tableau.GetLength(0) - 1, 0] = "+";
            }
            else if (celluleVivant2 > 3 || celluleVivant2 < 3)
            {
                tableau2[tableau.GetLength(0) - 1, 0] = "-";
            }
            //Quatrième coin en bas à droite
            celluleVivant2 = 0;
            if (tableau[(tableau.GetLength(0) - 1), tableau.GetLength(0) - 1] == "*")
            {
                celluleVivant2++;
            }
            if (tableau[(tableau.GetLength(0) - 1), (tableau.GetLength(0) - 1)] == "*")
            {
                celluleVivant2++;
            }
            if (tableau[tableau.GetLength(0) - 1, (tableau.GetLength(0) - 1)] == "*")
            {
                celluleVivant2++;
            }
            if (tableau[tableau.GetLength(0) - 1, tableau.GetLength(0) - 1] == "*" && celluleVivant2 == 2)
            {
                tableau2[tableau.GetLength(0) - 1, tableau.GetLength(0) - 1] = "*";
            }
            if (tableau[tableau.GetLength(0) - 1, tableau.GetLength(0) - 1] == "*" && celluleVivant2 < 2)
            {
                tableau2[tableau.GetLength(0) - 1, tableau.GetLength(0) - 1] = "-";
            }
            else if (celluleVivant2 == 3)
            {
                tableau2[tableau.GetLength(0) - 1, tableau.GetLength(0) - 1] = "+";
            }
            else if (celluleVivant2 > 3 || celluleVivant2 < 3)
            {
                tableau2[tableau.GetLength(0) - 1, tableau.GetLength(0) - 1] = "-";
            }
        }
        /// <summary>
        /// calcule les voisins des cellules de la ligne du haut
        /// </summary>
        private void calculLigneHaut()
        {

            for (int i = 1; i < tableau.GetLength(0) - 1; i++)
            {
                int celluleVivant = 0;
                if (tableau[0, i - 1] == "*")
                {
                    celluleVivant++;
                }
                if (tableau[1, i - 1] == "*")
                {
                    celluleVivant++;
                }
                if (tableau[1, i] == "*")
                {
                    celluleVivant++;
                }
                if (tableau[1, i + 1] == "*")
                {
                    celluleVivant++;
                }
                if (tableau[0, i + 1] == "*")
                {
                    celluleVivant++;
                }
                if (tableau[0, i] == "*" && celluleVivant == 2)
                {
                    tableau2[0, i] = "*";
                }
                if (tableau[0, i] == "*" && celluleVivant < 2)
                {
                    tableau2[0, i] = "-";
                }
                else if (celluleVivant == 3)
                {
                    tableau2[0, i] = "+";
                }
                else if (celluleVivant > 3 || celluleVivant < 3)
                {
                    tableau2[0, i] = "-";
                }
            }
        }
        /// <summary>
        /// calcule les voisins des cellules de la ligne du bas
        /// </summary>
        private void calculLigneBas()
        {

            for (int i = 1; i < tableau.GetLength(0) - 1; i++)
            {
                int celluleVivant = 0;
                if (tableau[tableau.GetLength(0) - 1, i - 1] == "*")
                {
                    celluleVivant++;
                }
                if (tableau[tableau.GetLength(0) - 2, i - 1] == "*")
                {
                    celluleVivant++;
                }
                if (tableau[tableau.GetLength(0) - 2, i] == "*")
                {
                    celluleVivant++;
                }
                if (tableau[tableau.GetLength(0) - 2, i + 1] == "*")
                {
                    celluleVivant++;
                }
                if (tableau[tableau.GetLength(0) - 1, i + 1] == "*")
                {
                    celluleVivant++;
                }
                if (tableau[tableau.GetLength(0) - 1, i] == "*" && celluleVivant == 2)
                {
                    tableau2[tableau.GetLength(0) - 1, i] = "*";
                }
                if (tableau[tableau.GetLength(0) - 1, i] == "*" && celluleVivant < 2)
                {
                    tableau2[tableau.GetLength(0) - 1, i] = "-";
                }
                else if (celluleVivant == 3)
                {
                    tableau2[tableau.GetLength(0) - 1, i] = "+";
                }
                else if (celluleVivant > 3 || celluleVivant < 3)
                {
                    tableau2[tableau.GetLength(0) - 1, i] = "-";
                }
            }
        }
        /// <summary>
        /// calcule les voisins des cellules de la colonne de gauche
        /// </summary>
        private void calculColonneGauche()
        {

            for (int i = 1; i < tableau.GetLength(0) - 1; i++)
            {
                int celluleVivant = 0;
                if (tableau[i - 1, 0] == "*")
                {
                    celluleVivant++;
                }
                if (tableau[i - 1, 1] == "*")
                {
                    celluleVivant++;
                }
                if (tableau[i, 1] == "*")
                {
                    celluleVivant++;
                }
                if (tableau[i + 1, 1] == "*")
                {
                    celluleVivant++;
                }
                if (tableau[i + 1, 0] == "*")
                {
                    celluleVivant++;
                }
                if (tableau[i, 0] == "*" && celluleVivant == 2)
                {
                    tableau2[i, 0] = "*";
                }
                if (tableau[i, 0] == "*" && celluleVivant < 2)
                {
                    tableau2[i, 0] = "-";
                }
                else if (celluleVivant == 3)
                {
                    tableau2[i, 0] = "+";
                }
                else if (celluleVivant > 3 || celluleVivant < 3)
                {
                    tableau2[i, 0] = "-";
                }
            }
        }
        /// <summary>
        /// calcule les voisins des cellules de la colonne de droite
        /// </summary>
        private void calculColonneDroite()
        {

            for (int i = 1; i < tableau.GetLength(0) - 1; i++)
            {
                int celluleVivant = 0;
                if (tableau[i - 1, tableau.GetLength(0) - 2] == "*")
                {
                    celluleVivant++;
                }
                if (tableau[i - 1, tableau.GetLength(0) - 2] == "*")
                {
                    celluleVivant++;
                }
                if (tableau[i, tableau.GetLength(0) - 2] == "*")
                {
                    celluleVivant++;
                }
                if (tableau[i + 1, tableau.GetLength(0) - 3] == "*")
                {
                    celluleVivant++;
                }
                if (tableau[i + 1, tableau.GetLength(0) - 3] == "*")
                {
                    celluleVivant++;
                }
                if (tableau[i, tableau.GetLength(0) - 1] == "*" && celluleVivant == 2)
                {
                    tableau2[i, tableau.GetLength(0) - 1] = "*";
                }
                if (tableau[i, tableau.GetLength(0) - 1] == "*" && celluleVivant < 2)
                {
                    tableau2[i, tableau.GetLength(0) - 1] = "-";
                }
                else if (celluleVivant == 3)
                {
                    tableau2[i, tableau.GetLength(0) - 2] = "+";
                }
                else if (celluleVivant > 3 || celluleVivant < 3)
                {
                    tableau2[i, tableau.GetLength(0) - 1] = "-";
                }
            }
        }
        /// <summary>
        /// Permet de mettre à jour le tableau 1 avec le tableau 2
        /// </summary>
        private void miseAJourTableauPrincipal()
        {
            for (int i = 0; i < tableau.GetLength(0); i++)
            {
                for (int y = 0; y < tableau.GetLength(0); y++)
                {
                    if (tableau2[i, y] == "+" || tableau2[i, y] == "*")
                    {
                        tableau[i, y] = "*";
                    }
                    else
                    {
                        tableau[i, y] = " ";
                    }
                }
            }
        }

        /// <summary>
        /// Permet de générer le tableau 1 pour faire apparaitre dans la console ou autre
        /// </summary>
        /// <returns>ToString</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            for (int i = 0; i < tableau.GetLength(0); i++)
            {
                for (int y = 0; y < tableau.GetLength(0); y++)
                {
                    sb.Append(tableau[i, y] + " ");
                }
                sb.AppendLine("");
            }
            return sb.ToString();
        }

        public Jeux(int xtaille, int ytaille, int changeDeVivre)
        {
            this.xtaille = xtaille;
            this.ytaille = ytaille;
            this.changeDeVivre = changeDeVivre;
        }

        public Jeux(int changeDeVivre)
        {
            this.changeDeVivre = changeDeVivre;
        }

        private int Xtaille1 { get => xtaille; set => xtaille = value; }
        private int Ytaille1 { get => ytaille; set => ytaille = value; }
        private int ChangeDeVivre { get => changeDeVivre; set => changeDeVivre = value; }
    }
}
