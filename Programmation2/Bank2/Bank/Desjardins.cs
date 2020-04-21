using System;
using System.Collections.Generic;
using System.Text;

namespace Bank
{
    public class Desjardins
    {
        const string NomBank = "Desjardins";
        const ushort NumroInstitution = 815;
        private List<Succursale> lesSuccursale = new List<Succursale>();

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
        public bool AjouterClient(Clients clients, Succursale succursale)
        {
            foreach (Succursale succursale1 in lesSuccursale)
            {
                if (succursale1.Equals(succursale))
                {
                    succursale1.AjouterClients(clients);
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
        public bool AjouterCompte(Compte compte, Clients clients, Succursale succursale)
        {
            foreach (Succursale succursale1 in lesSuccursale)
            {
                if (succursale1.Equals(succursale))
                {
                    succursale1.AjouterCompte(compte, clients);
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
        public bool SupprimerCompte(Compte compte, Clients clients, Succursale succursale)
        {
            foreach(Succursale succursale1 in lesSuccursale)
            {
                if (succursale1.Equals(succursale))
                {
                    succursale1.SupprimerCompte(compte, clients);
                    return true;
                }
            }
            return false;
        }

        /// <summary>
        /// Permet de de faire un dépôt d'argent
        /// </summary>
        /// <param name="montant">Int</param>
        /// <param name="clients">Prénom et nom</param>
        /// <param name="compte">Numéro du compte, chiffre vérificateur et montant d'argent</param>
        /// <param name="succursale">Numéro d'identification et le nom de la succursale</param>
        /// <returns>Vrai si le dépôt est réussi et faux si le dépôt n'est pas réussi</returns>
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

        /// <summary>
        /// Permet defaire un retrait d'argent
        /// </summary>
        /// <param name="montant"></param>
        /// <param name="clients"></param>
        /// <param name="compte"></param>
        /// <param name="succursale"></param>
        /// <returns>Vrai si le retrait d'argent a fonctionné et faux si le retrait d'argent n'a pas fonctionné</returns>
        public bool RetraitArgent(int montant, Clients clients, Compte compte, Succursale succursale)
        {
            foreach (Succursale succursale1 in lesSuccursale)
            {
                if (succursale1.Equals(succursale))
                {
                    succursale1.RetraitArgent(montant, compte, clients);
                    return true;
                }
            }
            return false;
        }
    }
}
