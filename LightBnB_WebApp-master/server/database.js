const properties = require('./json/properties.json');
const users = require('./json/users.json');
const { Pool } = require('pg');
const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'lightbnb'
});

/// Users
/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function(email) {
  const stringQuery = `SELECT * FROM users WHERE email = $1;`;
  let user; 
  return pool.query(stringQuery, [email])
  .then(res => {
    user = res.rows[0];
    if (user) {
      return user;
    }
    return null;
  })
  .catch(err => console.error('error query', err))
}
exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function(id) {
  // return Promise.resolve(users[id]);
  const stringQuery = `SELECT * FROM users WHERE id = $1;`;
  let user;
  return pool.query(stringQuery, [id])
  .then(res => {
    user = res.rows[0];
    if (user) {
      return user;
    }
    return null;
  })
  .catch(err => console.error('error query', err))
}
exports.getUserWithId = getUserWithId;

/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser =  function(user) {
  const stringQuery = `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING*;`;
  return pool.query(stringQuery, [user.name, user.email, user.password])
  .then(res => res.rows[0])
  .catch(err => console.error('error query', err));
}

exports.addUser = addUser;



/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
const getAllReservations = function(guest_id, limit = 10) {
  // return getAllProperties(null, 2);
  const stringQuery = `SELECT properties.*, reservations.*, AVG(property_reviews.rating) AS average_rating
  FROM reservations
  JOIN properties ON properties.id = reservations.property_id
  JOIN property_reviews ON properties.id = property_reviews.property_id
  WHERE reservations.guest_id = $1
  AND reservations.start_date < now()::date
  GROUP by properties.id, reservations.id
  ORDER BY reservations.start_date
  LIMIT $2;`;
  return pool.query(stringQuery, [guest_id, limit])
  .then(res => res.rows)
  .catch(err => console.error('error query', err))
}
exports.getAllReservations = getAllReservations;

/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */
const getAllProperties = function(options, limit = 10) {
  return pool.query(`
  SELECT properties.*, avg(property_reviews.rating) AS average_rating
  FROM properties
  JOIN property_reviews ON properties.id = property_id
  GROUP BY properties.id
  LIMIT $1;
  `, [limit])
  .then(res => res.rows);
}
exports.getAllProperties = getAllProperties;

/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function(property) {
  const propertyId = Object.keys(properties).length + 1;
  property.id = propertyId;
  properties[propertyId] = property;
  return Promise.resolve(property);
}
exports.addProperty = addProperty;
