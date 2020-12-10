import React, { useEffect, useState } from "react";
import Header from "./components/header";
import InfoMenu from "./components/infoMenu";
import LoadingTop from "./components/loadingTop";
import Card from "./components/infoCard";
import Reddit from "./components/socialReddit";
import Twitter from "./components/socialTwitter";
import { apiRequests, fetchtwitter, fetchreddit } from "./app/apiRequests";

import Logo from "./images/logo.png";

function App() {
  //const [isloggedin, setisloggedin] = useState();

  const [activemenu, setactivemenu] = useState("offical");
  const [activecard, setactivecard] = useState("card__videos");

  const [state, setstate] = useState(); // {allData}
  const [card, setcard] = useState(); // {formattedCardData}
  const [current, setcurrent] = useState(); // {the 2 Card items}
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // default 1
  const [postsPerPage] = useState(2);
  const [pagestotal, setpagestotal] = useState();

  const [twitter, settwitter] = useState({
    user: { name: "loading" },
    text: "loading",
  });
  const [reddit, setreddit] = useState([
    { data: { title: "loading" } },
    { data: { title: "loading" } },
    { data: { title: "loading" } },
  ]);

  // LINK https://github.com/bradtraversy/simple_react_pagination/blob/master/src/App.js

  useEffect(() => {
    // ---------- ON MOUNT
    if (!state) {
      console.log("MOUNTING");
      async function fetchData() {
        let igdbdata = await apiRequests();
        setstate(igdbdata);
        let twitterdata = await fetchtwitter();
        settwitter(twitterdata);
        console.log("twitterdata:", twitterdata);
        let redditdata = await fetchreddit();
        setreddit(redditdata);
      }
      fetchData();
    }

    // ---------- ON UPDATE
    if (state) {
      console.log("UPDATING", state);
      getOfficalInfoFromState(state);

      let officalInfo = createCardState(state);

      console.log("newstate:", officalInfo);
      setcard(officalInfo); // current Items for the card (OFFICALINFO or Community info)
    }
  }, [state]);

  useEffect(() => {
    let currentPosts;
    console.log("current:", current);
    console.log("activecard", activecard);

    if (card) {
      // Get current posts
      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      // --> the 2 items in the card = currentPosts
      try {
        if (activecard === "card__videos") {
          let total = Math.ceil(card.videos.length / postsPerPage);
          console.log("total", total);
          setpagestotal(total);
        }
        if (activecard === "card__screenshots") {
          let total = Math.ceil(card.screenshots.length / postsPerPage);
          console.log("total", total);
          setpagestotal(total);
        }
        if (activecard === "card__artworks") {
          let total = Math.ceil(card.artworks.length / postsPerPage);
          console.log("total", total);
          setpagestotal(total);
        }
      } catch (error) {}

      // DEFAULT TO VIDEO
      if (!activecard) {
        currentPosts = card.videos.slice(indexOfFirstPost, indexOfLastPost);
        console.log("currentPosts:", currentPosts);

        setcurrent(currentPosts);
      }

      if (activecard === "card__videos") {
        currentPosts = card.videos.slice(indexOfFirstPost, indexOfLastPost);

        // if it isnt already set () to prevent loop
        setcurrent(currentPosts);
        console.log("CHANGED TO VIDEOS");
      }

      if (activecard === "card__screenshots") {
        currentPosts = card.screenshots.slice(
          indexOfFirstPost,
          indexOfLastPost
        );
        setcurrent(currentPosts);
        console.log("CHANGED TO SCREENSHOTS");
      }

      if (activecard === "card__artworks") {
        currentPosts = card.artworks.slice(indexOfFirstPost, indexOfLastPost);
        setcurrent(currentPosts);
        console.log("CHANGED TO ARTWORKS");
      }

      console.log("currentPosts:", currentPosts);
      try {
        if (currentPage <= 1) {
          document.querySelector(".arrow-left").style.display = "none";
          document.querySelector(".card-wrapper").style.marginLeft = "9rem";
        } else {
          document.querySelector(".arrow-left").style.display = "flex";
          document.querySelector(".card-wrapper").style.marginLeft = "0rem";
        }
      } catch (error) {}

      try {
        if (currentPage >= pagestotal) {
          document.querySelector(".arrow-right").style.display = "none";
          document.querySelector(".card-wrapper").style.marginRight = "9rem";
        } else {
          document.querySelector(".arrow-right").style.display = "flex";
          document.querySelector(".card-wrapper").style.marginRight = "0rem";
        }
      } catch (error) {}
    }
  }, [card, currentPage, activecard]);

  useEffect(() => {}, [activecard]);

  // Change page function
  const paginateNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const paginatePrevious = (pageNumber) => {
    setCurrentPage(currentPage - 1);
  };

  const handleMenu = (e) => {
    console.log("clicked", e.target.id);
    setactivemenu(e.target.id);

    // Get the container element
    var btnContainer = document.querySelector(".infoMenu");
    console.log("btnContainer:", btnContainer);

    // Get all buttons with class="btn" inside the container
    var btns = btnContainer.getElementsByClassName("btn");
    console.log("btns:", btns);

    // Loop through the buttons and add the active class to the current/clicked button

    for (const item of btns) {
      if (item.className === `btn ${item.id}` && item.id !== e.target.id) {
        item.className = "btn";
        console.log("REPLACING");
      }

      if (item.className !== `btn ${item.id}` && item.id === e.target.id) {
        item.className += ` ${e.target.id}`;
        console.log("item.className:", item.className);
      }
    }
  };

  const handleCard = (e) => {
    console.log("clicked", e.target.id);
    setactivecard(e.target.id);

    // DEFAULT TO PAGE 1 when switching tabs
    // FIXME later replace with user data
    setCurrentPage(1);
    // Get the container element
    var btnContainer = document.querySelector(".cardlist");
    console.log("btnContainer:", btnContainer);

    // Get all buttons with class="btn" inside the container
    var btns = btnContainer.getElementsByClassName("btn");
    console.log("btns:", btns);

    // Loop through the buttons and add the active class to the current/clicked button

    for (const item of btns) {
      if (item.className === `btn ${item.id}` && item.id !== e.target.id) {
        item.className = "btn";
        console.log("REPLACING");
      }

      if (item.className !== `btn ${item.id}` && item.id === e.target.id) {
        item.className += ` ${e.target.id}`;
        console.log("item.className:", item.className);
      }
    }
  };

  if (card && current) {
    return (
      <div className="App">
        <img src={Logo} alt="Logo Cyberpunk" id="samurai-logo" />
        <LoadingTop></LoadingTop>
        <Header></Header>
        <InfoMenu activemenu={activemenu} handleMenu={handleMenu}></InfoMenu>
        <Card
          card={card}
          current={current}
          currentPage={currentPage}
          paginateNext={paginateNext}
          paginatePrevious={paginatePrevious}
          handleCard={handleCard}
          activecard={activecard}
        ></Card>

        <div className="social">
          <Twitter twitter={twitter}></Twitter>
          <Reddit reddit={reddit}></Reddit>
        </div>
        <div className="checkered"></div>
        <div className="footer">
          <h3 className="author">CUSTOM APP BY CYBERPUNKTIPS</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <LoadingTop></LoadingTop>
      <Header></Header>
      <InfoMenu></InfoMenu>
    </div>
  );
}

function getOfficalInfoFromState(state) {
  // Creating a new Object containing only :
  // Offical Videos , SCreenshots , Artworks

  console.log("getOfficalInfoFromState", state);
}

function getCommunityInfoFromServer(state) {
  // Creating a new Object containing only :
  // Offical Videos , SCreenshots , Artworks
}

function createCardState(state) {
  const { videos, screenshots, artworks } = state;

  const officalInfo = {
    videos: videos,
    screenshots: screenshots,
    artworks: artworks,
  };

  return officalInfo;
}

export default App;

/*   // data modified to contain user identifcation and,
  // added a "watched:false" to every item (new user)
  const [userstate, setuserstate] = useState();

  // menu item which is acitve (Video , Screenshot)
  const [menu, setmenu] = useState();

  
  // current active/visable paginated items in the card
  // watched: true / false state for items [OPTIONAL-User Account]
  const [pagination, setpagination] = useState(); */
