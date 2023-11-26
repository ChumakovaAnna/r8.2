import React from 'react'
import useJsonFetch from '../hooks/useJsonFetch'

export default function NewHook({url}) {
  const [{data: result, loading, error}] = useJsonFetch(url)
  console.log(result);
  console.log(loading);
  console.log(error);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error...</div>}
      {result && <div>Result</div>}
    </div>
  )
}
