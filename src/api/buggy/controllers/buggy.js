'use strict';

/**
 * buggy controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::buggy.buggy');
