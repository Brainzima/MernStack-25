import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [images, setImages] = useState([])
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(true)

  const fetchImages = async () => {
    const url = `https://picsum.photos/v2/list?page=${page}&limit=20`
    try {
      const response = await fetch(url)
      const data = await response.json()
      setImages((prev) => [...prev, ...data])
      setLoading(false)
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    fetchImages()
  }, [page])



  useEffect(() => {
    window.addEventListener('scroll', () => {
      // Use window.scrollY or window.pageYOffset for current scroll position
      const scrollPosition = window.scrollY || window.pageYOffset;

      // Calculate total document height (considering cross-browser differences)
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );

      if (window.innerHeight + scrollPosition >= docHeight) { 
        setPage((prev)=>prev + 1)
        setLoading(true)
      }
    });
  }, [])

  return (
    <>
      <div className="container">
        <div className="row">
          {
            images.map((image) => (
              <div key={image.id} className="col-md-3 mt-3">
                <img className='img-fluid' src={image.download_url} alt={image.author} />
              </div>
            ))
          }

          {
            loading &&
            <div className="d-flex justify-content-center mt-2">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default App
