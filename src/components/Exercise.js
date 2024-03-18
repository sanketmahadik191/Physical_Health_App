import React, { useState, useEffect } from 'react';

export const Exercise = () => {
    
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchData();
      }, []);

    const exerciseOptions = {
        method: 'GET',
        params: {limit: '10'},
        headers: {
          'X-RapidAPI-Key': 'df6787ae2cmsh0433e112b9ec312p1151a1jsn984a4ac77f55',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
    }

    const fetchData = async () => {
        try {
          const response = await fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPart/back');
          const jsonData = await response.json();
          console.log(jsonData);
          setData(jsonData);
          setFilteredData(jsonData); // Initially set filtered data to all data
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

     
      const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
        filterData(event.target.value);
      };
    
      const filterData = (searchTerm) => {
        const filtered = data.filter(item =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filtered);
      };
    
      return (
        <div>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div className="container">
            {filteredData.map(item => (
              <div key={item.id}>
                <p>{item.name}</p>
                {/* Add more data rendering here */}
              </div>
            ))}
          </div>
        </div>
      );
    }