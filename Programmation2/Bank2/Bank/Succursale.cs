using System;
using System.Collections.Generic;
using System.Text;

namespace Bank
{
    public class Succursale : IEquatable<Succursale>
    {
        private List<Clients> lesClients = new List<Clients>();
        private int numeroIdentification;
        private string nomSuccursale;

        public Succursale(string nomSuccursale, int numeroIdentification )
        {
            this.NomSuccursale = nomSuccursale;
            this.NumeroIdentification = numeroIdentification;
        }


        public int NumeroIdentification { get => numeroIdentification; set => numeroIdentification = value; }
        public string NomSuccursale { get => nomSuccursale; set => nomSuccursale = value; }



        /// <summary>
        /// Permet d'ajouter un clients dans une succursale
        /// </summary>
        /// <param name="leClient"></param>
        /// <returns>Retourne le nombre de clients dans la succursale</returns>
        public int AjouterClients(Clients leClient)
        {
            lesClients.Add(leClient);
            return lesClients.Count;
        }

        /// <summary>
        /// Permet d'ajouter un compte à un client
        /// </summary>
        /// <param name="compte"></param>
        /// <returns>Vrai si il a ajouter un compte sinon faux</returns>
        public bool AjouterCompte(Compte compte)
        {
            foreach (Clients clients in lesClients)
            { 
                if (clients.NomClient.Equals(clients.NomClient))
                {
                    clients.AjouterCompte(compte);
                    return true;
                }
            }
            return false;
        }

        /// <summary>
        /// Permet de supprimer un compte d'un client
        /// </summary>
        /// <param name="compte"></param>
        /// <returns>Vrai si le compte est supprimer et faux si le compte n'est pas supprimer</returns>
        public bool SupprimerCompte(Compte compte)
        {
            foreach (Clients clients in lesClients)
            {
                if (clients.NomClient.Equals(clients.NomClient))
                {
                    clients.SupprimerCompte(compte);
                    return true;
                }
            }
            return false;
        }

        /// <summary>
        /// Permet de vérifier si c'est bien un objet qui est entrain de comparaitre
        /// </summary>
        /// <param name="obj"></param>
        /// <returns>False si ce n'est pas un objet et si ce n'est pas une succursale et Vrai si les deux conditions sont vrai</returns>
        public override bool Equals(object obj)
        {
            if (obj == null)
                return false;

            if (!(obj is Succursale))
            {
                return false;
            }

            return Equals(obj as Succursale);
        }

        /// <summary>
        /// Equals avec une autre succursale
        /// </summary>
        /// <param name="other"></param>
        /// <returns>Vrai si les succursales sont équivalente sur le nom de la succursale</returns>
        public bool Equals(Succursale other)
        {
            return other != null &&
                NomSuccursale == other.NomSuccursale;
        }

        public override int GetHashCode()
        {
            var hashCode = 364868598;
            hashCode = hashCode * -1521134295 + NumeroIdentification.GetHashCode();
            hashCode = hashCode * -1521134295 + EqualityComparer<string>.Default.GetHashCode(NomSuccursale);
            return hashCode;
        }

        public override string ToString()
        {
            return "Nom de la succursale : " + nomSuccursale + "\nNuméro d'identification : " + numeroIdentification + "\n";
        }
    }
}
