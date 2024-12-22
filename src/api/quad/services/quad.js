'use strict';

/**
 * quad service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::quad.quad');
