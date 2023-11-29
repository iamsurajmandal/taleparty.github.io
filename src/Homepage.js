import React, {useState} from 'react'
import "./Homepage.css"
import SearchBar from './navigation/SearchBar';
import Timeline from './Timeline'
function Homepage() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className='homepage'>
      <div className='homepage__nav'>
        <SearchBar setLoading={setLoading} setNotices={setNotices}/>
      </div>
      <div className="homepage__timeline">
        <Timeline notices={notices} loading={loading}/>
      </div>
    </div>
  )
}

export default Homepage