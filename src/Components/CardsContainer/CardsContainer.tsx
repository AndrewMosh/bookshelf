import { ArticleCard } from "../ArticleCard/ArticleCard";
import classes from "./CardsContainer.module.css";
import { Data } from "../../Components/types/types";
import React from "react";
interface ChildProps {
  data: Data | null; // Принимаем data как props
}

const CardsContainer: React.FC<ChildProps> = ({ data }) => {
  if (!data) {
    return;
  } else {
    console.log(data.totalItems);
  }
  return (
    <div className={classes.CardsContainer}>
      {data.items.map((item) => (
        <ArticleCard key={item.id} item={item} />
      ))}
    </div>
  );
};
export default CardsContainer;
