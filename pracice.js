var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

// this is an ARRAY with OBJECTS as elements
  //we NEED to LOOP through this
var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];
function getSalesTotals(salesData, taxRates){
  var totalSales = {};
  var numCompany = 0;

for(var item in salesData )
{
    var companyData = salesData[item];
    numCompany += 1;
    var companyData = salesData[item];
    var runningSales = 0;
    totalSales[numCompany] = {};
    totalSales[numCompany].name = companyData.name;
    totalSales[numCompany].province = companyData.province;
    for (var i = 0; i < companyData['sales'].length; i++){
      console.log(runningSales += companyData.sales[i]);
    }

}}


//     if (totalSales[numCompany] === undefined) {
//       totalSales[numCompany] = 0;
//     }
//     totalSales[numCompany].totalSales = runningSales;

//   }

//   return totalSales;
//   console.log(totalSales);

// }



