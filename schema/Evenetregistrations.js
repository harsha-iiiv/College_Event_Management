cube(`Evenetregistrations`, {
  sql: `SELECT * FROM harsha.evenetregistrations`,

  joins: {},

  measures: {
    count: {
      type: `count`,
      drillMembers: [name, createdat, updatedat]
    }
  },

  dimensions: {
    email: {
      sql: `email`,
      type: `string`
    },

    event: {
      sql: `event`,
      type: `string`
    },

    name: {
      sql: `name`,
      type: `string`
    },

    phone: {
      sql: `phone`,
      type: `string`
    },

    user: {
      sql: `user`,
      type: `string`
    },

    createdat: {
      sql: `${CUBE}.\`createdAt\``,
      type: `time`,
      primaryKey: true
    },

    updatedat: {
      sql: `${CUBE}.\`updatedAt\``,
      type: `time`
    }
  }
});
