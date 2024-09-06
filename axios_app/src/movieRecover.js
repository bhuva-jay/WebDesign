import React, { useEffect } from 'react'

export default function movieRecover() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3339/mymovies")
            .then((response) => {
                console.log(response)
                setData(response.data)
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [])
  return (
    <>
            <Container>
                <h2 className='mt-5'>Movie Data</h2>
                <Table striped bordered hover size="sm" className='mt-5'>
                    <thead>
                        <tr style={{textAlign:'center'}}>
                            <th>Id</th>
                            <th>Imdb Id</th>
                            <th>Title</th>
                            <th>Year</th>
                            <th>Poster</th>
                            <th colSpan={2} style={{ textAlign: "center" }}>Action</th>
                        </tr>
                    </thead>
                    <tbody className='mt-3'>
                        {data.map(movie => (
                            <tr key={movie.id}>
                                <td style={{textAlign:'center'}}>{movie.id}</td>
                                <td style={{textAlign:'center'}}>{movie.imdbID}</td>
                                <td style={{textAlign:'center'}}>{movie.Title}</td>
                                <td style={{textAlign:'center'}}>{movie.Year}</td>
                                <td style={{textAlign:'center'}}><Image src={movie.Poster} width={150} height={150} /></td>

                                <td style={{textAlign:'center'}}>
                                    <button 
                                    className='btn btn-danger mt-5' 
                                    type='button' 
                                    onClick={() => handleDelete(movie.id)}
                                    >DELETE</button>
                                </td>

                                <td style={{textAlign:'center'}}>
                                    <button 
                                    type='button' 
                                    className='btn btn-primary mt-5'
                                    onClick={() => handleEdit(movie.id)} 
                                    >UPDATE</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
  )
}