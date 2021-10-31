/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import {
  useEffect,
  useState
} from "react";
import {
  PATHS
} from "./constant/path";

const FETCH_TYPES = {
  CITIES: "FETCH_CITIES",
  DISTRICTS: "FETCH_DISTRICTS",
  WARDS: "FETCH_WARDS"
};

async function getData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        return response.json();
      }).then(data_from_fetched => {
        let data = data_from_fetched.results;
        resolve(data);
      })
  })
}


async function fetchLocationOptions(fetchType, locationId) {
  let test = []
  if (fetchType == FETCH_TYPES.CITIES) {
    let url = PATHS.CITIES;
    fetch(url, {
        method: 'GET',
      })
      .then(function (a) {
        return a.json(); // call the json method on the response to get JSON
      })
      .then(function (json) {
        var locations = json.data
        console.log(locations)
        test = locations
        return locations.map(({
          id,
          name
        }) => ({
          value: id,
          label: name
        }));
      })
  }
  if (fetchType == FETCH_TYPES.DISTRICTS) {
    let url = `${PATHS.DISTRICTS}/${locationId}.json`;
    fetch(url, {
        method: 'GET',
      })
      .then(function (a) {
        return a.json(); // call the json method on the response to get JSON
      })
      .then(function (json) {
        var locations = json.data
        console.log(locations)
        return locations.map(({
          id,
          name
        }) => ({
          value: id,
          label: name
        }));
      })
  }
  if (fetchType == FETCH_TYPES.WARDS) {
    let url = `${PATHS.WARDS}/${locationId}.json`;
    fetch(url, {
        method: 'GET',
      })
      .then(function (a) {
        return a.json(); // call the json method on the response to get JSON
      })
      .then(function (json) {
        var locations = json.data
        console.log(locations)
        return locations.map(({
          id,
          name
        }) => ({
          value: id,
          label: name
        }));
      })
  }
  console.log(test)
}

async function fetchInitialData() {
  const {
    cityId,
    districtId,
    wardId
  } = {
    "cityId": 278,
    "districtId": 617,
    "wardId": 63
  }
  const [cities, districts, wards] = await Promise.all([
    fetchLocationOptions(FETCH_TYPES.CITIES),
    fetchLocationOptions(FETCH_TYPES.DISTRICTS, cityId),
    fetchLocationOptions(FETCH_TYPES.WARDS, districtId)
  ]);
  return {
    cityOptions: cities,
    districtOptions: districts,
    wardOptions: wards,
    selectedCity: cities.find((c) => c.value === cityId),
    selectedDistrict: districts.find((d) => d.value === districtId),
    selectedWard: wards.find((w) => w.value === wardId)
  };
}

function useLocationForm(shouldFetchInitialLocation) {
  const [state, setState] = useState({
    cityOptions: [],
    districtOptions: [],
    wardOptions: [],
    selectedCity: null,
    selectedDistrict: null,
    selectedWard: null
  });

  const {
    selectedCity,
    selectedDistrict
  } = state;

  useEffect(() => {
    (async function () {
      if (shouldFetchInitialLocation) {
        const initialData = await fetchInitialData();
        setState(initialData);
      } else {
        const options = await fetchLocationOptions(FETCH_TYPES.CITIES);
        setState({
          ...state,
          cityOptions: options
        });
      }
    })();
  }, []);

  useEffect(() => {
    (async function () {
      if (!selectedCity) return;
      const options = await fetchLocationOptions(
        FETCH_TYPES.DISTRICTS,
        selectedCity.value
      );
      setState({
        ...state,
        districtOptions: options
      });
    })();
  }, [selectedCity]);

  useEffect(() => {
    (async function () {
      if (!selectedDistrict) return;
      const options = await fetchLocationOptions(
        FETCH_TYPES.WARDS,
        selectedDistrict.value
      );
      setState({
        ...state,
        wardOptions: options
      });
    })();
  }, [selectedDistrict]);

  function onCitySelect(option) {
    if (option !== selectedCity) {
      setState({
        ...state,
        districtOptions: [],
        wardOptions: [],
        selectedCity: option,
        selectedDistrict: null,
        selectedWard: null
      });
    }
  }

  function onDistrictSelect(option) {
    if (option !== selectedDistrict) {
      setState({
        ...state,
        wardOptions: [],
        selectedDistrict: option,
        selectedWard: null
      });
    }
  }

  function onWardSelect(option) {
    setState({
      ...state,
      selectedWard: option
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    window.location.reload();
  }

  return {
    state,
    onCitySelect,
    onDistrictSelect,
    onWardSelect,
    onSubmit
  };
}

export default useLocationForm;