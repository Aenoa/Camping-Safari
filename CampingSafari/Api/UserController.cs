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
    public class UserController : ApiController
    {
        //GET: api/User
        public IEnumerable<User> Get()
        {
            return UserDAO.getAll();
        }
        //GET : api/User/5
        public User Get(int id)
        {
            return UserDAO.get(id);
        }
        //POST : api/User
        public void Post([FromBody]JObject value)
        {
            int level = (int)value.GetValue("user_level");
            string name = value.GetValue("user_name").ToString();
            string surname = value.GetValue("user_surname").ToString();
            DateTime birthdate = (DateTime)value.GetValue("user_birthdate");
            string address = value.GetValue("user_address").ToString();
            int zipCode = (int)value.GetValue("user_zipCode");
            string city = value.GetValue("user_city").ToString();
            string country = value.GetValue("user_country").ToString();
            string email = value.GetValue("user_email").ToString();
            string username = value.GetValue("user_username").ToString();
            string password = value.GetValue("user_password").ToString(); 
            string phone = value.GetValue("user_phone").ToString();
            UserDAO.add(new User(level, name, surname, birthdate, address, zipCode, city, country, email, username, password, phone));

        }
        //PUT : api/User/5
        public void Put(int id, [FromBody]JObject value)
        {
            UserDAO.update(id, new User((int)value.GetValue("Level"), value.GetValue("Name").ToString(), value.GetValue("Surname").ToString(), (DateTime)value.GetValue("Birthdate"), value.GetValue("Address").ToString(), (int)value.GetValue("ZipCode"), value.GetValue("City").ToString(), value.GetValue("Country").ToString(), value.GetValue("Email").ToString(), value.GetValue("Username").ToString(), value.GetValue("Password").ToString(), value.GetValue("Phone").ToString()));
        }

        //DELETE : api/User/5
        public void Delete(int id)
        {
            UserDAO.delete(id);
        }
        [Route("api/user/check")]
        public User PostCheckUserViaEmail([FromBody]JObject value)
        {
            return UserDAO.CheckUserViaEmail(new User(value.GetValue("user_email").ToString(), value.GetValue("user_password").ToString()));
       }
    }
}