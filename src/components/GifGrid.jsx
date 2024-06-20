import { useEffect, useState } from "react";
import {getGifs } from '../helpers/getGifs'
import useFetchGifs from "../hooks/useFetchGifs";
import { CardGif } from "./CardGif";

export const GifGrid = ({category}) => {
    const {gifs, isLoading} = useFetchGifs(category)
    return (
        <>
            <h2>{category}</h2>
            {
                isLoading && (
                    <h2>Cargando... </h2>

                )
            }
            <div className="w-full h-full flex flex-wrap space-x-4 space-y-3">
                {
                    gifs.map(({id, title, url})=>(
                        <CardGif key={id} url={url} title={title} />
                    ))
                }
            </div>
        </>
    )
}
