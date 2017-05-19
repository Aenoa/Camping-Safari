using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CampingSafari.Models
{
    public class Campsite
    {
        public int Id { get; set; }
        public int Numero { get; set; }
        private String zone;
        private String category;
        public int NbPersonne { get; set; }
        public Decimal Prize { get; set; }
        public bool IsReserved { get; set; }
        public bool IsUnavailable { get; set; }

        public String Zone
        {
            get
            {
                return zone;
            }
            set
            {
                zone = value;
            }
        }
        public String Category
        {
            get
            {
                return category;
            }
            set
            {
                category = value;
            }
        }
        
        

        public Campsite(int id,int numero, String zone, String category, int nbPersonne, Decimal prize, bool isReserved, bool isUnavailable)
        {
            Id = id;
            Numero = numero;
            Zone = zone;
            Category = category;
            NbPersonne = nbPersonne;
            Prize = prize;
            IsReserved = isReserved;
            IsUnavailable = isUnavailable;
        }

        public Campsite(int numero ,String zone, String category, int nbPersonne, Decimal prize, bool isReserved, bool isUnavailable)
        {
            Numero = numero;
            Zone = zone;
            Category = category;
            NbPersonne = nbPersonne;
            Prize = prize;
            IsReserved = isReserved;
            IsUnavailable = isUnavailable;
        }
    }
}