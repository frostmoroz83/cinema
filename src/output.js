import output from 'react'
import data from './db.json'
)
const output (item) =>{
    const template = Object.keys(data).map(item => 
        <span key={data[item].id}>
          {data[item].title} - {data[item].image}
        </span>
      return (
        template
      );
}

export default output;