import { useEffect, useState } from 'react'
// const [data, setData] = useState([])
const useFetch = async(url) => {
      const response = await fetch(url)
      const jsonRes = await response.json()
    //   setData(jsonRes)
    return jsonRes
}
export default useFetch