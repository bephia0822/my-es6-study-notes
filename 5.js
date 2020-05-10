//運用之前所學的的challenge

function addressMaker(address) {
    const newAddress = {
        city: address.city,
        state: address.state,
        country: 'United States'
    };
    
}

addressMaker({city: 'Austin', state: 'Texas'});

//我試著回答但答錯出現{city: "Austin", state: "Texas", country: "United States"}...= =
//正確：
function addressMaker(address) {
    const {city, state} = address;
    
    const newAddress = {
        city,
        state,
        country: 'United States'
    };
    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`)
}

addressMaker({city: 'Austin', state: 'Texas'});
//Austin, Texas, United States