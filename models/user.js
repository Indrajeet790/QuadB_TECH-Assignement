module.exports = (sequelize, DataTypes, Sequelize) => {
    const User = sequelize.define('users', {
        user_id: {
            type: DataTypes.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        user_password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        total_orders: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW,
        },
        last_logged_in: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.NOW,
        },
    },{
        createdAt: "created_at",
        updatedAt:"last_logged_in"
    });
    return User;

}
