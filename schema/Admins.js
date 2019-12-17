cube(`Admins`, {
  sql: `SELECT * FROM harsha.admins`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name]
    }
  },
  
  dimensions: {
    name: {
      sql: `name`,
      type: `string`
    },
    
    password: {
      sql: `password`,
      type: `string`
    }
  }
});
