using System;
using System.Collections.Generic;
using System.Text;

namespace Bank
{
    public class Desjardins
    {
        const string nomBank = "Desjardins";
        const string numroInstitution = "815";
        private List<Succursale> lesSuccursale = new List<Succursale>();
        private string nomSuccursale;


        public string NomSuccursale { get => nomSuccursale; set => nomSuccursale = value; }


        /// <summary>
        /// Permet d'ajouter une succursale à la bank
        /// </summary>
        /// <param name="leSuccursale"></param>
        /// <returns>Retourne le nombre de succursale</returns>
        public int AjouterSuccursale(Succursale leSuccursale)
        {
            lesSuccursale.Add(leSuccursale);
            return lesSuccursale.Count;
        }

        public bool AjouterClient(Clients clients)
        {
            foreach (Succursale succursale in lesSuccursale)
            {
                if (succursale.NomSuccursale.Equals(NomSuccursale))
                {
                    succursale.AjouterClients(clients);
                    return true;
                }
            }
            return false;
        }

        public bool AjouterCompte(Compte compte)
        {
            foreach (Succursale succursale in lesSuccursale)
            {
                if (succursale.NomSuccursale.Equals(NomSuccursale))
                {
                    succursale.AjouterCompte(compte);
                    return true;
                }
            }
            return false;
        }

        public override string ToString()
        {
            return base.ToString();
        }
    }
}
