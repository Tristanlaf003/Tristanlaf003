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
            Console.WriteLine("Entrez le nom de la caisse");
            Clients clients = new Clients("Tristan", "Lafontaine");
            bank.NomSuccursale = "Victoriaville";
            bank.AjouterClient(clients);

            ///Permet d'ajouter un compte à un client
            Console.WriteLine("Entrez le nom de la caisse");
            Compte compte = new Compte(123456, 7, 0);
            bank.NomSuccursale = "Victoriaville";
            clients.PrenomClient = "Tristan";
            bank.AjouterCompte(compte);

            Console.ReadLine();

            /*///Supprimer un compte
            //Succursale succursale1 = new Succursale("Victoriaville", 1234567);
            Compte compte1 = new Compte(123456, 7, 10);
            bank.NomSuccursale = "Victoriaville";
            bank.SupprimerCompte(compte1);*/

            ///Dépôt d'argent
            int montant = 100;
            Clients clients2 = new Clients("Tristan", "Lafontaine");
            Compte compte2 = new Compte(123456,7,0);
            Succursale succursale2 = new Succursale("Victoriaville",12345);
            bank.DepotArgent(montant, clients2, compte2, succursale2);
            
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
