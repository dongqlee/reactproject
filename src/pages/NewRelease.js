import newdata from './Newdata'
import {Routes, Route, Link} from 'react-router-dom';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
export default function NewRelease() {
  const [news] = useState(newdata);

  return (
    <>
      <Routes>
        <Route path='' element={
          <Container>
            <p className='path'>New Release</p>
            <section>
              div
            </section>
          </Container>
        }>

        </Route>
      </Routes>
    </>
  )
}