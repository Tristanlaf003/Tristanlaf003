using System;
using System.Collections.Generic;
using System.Text;

namespace Bank
{
    public class Compte
    {
        private uint numeroCompte;
        private ushort chiffreVerificateur;
        private int montantArgent;

        public Compte(uint numeroCompte, ushort chiffreVerificateur, int montantArgent)
        {
            this.NumeroCompte = numeroCompte;
            this.ChiffreVerificateur = chiffreVerificateur;
            this.MontantArgent1 = montantArgent;
        }

        public int MontantArgent { get => MontantArgent1; set => MontantArgent1 = value; }
        public uint NumeroCompte { get => numeroCompte; set => numeroCompte = value; }
        public ushort ChiffreVerificateur { get => chiffreVerificateur; set => chiffreVerificateur = value; }
        public int MontantArgent1 { get => montantArgent; set => montantArgent = value; }
    }
}
