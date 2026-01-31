import { useContext, useEffect, useMemo, useState } from "react";
import UserContext, { UserContextType } from "../context/UserContext";
import MainPageContent from "./MainPageContent";
import BoardGame from "./BoardGame";
import HowToPage from "./HowToPage";

const MainPage = () => {
  const [showLoadBoard, setShowLoadBoard] = useState(false);
  const [ showHowToPage, setShowHowToPage ] = useState(false);
  const { setNumberOfPlayers, gameOn, setGameOn, mainPageContainerRef, singlePlayerButtonRef, multiPlayerButtonRef, howToButtonRef } = useContext(UserContext) as UserContextType;


  // load board game
  const handleClick = (players: string) => {
    if (!setNumberOfPlayers) {
      console.error;
      return;
    }

    // animate clicked button
    if (singlePlayerButtonRef.current && multiPlayerButtonRef.current && howToButtonRef.current) {
        if (players === "single") {
            setNumberOfPlayers(1);
            singlePlayerButtonRef.current.style.animation = "button-click 1000ms linear forwards";
        } 
        if (players === "multi") {
            setNumberOfPlayers(2);
            multiPlayerButtonRef.current.style.animation = "button-click 1000ms linear forwards";
        } else if (players === "how-to") {
            howToButtonRef.current.style.animation="button-click 1s linear forwards";
            setShowHowToPage(true);
        }
    }
    
    // animate battleship image
    const shipImage = document.querySelector(
      ".battleship-image"
    ) as HTMLElement;
    // shipImage.style.animation = "move-ship 3000ms ease linear";
    shipImage.style.animation = "move-ship 1000ms linear forwards";
    setTimeout(() => {
      setShowLoadBoard(true);
    }, 1000);
  };

  // useEffect(() => {
  //   page === 'home' && <MainPageContent handleClick={handleClick} />
  //   page === 'game' && <BoardGame />
  //   page === 'how-to' && <HowToPage />
  // }, [page])

  function loadPage(): React.ReactNode {
      if (!showLoadBoard) {
        return <MainPageContent handleClick={handleClick} />
      } 
      if (!showHowToPage) {
        return <BoardGame />
      } else {
        return <HowToPage />
      }
  }


  const loadMain = useMemo(() => loadPage(), [gameOn, setGameOn, showLoadBoard, setShowLoadBoard]);

    return (
        <div ref={mainPageContainerRef} className="main-page-container">
          {loadMain}
        </div>
    );
};

export default MainPage;
