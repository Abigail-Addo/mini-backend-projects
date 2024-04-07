import pool from "./database.js";


// insert a user
export async function addUser(name, gender, address, email) {
  const response = await pool.query(
    `INSERT INTO users (name, gender, address, email) VALUES (?, ?, ?, ?)`,
    [name, gender, address, email]
  );
  const id = response[0].insertId;
  return getUser(id);
}
//const add = await addUser("Yaw", "male", "Kasoa", "yaw@mail.com");
// console.log(add)


// fetch all users
export async function getUsers(){
    const [ users ] = await pool.query(`SELECT * FROM users`);
    return users;
}
// console.log(await getUsers());


// fetch one user
export async function getUser(id){
    const [ user ] = await pool.query(`SELECT * FROM users WHERE id=?`, [id]);
    return user[0];
}
// console.log(await getUser(1));


// Update a user by id
export async function updateUser(newData, id){
    const updatedUser = await pool.query(`Update users SET ? WHERE id=?`, [newData, id]);
    return updatedUser.changedRows;
}
// const data = await updateUser(4, {name: "Akua", gender: "female", address: "Opeikuma", email: "akua@gmail.com"});
// console.log(data);


// delete a user by id
export async function deleteUser(id){
  const deleteUser = await pool.query(`DELETE FROM users WHERE id=?`, [id]);
  return deleteUser;
}
console.log(await deleteUser(6));