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

        /// <summary>
        /// Permet d'ajouter un client
        /// </summary>
        /// <param name="clients"></param>
        /// <returns>Retourne vrai ou faux</returns>
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

        /// <summary>
        /// Permet d'ajouter un compte à un client
        /// </summary>
        /// <param name="compte"></param>
        /// <returns>Retourne vrai ou faux</returns>
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

        /// <summary>
        /// Permet de supprimer un compte d'un client
        /// </summary>
        /// <param name="compte"></param>
        /// <returns>Vrai si le compte est supprimer ou faux si le compte n'est pas supprimer</returns>
        public bool SupprimerCompte(Compte compte)
        {
            foreach(Succursale succursale in lesSuccursale)
            {
                if (succursale.NomSuccursale.Equals(NomSuccursale))
                {
                    succursale.SupprimerCompte(compte);
                    return true;
                }
            }
            return false;
        }

        public bool DepotArgent(int montant, Clients clients, Compte compte, Succursale succursale)
        {
            foreach (Succursale succursale1 in lesSuccursale)
            {
                if (succursale1.Equals(succursale))
                {
                    succursale1.DepotArgent(montant, compte, clients);
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
