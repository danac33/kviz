/*function logRes(responce) {
    responce.json().then(data => {
        console.log(data)
    });
}

function logError(err) {
    console.log(err)
}


const res = fetch("https://jsonplaceholder.typicode.com/users",{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
      body: JSON.stringify({
            name: 'Danin',
            email:"danin@typicode.com",
        }),
}).then(logRes).catch(logError);
console.log(res)
const res2 = fetch("https://jsonplaceholder.typicode.com/users/1",{
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    },
      body: JSON.stringify({
            name: 'yuh',
            email:"yuh@typicode.com",
        }),
}).then(logRes).catch(logError);
console.log(res2)

/*const res3 = fetch("https://jsonplaceholder.typicode.com/users/1",{
    method: 'DELETE ',
}).then(logRes).catch(logError);
console.log(res3)*/
/*

async function getUsers() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Finally");
    }
  }
  
  console.log(getUsers())





  const res5 = fetch("https://600d-77-239-14-36.ngrok-free.app",{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
      body: JSON.stringify({
            name: 'Danin',
            email:"danin@typicode.com",
        }),
}).then(logRes).catch(logError);
console.log(res5)
async function getUsers2() {
    try {
      const response = await fetch(" https://600d-77-239-14-36.ngrok-free.app/users",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
    },
        body: JSON.stringify({
            firstName: "Danac", 
            lastName:"hihi",
            email: "ha@testc.om",
            password: "123455",
          }),
          });
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Finally");
    }
  }
  
  console.log(getUsers2())

*/


  async function registerUser() {
    try {
      const response = await fetch(
        "https://0c6e-77-239-14-36.ngrok-free.app/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
         "email":"DanacH1@gmail.com",
      "password": "PaSwOrD123",
      "firstName": "Danin",
      "lastName": "Harambasic",
      "username": "danac"
          }),
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Done");
    }
  }


  async function loginUser() {
    try {
      const response = await fetch(
        "https://0c6e-77-239-14-36.ngrok-free.app/login",

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "password": "PaSwOrD123",
          "email":"DanacH1@gmail.com",
          }),
        }
      );
      const data = await response.json();
      console.log(data);

    const accesToken = data.user.token;
    console.log(accesToken);
    localStorage.setItem("token", accesToken);
    
    
    const userFromStorage = localStorage.getItem("accesToken")
    console.log(userFromStorage);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Done");
    }
  }





  async function getuser() {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("https://0c6e-77-239-14-36.ngrok-free.app/users",
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
      );
      const data2 = await response.json();
      console.log(data2);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Done");
    }
  }





  async function loginUser() {
    try {
      const response = await fetch(
        "https://0c6e-77-239-14-36.ngrok-free.app/login",

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "password": "PaSwOrD123",
          "email":"DanacH1@gmail.com",
          }),
        }
      );
      const data = await response.json();
      console.log(data);

      const accesToken = data.user.token;
      console.log(accesToken);
localStorage.setItem("token", accesToken);
    
    
    const userFromStorage = localStorage.getItem("accesToken")
    console.log(userFromStorage);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Done");
    }
  }


  async function getLeaderboard(url) {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(url,
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }
      );
      const data2 = await response.json();

    } catch (error) {
      console.log(error);
    } finally {
      console.log("Done");
    }
  }
  getLeaderboard("https://0c6e-77-239-14-36.ngrok-free.app/users")