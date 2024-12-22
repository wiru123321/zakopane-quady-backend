'use strict';

/**
 * buggy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::buggy.buggy');
