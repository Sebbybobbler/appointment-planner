import React from "react";
import {Tile} from "../tile/Tile";

export const TileList = ({object}) => {
  
    return (
        <div>
            {object.map((tile, index) => {
                const { name, ...description } = tile;
                return (
                    <Tile key={index} name={name} description={description} />
                );
            })}
        </div>
    );
};
