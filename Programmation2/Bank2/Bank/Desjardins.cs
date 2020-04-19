using System;
using System.Collections.Generic;

namespace Bank
{
    public class Desjardins
    {
        private string nomBank = "Desjardins";
        private string numroInstitution = "815";
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
    }
}
