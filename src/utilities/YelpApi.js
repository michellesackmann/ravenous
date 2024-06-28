const apiKey = 'w6sLFEAp2Qw2HBkSJZH5lMp2nthm2-at0SQfdScN3Ap1PyR0tnm7ah8D0s-NX66mBLA9fFIkepDnpaiYbRhjZ-49ID3G7vTSb3WShOZrm9N28NbM2iwCr00YulN-ZnYx';
const byPassCors = 'https://cors-anywhere.herokuapp.com/'
const baseUrl = `${byPassCors}https://api.yelp.com/v3/`;

const SearchBusinesses = async ({ category, location, sortOption }) => {
    const authorizationHeader = `Bearer ${apiKey}`;
    const businessEndpoint = 'businesses/search';
    let requestParams = `?`;
    if(category) requestParams = `${requestParams}&term=${category.replace(' ', '_')}`;
    if(location) {
        requestParams = `${requestParams}&location=${location.replace(' ', '_')}`
    } else {
        requestParams = `${requestParams}&location=NY`;
    }
    if(sortOption) requestParams = `${requestParams}&sort_by=${sortOption}`;
    const urlToFetch = `${baseUrl}${businessEndpoint}${requestParams}&limit=50`;
    
    try {
        const response = await fetch(urlToFetch, {
            method: 'GET',
            cache: 'no-cache',
            headers: {
              accept: 'application/json',
              Authorization: authorizationHeader,
            },
        }); 
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse.businesses;
        }
    } catch(error) {
        console.log(error);
    }
}

export default SearchBusinesses;