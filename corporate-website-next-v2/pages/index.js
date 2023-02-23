import React from "react";
import ImageSection from "@/components/ImageSection";
import Showcase from "@/components/Showcase";
import Features from "@/components/Features";

export default function Home() {
  return (
      <div>
        <Showcase heading = "Welcome To the Green IT Agency!" text= "Discover new ways to reduce the resource consumption of web applications" showExtra={true}/>
        <section className="page-content">
          <div className="container">
            <Features/>
            <h2>Get Started With Astro</h2>
            <p>
              Get a new Astro project up and running locally with our helpful
              create-astro CLI wizard!
            </p>
            <h3>Start Building</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsum
              deserunt inventore ut voluptate, officia maiores repellat tenetur
              praesentium omnis est ex tempora a necessitatibus reiciendis at et
              dignissimos. Ipsam eius consequuntur cupiditate aperiam porro, esse
              laborum impedit nesciunt ut voluptatum assumenda aspernatur libero
              iusto error molestias dolorum, necessitatibus labore?
            </p>
          </div>
        </section>
        <ImageSection imageIsLeft={false} imageSrc={"/marek-levak.jpg"}/>*
        <section className="page-content">
          <div className="container">
            <h3>Lorem ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsum
              deserunt inventore ut voluptate, officia maiores repellat tenetur
              praesentium omnis est ex tempora a necessitatibus reiciendis at et
              dignissimos. Ipsam eius consequuntur cupiditate aperiam porro, esse
              laborum impedit nesciunt ut voluptatum assumenda aspernatur libero
              iusto error molestias dolorum, necessitatibus labore?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsum
              deserunt inventore ut voluptate, officia maiores repellat tenetur
              praesentium omnis est ex tempora a necessitatibus reiciendis at et
              dignissimos. Ipsam eius consequuntur cupiditate aperiam porro, esse
              laborum impedit nesciunt ut voluptatum assumenda aspernatur libero
              iusto error molestias dolorum, necessitatibus labore?
            </p>
          </div>
        </section>
        <ImageSection imageIsLeft={true} imageSrc={"/antoine-rault.jpg"}/>

      </div>
  )
}
