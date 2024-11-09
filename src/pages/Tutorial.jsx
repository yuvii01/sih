import React, { useState } from 'react';

const SignLanguageDictionary = () => {
  const [selectedLetter, setSelectedLetter] = useState('');
  const [words, setWords] = useState([]);

  // Letter images
  const wordImg = {
    "A": { "img": "A.jpg" },
    "B": { "img": "B.jpg" },
    "C": { "img": "C.jpg" },
    "D": { "img": "D.jpg" },
    "E": { "img": "E.jpg" },
    "F": { "img": "F.jpg" },
    "G": { "img": "G.jpg" },
    "H": { "img": "H.jpg" },
    "I": { "img": "I.jpg" },
    "J": { "img": "J.jpg" },
    "K": { "img": "K.jpg" },
    "L": { "img": "L.jpg" },
    "M": { "img": "M.jpg" },
    "N": { "img": "N.jpg" },
    "O": { "img": "O.jpg" },
    "P": { "img": "P.jpg" },
    "Q": { "img": "Q.jpg" },
    "R": { "img": "R.jpg" },
    "S": { "img": "S.jpg" },
    "T": { "img": "T.jpg" },
    "U": { "img": "U.jpg" },
    "V": { "img": "V.jpg" },
    "W": { "img": "W.jpg" },
    "X": { "img": "X.jpg" },
    "Y": { "img": "Y.jpg" },
    "Z": { "img": "Z.jpg" }
  };

  // Word data based on the letter selected
  const wordData = {
    "A": ["Apple", "Animal", "Aim", "Arrow", "Ant"],
    "B": ["Ball", "Bat", "Bee", "Bird", "Book"],
    "C": ["Cat", "Car", "Cup", "Candle", "Cake"],
    "D": ["Dog", "Duck", "Doll", "Desk", "Door"],
    "E": ["Elephant", "Egg", "Engine", "Eagle", "Ear"],
    "F": ["Fish", "Fan", "Flower", "Flag", "Fire"],
    "G": ["Goat", "Grapes", "Gift", "Glass", "Gate"],
    "H": ["Hat", "Horse", "House", "Hand", "Hammer"],
    "I": ["Ice", "Ink", "Iron", "Island", "Icecream"],
    "J": ["Jaguar", "Jam", "Jelly", "Jet", "Juice"],
    "K": ["Kite", "Key", "King", "Kangaroo", "Knife"],
    "L": ["Lion", "Lamp", "Leaf", "Ladder", "Lemon"],
    "M": ["Monkey", "Moon", "Mango", "Mountain", "Map"],
    "N": ["Nest", "Nose", "Nail", "Net", "Nurse"],
    "O": ["Owl", "Orange", "Ox", "Ocean", "Oven"],
    "P": ["Pen", "Pineapple", "Pencil", "Pumpkin", "Parrot"],
    "Q": ["Queen", "Quilt", "Quill", "Quokka", "Quarter"],
    "R": ["Rat", "Rabbit", "Rose", "River", "Rock"],
    "S": ["Sun", "Snake", "Star", "Ship", "School"],
    "T": ["Tiger", "Tree", "Table", "Train", "Tomato"],
    "U": ["Umbrella", "Unicorn", "Uniform", "Urchin", "Umpire"],
    "V": ["Van", "Vase", "Vegetable", "Violet", "Violin"],
    "W": ["Wolf", "Water", "Whale", "Window", "Wheel"],
    "X": ["Xylophone", "X-ray", "Xenon", "Xerox", "Xenia"],
    "Y": ["Yak", "Yarn", "Yellow", "Yogurt", "Yacht"],
    "Z": ["Zebra", "Zip", "Zoo", "Zero", "Zigzag"]
  };

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    setWords(wordData[letter] || []); // Fetch words for the selected letter
  };

  return (
    <div style={{ backgroundColor: '#121212', color: 'white', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      {/* Alphabet Search Section */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(13, 1fr)', gap: '10px' }}>
          {Object.keys(wordData).map(letter => (
            <button
              key={letter}
              onClick={() => handleLetterClick(letter)}
              style={{ padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#444', color: 'white' }}>
              {letter}
            </button>
          ))}
        </div>
      </div>

      {/* Display Selected Letter Image */}
      {selectedLetter && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <h2>Selected Letter: {selectedLetter}</h2>
          <div className='flex justify-center'>
          {wordImg[selectedLetter] && (
            <img
              src={'/images/'+wordImg[selectedLetter].img}
              alt={selectedLetter}
              style={{ width: '200px', height: '200px', marginTop: '10px' }}
            />
          )}
          </div>
        </div>
      )}

      {/* Display Words Section */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>Words starting with {selectedLetter}</h2>
        <ul>
          {words.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SignLanguageDictionary;
