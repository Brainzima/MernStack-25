import './App.css'
import html2canvas from 'html2canvas';

function App() {

  const tsc = () => {
    html2canvas(document.body).then(function (canvas) {
      document.body.appendChild(canvas);
    });
  }
  const tssc = () => {
    const ssc = document.getElementById('card')
    html2canvas(ssc).then(function (canvas) {
      document.body.appendChild(canvas);
      // console.log(ssc)
    });
  }
  const timgsc = () => {
    const ssc = document.getElementById('card')
    html2canvas(ssc).then(function (canvas) {
      // document.getElementById('image').appendChild(canvas);

      // download script
        // 3. Convert the canvas to a data URL (default is PNG)
        const canvasUrl = canvas.toDataURL(); // Use .toDataURL("image/jpeg", 0.5) for JPEG with quality options

        // 4. Create a temporary anchor element
        const createEl = document.createElement('a');
        createEl.href = canvasUrl;

        // 5. Set the download attribute with a filename
        // The "download" attribute hints the browser to download the URL content
        createEl.download = "my-canvas-image";

        // 6. Programmatically click the anchor to trigger the download
        createEl.click();

        // 7. Remove the element after use
        createEl.remove();
      });
  }
  return (
    <>

      <div className="card col-5" id='card'>
        <div className="card-header">
          Welcome
        </div>
        <div className="card-body">
          <h1 className="card-title">
            Good Morning, Ajit.
          </h1>
        </div>
        <div className="card-footer">
          <button onClick={tsc} className='btn btn-primary me-2'>Take SC</button>
          <button onClick={tssc} className='btn btn-secondary'>Take SSC</button>
          <button id='download' onClick={timgsc} className='btn btn-secondary'>Take IMGSC</button>
        </div>
      </div>

      <div id="image" className='border p-2 rounded-5 m-5 container'>

      </div>

    </>
  )
}

export default App
