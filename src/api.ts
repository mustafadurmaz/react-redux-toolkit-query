import axios from 'axios';

// Genel veri alma işlemi tanımlama
export const fetchData = async <T>(apiUrl: string): Promise<T> => {
  const response = await axios.get<T>(apiUrl);
  return response.data;
};