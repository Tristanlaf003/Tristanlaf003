using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bank;

namespace AffichageBank
{
    class Program
    {
        static void Main(string[] args)
        {

            Desjardins bank = GenerationDesSuccursale();
            
            Console.WriteLine("Entrez le nom de la caisse");
            Clients clients = new Clients("Tristan", "Lafontaine");
            bank.NomSuccursale = Console.ReadLine();
            bank.AjouterClient(clients);
            Console.WriteLine(bank.ToString());
        }

        private static Desjardins GenerationDesSuccursale()
        {
            const int maxSuccursale = 3;
            string[] nomSuccursale = new string[maxSuccursale] { "Victoriaville", "Montréal", "Québec" };

            Random rnd = new Random();
            Desjardins bank = new Desjardins();

            for (int compteurSuccursale = 0; compteurSuccursale < maxSuccursale; compteurSuccursale++)
            {
                int randomIdentification = rnd.Next(10000, 99999) + 1;

                Succursale nouvelleSuccursale = new Succursale(nomSuccursale[compteurSuccursale], randomIdentification);
                bank.AjouterSuccursale(nouvelleSuccursale);
            }
            return bank;
        }
    }
}
