cube(`Events`, {
  sql: `SELECT * FROM harsha.events`,

  joins: {
    Evenetregistrations: {
      relationship: `hasMany`,
      sql: `${Events}._id = ${Evenetregistrations}.event`
    }
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [
        name,
        organisername,
        ticketname,
        createdat,
        updatedat,
        date
      ]
    },

    ticketprice: {
      sql: `ticketprice`,
      type: `sum`
    }
  },

  dimensions: {
    admin: {
      sql: `admin`,
      type: `string`
    },

    description: {
      sql: `${CUBE}.\`Description\``,
      type: `string`
    },

    eic: {
      sql: `eic`,
      type: `string`,
      primaryKey: true
    },

    email: {
      sql: `email`,
      type: `string`
    },

    image: {
      sql: `image`,
      type: `string`
    },

    logo: {
      sql: `logo`,
      type: `string`
    },

    name: {
      sql: `name`,
      type: `string`
    },

    organisername: {
      sql: `${CUBE}.\`organiserName\``,
      type: `string`
    },

    role: {
      sql: `role`,
      type: `string`
    },

    ticketname: {
      sql: `ticketname`,
      type: `string`
    },

    time: {
      sql: `time`,
      type: `string`
    },

    type: {
      sql: `type`,
      type: `string`
    },

    venue: {
      sql: `venue`,
      type: `string`
    },

    createdat: {
      sql: `${CUBE}.\`createdAt\``,
      type: `time`
    },

    updatedat: {
      sql: `${CUBE}.\`updatedAt\``,
      type: `time`
    },

    date: {
      sql: `date`,
      type: `time`
    }
  }
});
