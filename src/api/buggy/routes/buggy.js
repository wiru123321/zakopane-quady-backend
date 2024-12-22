'use strict';

/**
 * buggy router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::buggy.buggy');
