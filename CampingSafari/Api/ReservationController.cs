using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CampingSafari.DAO;
using CampingSafari.Models;
using System.Web.Http;
using Newtonsoft.Json.Linq;

namespace CampingSafari.Api
{
    public class ReservationController : ApiController
    {
        //GET: api/Reservation
        public IEnumerable<Reservation> Get()
        {
           return ReservationDAO.getAll();
        }

        //GET: api/Reservation/5
        public Reservation Get(int id)
        {
            return ReservationDAO.get(id);
        }
        //POST: api/Reservation
        public void Post([FromBody]JObject value)
        {
            DateTime startdate = (DateTime)value.GetValue("reservation_startdate");
            DateTime enddate = (DateTime)value.GetValue("reservation_enddate");
            bool floating = (bool)value.GetValue("reservation_floating");
            bool confirmation = (bool)value.GetValue("reservation_confirmation");
            bool paid = (bool)value.GetValue("reservation_paid");
            DateTime date = (DateTime)value.GetValue("reservation_date");
            int nbAdulte = (int)value.GetValue("reservation_nbAdulte");
            int nbEnfant = (int)value.GetValue("reservation_nbEnfant");
            bool electricity = (bool)value.GetValue("reservation_electricity");
            bool car = (bool)value.GetValue("reservation_car");
            ReservationDAO.add(new Reservation(startdate, enddate, floating, confirmation, paid, date, nbAdulte, nbEnfant, electricity, car));
        }
        //PUT : api/Reservation/5
        public void Put(int id, [FromBody]JObject value)
        {
           ReservationDAO.update(id, new Reservation((DateTime)value.GetValue("Startdate"), (DateTime)value.GetValue("Enddate"), (bool)value.GetValue("Floating"), (bool)value.GetValue("Confirmation"), (bool)value.GetValue("Paid"), (DateTime)value.GetValue("Date"), (int)value.GetValue("NbAdulte"), (int)value.GetValue("NbEnfant"), (bool)value.GetValue("Electricity"),(bool)value.GetValue("Car")));
        }
        //DELETE : api/USer/5
        public void Delete(int id)
        {
            ReservationDAO.delete(id);
        }
    }
}