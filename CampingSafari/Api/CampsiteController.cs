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
    public class CampsiteController : ApiController
    {
        //GET: api/Campsite
        public IEnumerable<Campsite> Get()
        {
            return CampsiteDAO.getAll();
        }
        //GET : api/Campsite/5
        public Campsite Get(int id)
        {
            return CampsiteDAO.get(id);
        }
        //POST : api/Campsite
        public void Post([FromBody]JObject value)
        {
            int numero = (int)value.GetValue("campsite_numero");
            string zone = value.GetValue("campsite_zone").ToString();
            string category = value.GetValue("campsite_category").ToString();
            int nbPers = (int)value.GetValue("campsite_nbPersonne");
            Decimal prize = (Decimal)value.GetValue("campsite_prize");
            bool isReserved = (bool)value.GetValue("campsite_isReserved");
            bool isUnavailable = (bool)value.GetValue("campsite_isUnavailable");
            CampsiteDAO.add(new Campsite(numero, zone, category, nbPers, prize, isReserved, isUnavailable));
        }
        //PUT : api/Campsite/5
        public void Put(int id, [FromBody]JObject value)
        {
            int numero = (int)value.GetValue("Numero");
            string zone = value.GetValue("Zone").ToString();
            string category = value.GetValue("Category").ToString();
            int nbPers = (int)value.GetValue("NbPersonne");
            Decimal prize = (Decimal)value.GetValue("Prize");
            bool isReserved = (bool)value.GetValue("IsReserved");
            bool isUnavailable = (bool)value.GetValue("IsUnavailable");
            

            CampsiteDAO.update(id, new Campsite(numero, zone, category, nbPers, prize, isReserved, isUnavailable));
        }

        //DELETE : api/Campsite/5
        public void Delete(int id)
        {
            CampsiteDAO.delete(id);
        }

    }
}