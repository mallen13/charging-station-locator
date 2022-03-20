//helper function to fetch stations from APi and return a status, err, or array of stations
export const getStations = async (radius,location,offset) => {

    const stations = [];

    try {
      //get request
      const response = await fetch(`
        https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?parameters
        &api_key=oYdSUTug3P4pIAkOTCEtJi7LjM94HNYLDDRcaF3N&location=${location}
        &fuel_type=ELEC
        &radius=${radius}
        &limit=10
      `)
      const data = await response.json();

      //if location cannot be found
      if (
        data.errors 
        && data.errors[0] === "The 'location' parameter could not be located."
      ) return 'no data';

      //if no stations
      else if (data.fuel_stations.length === 0) return 'no data';

      //map to stations array and return
      data.fuel_stations.forEach( station => {
        stations.push({
          name: station.station_name,
          distance: station.distance,
          streetAddress: station.street_address,
          city: station.city,
          state: station.state,
          zip: station.zip,
          phone: station.station_phone,
          connectorTypes: station.ev_connector_types,
          level1: station.ev_level1_evse_num,
          level2: station.ev_level2_evse_num,
          network: station.ev_network,
          access: station.access_code,
          hours: station.access_days_time,
        })
      })

      return stations;
    }
    catch(e) {
      console.log('error: ', e)
      return 'error'
    }
  }