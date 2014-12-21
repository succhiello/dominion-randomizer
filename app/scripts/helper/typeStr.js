'use strict';

module.exports = function typeStr() {
    if (this.type == 0) {
        return 'action';
    } else if (this.type == 1) {
        return 'attack';
    } else if (this.type == 2) {
        return 'reaction';
    } else if (this.type == 3) {
        return 'VP';
    } else {
        return 'unknown';
    }
};
