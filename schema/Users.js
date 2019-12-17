cube(`Users`, {
  sql: `SELECT * FROM harsha.users`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name, createdat, updatedat, date]
    }
  },
  
  dimensions: {
    email: {
      sql: `email`,
      type: `string` 
    },
     
    name: {
      sql: `name`,
      type: `string`
    },
    
    password: {
      sql: `password`,
      type: `string`
    },
    
    resetpasswordtoken: {
      sql: `${CUBE}.\`resetPasswordToken\``,
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
    },
    
    resetpasswordexpires: {
      sql: `${CUBE}.\`resetPasswordExpires\``,
      type: `time`
    }
  }
});
