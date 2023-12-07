let pageNumberHere = 1;
const fetchApi = async () => {
  let response = await fetch(
    `https://api.github.com/repositories/1296269/issues?page=${pageNumberHere}&per_page=5`
  );
  let result = await response.json();
  let html = "<div>";
  result.forEach((element) => {
    html += "<div>" + `${element.user.login}` + "</div>";
    html += `<div><img src=${element.user.avatar_url} alt="avatar" width="50"/></div>`;
  });
  html += "</div>";
  document.getElementById("container").innerHTML = html;
  document.getElementById("page_num").innerHTML = pageNumberHere;
};
fetchApi();
const getNextPage = () => {
  pageNumberHere = pageNumberHere + 1;
  fetchApi();
};
const getPreviousPage = () => {
  pageNumberHere = pageNumberHere - 1;
  fetchApi();
};
