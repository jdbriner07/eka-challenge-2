module.exports = {
	signup: function(username, password, email) {
		return `insert into users (username, password, email) values ('${username}', '${password}', '${email}')`;
	},

	updateInfo2: function(username, password, name, phoneNumber) {
		return `update users set firstName = '${name.firstName}', 
								lastName = '${name.lastName}', 
								telephoneNumber = '${phoneNumber}'
								where
								username = '${username}' and
								password = '${password}'`
	},

	updateInfo3: function(username, password, address) {
		return `update users set streetAddress = '${address.streetNumber}', 
								city = '${address.city}', 
								state = '${address.state}',
								zip = '${address.zip}'
								where
								username = '${username}' and
								password = '${password}'`
	},

	loginOrGetUserInfo: function(username, password) {
		return `select * from users where username = '${username}' and password = '${password}'`
	},
}

