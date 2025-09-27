function App() {
  return (
    <div className="w-screen h-screen bg-amber-600 flex flex-col items-center"> {/* Main Container */}
      <div> {/* First Row */}
        <h1 className="text-black text-7xl permanent-marker-regular">Our Blog
        </h1> {/* Title */}
        <hr style={{
          width: '100px',
          border: '3px solid black',
          margin: '0 auto',
          marginTop: '30px',
          marginBottom: '20px'
        }} /> {/* Horizontal Line */}
      </div> {/* First Row */}
      <div> {/* Second Row */}
      <div className="flex items-center bg-white w-px9 h-9/10 overflow-hidden justify-between"> {/* Second Row Container */}
        <div className="p-4 w-full h-full flex flex-col items-center"> {/* Column 1 */}
          <img className="h-1/2 w-1/2 object-cover" src="/image-13.jpeg" alt="Bacon Stir Fry" />
          <p className="text-center text-2xl font-bold">Bacon Stir Fry</p>
          <p className="text-center text-wrap">This is sample text Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <p className="text-center">Wed Jul 2025</p>
        </div> {/* Column 1 */}
        <div className="p-4 w-full h-full flex flex-col items-center"> {/* Column 2 */}
          <img className="h-1/2 w-1/2 object-cover" src="/ep-air-fryer-bacon-1-6a2a-jumbo.jpg" alt="Air Fried Bacon" />
          <p className="text-center text-2xl font-bold">Air Fried Bacon</p>
          <p className="text-center">Wed Jul 2025</p>
        </div> {/* Column 2 */}
        <div className="p-4 w-full h-full flex flex-col items-center"> {/* Column 3 */}
          <img className="h-1/2 w-1/2 object-cover" src="/at_archive_d46f944e0f896378646ac0ea14550e4a5645053e.jpg" alt="Bacon Skewers" />
          <p className="text-center text-2xl font-bold">Bacon Skewers</p>
          <p className="text-center">Wed Jul 2025</p>
        </div> {/* Column 3 */}
      </div> {/* Second Row Container */}
      </div> {/* Second Row */}
    </div>
  ); {/* Main Container */ }
}

export default App;
