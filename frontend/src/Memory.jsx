import React, { useEffect, useState } from "react";
import cardData from "./Details.jsx";
import "./Memory.css";
import Navbar from "./Navbar.jsx";
const Memory = () => {
  const [cards, setCards] = useState([]);
  const [flip, setFlip] = useState(true);
  const [turn, setTurn] = useState(0);
  const [firstChoice, setFirstChoice] = useState();
  const [showDialog, setShowDialog] = useState(false);

  const [secondchoice, setSecondChoice] = useState();
  const sortCards = () => {
    const sorted = [...cardData, ...cardData]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(sorted);
    resetTurn();

    setCards((preCards) => {
      return preCards.map((card) => {
        return { ...card, matched: true };
      });
    });

    setTimeout(() => {
      setCards((preCards) => {
        return preCards.map((card) => {
          return { ...card, matched: false };
        });
      });
    }, 1000);
  };
  console.log(cards);
  useEffect(() => {
    sortCards();
  }, []);

  const checkCardMatch = () => {
    if (secondchoice) {
      setCards((preCards) => {
        return preCards.map((card) => {
          if (secondchoice.id === card.id) {
            return { ...card, matched: true };
          } else {
            return card;
          }
        });
      });
    } else if (firstChoice) {
      setCards((preCards) => {
        return preCards.map((card) => {
          if (firstChoice.id === card.id) {
            return { ...card, matched: true };
          } else {
            return card;
          }
        });
      });
    }
    if (firstChoice && secondchoice) {
      if (firstChoice.image !== secondchoice.image) {
        setTimeout(() => {
          setCards((preCards) => {
            return preCards.map((card) => {
              if (card.id === firstChoice.id || card.id === secondchoice.id) {
                return { ...card, matched: false };
              } else {
                return card;
              }
            });
          });
        }, 1000);

        console.log("cards do not matched");
      }
      console.log("turn ->" + turn);
      resetTurn();
    }
  };

  useEffect(() => {
    checkCardMatch();
  }, [firstChoice, secondchoice]);

  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setTurn((prev) => prev + 1);
  };
  const rotate = (card) => {
    console.log(card);
    firstChoice ? setSecondChoice(card) : setFirstChoice(card);
  };
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Navbar/>
      <div
        
        className="grid  grid-cols-1 m-top-[0] p-6 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 gap-[20px]"
      >
        {cards.map((card, index) => {
          return (
            <div className="card">
              <div className={card.matched ? "" : "flip"}>
                <div
                  className=" card front"
                  style={{ color: "#fff", boxShadow: "0 0 20px 0 grey" }}
                  onClick={() => rotate(card)}
                >
                  {card.no}
                </div>
                <div
                  key={card.id}
                  className="back"
                  style={{
                    height: "200px",
                    padding: "2px",
                    width: "200px",
                    boxShadow: "0 0 20px 0 grey",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  {card.content}
                  <img src={card.image} height={"200px"} width={"100px"} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button
        style={{
          padding: "5px",
          borderRadius: "30px",
          marginTop: "15px",
          backgroundColor: "black",
          color: "white",
        }}
        onClick={sortCards}
      >
        Shuffle
      </button>
    </div>
  );
};

export default Memory;
