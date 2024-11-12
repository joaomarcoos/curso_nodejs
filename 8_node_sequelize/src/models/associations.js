// src/models/associations.js
import User from './User.js';
import Address from './Address.js';

function setupAssociations() {
    User.hasMany(Address, {
        foreignKey: 'userId', 
        onDelete: 'CASCADE'    
    });
    Address.belongsTo(User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
    });
}

export default setupAssociations;
