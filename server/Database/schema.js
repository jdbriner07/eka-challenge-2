module.exports = `CREATE TABLE 
					users(
						id SERIAL PRIMARY KEY, 
						username VARCHAR(10) not null,
						password VARCHAR(40) not null,
						email VARCHAR(40) not null,
						firstName VARCHAR(10),
						lastName VARCHAR(10),
						telephoneNumber VARCHAR(10),
						streetAddress VARCHAR(40),
						city VARCHAR(20),
						state VARCHAR(12),
						zip VARCHAR(5)
					)`
