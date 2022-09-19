import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import { Toast } from 'react-toastify/dist/components'
import { toast } from 'react-toastify'

const Home = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    firebaseDb.child()
  }, []);

  return (
    <div className='Header'>
      <table className='table'>

      </table>
    </div>
  )
}



export default Home
