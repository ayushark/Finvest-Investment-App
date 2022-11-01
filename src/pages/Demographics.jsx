import React from 'react'

const Demographics = ({city, setCity,phoneNumber , setPhoneNumber, politicallyExposed, setPoliticallyExposed, partyName,setPartyName}) => {
  return (
    <section>
              <h2 className="font-semibold text-3xl mb-8">
                Personal Information
              </h2>
              <label htmlFor="cityName">City</label>
              <input
                className=" m-2 shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your city"
                id="cityName"
                //   aria-describedby="emailHelp"
                onChange={(e) => setCity(e.target.value)}
                defaultValue={city}
                required
              />

              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                className=" m-2 shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your mobile no."
                id="phoneNumber"
                onChange={(e) => setPhoneNumber(e.target.value)}
                defaultValue={phoneNumber}
                type="text"
                required
              />

              <label htmlFor="politicallyExposed">
                Are you politically exposed?
              </label>
              <input
                className="inline-block mx-2 shadow-md, box-border"
                type="checkbox"
                checked={politicallyExposed}
                onChange={e => setPoliticallyExposed(e.target.checked)}
              />
              <br/>
              { politicallyExposed && 
                <>
               <label htmlFor="partyName">Party Name</label>
               <input
                
                className="m-2 shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your favorite political party"
                id="phoneNumber"
                onChange={(e) => setPartyName(e.target.value)}
                defaultValue={partyName}
                type="text"
                required
              /> </>}
            </section>
  )
}

export default Demographics