import { createContext, useState } from "react";
import Images from "./components/Images";
import Jumbutton from "./components/Jumbutton";
import SearchField from "./components/SearchField";
import useAiox from "./hooks/useAiox";

export const ImageContext = createContext();

const App = () => {
  const [searchImage, setSearchImage] = useState('')
  const { response, isLoading, error, fetchData } = useAiox(
    `search/photos?page=1&query=cats&client_id=${
      import.meta.env.VITE_REACT_APP_ACCESS_KEY
    }`
  );

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  };

  return (
    <ImageContext.Provider value={value}>
      <Jumbutton>
        <SearchField />
      </Jumbutton>
      <Images />
    </ImageContext.Provider>
  );
};

export default App;
