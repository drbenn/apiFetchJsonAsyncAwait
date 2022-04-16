console.log('hello');

// https://www.boredapi.com/api/activity
const btn = document.querySelector('.btn-fetch');
const activityContainer = document.getElementById('activityContainer');

const api_url = 'https://www.boredapi.com/api/activity';

const addDataToDom = function (activity, type, participants, price, link) {
  let newDiv = document.createElement('div');
  newDiv.setAttribute('id', 'existing-activity');
  //   Add Activty/Title to newDiv
  let newTitle = document.createElement('h4');
  let newTitleText = document.createTextNode(activity);
  newTitle.appendChild(newTitleText);
  newDiv.appendChild(newTitle);
  // Add unordered list to newDiv for other descriptives
  let newUl = document.createElement('ul');
  newDiv.appendChild(newUl);
  //   Add type of activity to newDiv
  let newLiType = document.createElement('li');
  let liTypeText = document.createTextNode(`Type: ${type}`);
  newLiType.appendChild(liTypeText);
  newDiv.appendChild(newLiType);
  //   Add participants of activity to newDiv
  let newLiParticipants = document.createElement('li');
  let liParticipantsText = document.createTextNode(`People Needed: ${participants}`);
  newLiParticipants.appendChild(liParticipantsText);
  newDiv.appendChild(newLiParticipants);
  //   Add price to newDiv
  let newLiPrice = document.createElement('li');
  let priceExplain = '';
  if (price === '0') {
    priceExplain = 'free';
  } else {
    priceExplain = 'Varies';
  }
  let liPriceText = document.createTextNode(`Price: ${priceExplain}`);
  newLiPrice.appendChild(liPriceText);
  newDiv.appendChild(newLiPrice);
  //   Add link to activity to newDiv
  if (link) {
    let newLiLink = document.createElement('li');
    let liLinkText = document.createTextNode(`Link: ${link}`);
    newLiLink.appendChild(liLinkText);
    newDiv.appendChild(newLiLink);
  }

  activityContainer.appendChild(newDiv);
  console.log('done');
};

const getApiData = async function () {
  console.log('click');
  let response = await fetch(api_url);
  let data = await response.json();
  let { activity, type, participants, price, link } = data;
  addDataToDom(activity, type, participants, price, link);
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
};

btn.addEventListener('click', clickAction);
