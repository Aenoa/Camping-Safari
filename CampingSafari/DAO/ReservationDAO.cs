using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using CampingSafari.Models;
using System.Data.SqlClient;

namespace CampingSafari.DAO
{
    public static class ReservationDAO
    {
        private static readonly String ADD_SQL = "INSERT INTO reservation(reservation_startdate, reservation_enddate, reservation_floating, reservation_confirmation, reservation_paid, reservation_date, reservation_nbAdulte, reservation_nbEnfant, reservation_electricity, reservation_car) VALUES (@startdate, @enddate, @floating, @confirmation, @paid, @date, @nbAdulte, @nbEnfant, @electricity, @car)";
        private static readonly String GET_ALL_SQL = "SELECT * FROM reservation INNER JOIN users on users.user_id = reservation.user_id";
        private static readonly String GET_SQL = "SELECT * FROM reservation WHERE reservation_id = @id";
        private static readonly String UPDATE_SQL = "UPDATE reservation SET reservation_startdate = @startdate, reservation_enddate = @enddate, reservation_floating = @floating, reservation_confirmation = @confirmation, reservation_paid = @paid, reservation_date = @date, reservation_nbAdulte = @nbAdulte, reservation_nbEnfant = @nbEnfant, reservation_electricity = @electricity, reservation_car = @car WHERE reservation_id = @id";
        private static readonly String DELETE_SQL = "DELETE FROM reservation WHERE reservation_id = @id";
    

       public static void add(Reservation rsv)
        {
            Database.getInstance().open();
            SqlCommand query = new SqlCommand(ADD_SQL, Database.getInstance().getConnection());
            query.Parameters.AddWithValue("startdate", rsv.Startdate);
            query.Parameters.AddWithValue("enddate", rsv.Enddate);
            query.Parameters.AddWithValue("floating", rsv.Floating);
            query.Parameters.AddWithValue("confirmation", rsv.Confirmation);
            query.Parameters.AddWithValue("paid", rsv.Paid);
            query.Parameters.AddWithValue("date", rsv.Date);
            query.Parameters.AddWithValue("nbAdulte", rsv.NbAdulte);
            query.Parameters.AddWithValue("nbEnfant", rsv.NbEnfant);
            query.Parameters.AddWithValue("electricity", rsv.Electricity);
            query.Parameters.AddWithValue("car", rsv.Car);
            query.ExecuteNonQuery();

            Database.getInstance().close();

        }
        public static void update(int id, Reservation rsv)
        {
            Database.getInstance().open();
            SqlCommand query = new SqlCommand(UPDATE_SQL, Database.getInstance().getConnection());
            query.Parameters.AddWithValue("startdate", rsv.Startdate);
            query.Parameters.AddWithValue("enddate", rsv.Enddate);
            query.Parameters.AddWithValue("floating", rsv.Floating);
            query.Parameters.AddWithValue("confirmation", rsv.Confirmation);
            query.Parameters.AddWithValue("paid", rsv.Paid);
            query.Parameters.AddWithValue("date", rsv.Date);
            query.Parameters.AddWithValue("nbAdulte", rsv.NbAdulte);
            query.Parameters.AddWithValue("nbEnfant", rsv.NbEnfant);
            query.Parameters.AddWithValue("electricity", rsv.Electricity);
            query.Parameters.AddWithValue("car", rsv.Car);
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
        public static Reservation get(int id)
        {
            Reservation rsv = null;
            Database.getInstance().open();

            SqlCommand query = new SqlCommand(GET_SQL, Database.getInstance().getConnection());
            query.Parameters.AddWithValue("id", id);

            SqlDataReader reader = query.ExecuteReader();
            if (reader.Read())
            {
                rsv = new Reservation((int)reader["reservation_id"], (DateTime)reader["reservation_startdate"], (DateTime)reader["reservation_enddate"], (bool)reader["reservation_floating"], (bool)reader["reservation_confirmation"], (bool)reader["reservation_paid"], (DateTime)reader["reservation_date"],(int)reader["reservation_nbAdulte"],(int)reader["reservation_nbEnfant"],(bool)reader["reservation_electricity"],(bool)reader["reservation_car"]);
            }
            reader.Close();
            Database.getInstance().close();

            return rsv;
        }
        public static Reservation[] getAll()
        {
            List<Reservation> listRsv = new List<Reservation>();
            Database.getInstance().open();

            SqlCommand query = new SqlCommand(GET_ALL_SQL, Database.getInstance().getConnection());
            query.CommandType = System.Data.CommandType.Text;
            SqlDataReader reader = query.ExecuteReader();
            while(reader.Read())
            {
                listRsv.Add(new Reservation((int)reader["reservation_id"], (DateTime)reader["reservation_startdate"], (DateTime)reader["reservation_enddate"], (bool)reader["reservation_floating"], (bool)reader["reservation_confirmation"], (bool)reader["reservation_paid"], (DateTime)reader["reservation_date"], (int)reader["reservation_nbAdulte"], (int)reader["reservation_nbEnfant"],(bool)reader["reservation_electricty"],(bool)reader["reservation_car"]));
            }
            reader.Close();
            Database.getInstance().close();

            return listRsv.ToArray();
        }
            
       }
}