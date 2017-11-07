# Assignment 1 - API testing and Source Control.

Name: Tarek Huawei

## Overview.

 As money is becoming more and more important people are looking for more ways to save but still want to enjoy every aspect of life. People are looking for the best deals or offers firstly for a good price and secondly for good quality.
They are looking for different categories such as food, leisure, entertainment, beauty, health and holiday breaks.
This web site will provide a map or list of Irish cities, from this you can choose which city or region you are interested in and a filter will be available so you can choose which category, all details of the deals will be clearly seen on the web site. With this web site, everyone will able to add, modify, delete a deal and choose which category the deal will be in. Also, for the development of this web site JavaScript as development language will be used.
Finally, this web site will be effortless and clear to use. 


## API endpoints.


+ GET /deals - get all the deals
+ GET /deals/:id - get a deal with a specifi id
+ POST /deals - add a deal
+ PUT /deals/:id/price - Update deal's price
+ DELETE /deals/:id - Delete a deal with a specific id
+ GET /customers - get all customers
+ GET /customers/:id - get a customer with a specific id
+ POST /customers - add a customer
+ DELETE /customers/:id - delete a customer with a specific id

## Sample Test execution.


        $ npm test

        > deals-1.0@0.0.0 test C:\Users\Kamel\WebStorm 2017.2.4\SSD\Deals-1.0
        > set NODE_ENV=test && mocha test/routes/*


        Deals
    GET /deals
     GET /deals 200 30.298 ms - 381
         √ should return all the deals in an array (167ms)
     POST /deals
       POST /deals 200 82.677 ms - 25
       √ should return confirmation message and update datastore (110ms)
     PUT /deals/:id/price
       PUT /deals/1000001/price 200 5.256 ms - 548
       √ should return all deals with specified deal updated
       PUT /deals/1100001/price 404 1.844 ms - 30
       √ should return a 404 status and message for invalid deal id
     DELETE /deals/:id
       DELETE /deals/1000001 200 1.506 ms - 27
       √ should delete deal with a valid id
       DELETE /deals/1100001 200 1.744 ms - 27
       √ should return a 404 status for invalid deal id to delete
     GET /deals/:id
       GET /deals/1000000 200 3.061 ms - 188
       √ should return a specific deal with a valid id
       GET /deals/1100001 404 1.456 ms - 29
       √ should return a 404 status and message for invalid deal id


        Customers
    GET /customers
     GET /customers 200 37.006 ms - 314
      √ should return all the customers in an array (211ms)
     POST /customers
      POST /customers 200 90.148 ms - 29
      √ should return confirmation message and update datastore (119ms)
     DELETE /customers/:id
      DELETE /customers/1234567 200 4.505 ms - 31
      √ should delete customer with a valid id
      DELETE /customers/1100001 200 0.778 ms - 31
      √ should return a 404 status for invalid customer id to delete
     GET /customers/:id
      GET /customers/1234567 200 3.862 ms - 33
      √ should return a specific customer with a valid id
      GET /customers/1100001 200 4.515 ms - 33
      √ should return a 404 status and message for invalid customer id

      14 passing (432ms)

## Extra features.

   + Exception testing
   + Branch-Edit-Merge workflow
   + Code Quality