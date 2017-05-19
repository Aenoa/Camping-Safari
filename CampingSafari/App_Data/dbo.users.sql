CREATE TABLE [dbo].[users] (
    [user_id]        INT           NOT NULL,
    [user_level]     INT           NULL,
    [user_name]      NCHAR (140)   NULL,
    [user_surname]   NCHAR (140)   NULL,
    [user_address]   NCHAR (210)   NULL,
	[user_zipCode]   INT           NULL,
	[user_city]      NCHAR (210)   NULL, 
    [user_country]   NCHAR (3)     NULL,
    [user_email]     NCHAR (200)   NULL,
    [user_birthdate] DATE          NULL,
    [user_username]  NCHAR (40)    NULL,
    [user_password]  NCHAR (140)   NULL,
    [user_phone]     NVARCHAR (50) NULL,
    PRIMARY KEY CLUSTERED ([user_id] ASC)
);

