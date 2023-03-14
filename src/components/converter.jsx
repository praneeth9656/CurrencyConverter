import React, { useEffect, useState } from "react";

function Currency() 
{
  const [from, Setfrom] = useState("USD");
  const [to, Setto] = useState("USD");
  const [countries, SetCountries] = useState([]);
  const [currency ,SetCurrency]=useState("");
  const [finalCurrency , SetFinalCurrency]=useState("");
  
  function FromCurrency(e) {
    Setfrom(e.target.value);
    console.log(from);
  }
  function ToCurrency(e) {
    Setto(e.target.value);
    console.log(to);
  }
  function SelectedFromCurrency(e)
  {
    Setfrom(e.target.value);
    console.log(from);
  }
  function SelectedtoCurrency(e)
  {
    Setto(e.target.value);
    console.log(to);
  }
  function Currency(e)
  {
     SetCurrency(e.target.value);
     console.log(currency);
  }

  useEffect(() => {
    const fetchData = () => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "2208856513msh56ce79f89afbac4p14e3a4jsn695ba9110bee",
          "X-RapidAPI-Host": "currency-converter18.p.rapidapi.com",
        },
      };

      fetch(
        "https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies",
        options
      )
        .then((response) => response.json())
        .then((data) => {
          SetCountries(data);
          console.log(countries);
        })
        .catch((err) => console.error(err));
    };
    fetchData();
  }, [from]);

  


  function ConvertCurrency()
  {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '2208856513msh56ce79f89afbac4p14e3a4jsn695ba9110bee',
        'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
      }
    };
    
    fetch(`https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${from}&want=${to}&amount=${currency}`, options)
        .then(response => response.json())
        .then(data => SetFinalCurrency(data.new_amount))
        .catch(err => console.error(err));
  }

  return (
    
    <div className="currencyDashboard" >
    <h1>FOREX App</h1>
    <div className="currencyConverter">
    
    <div className="from">
    
      <input
        type="text"
        name="from"
        value={from}
        onChange={FromCurrency}
      />
      <select onChange={SelectedFromCurrency}>
      {countries.map((items,index) => (
        <option key={index}>{items.symbol}</option>
      ))}
      </select>
    </div>
    <div className="to">
    
      <input type="text" name="from" onChange={ToCurrency} value={to} />
      
      <select onChange={SelectedtoCurrency}>
      {countries.map((items,index) => (
        <option key={index}>{items.symbol}</option>
      ))}
      </select>
    </div>
    <h3>Amount</h3>
    <input id="currencyinput" type="text" onChange={Currency} value={currency} /><br />
      <button className="convert" onClick={ConvertCurrency}>Convert</button>
    </div>
      <div className="convertedcurrency">
      <h2>{finalCurrency}</h2>
      <h2>{to}</h2>
      
      </div>
     

      
    </div>
  );
}

export default Currency;
