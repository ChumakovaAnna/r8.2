import React from 'react'
import useJsonFetch from '../hooks/useJsonFetch'

export default function newHook({url}) {
  const [{data, loading, error}] = useJsonFetch(url)
  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error...</div>}
      {data && <div>Data</div>}
    </div>
  )
}
