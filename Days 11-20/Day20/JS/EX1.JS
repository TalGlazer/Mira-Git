function callXHR() {
    var raw = JSON.stringify({
      email: "roya@mail.com",
      password: "pass13",
      APIkey: "key123",
    });
  
    var requestOptions = {
      method: "POST",
      body: raw,
    };
  
    fetch("https://www.promermedia.com/api/mira/sayHello", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  // 