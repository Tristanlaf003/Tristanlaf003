using System;
using System.Collections.Generic;
using System.Text;

namespace Bank
{
    public class Clients
    {
        private uint numeroCompte;
        private ushort chiffreVerificateur;
        private List<Compte> lesComptes = new List<Compte>();

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
