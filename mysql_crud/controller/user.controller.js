import { addUser, getUsers, getUser, updateUser, deleteUser } from "../dbQueries.js";

export const addingUser = async (req, res) => {
  try {
    const { name, gender, address, email } = req.body;
    const user = await addUser(name, gender, address, email);
    res.status(201).send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

export const fetchUsers = async (req, res) => {
  try {
    const users = await getUsers();
    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

export const fetchUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await getUser(id);
    if (!user) return res.status(404).send("User not found");
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

export const updatingUser = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedUser = await updateUser(req.body, id);
    if(!updatedUser.affectedRows) return res.status(400).send("User not found");
    res.status(200).send(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
}

export const deletingUser = async (req, res) => {
    const { id } = req.params;
    try {
      const deletedUser = await deleteUser(id);
      if(!deletedUser.affectedRows) return res.status(400).send("User not found");
      res.status(200).send(deletedUser);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error");
    }
  }
