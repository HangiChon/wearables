import React, { useState, useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";

import {
  Wrapper,
  Input,
  MagGlassImg,
  UlWrapper,
  StyledLink,
} from "../ComponentStyles/InputStyles";
const SearchBar = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const { productNames } = useContext(AppContext);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);

  const matchedSuggestions = productNames.filter((product) => {
    if (inputValue.length >= 4) {
      return product.name.toLowerCase().includes(inputValue.toLowerCase());
    }
  });

  const handleSelect = (id) => {
    navigate(`/products/${id}`);
  };

  const selectedItem = matchedSuggestions[selectedSuggestionIndex];

  return (
    <Wrapper>
      <MagGlassImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/1200px-Magnifying_glass_icon.svg.png" />
      <Input
        placeholder="Search for a product"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          switch (e.key) {
            case "Enter":
              handleSelect(selectedItem._id);
              break;
            case "ArrowUp":
              setSelectedSuggestionIndex(selectedSuggestionIndex - 1);
              selectedSuggestionIndex === 0 && setSelectedSuggestionIndex(0);
              break;
            case "ArrowDown":
              setSelectedSuggestionIndex(selectedSuggestionIndex + 1);
              selectedSuggestionIndex === matchedSuggestions.length - 1 &&
                setSelectedSuggestionIndex(matchedSuggestions.length - 1);
              break;
            case "Escape":
              setInputValue("");
              break;

            default:
              setSelectedSuggestionIndex(-1);
          }
        }}
      />
      <UlWrapper>
        {matchedSuggestions.map((suggestion, idx) => {
          const isFocused = idx === selectedSuggestionIndex;
          return (
            <StyledLink to={`/products/${suggestion._id}`}>
              <li style={{ background: isFocused && "#fffbe6" }}>
                <p>{suggestion.name}</p>
              </li>
            </StyledLink>
          );
        })}
      </UlWrapper>
    </Wrapper>
  );
};

export default SearchBar;
