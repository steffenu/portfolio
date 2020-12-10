import axios from "axios";

// let local = "http://192.168.1.101:4000";
let remote = "https://cyberpunk-updater-api.now.sh/";

export function apiRequests() {
  return new Promise((resolve, reject) => {
    let url = `${remote}api/games`;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        resolve(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  });
}

export function fetchtwitter() {
  return new Promise((resolve, reject) => {
    let url = `${remote}api/twitter`;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        resolve(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  });
}

export function fetchreddit() {
  return new Promise((resolve, reject) => {
    let url = `${remote}api/reddit`;
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        resolve(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  });
}

// yt request can be found in request2 file
// currently not used
