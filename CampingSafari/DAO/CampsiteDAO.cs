using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CampingSafari.Models;
using System.Data.SqlClient;

namespace CampingSafari.DAO
{
    public static class CampsiteDAO
    {
        private static readonly String ADD_SQL = "INSERT INTO campsite(campsite_numero,campsite_zone, campsite_category, campsite_nbPersonne, campsite_prize, campsite_isReserved, campsite_isUnavailable) VALUES (@numero,@zone, @category, @nbPersonne, @prize, @isReserved, @isUnavailable)";
        private static readonly String GET_ALL_SQL = "SELECT * FROM campsite";
        private static readonly String GET_SQL = "SELECT * FROM campsite WHERE campsite_id = @id";
        private static readonly String UPDATE_SQL= "UPDATE campsite SET campsite_numero = @numero, campsite_zone = @zone, campsite_category = @category, campsite_nbPersonne = @nbPersonne, campsite_prize = @prize, campsite_isReserved = @isReserved, campsite_isUnavailable = @isUnavailable WHERE campsite_id = @id";
        private static readonly String DELETE_SQL= "DELETE FROM campsite WHERE campsite_id = @id";

        public static void add(Campsite campsite)
        {
            Database.getInstance().open();
            SqlCommand query = new SqlCommand(ADD_SQL, Database.getInstance().getConnection());
            query.Parameters.AddWithValue("numero", campsite.Numero);
            query.Parameters.AddWithValue("zone", campsite.Zone);
            query.Parameters.AddWithValue("category", campsite.Category);
            query.Parameters.AddWithValue("nbPersonne", campsite.NbPersonne);
            query.Parameters.AddWithValue("prize", campsite.Prize);
            query.Parameters.AddWithValue("isReserved", campsite.IsReserved);
            query.Parameters.AddWithValue("isUnavailable", campsite.IsUnavailable);
            query.ExecuteNonQuery();
            Database.getInstance().close();
        }
        public static void update(int id, Campsite campsite)
        {
            Database.getInstance().open();
            SqlCommand query = new SqlCommand(UPDATE_SQL, Database.getInstance().getConnection());
            query.Parameters.AddWithValue("numero", campsite.Numero);
            query.Parameters.AddWithValue("zone", campsite.Zone);
            query.Parameters.AddWithValue("category", campsite.Category);
            query.Parameters.AddWithValue("nbPersonne", campsite.NbPersonne);
            query.Parameters.AddWithValue("prize", campsite.Prize);
            query.Parameters.AddWithValue("isReserved", campsite.IsReserved);
            query.Parameters.AddWithValue("isUnavailable", campsite.IsUnavailable);
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

        public static Campsite get(int id)
        {
            Campsite campsite = null;
            Database.getInstance().open();

            SqlCommand query = new SqlCommand(GET_SQL, Database.getInstance().getConnection());
            query.Parameters.AddWithValue("id", id);

            SqlDataReader reader = query.ExecuteReader();
            if(reader.Read())
            {
                campsite = new Campsite((int)reader["campsite_id"],(int)reader["campsite_numero"],reader["campsite_zone"].ToString(),reader["campsite_category"].ToString(),(int)reader["campsite_nbPersonne"],(Decimal)reader["campsite_prize"],(bool)reader["campsite_isReserved"],(bool)reader["campsite_isUnavailable"]);
            }
            reader.Close();
            Database.getInstance().close();

            return campsite;
        }

        public static Campsite[] getAll()
        {
            List<Campsite> listCampsite = new List<Campsite>();
            Database.getInstance().open();

            SqlCommand query = new SqlCommand(GET_ALL_SQL, Database.getInstance().getConnection());
            query.CommandType = System.Data.CommandType.Text;
            SqlDataReader reader = query.ExecuteReader();
            while (reader.Read())
            {
                listCampsite.Add(new Campsite((int)reader["campsite_id"],(int)reader["campsite_numero"],reader["campsite_zone"].ToString(), reader["campsite_category"].ToString(), (int)reader["campsite_nbPersonne"], (Decimal)reader["campsite_prize"], (bool)reader["campsite_isReserved"], (bool)reader["campsite_isUnavailable"]));
            }
            reader.Close();
            Database.getInstance().close();

            return listCampsite.ToArray();
        }



    }



}