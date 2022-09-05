console.log('hello');

// https://www.boredapi.com/api/activity
const btn = document.querySelector('.btn-fetch');
const activityContainer = document.getElementById('activityContainer');

// const api_url = 'https://www.boredapi.com/api/activity';
// https://datausa.io/profile/geo/arlington-va#about

const api_url_commuteTime = `https://datausa.io/api/data?measure=Average Commute Time&drilldowns=Place`;
const api_url_commuteMethod = `https://datausa.io/api/data?measure=Commute Means,Commute Means%20Moe&geo=16000US5103000&drilldowns=Group`;
const api_url_carsPerHousehold = `https://datausa.io/api/data?measure=Commute%20Means%20by%20Gender,Commute%20Means%20by%20Gender%20Moe&geo=16000US5103000,01000US&drilldowns=Vehicles%20Available`;

const api_urls = [api_url_commuteTime, api_url_commuteMethod, api_url_carsPerHousehold];

const getApiData = async function () {
  for (url of api_urls) {
    let contents = await fetch(url);
    let data = await contents.json();
    console.log(data);
  }
};

const clearExistingActivity = function () {
  let existingActivity = document.getElementById('existing-activity');
  //   existingActivity.removeChild(existingActivity.firstChild);
  if (existingActivity) {
    existingActivity.remove();
  }
};

const clickAction = function () {
  clearExistingActivity();
  getApiData();
  // getToken();
};

btn.addEventListener('click', clickAction);
