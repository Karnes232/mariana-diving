import { Link } from "gatsby"
import React from "react"
import CourseCard from "../components/CourseCardComponents/CourseCard"
import Layout from "../components/layout"
import localCardImage from "../images/localCard.jpg"
import catalinaCardImage from "../images/catalinaCard.jpg"

const certified = () => {
  return (
    <Layout>
      <div className="w-screen max-w-lg flex flex-col mt-5 items-center">
        <div className="flex flex-col items-center justify-center mt-5">
          <Link to="/localdiving" className="no-underline w-11/12">
            <CourseCard
              img={localCardImage}
              course={"Local Diving"}
              price={"100"}
              description={
                "The white beaches, lush vegetation and turquoise sea hide exciting adventures and beautiful seascapes. "
              }
            />
          </Link>
          <Link to="/catalina" className="no-underline w-11/12 ">
            <CourseCard
              img={catalinaCardImage}
              course={"Catalina Island"}
              price={"209"}
              description={
                "Enjoy a day on the caribbean coast of the island, with its white sand and turquoise waters"
              }
            />
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default certified
