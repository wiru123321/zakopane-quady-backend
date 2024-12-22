'use strict';

/**
 * skuter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::skuter.skuter');
