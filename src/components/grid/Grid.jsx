/**
 * A React component that displays a grid of items based on the selected category.
 * @returns The Grid component.
 */
import React, { useState } from "react";
import GridItem from "../griditem/GridItem";
import images from "../../assets/img.js";
import "./grid.scss";

const Grid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const allCategoryText = "Todos";
  const betsCategoryText = "Apostas";
  const casinoCategoryText = "Casino";

  const items = [
    {
      title: "Oferta de Boas-vindas",
      category: "Casino",
      imageSrc: images.imgSrc1,
      text: "Mais de 6.000€ em bónus",
      description:
        "Faz a tua primeira aposta de 10€ (ou mais) e as próximas três ficam por nossa conta!",
    },
    {
      title: "Oferta de Registo",
      category: "Casino",
      imageSrc: images.imgSrc2,
      text: "Mais de 6.000€ em bónus",
      description:
        "Faz a tua primeira aposta de 10€ (ou mais) e as próximas três ficam por nossa conta!",
    },
    {
      title: "Torneio Playmatch",
      category: "Bets",
      imageSrc: images.imgSrc3,
      text: "Mais de 6.000€ em bónus",
      description:
        "Faz a tua primeira aposta de 10€ (ou mais) e as próximas três ficam por nossa conta!",
    },
    {
      title: "Trunfo",
      category: "Casino",
      imageSrc: images.imgSrc4,
      text: "Mais de 6.000€ em bónus",
      description:
        "Faz a tua primeira aposta de 10€ (ou mais) e as próximas três ficam por nossa conta!",
    },
    {
      title: "Ao Vivo+",
      category: "Bets",
      imageSrc: images.imgSrc5,
      text: "Mais de 6.000€ em bónus",
      description:
        "Faz a tua primeira aposta de 10€ (ou mais) e as próximas três ficam por nossa conta!",
    },
    {
      title: "Múltipla+",
      category: "Bets",
      imageSrc: images.imgSrc6,
      text: "Mais de 6.000€ em bónus",
      description:
        "Faz a tua primeira aposta de 10€ (ou mais) e as próximas três ficam por nossa conta!",
    },
    {
      title: "+Segura",
      category: "Casino",
      imageSrc: images.imgSrc7,
      text: "Mais de 6.000€ em bónus",
      description:
        "Faz a tua primeira aposta de 10€ (ou mais) e as próximas três ficam por nossa conta!",
    },
    {
      title: "Exclusivos",
      category: "Casino",
      imageSrc: images.imgSrc8,
      text: "Mais de 6.000€ em bónus",
      description:
        "Faz a tua primeira aposta de 10€ (ou mais) e as próximas três ficam por nossa conta!",
    },
    {
      title: "Power Ods",
      category: "Casino",
      imageSrc: images.imgSrc9,
      text: "Mais de 6.000€ em bónus",
      description:
        "Faz a tua primeira aposta de 10€ (ou mais) e as próximas três ficam por nossa conta!",
    },
  ];

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  return (
    <>
      <div className="category-buttons">
        <button
          className="btn btn-terciary"
          onClick={() => setSelectedCategory("All")}
        >
          {allCategoryText}
        </button>
        <button
          className="btn btn-terciary"
          onClick={() => setSelectedCategory("Bets")}
        >
          {betsCategoryText}
        </button>
        <button
          className="btn btn-terciary"
          onClick={() => setSelectedCategory("Casino")}
        >
          {casinoCategoryText}
        </button>
      </div>
      <div className="bets-wrapper">
        <div className="container">
          {filteredItems.length === 0 ? (
            <p>No items found for the selected category.</p>
          ) : (
            <div className="row">
              {filteredItems.map((item) => (
                <GridItem
                  key={item.title}
                  title={item.title}
                  imageSrc={item.imageSrc}
                  text={item.text}
                  description={item.description}
                  category={item.category}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Grid;
