import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from './App';

//get fetch before mock
const unmockedFetch = global.fetch;

describe('Results Search', ()=> {

  afterAll( ()=> global.fetch = unmockedFetch)

  it('displays an error when submitting without input', async () => {
    //Renders
    render(<App />);

    //Submits without input
    const inputSubmit = screen.getAllByRole('button')[1];
    userEvent.click(inputSubmit);

    //expect modal
    const modal = await screen.findByText(/search input cannot be blank/i);
    expect(modal).toBeInTheDocument;
  })

  it('shows loading and results after input', async () => {
    //Renders App
    render(<App />);

    //mock fetch and return json w/ list of fuel stations
    global.fetch = () => 
      Promise.resolve({
        json: () => Promise.resolve({
          fuel_stations: [{
            station_name: 'station name',
            distance: '1.3',
            street_address: '12345 fake street',
            city: 'city',
            state: 'state',
            zip: 'zip',
            station_phone: 'phone',
            ev_connector_types: ['type1'],
            ev_level1_evse_num: null,
            ev_level2_evse_num: 2,
            ev_network: 'network',
            access_code: 'public',
            access_days_time: 'M-F 1-5',
          }]
        })
      })

    //enters valid location to input
    const input = screen.getByLabelText(/Location/)
    userEvent.type(input,'columbus,ohio');

    //clicks submit
    const inputSubmit = screen.getAllByRole('button')[1];
    userEvent.click(inputSubmit);

    //expects loading
    expect(screen.getByText(/fetching/i)).toBeInTheDocument();

    //expects results
    expect(await screen.findByText(/showing up to 10 results/i)).toBeInTheDocument();
  });

  it('shows loading and no results when zero stations returned', async () => {
   //Renders App
   render(<App />);

   //mock fetch
   global.fetch = () => 
   Promise.resolve({
     json: () => Promise.resolve({fuel_stations: {
       length: 0
     }})
   })

   //enters valid location to input
   const input = screen.getByLabelText(/Location/)
   userEvent.type(input,'asdfjkl');

   //clicks submit
   const inputSubmit = screen.getAllByRole('button')[1];
   userEvent.click(inputSubmit);

   //expects loading
   expect(screen.getByText(/fetching/i)).toBeInTheDocument();

   //expects to show no results messages
   expect(await screen.findByText(/no results found/i)).toBeInTheDocument();
  });

  it('shows loading and system error when api fetch rejects', async () => {
    //Renders App
    render(<App />);
 
    //mock fetch
    global.fetch = () => 
    Promise.reject('api error')
 
    //enters valid location to input
    const input = screen.getByLabelText(/Location/)
    userEvent.type(input,'columbus,ohio');
 
    //clicks submit
    const inputSubmit = screen.getAllByRole('button')[1];
    userEvent.click(inputSubmit);
 
    //expects loading
    expect(screen.getByText(/fetching/i)).toBeInTheDocument();
 
    //expects to show no results messages
    expect(await screen.findByText(/system error/i)).toBeInTheDocument();
   });
})
