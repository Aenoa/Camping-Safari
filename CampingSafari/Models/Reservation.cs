using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CampingSafari.Models
{
    public class Reservation
    {
        public int Id { get; set; }
        public DateTime Startdate { get; set; }
        public DateTime Enddate { get; set; }
        public bool Floating { get; set; }
        public bool Confirmation { get; set; }
        public bool Paid { get; set; }
        public DateTime Date { get; set; }
        public int NbAdulte { get; set; }
        public int NbEnfant { get; set; }
        public bool Electricity { get; set; }
        public bool Car { get; set; }

        public Reservation(int id, DateTime startdate, DateTime enddate, bool floating, bool confirmation, bool paid, DateTime date, int nbAdulte, int nbEnfant, bool electricity, bool car)
        {
            Id = id;
            Startdate = startdate;
            Enddate = enddate;
            Floating = floating;
            Confirmation = confirmation;
            Paid = paid;
            Date = date;
            NbAdulte = nbAdulte;
            NbEnfant = nbEnfant;
            Electricity = electricity;
            Car = car;
        }

        public Reservation(DateTime startdate, DateTime enddate, bool floating, bool confirmation, bool paid, DateTime date, int nbAdulte, int nbEnfant, bool electricity, bool car)
        {
            Startdate = startdate;
            Enddate = enddate;
            Floating = floating;
            Confirmation = confirmation;
            Paid = paid;
            Date = date;
            NbAdulte = nbAdulte;
            NbEnfant = nbEnfant;
            Electricity = electricity;
            Car = car;
        }




    }
}