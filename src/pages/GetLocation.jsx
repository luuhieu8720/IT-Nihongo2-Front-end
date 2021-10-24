import React from 'react';
import {YOUR_API_KEY} from 'google.maps';
class GetLocation extends React.Component{
    constructor(props){
        super(props);
        this.state={
            latitude: null,
            longtitude: null,
            userAddress: null
        };
        this.getLocation = this.getLocation.bind(this);
        // Lay toa do user
        this.getCoordinates = this.getCoordinates.bind(this);
        this.reverseGeocodeCoordinates = this.reverseGeocodeCoordinates.bind(this);
        console.log(YOUR_API_KEY);
    }
    getLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
        }
        else{
            alert("Geolocation isn't supported by thiss browser");
        }
    }
    getCoordinates(position){
        this.setState({
            latitude: position.coords.latitude,
            longtitude: position.coords.longitude
        })
        this.reverseGeocodeCoordinates();
    }
    reverseGeocodeCoordinates(){
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longtitude}&sensor=false&key=${YOUR_API_KEY}`)
        .then(response => response.json())
        .then(data =>console.log(data))
        .catch(error => alert(error))
    }
    handleLocationError(error){
        switch(error.code){
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNVAILABLE:
                alert("Location information is unvailable ");
                break;
            case error.TIMEOUT:
                alert("An unknown error code");
                break;
            default:
                alert("An unknown error occured");

        }
    }
    render(){
        return(
            <div className="App">
                <h2>
                    Get Location of User 
                </h2>
                <button onClick={this.getLocation}>Get location</button>
                <h4>Current Location</h4>
                <p>Latitude: {this.state.latitude}</p>
                <p>Longitude: {this.state.longtitude}</p>
                <h4>User Maps Reverse Geocoding</h4>
                <p>Address: {this.state.userAddress}</p>
                {
                    this.state.latitude && this.state.longtitude ?
                    <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitude},${this.state.longtitude}&zoom=14&size=400x300&sensor=false&markers=color:red%7C${this.state.latitude},${this.state.longtitude}&key=${YOUR_API_KEY}`} alt='' />
                :
                 null
                }
            </div>
        )
    }
}
export default GetLocation;

