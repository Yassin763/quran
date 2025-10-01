import Prayer from "./component/prayer"
import { useEffect, useState } from "react";


function App() {

  const cities = [
    { "name": "القاهرة", "value": "Cairo" },
    { "name": "الأسكندرية", "value": "Alexandria" },
    { "name": "اسوان", "value": "Aswan" },
    { "name": "الجيزة", "value": "Giza" },
    { "name": "الأقصر", "value": "Luxor" },
    { "name": "المنصورة", "value": "Mansoura" }
  ]

  const [prayertimes, Setprayertimes] = useState({})
  const [date, Setdate] = useState("")
  const [city , Setcity] = useState("Cairo")
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=Egypt&method=5`);
      const body = await response.json();
      Setprayertimes(body.data.timings);
      Setdate(body.data.date.gregorian.date)
    }
    fetchData();
  }, [city]);



  return (
    <>
      <section>
        <div className="container">
          <div className="top_sec">
            <div className="city">
              <h3>المدينة</h3>
              <select name="" id="" onChange={(e) => Setcity(e.target.value)}>
                {
                  cities.map(cityObj => (
                    <option key={cityObj.value} value={cityObj.value}>{cityObj.name}</option>
                  ))
                }
              </select>
            </div>
            <div className="date">
              <h3>التاريخ</h3>
              <h4>{date}</h4>
            </div>
          </div>
          <Prayer name="الفجر:" time={prayertimes.Fajr} />
          <Prayer name="الظهر:" time={prayertimes.Dhuhr} />
          <Prayer name="العصر:" time={prayertimes.Asr} />
          <Prayer name="المغرب:" time={prayertimes.Maghrib} />
          <Prayer name="العشاء:" time={prayertimes.Isha} />
        </div>
      </section>
    </>
  )
}

export default App
