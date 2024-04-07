import User from "../model/user.model.js";
import Profile from "../model/profile.model.js";

export const createUser = async (req, res) => {
  try {
    const { name, gender, email, address, literate } = req.body;

    const user = await User.create({ name, gender, email, address, literate });

    return res.status(201).send(user);
  } catch (error) {
    console.log(error);
  }
};

export const getUsers = async (req, res) => {
  try {
    const user = await User.findAll();

    console.log(user);

    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findAll({
      where: {
        id: id,
      },
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.destroy({
      where: {
        id,
      },
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).json({ message: "User not found" });
    }
    const user = await User.update(req.body, {
      where: {
        id,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "Failed to update user" });
    }
    return res.status(200).send(user);
    console.log("user udated successfully");
  } catch (error) {
    console.log(error);
  }
};

export const addUserWithProfile = async (req, res) => {
  try {
    const { name, gender, email, address, literate } = req.body;

    const user = await User.create({ name, gender, email, address, literate });

    if (user) {
      const userProfile = await Profile.create({
        height: "3.5ft",
        bio: "This is me",
        UserId: user.id,
      });

      return res.send(userProfile);
    } else {
      res.status(500).send("Internal server error");
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUsersProfile = async (req, res) => {
  try {
    const usersProfile = await Profile.findAll({
      include: User
    });
    return res.status(200).send(usersProfile);
  } catch (error) {
    console.log(error);
  }
};

