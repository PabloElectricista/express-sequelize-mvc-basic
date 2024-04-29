import Sequelize from 'sequelize'

const Item = (sequelize) => {
  sequelize.define('Item', {
    name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    }
  }, { timestamps: false });
}

export default Item
