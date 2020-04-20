using System;
using System.Collections.Generic;
using System.Text;

namespace Bank
{
    public class Clients
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
    }
}
