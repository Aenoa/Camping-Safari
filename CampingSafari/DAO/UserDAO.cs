using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CampingSafari.Models;
using System.Data.SqlClient;

namespace CampingSafari.DAO
{
    public static class UserDAO
    {
        private static readonly String ADD_SQL = "INSERT INTO users(user_level,user_name, user_surname, user_birthdate, user_address, user_zipCode, user_city, user_country, user_email,  user_username, user_password, user_phone) VALUES (@level, @name, @surname, @birthdate, @address, @zipCode, @city, @country, @email,  @username, @password, @phone)";
        private static readonly String GET_ALL_SQL = "SELECT * FROM users";
        private static readonly String GET_SQL = "SELECT * FROM users WHERE user_id = @id";
        private static readonly String UPDATE_SQL = "UPDATE users SET user_level = @level, user_name = @name, user_surname = @surname, user_address = @address, user_zipCode = @zipCode, user_city = @city, user_country = @country, user_email = @email, user_birthdate = @birthdate, user_username = @username, user_password = @password, user_phone = @phone WHERE user_id = @id";
        private static readonly String DELETE_SQL = "DELETE FROM users WHERE user_id = @id";
        private static readonly String GET_USER_VIA_EMAIL = "SELECT * FROM users WHERE user_email = @email";

        public static void add(User user)
        {
            Database.getInstance().open();
            SqlCommand query = new SqlCommand(ADD_SQL, Database.getInstance().getConnection());
            query.Parameters.AddWithValue("level", user.Level);
            query.Parameters.AddWithValue("name", user.Name);
            query.Parameters.AddWithValue("surname", user.Surname);
            query.Parameters.AddWithValue("address", user.Address);
            query.Parameters.AddWithValue("zipCode", user.ZipCode);
            query.Parameters.AddWithValue("city", user.City);
            query.Parameters.AddWithValue("country", user.Country);
            query.Parameters.AddWithValue("email", user.Email);
            query.Parameters.AddWithValue("birthdate", user.Birthdate);
            query.Parameters.AddWithValue("username", user.Username);
            query.Parameters.AddWithValue("password", user.Password);
            query.Parameters.AddWithValue("phone", user.Phone);
            query.ExecuteNonQuery();

            Database.getInstance().close();
        }
        public static void update(int id, User user)
        {
            Database.getInstance().open();
            SqlCommand query = new SqlCommand(UPDATE_SQL, Database.getInstance().getConnection());
            query.Parameters.AddWithValue("level", user.Level);
            query.Parameters.AddWithValue("name", user.Name);
            query.Parameters.AddWithValue("surname", user.Surname);
            query.Parameters.AddWithValue("address", user.Address);
            query.Parameters.AddWithValue("zipCode", user.ZipCode);
            query.Parameters.AddWithValue("city", user.City);
            query.Parameters.AddWithValue("country", user.Country);
            query.Parameters.AddWithValue("email", user.Email);
            query.Parameters.AddWithValue("birthdate", user.Birthdate);
            query.Parameters.AddWithValue("username", user.Username);
            query.Parameters.AddWithValue("password", user.Password);
            query.Parameters.AddWithValue("phone", user.Phone);
            query.Parameters.AddWithValue("id", id);
            query.ExecuteNonQuery();

            Database.getInstance().close();
        }
        public static void delete(int id)
        {
            Database.getInstance().open();
            SqlCommand query = new SqlCommand(DELETE_SQL, Database.getInstance().getConnection());
            query.Parameters.AddWithValue("id", id);
            query.ExecuteNonQuery();
          
            Database.getInstance().close();
        }

        public static User get(int id)
        {
            User user = null;
            Database.getInstance().open();

            SqlCommand query = new SqlCommand(GET_SQL, Database.getInstance().getConnection());
            query.Parameters.AddWithValue("id", id);

            SqlDataReader reader = query.ExecuteReader();
            if (reader.Read())
            {
                user = new User((int)reader["user_level"],reader["user_name"].ToString(),reader["user_surname"].ToString(),(DateTime)reader["user_birthdate"],reader["user_address"].ToString(),(int)reader["user_zipCode"], reader["user_city"].ToString(), reader["user_country"].ToString(),reader["user_email"].ToString(),reader["user_username"].ToString(),reader["user_password"].ToString(),reader["user_phone"].ToString(), (int)reader["user_id"]);
            }
            reader.Close();
            Database.getInstance().close();

            return user;
        }

        public static User[] getAll()
        {
            List<User> listUser = new List<User>();
            Database.getInstance().open();

            SqlCommand query = new SqlCommand(GET_ALL_SQL, Database.getInstance().getConnection());
            query.CommandType = System.Data.CommandType.Text;
            SqlDataReader reader = query.ExecuteReader();
            while (reader.Read())
            {
                listUser.Add(new User((int)reader["user_level"], reader["user_name"].ToString(), reader["user_surname"].ToString(), (DateTime)reader["user_birthdate"], reader["user_address"].ToString(), (int)reader["user_zipCode"], reader["user_city"].ToString(), reader["user_country"].ToString(), reader["user_email"].ToString(), reader["user_username"].ToString(), reader["user_password"].ToString(), reader["user_phone"].ToString(), (int)reader["user_id"]));
            }
            reader.Close();
            Database.getInstance().close();

            return listUser.ToArray();
        }

        public static User CheckUserViaEmail(User user)
        {
            Database.getInstance().open();
            SqlCommand query = new SqlCommand(GET_USER_VIA_EMAIL, Database.getInstance().getConnection());
            query.CommandType = System.Data.CommandType.Text;
            query.Parameters.AddWithValue("email", user.Email);
            query.Parameters.AddWithValue("password", user.Password);
            SqlDataReader reader = query.ExecuteReader();

            if (reader.Read())
            {
                user = new User((int)reader["user_level"],reader["user_name"].ToString(),reader["user_surname"].ToString(),(DateTime)reader["user_birthdate"],reader["user_address"].ToString(),(int)reader["user_zipCode"], reader["user_city"].ToString(), reader["user_country"].ToString(),reader["user_email"].ToString(),reader["user_username"].ToString(),reader["user_password"].ToString(),reader["user_phone"].ToString(), (int)reader["user_id"]);
            }
            reader.Close();
            Database.getInstance().close();
            if(user.Email.Equals("null") && user.Password.Equals("null"))
            {
                return null;
            }
            else 
            {
                return user;
            }
            

        }
    }
}