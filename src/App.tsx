import toast, { Toaster } from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { fetchImages, Image } from "../api";
import { useState, useEffect } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";
import ImageModal from "./components/ImageModal/ImageModal";


const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [chooseImage, setChooseImage] = useState<Image | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const handleSearchSubmit = (query: string) => {
    if (!query.trim()) {
      toast.error("Необхідно ввести текст для пошуку");
      return;
    }
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setChooseImage(null);
  };

  const handleImageClick = (image: Image) => {
    setChooseImage(image);
    setModalIsOpen(true);
  };

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const { results, totalPages } = await fetchImages(query, page);

        setImages((prevImages) => (page === 1 ? results : [...prevImages, ...results]));
        setTotalPages(totalPages);
      } catch (error) {
        toast.error("Помилка під час пошуку зображень!");
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [page, query]);

  return (
    <div>
      <Toaster />
      <SearchBar onSubmit={handleSearchSubmit} />
      {images.length > 0 && (
        <>
          <ImageGallery images={images} onImageClick={handleImageClick} />
          {page < totalPages && !isLoading && (
            <button className="loadMoreButton" onClick={() => setPage((prev) => prev + 1)}>
              Load more
            </button>
          )}
        </>
      )}
      {isLoading && <Loader />}
      {isError && <h2>Упс, щось сталось! Оновіть сторінку...</h2>}
      {chooseImage && (
        <ImageModal modalIsOpen={modalIsOpen}
          onRequestClose={closeModal}
          image={chooseImage} />
      )}
    </div>
  );
};

export default App;
