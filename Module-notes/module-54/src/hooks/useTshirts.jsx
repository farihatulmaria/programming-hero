import { useEffect, useState } from "react";

const useTshirts =() =>{
    const [tshirts, setTshirts] = useState([]);
    useEffect(() => {
      fetch('https://raw.githubusercontent.com/ProgrammingHero1/tshirt-mania-module-54/main/public/tshirts.json')
      .then(res => res.json())
      .then(data => setTshirts(data))
    }, [])
    
    return [tshirts, setTshirts]
}

export default useTshirts;