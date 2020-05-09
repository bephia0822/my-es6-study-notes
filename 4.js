function addressMaker(city, state) {
    const newAdress = {newCity: city, newState: state};
    
    console.log(newAdress);
}

addressMaker('Austin', 'Texas');
//{newCity: "Austin", newState: "Texas"}

//如果key跟value是一樣的(newCity=city)要make sense，不能是差太多的東西，可簡寫
function addressMaker(city, state) {
    const newAdress = {city, state}; //不用多此一舉寫兩遍const newAdress = {city: city, state: state};
    
    console.log(newAdress);
}

addressMaker('Austin', 'Texas');
//{city: "Austin", state: "Texas"}