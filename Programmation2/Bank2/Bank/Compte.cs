﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Bank
{
    public class Compte : IEquatable<Compte>
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

        /// <summary>
        /// Permet de vérifier si c'est bien un ojet qui n'est pas null et que c'est un objet de type Compte
        /// </summary>
        /// <param name="obj"></param>
        /// <returns>Vrai si l'oject n'est pas null et qui est de type compte</returns>
        public override bool Equals(object obj)
        {
            if (obj == null)
            {
                return false;
            }
            if (!(obj is Compte))
            {
                return false;
            }
            return Equals(obj as Compte);
        }

        /// <summary>
        /// Equals avec un compte comme autre élément
        /// </summary>
        /// <param name="other"></param>
        /// <returns>Vrai si les comptes sont équaux sur le numéro de compte et le chiffre vérificateur</returns>
        public bool Equals(Compte other)
        {
            return other != null &&
                NumeroCompte == other.NumeroCompte &&
                ChiffreVerificateur == other.ChiffreVerificateur;
        }

        public override int GetHashCode()
        {
            var hashCode = 315562398;
            hashCode = hashCode * -1521134295 + NumeroCompte.GetHashCode();
            hashCode = hashCode * -1521134295 + ChiffreVerificateur.GetHashCode();
            return hashCode;
        }
    }
}
