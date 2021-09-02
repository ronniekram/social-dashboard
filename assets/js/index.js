// Theming

const html = document.querySelector("html");
html.dataset.theme = `theme-dark`;

const toggle = document.getElementById("toggle");

const switchTheme = () => html.dataset.theme === "theme-dark" ? (html.dataset.theme = "theme-light") : (html.dataset.theme = `theme-dark`);

// Profiles
const renderProfile = (profile) => {
  const {icon, className, username, followers, type, growth} = profile;

  const profCard = document.createElement("div");
  profCard.classList.add("profile");
  const status = document.createElement('p');
  status.innerHTML = `
    <img src=${growth[1]} alt="Arrow indicating positive or negative growth" />
    ${growth[2]} Today
  `;

  growth[0] === true ? status.classList.add('pos', 'growth') : status.classList.add('neg', 'growth');

  profCard.innerHTML = `
    <div class="media ${className}"></div>
    <div class="username">
      <img src="${icon}" /> 
      ${username}
    </div>

    <div class="followers">
      ${followers} <br />
      <span>${type}</span>
    </div>
  `;

  profCard.appendChild(status);

  return profCard;
};

const renderProfiles = () => {
  const container = document.getElementById("profiles");

  profiles.forEach((profile) => {
    const profCard = renderProfile(profile);
    container.appendChild(profCard);
  });
};

// Overviews
const renderOverview = (overview) => {
  const {icon, className, heading, num, growth} = overview;
  const overCard = document.createElement("div");
  overCard.classList.add(className, 'overview');

  overCard.innerHTML = `
    <div class="top">
      <p class="heading">${heading}</p>

      <p class="icon">
        <img src="${icon}" />
      </p>
    </div>
  `;

  const status = document.createElement('div');
  status.classList.add('top')

  const statusClass = growth[0] === true ? "pos" : "neg";

  status.innerHTML = `
    <p class="count">${num}</p>
    
    <p class="${statusClass} growth">
      <img src=${growth[1]} alt="Arrow indicating positive or negative growth" /> 
      ${growth[2]}
    </p>
  `;

  overCard.appendChild(status);

  return overCard;
};

const renderOverviews = () => {
  const container = document.getElementById("overviews");

  overviews.forEach((overview) => {
    const overCard = renderOverview(overview);
    container.appendChild(overCard);
  });
};

// Content Loaded  & Toggle Event Listener
document.addEventListener("DOMContentLoaded", () => {
  toggle.addEventListener("click", switchTheme);

  renderProfiles();
  renderOverviews();
});
