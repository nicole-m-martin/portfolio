// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Spinner from '../UI/Spinner';

// const Giphy = () => {
//   const [gifs, setGifs] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       // setLoading(true);

//       const results = await axios(
//         `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=25`
//       );
//       console.log(results);
//       setGifs(results.data.data);

//       // setLoading(false);
//     };

//     fetchData();
//   }, []);

//   const renderGifs = () => {
//     // if (setLoading) {
//     //   return <Spinner />;
//     // }

//     return gifs.map((gif) => {
//       return (
//         <div key={gif.id} className="gifs">
//           <img src={gif.images.downsized_medium.url} alt="gif" />
//         </div>
//       );
//     });
//   };

//   return (
//     <div>
//       <div>{renderGifs()}</div>
//     </div>
//   );
// };

// export default Giphy;
