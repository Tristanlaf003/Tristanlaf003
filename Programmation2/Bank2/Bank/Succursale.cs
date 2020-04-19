using System;
using System.Collections.Generic;
using System.Text;

namespace Bank
{
    public class Succursale
    {
        private List<Clients> lesClients = new List<Clients>();
        private string prenom;
        private string nom;
        private uint numeroIdentification;

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
    }
}
