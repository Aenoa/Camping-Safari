using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CampingSafari.Models
{
    public class User
    {
        private String name;
        private String surname;
        private String address;
        private String country;
        private String email;
        private String username;
        private String password;
        private String phone;
        public int ZipCode { get; set; }
        private String city; 
        public int Id { get; set; }
        public int Level { get; set; }
        public DateTime Birthdate { get; set; }
        
        public String Name
        {
            get
            {
                return name;
            }
            set
            {
                name = value;
            }
        }

        public String Surname
        {
            get
            {
                return surname;
            }
            set
            {
                surname = value;
            }
        }
        public String Address
        {
            get
            {
                return address;
            }
            set
            {
                address = value;
            }
        }
        public String Country
        {
            get
            {
                return country;
            }
            set
            {
                country = value;
            }
        }
        public String Email
        {
            get
            {
                return email;
            }
            set
            {
                email = value;
            }
        }
        public String Username
        {
            get
            {
                return username;
            }
            set
            {
                username = value;
            }
        }
        public String Password
        {
            get
            {
                return password;
            }
            set
            {
                password = value;
            }
        }

        public String Phone
        {
            get
            {
                return phone;
            }
            set
            {
                phone = value;
            }
        }

        public String City
        {
            get
            {
                return city; 
            }
            set
            {
                city = value; 
            }
        }

        public User(int level, String name, String surname, DateTime birthdate, String address, int zipCode, String city, String country, String email, String username, String password, String phone, int id)
        {
            Id = id;
            Level = level;
            Name = name;
            Surname = surname;
            Birthdate = birthdate;
            Address = address;
            ZipCode = zipCode;
            City = city;
            Country = country;
            Email = email;
            Username = username;
            Password = password;
            Phone = phone;
            

        }

   /*     public User(int level, String name, String surname, int birthdate, String address, String email, String username, String password, int id)
        {
            Id = id;
            Level = level;
            Name = name;
            Surname = surname;
            Birthdate = birthdate;
            Address = address;
            Country = null;
            Email = email;
            Username = username;
            Password = password;
            Phone = null;
        }
        */
        public User(int level,String name, String surname, DateTime birthdate, String address, int zipCode, String city, String country, String email, String username, String password, String phone)
        {
            Level = level;
            Name = name;
            Surname = surname;
            Birthdate = birthdate;
            Address = address;
            ZipCode = zipCode;
            City = city;
            Country = country;
            Email = email;
            Username = username;
            Password = password;
            Phone = phone;
        }
        public User(string email, string password)
        {
            Email = email;
            Password = password;
        }
    }
}