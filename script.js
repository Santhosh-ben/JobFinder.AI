 const jobs = [
  { title: "Frontend Developer", location: "Remote", level: "Junior" },
  { title: "AI Engineer", location: "New York", level: "Senior" },
  { title: "Data Analyst", location: "Remote", level: "Mid" },
  { title: "React Developer", location: "New York", level: "Junior" },
  { title: "UI/UX Designer", location: "Remote", level: "Mid" }
];

function scrollToJobs() {
  document.getElementById("job-suggestions").scrollIntoView({ behavior: "smooth" });
}

function displayJobs(jobList) {
  const container = document.getElementById("job-suggestions");
  container.innerHTML = "";
  jobList.forEach((job) => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${job.title}</h3><p>${job.location} | ${job.level}</p>`;
    container.appendChild(div);
  });
}

function applyFilters() {
  const keyword = document.getElementById("search").value.toLowerCase();
  const location = document.getElementById("location").value;
  const level = document.getElementById("level").value;

  const filteredJobs = jobs.filter((job) => {
    return (
      (keyword === "" || job.title.toLowerCase().includes(keyword)) &&
      (location === "" || job.location === location) &&
      (level === "" || job.level === level)
    );
  });

  displayJobs(filteredJobs);
}

// Initial job display
displayJobs(jobs);
