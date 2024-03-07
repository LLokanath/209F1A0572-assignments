"use client"
import ButtonComponent from './Component/ButtonComponent.jsx';
import{useState} from "react";
import './card/card.css';
export default function Home(){
const[label,setlabel]=useState("continue")
const clickme =()=>{
alert("hello");
};
return(
<div>
<ButtonComponent
img="https://res.cloudinary.com/deb8kzwza/image/upload/v1708657736/pro3_opxwqd.jpg"
title="Lokanath Reddy"
description="Java Developer"
/>
<ButtonComponent
img="https://tse3.mm.bing.net/th?id=OIP.x6SzrzKm_qDP8jY-3631kgHaE8&pid=Api&P=0&h=180.jpg"
title="iphone"
description="Explore the latest models of iPhone, featuring ProMotion, Dynamic Island, A17 Pro chip and more. See images, compare features, shop online and get free delivery or pickup"
/>
<ButtonComponent
img="https://tse3.mm.bing.net/th?id=OIP.I8jT8oDfOsYhcCIo5dMknQHaE7&pid=Api&P=0&h=180"
title="Samsung"
description=" explore an Amazing Great Collection Of Shoes, Available At Great Prices. Amazon Offers an Array Of Unique Products From Hundreds Of Brands.."
/>
<ButtonComponent
img="https://tse1.mm.bing.net/th?id=OIP.tLiRXj9Hol6aDVuBLcjnvAHaGM&pid=Api&P=0&h=180"
title="Vivo"
description="Welcome to vivo Official Site. Explore our latest smartphone models with stunning displays, high-quality cameras, and long-lasting battery."
/>
<ButtonComponent
img="https://tse3.mm.bing.net/th?id=OIP.RXqNkdezIKiVzqKBUR8I9gHaHa&pid=Api&P=0&h=180"
title="Realme"
description="At 108MP, the realme 11 5G packs the segment’s leading image quality, opening up new creative possibilities in imaging. In addition to leading clarity and sharpness, you can also crop your images with remarkable results, allowing you to get more photos out of the photos."
/>
<ButtonComponent
img="https://tse2.mm.bing.net/th?id=OIP.wm4biV9cxKhKajefpigtRAHaFj&pid=Api&P=0&h=180"
title="Poco"
description="Buy POCO C65 online at best price with offers in India. POCO C65 (Pastel Blue, 128 GB) features and specifications include 4 GB RAM, 128 GB ROM, 5000 mAh battery, 50 MP back camera."
/>
</div>
)
}
