using System;
using System.Collections.Generic;
using System.Text;

namespace Bank
{
    public class Succursale
    {
        private List<Clients> lesClients = new List<Clients>();
        private int numeroIdentification;
        private string nomSuccursale;

        public Succursale(string nomSuccursale, int numeroIdentification )
        {
            this.NomSuccursale = nomSuccursale;
            this.numeroIdentification = numeroIdentification;
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
        public override string ToString()
        {
            return "Nom de la succursale : " + nomSuccursale + "\nNuméro d'identification : " + numeroIdentification + "\n";
        }
    }
}
