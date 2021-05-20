var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3,
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) 
{
  var customerObject = customerData[firstName];
  //console.log(customerData[firstName]['visits']);
  if(customerObject === undefined)
  {
      return 'Welcome! Is this your first time?';
  }
  if(customerObject.visits === 1)
  {
      return "Welcome back, " + firstName + "! We're glad you liked us the first time";
  }
  if(customerObject.visits >= 2)
  {
      return "Welcome back, " + firstName + "! So glad to see you again!";
  }
}


console.log(greetCustomer('Joe'));

