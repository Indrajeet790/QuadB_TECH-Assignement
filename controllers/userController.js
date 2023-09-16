const db = require("../config/mySqlConnection")
const User = db.users

// module.exports.renderForm=async(req,res)=>{
//     return res.render("userForm.ejs");
// }
module.exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        return res.json(newUser)
    } catch (err) {
        console.log("error", err);

    }

}
// getDetails by specific id
module.exports.getUserDetail = async (req, res) => {
    try {
        const userId = req.params.id; 

        const user = await User.findByPk(userId, {
            attributes: { exclude: ["user_password"] }

        });
        if (!user) {
            return res.status(404).json({ message: "user not found" });
        }
        return res.status(200).json(user);

    } catch (err) {
        return res.status(500).json({ message: err })
    }
}
module.exports.getUserImage = async (req, res) => {
    try {
        const userId = req.params.id; 

        const user = await User.findByPk(userId, {
            attributes: { exclude: ["user_password"] }

        });
        if (!user) {
            return res.status(404).json({ message: "user not found" });
        }
        return res.status(200).json({ user_image: user.user_image });

    } catch (err) {
        return res.status(500).json({ message: err })
    }
}


// update user details
module.exports.updateUserDetail = async (req, res) => {
  try {
    const { user_id } = req.params;
    const newDetails = req.body;

    
    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // update userDetails
    await User.update(newDetails, {
      where: { user_id },
    });

    const updatedUser = await User.findByPk(user_id);

    return res.status(200).json({
      message: 'User details updated successfully',
      user: updatedUser,
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// delete userDetails
module.exports.deleteUserDetail = async (req, res) => {
  try {
    const { user_id } = req.params;

    
    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    
    await User.destroy({
      where: { user_id },
    });

    const deletedUser = await User.findByPk(user_id);

    return res.status(200).json({
      message: 'User details deleted successfully',
      user: deletedUser,
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


