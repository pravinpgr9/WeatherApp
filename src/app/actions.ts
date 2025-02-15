"use server"

import { WeatherData } from "@/types/weather";

export async function getWeatherData(city: string): Promise<{ data?: WeatherData; error?: string }> {

    try{
        const res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWHETHERAPIKEY}`);
        console.log(process.env.OPENWHETHERAPIKEY);
        const data =await res.json();
        console.log(data); 
        return {data};

    } catch(error){
        console.log(error);
        return {};
    }
}