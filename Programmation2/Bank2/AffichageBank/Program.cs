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
            bank.NomSuccursale = Console.ReadLine();
            bank.AjouterClient(clients);
            Console.WriteLine(bank.ToString());

            Console.WriteLine("Entrez le nom de la caisse");
            Compte compte = new Compte(123456, 7, 0);
            bank.NomSuccursale = Console.ReadLine();
            clients.PrenomClient = "Tristan";
            bank.AjouterCompte(compte);
        }

        private static Desjardins GenerationDesSuccursale()
        {
            const int MaxSuccursale = 3;
            string[] nomSuccursale = new string[MaxSuccursale] { "Victoriaville", "Montréal", "Québec" };

            Random rnd = new Random();
            Desjardins bank = new Desjardins();

            for (int compteurSuccursale = 0; compteurSuccursale < MaxSuccursale; compteurSuccursale++)
            {
                int randomIdentification = rnd.Next(10000, 99999) + 1;

                Succursale nouvelleSuccursale = new Succursale(nomSuccursale[compteurSuccursale], randomIdentification);
                bank.AjouterSuccursale(nouvelleSuccursale);
            }
            return bank;
        }
    }
}
