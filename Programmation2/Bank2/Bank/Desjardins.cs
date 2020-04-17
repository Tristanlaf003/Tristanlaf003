using System;
using System.Collections.Generic;

namespace Bank
{
    public class Desjardins
    {
        private string nomBank = "Desjardins";
        private string numroInstitution = "815";
        private List<Succursale> lesSuccursale = new List<Succursale>();

        public int AjouterSuccursale(Succursale leSuccursale)
        {
            lesSuccursale.Add(leSuccursale);
            return lesSuccursale.Count;
        }
    }
}
