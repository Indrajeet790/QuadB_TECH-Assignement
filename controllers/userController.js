const db = require("../config/mySqlConnection")
const User = db.users
 
//rendering the form
module.exports.renderForm= (req, res) => {
    try {
        return res.render("userForm.ejs");
    } catch (error) {
      console.log(error);
      return res.status(500).json({ Error: error.message });
    }
  };
 
// createFunction user
module.exports.createUser =  async (req, res) => {
    console.log(req.body);
    try {
        const { user_name, user_email, user_password, total_orders } = req.body;
        const user_image = req.file.filename;

        const newUser = await User.create({
            user_name,
            user_email,
            user_password,
            user_image,
            total_orders,
        });

        res.status(201).json(newUser);
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(422).json({ message: 'User already exists' });
          } else {
            console.error(error);
            return res.status(500).json({ error: error.message });
          }
    }
};


// getDetails by specific id
module.exports.getUserDetail = async (req, res) => {
    try {
        const userId = req.params.id; 

        const user = await User.findByPk(userId, {
            attributes: { exclude: ["user_password"] }

        }
        );
        if (!user) {
            return res.status(404).json({ message: "user not found" });
        }
        return res.status(200).json(user);

    } catch (err) {
        return res.status(500).json({ message: err })
    }
}
// get user Image
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



module.exports.updateUserDetail = async (req, res) => {
    console.log(req.file.filename);
    try {
      const { user_id } = req.params;
      const newDetails = req.body;
      const user_image = req.file.filename;
      const user = await User.findByPk(user_id,{
        attributes: { exclude: ["user_password"] }

    });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // update userDetails
      await User.update(newDetails, {where: { user_id }});
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


