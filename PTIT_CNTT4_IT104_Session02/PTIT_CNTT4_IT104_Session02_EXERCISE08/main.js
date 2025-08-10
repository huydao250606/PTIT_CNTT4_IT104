function displayUserInfo(user) {
  const name = user.name;
  const age = user.age;
  const city = user.location.city;
  const country = user.location.country;

  const jobTitle = user.job?.title || "unknown";
  const jobCompany = user.job?.company || "unknown";

  const email = user.contact?.email || "unknown";
  const phone = user.contact?.phone || "unknown";

  return `${name} is ${age} years old, lives in ${city}, ${country}, works as ${jobTitle} at ${jobCompany}, and can be contacted via ${email} or ${phone}.`;
}
console.log(
  displayUserInfo({
    name: "Anna",
    age: 30,
    location: { city: "Da Nang", country: "Vietnam" },
  })
);

console.log(
  displayUserInfo({
    name: "John",
    age: 25,
    location: { city: "Hanoi", country: "Vietnam" },
    contact: { email: "john@example.com", phone: "0123456789" },
    job: { title: "Developer", company: "Tech Corp" },
  })
);
