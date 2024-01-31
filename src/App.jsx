import Images from "./components/Images";
import Jumbutton from "./components/Jumbutton";
import SearchField from "./components/SearchField";
import useAiox from "./hooks/useAiox";

export default function App() {

  const { response, isLoading, error, fetchData } = useAiox(`search/photos ?page=1&query=office&client_id=${import.meta.env.REACT_APP_ACCESS_KEY}`);

  console.log(response);

  return (
    <>
      <Jumbutton>
        <SearchField />
      </Jumbutton>
      <Images />
    </>
  );
}
