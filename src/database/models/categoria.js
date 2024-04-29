import Sequelize from 'sequelize';

const Categoria = (sequelize) => {
    sequelize.define('Categoria', {
        title: {
            type: Sequelize.DataTypes.STRING
        }
    }, { timestamps: false });
}

export default Categoria