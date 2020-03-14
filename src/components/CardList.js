import React from 'react';
import Card from './Card';

const Cardlist = ({ robots }) => {
  return !robots.length? <h3>There isn't any...</h3>
    :(
      robots.map((user, i) => {
        return <Card key={i}
          id={user.id}
          name={user.name}
          email={user.email}
        />
      }
      )
    )
  }
export default Cardlist