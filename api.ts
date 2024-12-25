import axios, { AxiosResponse } from "axios";

const ACCESS_KEY = '-EZGxItXGBUZ2lHczGywRuqelpVOrp-EJ7U9PkvOtxM'; 
const BASE_URL = 'https://api.unsplash.com';

export type Image = {
  id: string;
  urls: {
    small: string;
    regular: string; // змінила
  };
  alt_description?: string;
  description?: string;
};

type FetchImagesResponse = {
  results: Image[];
  totalPages: number;
};

export const fetchImages = async (
  query: string,
  page: number
): Promise<FetchImagesResponse> => {
  const response: AxiosResponse<{ result: Image[]; total_pages:number}> = await axios.get(`${BASE_URL}/search/photos`, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: ACCESS_KEY,
    },
  });

 return {
    results: response.data.results,
    totalPages: response.data.total_pages,
  };
  };
