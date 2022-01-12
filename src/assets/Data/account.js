import cardvisa from '../images/AccountHistory/cardvisa.png';
import cardmaster from '../images/AccountHistory/cardmaster.png';
import cardpaypal from '../images/AccountHistory/cardpaypal.png';
export const account = {
  acc10: [
    {
      countryName: "396 Lillian Blvd, Holbrook, NY 11741",
    },
    {
      countryName: "769, Industrial, West Chicago, IL 60185, USA",
    },
    {
      countryName: "514 S. Magnolia St. Orlando, FL 32806, USA",
    },
  ],
  acc9:[
    {
      cardimg:cardvisa
    },
    {
      cardimg:cardmaster
    },
    {
      cardimg:cardpaypal
    }
  ],
  accOrder: [
    {
      order: "34VB5540K83",
      Date_Purchased:"May 21, 2019",
      Status:"In Progress",
      total:"$358.75"
    },
    {
        order: "78A643CD409",
        Date_Purchased:"December 09, 2018",
        Status:"Canceled",
        total:"$760.50"
      },
      {
        order: "112P45A90V2",
        Date_Purchased:"October 15, 2018",
        Status:"Delayed",
        total:"$1,264.00"
      },
      {
        order: "28BA67U0981",
        Date_Purchased:"July 19, 2018",
        Status:"Delivered",
        total:"$198.35"
      },
      {
        order: "502TR872W2",
        Date_Purchased:"April 04, 2018",
        Status:"Delivered",
        total:"$2,133.90"
      },
      {
        order: "47H76G09F33",
        Date_Purchased:"March 30, 2018",
        Status:"Delivered",
        total:"$86.40"
      }
  ],
};
