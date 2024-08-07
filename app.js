let url = "http://universities.hipolabs.com/search?name=";

let btn = document.querySelector("button");

btn.addEventListener("click", async() => {
  let country = document.querySelector("input").value;

  let colleges = await getColleges(country);
  console.log(colleges);
  show(colleges);
})

async function getColleges(country) {
  try{
    let res = await axios.get(url + country);
    return res.data;
  } catch(err){
    console.log(err);
    return [];
  };
};

function show (colleges){
  let tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  let i = 0;
  for(college of colleges){
    i++;
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText = i;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.innerText = college.name;
    tr.appendChild(td2);
    
    let td3 = document.createElement("td");
    td3.innerHTML = `<a href="${college.web_pages[0]}">${college.web_pages[0]}</a>`;
    tr.appendChild(td3);
    
    tbody.appendChild(tr);
  }
}

