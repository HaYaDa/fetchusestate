import React, { useState, useEffect} from 'react'; 

export default function Usestaterandom() {
    const [count, setCount] = useState(0); 
    const [results, setResults] = useState([]); 

    const generateData = async () => {
        const result = await fetch (`https://randomuser.me/api/?results=${count}`);
        const genData = await result.json(); 
        console.log(genData.results); 
        /*genData.results.map(e => {
         const email = e.email; 
        const gender = e.gender;
        const name = e.name.first;
        const city = e.location.city;
        const state = e.location.state;
        const postcode = e.location.postcode;}) */

        setResults([...genData.results]); 
    }

    useEffect(() => {
        generateData();  
    }, [])

    const handleButton = () =>{
       setCount(count +1);
       console.log(count); 
       generateData();  
       
    }
     
    return (
        <div>
            <button onClick={handleButton}>Generate Data</button>
            <table>
                <tr>
                    <th>Firsta-Name</th>
                    <th>Last-Name</th>
                    <th>Gender</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Postcode</th>
                    <th>E-M@il</th>
                    <th>Pic</th>
                    <th>Mom</th>
                </tr>
                {results.map(v => (
                    <tr>
                        <td>{v.name.first}</td>
                        <td>{v.name.last}</td>
                        <td>{v.gender}</td>
                        <td>{v.location.city}</td>
                        <td>{v.location.state}</td>
                        <td>{v.location.postcode}</td>
                        <td>{v.email}</td>
                        <td><img src={v.picture.thumbnail}/></td>
                        <td><img src={v.picture.thumbnail}/></td>
                    </tr>
                ))}
            </table>
            
        </div>
    )
}
