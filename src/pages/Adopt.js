import React from "react";
import { ChildCard } from "./ChildCard";
import './pages.css'

import Kid1 from './imgs/kid1.png';
import Kid2 from './imgs/kid2.png';
import Kid3 from './imgs/kid3.png';

export const Adopt = () => {
  return (
    <div>
      <div className="container">
        <h1 className="adopt">Adopt children who are in need of a home:</h1>

        <div className="row">
          <div className="col-6">
            {/* <button className="login2 move">Filter by</button> */}
          </div>

          <div className="col-6">
            <div className="nextprev">
              
            </div>
          </div>
        </div>

        <div className="grid">
          <ChildCard
            image={Kid1}
            name="Kyle"
            age="8"
            desc="I want to have a big sister like my friend from school."
          />
          <ChildCard
            image={Kid2}
            name="Cole"
            age="6"
            desc="I want someone to play with me with my cool car toys."
          />
         <ChildCard
            image={Kid3}
            name="Dylan"
            age="4"
            desc="I’d like to have my own mommy and daddy someday."
          />
          <ChildCard
            image={Kid2}
            name="Kate"
            age="7"
            desc="I like barbie dolls. And big houses for barbie dolls."
          />
          <ChildCard
            image={Kid1}
            name="Marty"
            age="6"
            desc="I want to have a big sister like my friend from school."
          />
          <ChildCard
            image={Kid3}
            name="Christie"
            age="13"
            desc="I want a real home. Somewhere I feel safe."
          />
          <ChildCard
            image={Kid2}
            name="Kate"
            age="7"
            desc="I like barbie dolls. And big houses for barbie dolls."
          />
          <ChildCard
            image={Kid1}
            name="Marty"
            age="6"
            desc="I want to have a big sister like my friend from school."
          />
          <ChildCard
            image={Kid3}
            name="Christie"
            age="13"
            desc="I want a real home. Somewhere I feel safe."
          />
        </div>

        <div className="nextprev"></div>

      </div>
    </div>
  );
};
