import axios from "axios";

const ACCESS_KEY = '-EZGxItXGBUZ2lHczGywRuqelpVOrp-EJ7U9PkvOtxM'; 
const BASE_URL = 'https://api.unsplash.com';

type Image = {
  id: string;
  urls: {
    small: string;
    regular: string; // змінила
  };
  alt_description?: string;
};

 type FetchImagesResponse = {
  results: Image[];
  totalPages: number;
};

export const fetchImages = async (
  query: string,
  page: number
): Promise<FetchImagesResponse> => {
  const response = await axios.get(`${BASE_URL}/search/photos`, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: ACCESS_KEY,
    },
  });


// export const fetchImages = async (query: string, page: number) => {
//   const response = await axios.get(`https://api.unsplash.com/search/photos`, {
//     params: {
//       query,
//       page,
//       per_page: 12,
//     },
//   });

 return {
    results: response.data.results,
    totalPages: response.data.total_pages,
  };
  };
//


// export const fetchImages = async (query, page) => {
//   // const response = await axios.get(`${BASE_URL}/search/photos?query=${query}&page=${page}&client_id=${ACCESS_KEY}&per_page=20`
  
//     const response = await axios.get(`${BASE_URL}/search/photos`, {
//       params: {
//             query,
//             page,  
//             per_page: 12, 
//             client_id: ACCESS_KEY,
//       },
//     }
//     );
//   // 
//    return {
//     results: response.data.results,
//     totalPages: response.data.total_pages,
//   };
  
// };