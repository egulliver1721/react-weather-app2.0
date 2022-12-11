import React from "react";

export default function WeatherIcon(props) {
  let src = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.icon}.png`;
  return <img src={src} alt="" className="IconSmall" />;
}
