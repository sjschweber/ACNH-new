import React from 'react';

export default function Card(data) {
  console.log(data);
  return(
    <div class="w-20 h-32 text-black text-center text-base bg-red-400">
        {data.name}
    </div>
  )
}
