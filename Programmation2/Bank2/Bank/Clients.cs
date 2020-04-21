using System;
using System.Collections.Generic;
using System.Text;

namespace Bank
{
    public class Clients : IEquatable<Clients>
    {
        private string prenomClient;
        private string nomClient;
        private List<Compte> lesComptes = new List<Compte>();

        public Clients(string prenomClient, string nomClient)
        {
            this.PrenomClient = prenomClient;
            this.NomClient = nomClient;
        }

        public string PrenomClient { get => prenomClient; set => prenomClient = value; }
        public string NomClient { get => nomClient; set => nomClient = value; }

        /// <summary>
        /// Permet d'ajouter un compte à un client
        /// </summary>
        /// <param name="leCompte"></param>
        /// <returns>Nombre de compte que possède un client</returns>
        public int AjouterCompte(Compte leCompte)
        {
            lesComptes.Add(leCompte);
            return lesComptes.Count;
        }

        /// <summary>
        /// Permet de supprimer un compte d'un client
        /// </summary>
        /// <param name="compte"></param>
        /// <returns>Vrai si le compte est supprimer et faux si le compte n'est pas supprimer</returns>
        public bool SupprimerCompte(Compte compte)
        {
            foreach (Compte compte1 in lesComptes)
            {
                if (compte1.Equals(compte))
                {
                    lesComptes.Remove(compte);
                    return true;
                }
            }
            return false;
        }

        /// <summary>
        /// Permet de faire un dépôt d'argent dans un compte
        /// </summary>
        /// <param name="montantArgent"></param>
        /// <param name="compte"></param>
        /// <returns>Vrai si le dépôt a fonctionné et faux si le dépôt n'a pas fonctionné</returns>
        public bool DepotArgent(int montantArgent, Compte compte)
        {
            foreach (Compte compte1 in lesComptes)
            {
                if (compte1.Equals(compte))
                {
                    compte1.DepotArgent(montantArgent);
                    return true;
                }
            }
            return false;
        }

        /// <summary>
        /// Permet de faire un retrait d'argent
        /// </summary>
        /// <param name="montantArgent"></param>
        /// <param name="compte"></param>
        /// <returns>Vrai si le retrait a fonctionné et faux si le retrait n'a pas fonctionné</returns>
        public bool RetraitArgent(int montantArgent, Compte compte)
        {
            foreach (Compte compte1 in lesComptes)
            {
                if (compte1.Equals(compte))
                {
                    compte1.RetraitArgent(montantArgent);
                    return true;
                }
            }
            return false;
        }

        /// <summary>
        /// Permet de vérifier si c'est bien un ojet qui n'est pas null et que c'est un objet de type Client
        /// </summary>
        /// <param name="obj"></param>
        /// <returns>Vrai si l'oject n'est pas null et qui est de type clients</returns>
        public override bool Equals(object obj)
        {
            if (obj == null)
            {
                return false;
            }
            if (!(obj is Clients))
            {
                return false;
            }
            return Equals(obj as Clients);
        }

        /// <summary>
        /// Equals avec un client comme autre élément
        /// </summary>
        /// <param name="other"></param>
        /// <returns>Retourne vrai si les clients sont égaux sur le prénom et le nom </returns>
        public bool Equals(Clients other)
        {
            return other != null &&
                PrenomClient == other.PrenomClient &&
                NomClient == other.NomClient;
        }

        public override int GetHashCode()
        {
            var hashCode = 1232589645;
            hashCode = hashCode * -1521134295 + EqualityComparer<string>.Default.GetHashCode(PrenomClient);
            hashCode = hashCode * -1521134295 + EqualityComparer<string>.Default.GetHashCode(NomClient);
            return hashCode;
        }
    }
}
