using Bank;
using System;

namespace AffichageBank
{
    class Program
    {
        static void Main(string[] args)
        {

            Desjardins bank = GenerationDesSuccursale();

            ///Permet d'inscrire un client donc le prénom est Tristan et le nom est Lafontaine
            Clients clientsAjouter = new Clients("Tristan", "Lafontaine");
            Succursale succursaleAjouter = new Succursale("Victoriaville", 12345);
            bank.AjouterClient(clientsAjouter, succursaleAjouter);

            ///Permet d'ajouter un compte à un client
            Compte compteAjouterCompte = new Compte(123456, 7, 0);
            Clients clientAjouterCompte = new Clients("Tristan", "Lafontaine");
            Succursale succursaleAjouterCompte = new Succursale("Victoriaville", 12345);
            bank.AjouterCompte(compteAjouterCompte,clientAjouterCompte,succursaleAjouterCompte);
            /*
            ///Supprimer un compte
            Compte compteSupprime = new Compte(123456, 7, 10);
            Clients clientSupprime = new Clients("Tristan", "Lafontaine");
            Succursale succursaleSupprime = new Succursale("Victoriaville",12345);
            bank.SupprimerCompte(compteSupprime, clientSupprime,succursaleSupprime);
            */
            ///Dépôt d'argent
            int montantDepot = 100;
            Clients clientsDepot = new Clients("Tristan", "Lafontaine");
            Compte compteDepot = new Compte(123456,7,0);
            Succursale succursaleDepot = new Succursale("Victoriaville",12345);
            bank.DepotArgent(montantDepot, clientsDepot, compteDepot, succursaleDepot);

            ///Retrait d'argent
            int montantRetrait = 50;
            Clients clientsRetrait = new Clients("Tristan", "Lafontaine");
            Compte compteRetrait = new Compte(123456, 7, 0);
            Succursale succursaleRetrait = new Succursale("Victoriaville", 12345);
            bank.RetraitArgent(montantRetrait, clientsRetrait, compteRetrait, succursaleRetrait);

        }

        private static Desjardins GenerationDesSuccursale()
        {
            const int MaxSuccursale = 3;
            string[] nomSuccursale = new string[MaxSuccursale] { "Victoriaville", "Montréal", "Québec" };

            Desjardins bank = new Desjardins();

            for (int compteurSuccursale = 0; compteurSuccursale < MaxSuccursale; compteurSuccursale++)
            {
                Succursale nouvelleSuccursale = new Succursale(nomSuccursale[compteurSuccursale],12345);
                bank.AjouterSuccursale(nouvelleSuccursale);
            }
            return bank;
        }
    }
}
