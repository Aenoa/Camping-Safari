using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace CampingSafari.Models
{
    public class Database
    {
        private static Database instance;
        private SqlConnection Connection { get; set; }
        private readonly String cDC = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename='|DataDirectory|\BDDCampingSafari.mdf';Integrated Security=True";

        private Database()
        {
            Connection = new SqlConnection(cDC);
        }

        public static Database getInstance()
        {
            if(instance == null)
            {
                instance = new Database();
            }
            return instance;
        }

        public SqlConnection getConnection()
        {
            return Connection;
        }

        public void open()
        {
            Connection.Open();
        }

        public void close()
        {
            Connection.Close();
        }
    }
}