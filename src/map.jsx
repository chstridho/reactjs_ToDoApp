import React from 'react';

export default function Map() {
    const dataArray = [1, 2, 3, 4];

    console.log(dataArray.forEach(data=> data * 2));

    console.log(dataArray.map(data=> data * 2));
}