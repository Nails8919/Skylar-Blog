function App() {
  return (
    <div className="w-screen h-screen bg-amber-600 flex flex-col items-center"> {/* Main Container */}
      <div> {/* First Row */}
        <h1 className="text-black text-7xl permanent-marker-regular">Our Blog
        </h1>
        <hr style={{
          width: '100px',
          border: '3px solid black',
          margin: '0 auto',
          marginTop: '30px',
          marginBottom: '20px'
        }} />
      </div> {/* First Row */}
      <div className="flex flex col items-center bg-white"> {/* Second Row */}
        <div className="p-4 w-1/2">
          <img src="/image-13.jpeg" alt="Bacon Stir Fry" />
          <p className="text-center">Bacon Stir Fry</p>
          <p className="text-center">Wed Jul 2025</p>
        </div> {/* Column 1 */}
        <div className="p-4 w-1/2">
          <img src="/ep-air-fryer-bacon-1-6a2a-jumbo.jpg" alt="Air Fried Bacon" />
          <p className="text-center">Air Fried Bacon</p>
          <p className="text-center">Wed Jul 2025</p>
        </div> {/* Column 2 */}
        <div className="p-4 w-1/2">
          <img src="/at_archive_d46f944e0f896378646ac0ea14550e4a5645053e.jpg" alt="Bacon Skewers" />
          <p className="text-center">Bacon Skewers</p>
          <p className="text-center">Wed Jul 2025</p>
        </div> {/* Column 3 */}
      </div> {/* Second Row */}
    </div>
  ); {/* Main Container */ }
}

export default App;
