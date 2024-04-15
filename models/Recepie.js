const Recepie = (sequelize, Sequelize) => {

    const recepie = sequelize.define('recepie', {

        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: {
                args: true,
                msg: 'id already in use!'
            },
        },

        recepie_name: {
            type: Sequelize.STRING(100),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter the recepie_name.'
                }
            },
            unique: {
                args: true,
                msg: 'recepie_name is already present!'
            },
        },

        image: {
            type: Sequelize.STRING(255),
        },

        description: {
            type: Sequelize.STRING(1000),
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter the description.'
                }
            },
        },

        recepie: {
            type: Sequelize.JSON,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Recepie can not be null.'
                }
            },
        },

    }, {
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            paranoid: true,
            deletedAt: 'deleted_at'
    }, { freezeTableName: true });

    return recepie;
    
}

module.exports = Recepie;