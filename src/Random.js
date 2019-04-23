import React from 'react';

export const Random = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};