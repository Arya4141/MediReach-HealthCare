import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./guidelines.scss";

const Guidelines = () => {
  return (
    <div>
      <Navbar />
      <div className="guidelines">
        <div className="guidelines-wrapper">
          <h2 className="guidelines-heading">
            Habit and guidelines for healthy life.
          </h2>
          <div className="guidelines-items">
            <div className="guidelines-item">
              <h3>Balanced Diet:</h3>
              <p>
              Eat a variety of nutrient-rich foods, including fruits, vegetables, whole grains, lean proteins, and healthy fats. Avoid excessive consumption of processed foods, sugary snacks, and high-fat foods. Stay hydrated by drinking plenty of water throughout the day.
              </p>
            </div>
            <div className="guidelines-item">
              <h3>Regular Exercise:</h3>
              <p>
              Aim for at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous activity per week, along with muscle-strengthening exercises on two or more days per week. Find activities you enjoy, such as walking, swimming, cycling, or yoga, and incorporate them into your routine.
              </p>
              {/* <p>QAdequate Sleep:</p> */}
              {/* <ul>
                <li>
                  <span>Outbreaks:</span> The sudden rise of cases of a disease
                  in a region.
                </li>
                <li>
                  <span>Epidemics:</span> Outbreak of a disease over a larger
                  area or all over a country.
                </li>
                <li>
                  <span>Pandemics:</span> Widespread disease involving the
                  entire planet, affecting a lot of people globally.
                </li>
              </ul> */}
            </div>
            <div className="guidelines-item">
              <h3>Stress Management:</h3>
              <p>
              Practice stress-reduction techniques such as deep breathing, meditation, yoga, or mindfulness to manage stress effectively. Engage in activities that promote relaxation and help you unwind from daily pressures.
              </p>
            </div>
            <div className="guidelines-item">
              <h3>Practice Good Hygiene:</h3>
              <p>
              Follow good hygiene practices such as washing your hands regularly, practicing safe food handling, and maintaining cleanliness in your living environment.{" "}
              </p>
            </div>
            <div className="guidelines-item">
              {/* <h3>Self-isolation versus Quarantine</h3>
              <p>
                While isolation achieves the same purpose as quarantine, it is
                only for those who are infected or are confirmed cases of
                COVID-19. Quarantines last for the duration of the upper limit
                of the incubation period of the virus, which is 14 days in this
                case. However, isolation lasts until the individual is free of
                symptoms and tests negative for the virus.
              </p> */}
            </div>
            <div className="guidelines-item">
              {/* <h3>What should you do in quarantine or isolation?</h3>
              <ul>
                <li>
                  If you are within the limits of your home, do not leave unless
                  it is necessary. Do not attend functions, school, churches or
                  temples.
                </li>
                <li>
                  Pets can stay: There is no evidence that Coronavirus can
                  spread to your pets. However, it is advised to avoid petting,
                  snuggling or cuddling with your pet if you have been exposed
                  to COVID-19.
                </li>
                <li>
                  Do not share: Keep your plates, glasses, cups, spoons, towels,
                  and bedding separate. Do not swap any of these items unwashed.
                </li>
                <li>
                  Frequent hand washing is a must: Hygiene is a very integral
                  part of a quarantine. Wash your hands for twenty seconds with
                  soap and water frequently. Use your elbow to cough or sneeze
                  into or use a tissue and immediately throw it in a covered
                  dustbin.
                </li>
                <li>
                  Stay calm: While it is natural to feel anxious and scared,
                  being educated about your situation is a great way to combat
                  anxiety.
                </li>
                <li>
                  Follow instructions and co-operate with the authorities:
                  Following the quarantine process and other public health
                  mandates play a big role in preventing and slowing the spread
                  of contagious diseases.
                </li>
              </ul> */}
            </div>
            <div className="guidelines-item">
              {/* <h3>Social distancing</h3> */}
              {/* <p> */}
                {/* Social distancing means any measures taken to increase physical
                space between people to slow or prevent the spread of the virus.
                This involves avoiding public gatherings, limiting the number of
                visitors to your home, staying at home more often, keeping a
                safe distance from other people and catching up with friends and
                family virtually instead of in person. If you have to be around
                people, maintain a distance of 2 meters or 6 feet from others
                around you as much as possible. Not just mass gatherings, but
                even shopping malls, stadiums, and movie theatres can make you a
                target. In general, any gathering of over ten people should be
                avoided or conducted virtually.
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Guidelines;
